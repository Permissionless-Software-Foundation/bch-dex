# bch-dex Specification

This document contains a high-level, human-readable specification for the four major architectural areas of the bch-dex:

- Entities
- Use Cases
- Controllers (inputs)
- Adapters (outputs)

This reflects the [Clean Architecture](https://bafybeiajggd4zju7oen627bcy5l32hrxqomoqzvwqfir6phzgducozksv4.ipfs.dweb.link/blog/clean-architecture) design pattern.

## Entities

Entities make up the core business concepts. If these entities change, they fundamentally change the entire app.

### Order

An Order Entity is nearly the same as an Offer. The Order is generated first, but is always internal to the bch-dex system. Most of the data in an Order is submitted to the P2WDB, which generates an Offer (external) Entity.

The Order tracks the [HD index address](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc#hd-wallets-bip-32bip-44) used to hold tokens or BCH for sale. This is the part of the app concerned with the custody of the funds. It creates a segregated [UTXO](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch06.asciidoc#transaction-outputs-and-inputs) to hold the offered asset. The Order is automatically destroyed if the UTXO is spent.

Order entities have the following properties:

- Token Data:
  - _tokenId_ - The unique ID that identifies the class of token being offered for sale.
  - _utxoTxid_ - The TXID of the UTXO representing the token or BCH being offered for sale.
  - _utxoVout_ - The vout of the UTXO representing the token or BCH being offered for sale.

- Trade Data:
  - _buyOrSell_ - A string with a value `buy` or `sell` indicating which type of offer this is.
  - _numTokens_ - The maximum number of tokens offered for sale.
  - _rateInBaseUnit_ - The rate in terms of currency-unit-per-token. Ex: 1000 = 1000 sats per token
    - For Bitcoin, the min currency is sats.
    - For AVAX, the min currency is nano-Avax.
    - for eCash, the min currency is bits.
  - _minUnitsToExchange_ - The minimum order size accepted.
  - _makerAddr_ - The address for the taker to send money to.
  - _p2wdbTxid_ - The TXID proof-of-burn used to add the order to the P2WDB.
  - _p2wdbHash_ - The CID used to identify the order entry in the P2WDB.

- Authentication Data:
  - _signature_ - A message signed by the address which created the order.
  - _sigMsg_ - The clear-text message used to generate the signature.
  - _offerBchAddr_ - The BCH address controlling the offer.
  - _offerPubKey_ - The public key used to generate the BCH address, used for encryption.

- Wallet Data:
  - _hdIndex_ - The HD index of the wallet used to generate the keypair to store the UTXO being offered for sale.

- SWaP Protocol properties:
  - _lokadId_ - Not used. Provided for future functionality.
  - _messageType_ - Not used. Provided for future functionality.
  - _messageClass_ - Not used. Provided for future functionality.


### Offer

An offer is created from data passed to the app by the P2WDB webhook.
It is destroyed when the UTXO described in the Signal has been detected as spent.

Offer entities have the following properties:

- Token Data:
  - _tokenId_ - The unique ID that identifies the class of token being offered for sale.
  - _utxoTxid_ - The TXID of the UTXO representing the token or BCH being offered for sale.
  - _utxoVout_ - The vout of the UTXO representing the token or BCH being offered for sale.

- Trade Data:
  - _buyOrSell_ - A string with a value `buy` or `sell` indicating which type of offer this is.
  - _numTokens_ - The maximum number of tokens offered for sale.
  - _rateInBaseUnit_ - The rate in terms of currency-unit-per-token. Ex: 1000 = 1000 sats per token
    - For Bitcoin, the min currency is sats.
    - For AVAX, the min currency is nano-Avax.
    - for eCash, the min currency is bits.
  - _minUnitsToExchange_ - The minimum order size accepted.
  - _makerAddr_ - The address for the taker to send money to.
  - _p2wdbTxid_ - The TXID proof-of-burn used to add the order to the P2WDB.
  - _p2wdbHash_ - The CID used to identify the order entry in the P2WDB.
  - _offerStatus_ - The state of the offer. When the data is added to the P2WDB, it gets a value of 'posted', but the database model internal to bch-dex can have the following properties:
    - *posted* - The offer is posted and can be countered by a taker.
    - *taken* - The offer was countered and accepted.
    - *dead* - The UTXO was spent outside the trade, which automatically makes the offer dead.

- Authentication Data:
  - _signature_ - A message signed by the address which created the order.
  - _sigMsg_ - The clear-text message used to generate the signature.
  - _offerBchAddr_ - The BCH address controlling the offer.
  - _offerPubKey_ - The public key used to generate the BCH address, used for encryption.

- Utility Data:
  - _timestamp_ - The ISO time when the order was created.
  - _localTimestamp_ - The localized time when the order was created.

- SWaP Protocol properties:
  - _lokadId_ - Not used. Provided for future functionality.
  - _messageType_ - Not used. Provided for future functionality.
  - _messageClass_ - Not used. Provided for future functionality.

When an Offer is uploaded to the P2WDB, the following properties are added to the data:

- Added properties to P2WDB data:
  - *dataType* - Has a value of 'offer'. This is used to route the data correctly when the P2WDB webhook passes the data to `bch-dex`.

### Counter Offer

A Counter Offer is the other side of the trade, a mirror image to an Offer. It contains a partially signed transaction, created by the Taker. The Maker will review the Counter Offer before accepting and finalizing the trade.

Counter Offers are not tracked via database models like Offers and Orders are. They are processed by `bch-dex` as soon as they are received. A garbage collection function will be called periodically, to sweep the segregated UTXOs used to generate a Counter Offer back into the root address of the wallet, if it is not accepted after a period of time.

To generate a Counter Offer, a segregated UTXO is created that matches the requirements in the Offer. A partially signed transaction is created that includes the Offer UTXO and the Counter Offer UTXO. The Taker signs the input consuming the Counter Offer UTXO. The partially signed transaction and other trade data is uploaded to P2WDB.

When the Counter Offer data is uploaded to the P2WDB, the data must have the following properties:

- *partialTxHex* - A hexidecimal representation of the partially-signed transaction, which includes the UTXO in the Offer and a second UTXO for that matches the conditions in the Offer.
- *dataType* - Must have a value of `counter-offer`


## Use Cases

Use cases are verbs or actions that is done _to_ an Entity or _between_ Entities.

### Order

- **`createOrder()`** - A macro command that leverages the other functions in this library to create a new Order and submit it to the P2WDB.
- **`ensureFunds()`** - Ensure that the wallet has enough BCH and tokens to complete the requested trade.
- **`findOrderByHash()`** - Given a P2WDB CID 'hash', this function will return the corresponding Order model associated with that CID.

### Offer

- **`createOffer()`** - This method is triggered by a webhook from the P2WDB. It will take the data provided by the P2WDB and create a new Offer entity in the local database.
- **`listOffers()`** - Returns a list of all the active Offers tracked by `bch-dex`.
- **`takeOffer()`** - Generate a segregated UTXO and partially signed transaction, then upload the Counter Offer data to the P2WDB.
- **`ensureFunds()`** - Ensure the wallet has enough BCH and tokens to make a Counter Offer.
- **`findOfferByHash()`** - Given a P2WDB CID 'hash', this function will return the corresponding Offer model associated with that CID.
- **`acceptCounterOffer()`** - This function is triggered by the P2WDB webhook REST API handler. When a Counter Offer is passed to `bch-dex` by the P2WDB, the data is then passed to this function. It does due diligence on the Counter Offer, then signs and broadcasts the transaction to accept the Counter Offer.

## Controllers

Controllers are inputs to the system. When a controller is activated, it causes the system to react in some way.

### Orders

- **POST /order** - This POST REST API endpoint can be triggered by the Client or a simple curl call. It passes in the data needed for `bch-dex` to generate and track a new Order, then submits the data to the P2WDB to generate an Offer that is tracked by all other instances of `bch-dex` on the network.

### Offers

- **GET /offer/list** - Returns an array of objects, where each object represents an active Offer.

- **POST /offer/take** - Given the P2WDB CID of an Offer, calling this endpoint will attempt to generate a Counter Offer and upload it to the P2WDB.

### P2WDB

- **POST /p2wdb** - This POST REST API endpoint will be called by a webhook generated from the P2WDB. This will notify the `bch-dex` that a new entry has been added to the P2WDB that matches the `appId` of `swap-<chain>`, where `<chain>` has a value of `avax`, `bch`, or `ecash`. It's a new entry that should be evaluated for inclusion in the `bch-dex` local database. Based on the `dataType` property, the data is routed to either create a new Offer or to process a new Counter Offer.

## Adapters

Adapters are outputs. These libraries exist so that the business logic doesn't need to know any specific information about the I/O. They handle the low-level mechanics of the various subsystems.

- **localdb** - An adapter for the local database (MongoDB).
- **ipfs** - An adapter for IPFS and the ipfs-coord library. It allows the app to use the JSON-RPC over IPFS.
- **wallet** - Handles low-level wallet tasks.
  - **`moveTokens()`** - Move the tokens indicated in the order to a temporary holding address. This will generate the segregated UTXOs used in the trade. This function moves the funds and returns the UTXO information.
  - **`moveBCH()`** - Same idea as `moveTokens()`, but creates a non-SLP segregated UTXO, used when generating a Counter Offer.
  - **`openWallet()`** - Opens the JSON file containing the wallet data for the app.
  - **`instanceWallet()`** - Given the wallet data returned by `openWallet()`, it generates an instance of the [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) for generating UTXOs and interacting with the blockchain.
  - **`incrementNextAddress()`** - Increments the index of the [HD wallet](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc#hd_wallets) used to generate keypairs for storing segregated UTXOs.
  - **`getKeyPair()`** - Generates a keypair from the HD wallet.
  - **`generateSignature()`** - Generate a cryptographic signature.
  - **`generatePartialTx()`** - Create a partial transaction as part of a Counter Offer.
  - **`deseralizeTx()`** - Used only for debugging purposes. Expands a hex transaction into a JSON object.
  - **`completeTx()`** - Complete the partially signed transaction by signing the first input, then broadcasting the transaction to the network.
