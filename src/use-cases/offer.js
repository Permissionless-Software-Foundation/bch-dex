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
    this.OfferEntity = new OfferEntity()
    this.OfferModel = this.adapters.localdb.Offer
    this.bch = this.adapters.bch
  }

  // Create a new offer model and add it to the Mongo database.
  async createOffer (entryObj) {
    try {
      console.log('createOffer(entryObj): ', entryObj)

      // Input Validation
      const offerEntity = this.OfferEntity.validate(entryObj)
      console.log('offerEntity: ', offerEntity)

      // Verify that the entry was signed by a specific BCH address.
      const isValidSignature = this.bch._verifySignature(offerEntity)
      if (!isValidSignature) {
        throw new Error('Invalid signature')
      }

      // Add offer to P2WDB.

      return true
    } catch (err) {
      // console.log("Error in use-cases/entry.js/createEntry()", err.message)
      wlogger.error('Error in use-cases/entry.js/createOffer())')
      throw err
    }
  }
}

module.exports = OfferLib
