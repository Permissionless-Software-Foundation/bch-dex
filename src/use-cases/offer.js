/*
  Offer use-case library.
*/

// Local libraries
const { wlogger } = require('../adapters/wlogger')
const OfferEntity = require('../entities/offer')
const config = require('../../config')

class OfferLib {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Offer Use Cases library.'
      )
    }

    // Encapsulate dependencies
    this.offerEntity = new OfferEntity()
    this.OfferModel = this.adapters.localdb.Offer
    this.bch = this.adapters.bch
    this.config = config
  }

  // Create a new offer model and add it to the Mongo database.
  async createOffer (entryObj) {
    try {
      // console.log('createOffer(entryObj): ', entryObj)

      // Input Validation
      const offerEntity = this.offerEntity.validate(entryObj)
      console.log('offerEntity: ', offerEntity)

      // Ensure sufficient tokens exist to create the offer.
      await this.ensureFunds(offerEntity)

      // Move the tokens to holding address.
      const utxoInfo = await this.moveTokens(offerEntity)
      console.log('utxoInfo: ', utxoInfo)

      // Update the UTXO store for the wallet.
      await this.adapters.wallet.bchWallet.bchjs.Util.sleep(3000)
      await this.adapters.wallet.bchWallet.getUtxos()

      // Update the offer with the new UTXO information.
      offerEntity.utxoTxid = utxoInfo.txid
      offerEntity.utxoVout = utxoInfo.vout
      offerEntity.hdIndex = utxoInfo.hdIndex

      // Add offer to P2WDB.
      const p2wdbObj = {
        wif: this.adapters.wallet.bchWallet.walletInfo.privateKey,
        data: offerEntity,
        appId: this.config.p2wdbAppId
      }
      const hash = await this.adapters.p2wdb.write(p2wdbObj)
      // console.log('hash: ', hash)

      // Create a MongoDB model to hold the Offer
      offerEntity.p2wdbHash = hash
      console.log(`creating new offer model: ${JSON.stringify(offerEntity, null, 2)}`)
      const offer = new this.OfferModel(offerEntity)
      await offer.save()

      return hash
    } catch (err) {
      // console.log("Error in use-cases/entry.js/createEntry()", err.message)
      wlogger.error('Error in use-cases/entry.js/createOffer())')
      throw err
    }
  }

  // Move the tokens indicated in the offer to a temporary holding address.
  // This will generate the UTXO used in the Signal message. This function
  // moves the funds and returns the UTXO information.
  async moveTokens (offerEntity) {
    try {
      const keyPair = await this.adapters.wallet.getKeyPair()
      console.log('keyPair: ', keyPair)

      const receiver = {
        address: keyPair.cashAddress,
        tokenId: offerEntity.tokenId,
        qty: offerEntity.numTokens
      }

      const txid = await this.adapters.wallet.bchWallet.sendTokens(receiver, 3)

      const utxoInfo = {
        txid,
        vout: 0,
        hdIndex: keyPair.hdIndex
      }

      return utxoInfo
    } catch (err) {
      console.error('Error in moveTokens(): ', err)
      throw err
    }
  }

  // Ensure that the wallet has enough BCH and tokens to complete the requested
  // trade.
  async ensureFunds (offerEntity) {
    try {
      // console.log('this.adapters.wallet: ', this.adapters.wallet.bchWallet)
      // console.log(`walletInfo: ${JSON.stringify(this.adapters.wallet.bchWallet.walletInfo, null, 2)}`)

      // Ensure the app wallet has enough funds to write to the P2WDB.
      const wif = this.adapters.wallet.bchWallet.walletInfo.privateKey
      const canWriteToP2WDB = await this.adapters.p2wdb.checkForSufficientFunds(wif)
      if (!canWriteToP2WDB) throw new Error('App wallet does not have funds for writing to the P2WDB.')

      // Get UTXOs.
      const utxos = this.adapters.wallet.bchWallet.utxos.utxoStore
      console.log(`utxos: ${JSON.stringify(utxos, null, 2)}`)

      if (offerEntity.buyOrSell.includes('sell')) {
        // Sell Offer

        // Get token UTXOs that match the token in the offer.
        const tokenUtxos = utxos.slpUtxos.type1.tokens.filter(
          x => x.tokenId === offerEntity.tokenId
        )
        // console.log('tokenUtxos: ', tokenUtxos)

        // Get the total amount of tokens in the wallet that match the token
        // in the offer.
        let totalTokenBalance = 0
        tokenUtxos.map(x => (totalTokenBalance += parseFloat(x.qtyStr)))
        // console.log('totalTokenBalance: ', totalTokenBalance)

        // If there are fewer tokens in the wallet than what's in the offer,
        // throw an error.
        if (totalTokenBalance <= offerEntity.numTokens || isNaN(totalTokenBalance)) {
          throw new Error(
            'App wallet does not have enough tokens to satisfy the SELL offer.'
          )
        }

      //
      } else {
        // Buy Offer
        throw new Error('Buy orders are not supported yet.')
      }

      return true
    } catch (err) {
      console.error('Error in ensureFunds()')
      throw err
    }
  }
}

module.exports = OfferLib
