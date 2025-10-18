/*
  Adapter library for working with a wallet.
  This library is specific to bch-dex. The other wallet adapter library is
  inherited from ipfs-service-provider.
*/

// Public npm libraries
import BchWallet from 'minimal-slp-wallet'
import BchTokenSweep from 'bch-token-sweep/index.js'
import bitcoinJs from 'bitcoincashjs-lib'
import RetryQueue from '@chris.troutner/retry-queue'

// Local libraries
import JsonFiles from './json-files.js'
import config from '../../config/index.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const WALLET_FILE = `${__dirname.toString()}/../../wallet.json`
// const PROOF_OF_BURN_QTY = 0.01
// const P2WDB_TOKEN_ID =
// '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'

const advancedConfig = {}

class WalletAdapter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.jsonFiles = new JsonFiles()
    this.WALLET_FILE = WALLET_FILE
    this.config = config
    this.bitcoinJs = bitcoinJs
    this.BchWallet = BchWallet
    this.BchTokenSweep = BchTokenSweep
    this.bchWallet = {} // Will be replaced when initialized.
    // this.advancedConfig = localConfig.advancedConfig
    this.retryQueue = new RetryQueue({
      concurrency: 1,
      attempts: 5,
      retryPeriod: 5000
    })

    // Bind the 'this' object
    this.openWallet = this.openWallet.bind(this)
    this.instanceWallet = this.instanceWallet.bind(this)
    this.incrementNextAddress = this.incrementNextAddress.bind(this)
    this.getKeyPair = this.getKeyPair.bind(this)
    this.generateSignature = this.generateSignature.bind(this)
    this.generatePartialTx = this.generatePartialTx.bind(this)
    this.moveTokens = this.moveTokens.bind(this)
    this.moveBch = this.moveBch.bind(this)
    this.deseralizeTx = this.deseralizeTx.bind(this)
    this.completeTx = this.completeTx.bind(this)
    this.reclaimTokens = this.reclaimTokens.bind(this)
    this.moveTokensFromCustomWallet = this.moveTokensFromCustomWallet.bind(this)
    this.cid2json = this.cid2json.bind(this)
  }

  // Open the wallet file, or create one if the file doesn't exist.
  // Does not instance the wallet. The output of this function is expected to
  // be passed to instanceWallet().
  async openWallet () {
    try {
      let walletData

      // Try to open the wallet.json file.
      try {
        // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
        walletData = await this.jsonFiles.readJSON(this.WALLET_FILE)
      } catch (err) {
        // Create a new wallet file if one does not already exist.
        console.log('Wallet file not found. Creating new wallet.json file.')

        // Create a new wallet.
        // No-Update flag creates wallet without making any network calls.
        const walletInstance = new this.BchWallet(undefined, { noUpdate: true })

        // Wait for wallet to initialize.
        await walletInstance.walletInfoPromise

        walletData = walletInstance.walletInfo

        // Add the nextAddress property
        walletData.nextAddress = 1

        // Write the wallet data to the JSON file.
        await this.jsonFiles.writeJSON(walletData, this.WALLET_FILE)
      }

      // console.log('walletData: ', walletData)

      return walletData
    } catch (err) {
      console.error('Error in openWallet()')
      throw err
    }
  }

  // Create an instance of minimal-slp-wallet. Use data in the wallet.json file,
  // and pass the bch-js information to the minimal-slp-wallet library.
  async instanceWallet (walletData) {
    try {
      // console.log(`instanceWallet() walletData: ${JSON.stringify(walletData, null, 2)}`)

      // TODO: throw error if wallet data is not passed in.
      if (!walletData.mnemonic) {
        throw new Error('Wallet data is not formatted correctly. Can not read mnemonic in wallet file!')
      }

      // const advancedConfig = {}
      console.log(`Using FullStack.cash: ${this.config.useFullStackCash}`)
      if (this.config.useFullStackCash) {
        advancedConfig.interface = 'rest-api'
        advancedConfig.restURL = this.config.apiServer
        advancedConfig.apiToken = this.config.apiToken
      } else {
        advancedConfig.interface = 'consumer-api'
        advancedConfig.restURL = this.config.consumerUrl
      }

      // Instantiate minimal-slp-wallet.
      this.bchWallet = new this.BchWallet(walletData.mnemonic, advancedConfig)

      // Wait for wallet to initialize.
      await this.bchWallet.walletInfoPromise
      await this.bchWallet.initialize()
      console.log(`BCH wallet initialized. Wallet address: ${this.bchWallet.walletInfo.cashAddress}`)
      // console.log(`this.bchWallet.walletInfo: ${JSON.stringify(this.bchWallet.walletInfo, null, 2)}`)

      return this.bchWallet
    } catch (err) {
      console.error('Error in instanceWallet()')
      throw err
    }
  }

  // Increments the 'nextAddress' property in the wallet file. This property
  // indicates the HD index that should be used to generate a key pair for
  // storing funds for Offers.
  // This function opens the wallet file, increments the nextAddress property,
  // then saves the change to the wallet file.
  async incrementNextAddress () {
    try {
      const walletData = await this.openWallet()
      // console.log('original walletdata: ', walletData)

      walletData.nextAddress++

      // console.log('walletData finish: ', walletData)
      await this.jsonFiles.writeJSON(walletData, this.WALLET_FILE)

      // Update the working instance of the wallet.
      this.bchWallet.walletInfo.nextAddress++
      // console.log('this.bchWallet.walletInfo: ', this.bchWallet.walletInfo)

      return walletData.nextAddress
    } catch (err) {
      console.error('Error in incrementNextAddress()')
      throw err
    }
  }

  // Note: This method uses the system wallet, not the user or admin wallet.
  // This method returns an object that contains a private key WIF, public address,
  // and the index of the HD wallet that the key pair was generated from.
  async getKeyPair (hdIndex = 0) {
    try {
      if (!hdIndex) {
        // Increment the HD index and generate a new key pair.
        hdIndex = await this.incrementNextAddress()
      }

      const mnemonic = this.bchWallet.walletInfo.mnemonic
      console.log(`getKeyPair() for HD index: ${hdIndex} called on mnemonic: ${mnemonic}`)

      // root seed buffer
      const rootSeed = await this.bchWallet.bchjs.Mnemonic.toSeed(mnemonic)

      const masterHDNode = this.bchWallet.bchjs.HDNode.fromSeed(rootSeed)

      // HDNode of BIP44 account
      // const account = this.bchWallet.bchjs.HDNode.derivePath(masterHDNode, "m/44'/245'/0'")

      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)

      const cashAddress = this.bchWallet.bchjs.HDNode.toCashAddress(childNode)
      console.log('Generating a new key pair for cashAddress: ', cashAddress)

      const wif = this.bchWallet.bchjs.HDNode.toWIF(childNode)

      const outObj = {
        cashAddress,
        wif,
        hdIndex
      }

      return outObj
    } catch (err) {
      console.error('Error in getKeyPair()')
      throw err
    }
  }

  // Generate a cryptographic signature, required to write to the P2WDB.
  async generateSignature (message) {
    try {
      if (!message || typeof message !== 'string') {
        throw new Error('message is required!')
      }

      const privKey = this.bchWallet.walletInfo.privateKey

      // console.log('privKey: ', privKey)
      // console.log('flags.data: ', flags.data)

      const signature = this.bchWallet.bchjs.BitcoinCash.signMessageWithPrivKey(
        privKey,
        message
      )

      return signature
    } catch (err) {
      console.error('Error in generateSignature()')
      throw err
    }
  }

  // Generate a partial transcation to *take* a 'sell' offer.
  async generatePartialTx (offerInfo, utxoInfo) {
    try {
      console.log(`offerInfo: ${JSON.stringify(offerInfo, null, 2)}`)

      const bchjs = this.bchWallet.bchjs

      // instance of transaction builder
      const transactionBuilder = new bchjs.TransactionBuilder()

      // Get a payment UTXO.
      // TODO: Create a segregated UTXO.
      // const bchUtxos = this.bchWallet.utxos.utxoStore.bchUtxos
      // const paymentUtxo = await bchjs.Utxo.findBiggestUtxo(bchUtxos)
      // console.log('paymentUtxo: ', paymentUtxo)

      // Get token info on the offered UTXO
      const txData = await this.bchWallet.getTxData([offerInfo.utxoTxid])
      console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // Construct the UTXO being offered for sale.
      const offeredUtxo = {
        txid: offerInfo.utxoTxid,
        vout: offerInfo.utxoVout,
        tokenId: offerInfo.tokenId,
        decimals: txData[0].tokenDecimals,
        tokenQty: offerInfo.numTokens.toString()
      }
      console.log(`offeredUtxo: ${JSON.stringify(offeredUtxo, null, 2)}`)

      // Build First part of the collaborative Tx a.k.a. Alice
      // Generate the OP_RETURN code.
      let slpSendObj
      if (offerInfo.tokenType === 65) {
        // Type 65 NFT

        slpSendObj = bchjs.SLP.NFT1.generateNFTChildSendOpReturn(
          [offeredUtxo],
          offerInfo.numTokens.toString()
        )
        console.log(`slpOutputs: ${slpSendObj.outputs}`)
      } else if (offerInfo.tokenType === 1) {
        // Type 1 fungible token

        slpSendObj = bchjs.SLP.TokenType1.generateSendOpReturn(
          [offeredUtxo],
          offerInfo.numTokens.toString()
        )
        console.log(`slpOutputs: ${slpSendObj.outputs}`)
      } else {
        throw new Error(`Unknown token type of ${offerInfo.tokenType}. Can not create Counter Offer.`)
      }
      const slpData = slpSendObj.script

      // Currently this app only supports a single SLP token UTXO for exact
      // token quantities (no token change). e.g. 1 UTXO representing the
      // exact number of 'numTokens'
      if (slpSendObj.outputs > 1) {
        console.log('WARNING: choose one UTXO with all tokens to exchange')
        return
      }

      // Calculate sats needed to pay the offer.
      const satsNeeded = offerInfo.numTokens * parseInt(offerInfo.rateInBaseUnit)
      if (isNaN(satsNeeded)) throw new Error('Can not calculate needed sats')

      // Calculate miner fees.
      // Get byte count (minimum 2 inputs, 3 outputs)
      // const opReturnBufLength = slpData.byteLength + 32 // add padding
      // const byteCount =
      // bchjs.BitcoinCash.getByteCount({ P2PKH: 2 }, { P2PKH: 4 }) +
      //   opReturnBufLength
      // const totalSatsNeeded = byteCount + satsNeeded
      // console.log(`satoshis needed: ${satsNeeded}`)

      // One last check to ensure the app wallet has enough BCH to complete
      // the trade.
      // if (totalSatsNeeded > paymentUtxo.value) {
      //   console.log(`Selected payment UTXO is not big enough. Sats needed: ${totalSatsNeeded}, UTXO value: ${paymentUtxo.value}`)
      // }

      // add UTXO for sale (STILL CANNOT SPEND - not signed yet)
      transactionBuilder.addInput(offerInfo.utxoTxid, offerInfo.utxoVout)

      // add payment UTXO
      // transactionBuilder.addInput(paymentUtxo.tx_hash, paymentUtxo.tx_pos)
      transactionBuilder.addInput(utxoInfo.txid, utxoInfo.vout)

      // const originalAmount = paymentUtxo.value
      const dust = 546
      // const remainder = originalAmount - satsNeeded - dust // exchange fee + token UTXO dust

      // Add the SLP OP_RETURN data as the first output.
      transactionBuilder.addOutput(slpData, 0)

      const buyerAddr = this.bchWallet.walletInfo.legacyAddress
      // console.log(`buyAddr: ${JSON.stringify(buyAddr, null, 2)}`)

      // Send dust transaction representing tokens being sent.
      transactionBuilder.addOutput(
        buyerAddr,
        dust
      )

      // Get seller address
      const sellerAddr = offerInfo.makerAddr

      // Send payment to the offer side
      transactionBuilder.addOutput(sellerAddr, satsNeeded)

      // Send the BCH change back to the buyer
      // if (remainder > 550) {
      //   transactionBuilder.addOutput(buyerAddr, remainder)
      // }

      // const buyerECPair = bchjs.ECPair.fromWIF(this.bchWallet.walletInfo.privateKey)
      const buyerECPair = bchjs.ECPair.fromWIF(utxoInfo.wif)

      // Sign the buyers input UTXO for spending.
      transactionBuilder.sign(
        1,
        buyerECPair,
        null,
        transactionBuilder.hashTypes.SIGHASH_ALL,
        utxoInfo.sats
      )

      const tx = transactionBuilder.transaction.buildIncomplete()

      const hex = tx.toHex()
      // console.log('hex: ', hex)

      return hex
    } catch (err) {
      console.error('Error in wallet.js/generatePartialTx(): ', err)
      throw err
    }

    // return true
  }

  // Move tokens to an address controlled by the HD wallet, to generate a
  // segregated UTXO.
  async moveTokens (inObj = {}) {
    try {
      const { tokenId, qty } = inObj
      if (!tokenId || typeof tokenId !== 'string') {
        throw new Error('tokenId must be a string!')
      }
      if (!qty || typeof qty !== 'number') {
        throw new Error('qty must be a number!')
      }

      const keyPair = await this.getKeyPair()
      console.log('keyPair: ', keyPair)

      const receiver = {
        address: keyPair.cashAddress,
        tokenId,
        qty
      }

      // Update the UTXO store of the wallet.
      await this.bchWallet.initialize()

      // Get the token type of the token being moved.
      // Combine Fungible and NFT token UTXOs.
      let tokenUtxos = this.bchWallet.utxos.utxoStore.slpUtxos.type1.tokens.concat(
        this.bchWallet.utxos.utxoStore.slpUtxos.nft.tokens)
      // Get token UTXOs that match the token in the order.
      tokenUtxos = tokenUtxos.filter(
        x => x.tokenId === tokenId
      )

      if (tokenUtxos.length === 0) {
        throw new Error('tokenId not found!')
      }

      const txid = await this.bchWallet.sendTokens(receiver, 3)

      const utxoInfo = {
        txid,
        vout: 1,
        hdIndex: keyPair.hdIndex,
        tokenType: tokenUtxos[0].tokenType
      }

      return utxoInfo
    } catch (err) {
      console.error('Error in wallet.js/moveTokens()')
      throw err
    }
  }

  // Move a quanity of BCH to an address controlled by the HD wallet, to
  // generate a segregated UTXO.
  async moveBch (amountSat) {
    try {
      if (!amountSat) {
        throw new Error('amountSat is required!')
      }

      const keyPair = await this.getKeyPair()
      console.log('keyPair: ', keyPair)

      const receivers = [{
        address: keyPair.cashAddress,
        amountSat
      }]
      console.log(`receivers: ${JSON.stringify(receivers, null, 2)}`)

      // Update the UTXO store of the wallet.
      await this.bchWallet.getUtxos()

      const txid = await this.bchWallet.send(receivers)

      const utxoInfo = {
        txid,
        vout: 0,
        hdIndex: keyPair.hdIndex,
        wif: keyPair.wif
      }

      return utxoInfo
    } catch (err) {
      console.error('Error in wallet.js/moveBch()')
      throw err
    }
  }

  // Deserialize a hex string representing a partial TX. Returns an object
  // representing the transaction.
  async deseralizeTx (txHex) {
    try {
      // Input validation
      if (!txHex || typeof txHex !== 'string') {
        throw new Error('hex must be a string!')
      }
      // Ensure the URL points at FullStack.cash, since the web 3 infra does not
      // yet support this call.
      const oldUrl = this.bchWallet.bchjs.RawTransactions.restURL
      this.bchWallet.bchjs.RawTransactions.restURL = 'https://api.fullstack.cash/v5/'

      // Use a full node to deserialize the transaction.
      const txObj2 = await this.bchWallet.bchjs.RawTransactions.decodeRawTransaction(txHex)
      // console.log(`txObj2: ${JSON.stringify(txObj2, null, 2)}`)

      // Restore the old URL.
      this.bchWallet.bchjs.RawTransactions.restURL = oldUrl

      return txObj2
    } catch (err) {
      console.error('Error in wallet.js/deserializeTx()')
      throw err
    }
  }

  // Complete the partially signed transaction by signing the first input,
  // then broadcasting the transaction to the network.
  async completeTx (hex, hdIndex, mnemonic) {
    try {
      // Input validation
      if (!hex || typeof hex !== 'string') {
        throw new Error('hex must be a string!')
      }
      if (typeof hdIndex !== 'number' || hdIndex < 0) {
        throw new Error('hdIndex must be a non-negative number!')
      }
      if (!mnemonic || typeof mnemonic !== 'string') {
        throw new Error('mnemonic must be a string!')
      }
      // console.log('hex: ', hex)
      console.log('completeTx() hdIndex: ', hdIndex)
      console.log('completeTx() mnemonic: ', mnemonic)

      // Instantiate the user wallet
      const userWallet = await this.instanceWallet({ mnemonic })

      const bchjs = userWallet.bchjs

      // instance of transaction builder
      // const transactionBuilder = new bchjs.TransactionBuilder()

      // Convert the hex string version of the transaction into a Buffer.
      // const paymentBuffer = Buffer.from(hex, 'hex')

      // Generate a Transaction object from the transaction binary data.
      // const csTransaction = this.bitcoinJs.Transaction.fromBuffer(paymentBuffer)
      const csTransaction = this.bitcoinJs.Transaction.fromHex(hex)
      // console.log(`payment tx: ${JSON.stringify(csTransaction, null, 2)}`)

      // Instantiate the Transaction Builder.
      const csTransactionBuilder = this.bitcoinJs.TransactionBuilder.fromTransaction(
        csTransaction,
        'mainnet'
      )
      // const csTransactionBuilder = bchjs.TransactionBuilder.fromTransaction(
      //   csTransaction,
      //   'mainnet'
      // )

      console.log('completeTx() userWallet.walletInfo: ', userWallet.walletInfo)

      // Get the keypair for the address used in the Order
      const keyPair = await userWallet.getKeyPair(hdIndex)
      console.log(`maker keyPair: ${JSON.stringify(keyPair, null, 2)}`)
      const makerECPair = bchjs.ECPair.fromWIF(keyPair.wif)

      // Assumption: segregated UTXO has a value of 546 sats. It might be better
      // to explicitly look this data up via the blockchain.
      const dust = 546

      // Coutnersign the Maker's input, representing the tokens for sale.
      csTransactionBuilder.sign(
        0,
        makerECPair,
        null,
        this.bitcoinJs.Transaction.SIGHASH_ALL,
        // csTransactionBuilder.hashTypes.SIGHASH_ALL,
        dust
      )

      // build tx
      const csTx = csTransactionBuilder.build()

      // output rawhex
      const csTxHex = csTx.toHex()
      console.log(`Fully signed Tx hex: ${csTxHex}`)

      // Debug: Display the fully signed TX
      const txObj = await this.deseralizeTx(csTxHex)
      console.log(`Final tx: ${JSON.stringify(txObj, null, 2)}`)

      // return csTxHex

      // Broadcast transaction to the network
      // const txid = await this.bchWallet.ar.sendTx(csTxHex)
      const txid = await this.retryQueue.addToQueue(this.bchWallet.broadcast, { hex: csTxHex })
      console.log('completeTx() txid: ', txid)

      return txid
    } catch (err) {
      console.error('Error in wallet.js/completeTx()')
      throw err
    }
  }

  // Given an Order database object, this function sends the tokens from the
  // HD index where they are stored, back to the root address of the wallet.
  async reclaimTokens (orderData = {}) {
    try {
      if (!orderData.hdIndex) {
        throw new Error('orderData.hdIndex is required!')
      }

      // Get the key pair from the Order.
      const keyPair = await this.getKeyPair(orderData.hdIndex)
      console.log('keyPair: ', keyPair)

      // Instantiate the wallet using the private key of the Order.
      // const tempWallet = new this.BchWallet(keyPair.wif, advancedConfig)
      // await tempWallet.initialize()

      // Send the tokens from the Order to the root address.
      // const receiver = {
      //   address: this.bchWallet.walletInfo.address,
      //   tokenId: orderData.tokenId,
      //   qty: orderData.numTokens
      // }
      // console.log('receiver: ', receiver)
      //
      // const txid = await tempWallet.sendTokens(receiver)

      // Sweep the tokens to the root address.
      const sweeper = new this.BchTokenSweep(
        keyPair.wif,
        this.bchWallet.walletInfo.privateKey,
        this.bchWallet,
        550,
        this.bchWallet.walletInfo.cashAddress
      )
      await sweeper.populateObjectFromNetwork()
      const hex = await sweeper.sweepTo(this.bchWallet.walletInfo.cashAddress)
      const txid = await this.bchWallet.ar.sendTx(hex)

      return txid
    } catch (err) {
      console.error('Error in wallet.js/reclaimTokens()')
      throw err
    }
  }

  // This function is consumed by the use-cases/order.js/createOrder() function.
  // Tokens are moved from the primary address to a holding address to protect the Order UTXO.
  async moveTokensFromCustomWallet (inObj = {}) {
    try {
      const { tokenId, qty, wallet } = inObj
      // Input validation
      if (!tokenId || typeof tokenId !== 'string') {
        throw new Error('tokenId must be a string!')
      }
      if (!qty) {
        throw new Error('qty must be a number!')
      }
      if (!wallet) {
        throw new Error('wallet is required!')
      }

      // Replace the system wallet with the user wallet.
      // this.bchWallet = wallet

      // DEV Note: Storing all token Offers in index 2 of the HD wallet.
      // This makes them easy to sweep, and can be uniquely identified by their UTXO.
      // Note: use walle.getKeyPair() to use the user wallet. this.getKeyPair uses the system wallet.
      const keyPair = await wallet.getKeyPair(2)
      console.log('keyPair: ', keyPair)

      const receiver = {
        address: keyPair.cashAddress,
        tokenId,
        qty
      }
      console.log('receiver: ', receiver)

      // Update the UTXO store of the wallet.
      await wallet.initialize()

      // Get the token type of the token being moved.
      // Combine Fungible and NFT token UTXOs.
      let tokenUtxos = wallet.utxos.utxoStore.slpUtxos.type1.tokens.concat(
        wallet.utxos.utxoStore.slpUtxos.nft.tokens)
      // Get token UTXOs that match the token in the order.
      tokenUtxos = tokenUtxos.filter(
        x => x.tokenId === tokenId
      )

      const txid = await wallet.sendTokens(receiver, 3)
      const utxoInfo = {
        txid,
        vout: 1,
        hdIndex: keyPair.hdIndex,
        tokenType: tokenUtxos[0].tokenType
      }

      return utxoInfo
    } catch (err) {
      console.error('Error in wallet.js/moveTokensFromCustomWallet()')
      throw err
    }
  }

  async cid2json (urlOrCid) {
    try {
      // Input validation
      if (!urlOrCid || typeof urlOrCid !== 'string') {
        throw new Error('urlOrCid must be a string!')
      }
      // Extract the cid from the url or cid.
      const cid = urlOrCid.split('/').pop()
      console.log('cid to json: ', cid)
      const jsonRes = await this.bchWallet.cid2json({ cid })
      const json = jsonRes.json
      // console.log('json: ', json)
      return json
    } catch (err) {
      console.error('Error in wallet.js/cid2json()', err.message)
      throw err
    }
  }
}

export default WalletAdapter
