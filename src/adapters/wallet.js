/*
  Adapter library for working with a wallet.
*/

// Public npm libraries
const BchWallet = require('minimal-slp-wallet/index')
const bitcoinJs = require('bitcoincashjs-lib')

// Local libraries
const JsonFiles = require('./json-files')
const config = require('../../config')

const WALLET_FILE = `${__dirname.toString()}/../../wallet.json`
// const PROOF_OF_BURN_QTY = 0.01
// const P2WDB_TOKEN_ID =
// '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'

class WalletAdapter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.jsonFiles = new JsonFiles()
    this.WALLET_FILE = WALLET_FILE
    this.BchWallet = BchWallet
    this.config = config
    this.bitcoinJs = bitcoinJs
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
        console.warn('Wallet file not found. Creating new wallet.json file.')

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
      // TODO: throw error if wallet data is not passed in.

      const advancedConfig = {}
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
      console.log(`BCH wallet initialized. Wallet address: ${this.bchWallet.walletInfo.cashAddress}`)

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

  // This method returns an object that contains a private key WIF, public address,
  // and the index of the HD wallet that the key pair was generated from.
  // TODO: Allow input integer. If input is used, use that as the index. If no
  // input is provided, then call incrementNextAddress().
  async getKeyPair (hdIndex = 0) {
    try {
      if (!hdIndex) {
        // Increment the HD index and generate a new key pair.
        hdIndex = await this.incrementNextAddress()
      }

      const mnemonic = this.bchWallet.walletInfo.mnemonic

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
      // TODO: Add input validation for message.

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
      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

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
      const slpSendObj = bchjs.SLP.TokenType1.generateSendOpReturn(
        [offeredUtxo],
        offerInfo.numTokens.toString()
      )
      const slpData = slpSendObj.script
      console.log(`slpOutputs: ${slpSendObj.outputs}`)

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

      const keyPair = await this.getKeyPair()
      console.log('keyPair: ', keyPair)

      const receiver = {
        address: keyPair.cashAddress,
        tokenId,
        qty
      }

      // Update the UTXO store of the wallet.
      await this.bchWallet.getUtxos()

      const txid = await this.bchWallet.sendTokens(receiver, 3)

      const utxoInfo = {
        txid,
        vout: 1,
        hdIndex: keyPair.hdIndex
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
      console.error('Error in wallet.js/deserializePartialTx()')
      throw err
    }
  }

  // Complete the partially signed transaction by signing the first input,
  // then broadcasting the transaction to the network.
  async completeTx (hex, hdIndex) {
    try {
      // console.log('hex: ', hex)

      const bchjs = this.bchWallet.bchjs

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

      // Get the keypair for the address used in the Order
      const keyPair = await this.getKeyPair(hdIndex)
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
      const txid = await this.bchWallet.ar.sendTx(csTxHex)

      return txid
    } catch (err) {
      console.error('Error in wallet.js/completeTx()')
      throw err
    }
  }
}

module.exports = WalletAdapter
