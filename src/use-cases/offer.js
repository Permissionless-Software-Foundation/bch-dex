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
      // const isValidSignature = this.bch._verifySignature(offerEntity)
      // if (!isValidSignature) {
      //   throw new Error('Invalid signature')
      // }

      // generate signature.
      const now = new Date()
      const message = now.toISOString()
      const signature = await this.adapters.wallet.generateSignature(message)
      console.log('signature: ', signature)

      // Burn PSF token to pay for P2WDB write.
      const txid = await this.adapters.wallet.burnPsf()
      console.log('burn txid: ', txid)
      console.log(`https://simpleledger.info/tx/${txid}`)

      const p2wdbObj = {
        txid,
        signature,
        message,
        appId: 'swapTest555',
        data: offerEntity
      }

      // Add offer to P2WDB.
      const hash = await this.adapters.p2wdb.write(p2wdbObj)

      return hash
    } catch (err) {
      // console.log("Error in use-cases/entry.js/createEntry()", err.message)
      wlogger.error('Error in use-cases/entry.js/createOffer())')
      throw err
    }
  }
}

module.exports = OfferLib
