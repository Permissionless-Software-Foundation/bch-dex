const { wlogger } = require('../adapters/wlogger')

const OfferEntity = require('../entities/offer')

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
  }

  // Create a new offer model and add it to the Mongo database.
  async createOffer (entryObj) {
    try {
      // console.log('createOffer(entryObj): ', entryObj)

      // Input Validation
      const offerEntity = this.offerEntity.validate(entryObj)
      // console.log('offerEntity: ', offerEntity)

      // Ensure sufficient tokens exist to create the offer.
      // await this.ensureFunds(offerEntity)

      // Move the tokens to holding address.
      // const utxoInfo = await moveTokens(offerEntity)

      // Update the offer with the new UTXO information.

      // Burn PSF token to pay for P2WDB write.
      const txid = await this.adapters.wallet.burnPsf()
      console.log('burn txid: ', txid)
      console.log(`https://simpleledger.info/tx/${txid}`)

      // TODO: Move tokens to holding address, which will generate the UTXO to
      // use in the Offer.

      // generate signature.
      const now = new Date()
      const message = now.toISOString()
      const signature = await this.adapters.wallet.generateSignature(message)
      // console.log('signature: ', signature)

      const p2wdbObj = {
        txid,
        signature,
        message,
        appId: 'swapTest555',
        data: offerEntity
      }

      // Add offer to P2WDB.
      const hash = await this.adapters.p2wdb.write(p2wdbObj)
      // console.log('hash: ', hash)

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
  async moveTokens () {
    try {
      //
    } catch (err) {
      console.error('Error in moveTokens()')
    }
  }
}

module.exports = OfferLib
