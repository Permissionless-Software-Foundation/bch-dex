# bch-dex Specification

This document contains a high-level, human-readable specification for the four major architectural areas of the bch-dex:

- Entities
- Use Cases
- Controllers (inputs)
- Adapters (outputs)

This reflects the [Clean Architecture](https://bafybeiajggd4zju7oen627bcy5l32hrxqomoqzvwqfir6phzgducozksv4.ipfs.dweb.link/blog/clean-architecture) design pattern.

## Entities

Entities make up the core business concepts. If these entities change, they fundamentally change the entire app.

### Offer

An offer is created from data passed to the app by the P2WDB webhook.
It is destroyed when the UTXO described in the Signal has been detected as spent.

Offer entities have the following properties:

- _tokenId_ - The unique ID that identifies the class of token being offered for sale.
- _buyOrSell_ - A string with a value `buy` or `sell` indicating which type of offer this is.
- _rateInSats_ - The rate in terms of tokens-per-currency-unit.
  - For Bitcoin, the min currency is sats.
  - For AVAX, the min currency is nano-Avax.
  - for eCash, the min currency is bits.
- _minSatsToExchange_ - The minimum order size accepted.
- _signature_ - A message signed by the address which created the order.
- _sigMsg_ - The clear-text message used to generate the signature.
- _utxoTxid_ - The TXID of the UTXO used in the order.
- _utxoVout_ - The vout of the UTXO used in the order.
- _numTokens_ - The maximum number of tokens offered for sale.
- _timestamp_ - The ISO time when the order was created.
- _localTimestamp_ - The localized time when the order was created.
- _p2wdbTxid_ - The TXID proof-of-burn used to add the order to the P2WDB.
- _p2wdbHash_ - The hash used to identify the order entry in the P2WDB.
- _lokadId_ - Not used. Provided for future functionality.
- _messageType_ - Not used. Provided for future functionality.
- _messageClass_ - Not used. Provided for future functionality.

### Order

An Order Entity is nearly the same as an Offer. But while an Offer is generated
by a webhook from P2WDB, the Order Entity is created internally. It is used
to track an 'Offer' generated and managed by this application.

The Order tracks the [HD index address](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc#hd-wallets-bip-32bip-44) used to hold tokens or BCH for sale. This is the part of the app concerned with the custody of the funds. It creates a segregated [UTXO](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch06.asciidoc#transaction-outputs-and-inputs) to hold the offered asset. The Order is automatically destroyed if the UTXO is spent.

Order entities have the following properties:

- _offerIpfsId_ - The IPFS ID of the instance of `ipfs-swap-service` that is managing the offer.
- _offerBchAddr_ - The BCH address controlling the offer.
- _offerPubKey_ - The public key used to generate the BCH address, used for encryption.
- _tokenId_ - The unique ID that identifies the class of token being offered for sale.
- _buyOrSell_ - A string with a value `buy` or `sell` indicating which type of offer this is.
- _rateInSats_ - The rate in terms of tokens-per-currency-unit.
  - For Bitcoin, the min currency is sats.
  - For AVAX, the min currency is nano-Avax.
  - for eCash, the min currency is bits.
- _minSatsToExchange_ - The minimum order size accepted.
- _signature_ - A message signed by the address which created the order.
- _sigMsg_ - The clear-text message used to generate the signature.
- _utxoTxid_ - The TXID of the UTXO used in the order.
- _utxoVout_ - The vout of the UTXO used in the order.
- _numTokens_ - The maximum number of tokens offered for sale.
- _timestamp_ - The ISO time when the order was created.
- _localTimestamp_ - The localized time when the order was created.
- _p2wdbTxid_ - The TXID proof-of-burn used to add the order to the P2WDB.
- _p2wdbHash_ - The hash used to identify the order entry in the P2WDB.
- _lokadId_ - Not used. Provided for future functionality.
- _messageType_ - Not used. Provided for future functionality.
- _messageClass_ - Not used. Provided for future functionality.

### Counter Offer

A Counter Offer is the other side of an Offer. It contains a partially signed transaction, created by the Taker. The Maker will review the Counter Offer before accepting and finalizing the trade.

Details TBD.

## Use Cases

Use cases are verbs or actions that is done _to_ an Entity or _between_ Entities.

### Offer

- **`createOffer()`** - This method is triggered by a webhook from the P2WDB. It will take the data provided by the P2WDB and create a new Order entity in the local database.

### Order

- **`ensureFunds()`** - Ensure that the wallet has enough BCH and tokens to complete the requested trade.
- **`moveTokens()`** - Move the tokens indicated in the order to a temporary holding address. This will generate the UTXO used in the webhook message. This function moves the funds and returns the UTXO information.
- **`createOrder()`** - A macro command that leverages `ensureFunds()` and `moveTokens()`, to create a new Order and submit it to the P2WDB.

### Counter Offer

TBD

## Controllers

Controllers are inputs to the system. When a controller is activated, it causes the system to react in some way.

### Offers

- **POST /offer** - This POST REST API endpoint will be triggered by a webhook generated from P2WDB. This will notify the `bch-dex` that a new entry has been added to the P2WDB that matches the `appId` of `swap-<chain>`, where `<chain>` has a value of `avax`, `bch`, or `ecash`. It's a new entry that should be evaluated for inclusion in the `ipfs-swap-service` local database.

### Orders

- **POST /order** - This POST REST API endpoint can be triggered by the Client or a simple curl call. It passes in the data needed for `bch-dex` to generate and track a new Order, then submit the data to the P2WDB to generate an Offer that is tracked by all other instances of `bch-dex`.

## Adapters

Adapters are output libraries so that the business logic doesn't need to know any specific information about the I/O. They are essentially the output of the application.

- **localdb** - An adapter for the local database (MongoDB).
- **ipfs** - An adapter for IPFS and the ipfs-coord library. It allows the app to use the JSON-RPC over IPFS.
