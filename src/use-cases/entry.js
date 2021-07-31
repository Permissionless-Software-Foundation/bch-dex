const { wlogger } = require('../adapters/wlogger')

const EntryEntiy =  require('../entities/entry')
class EntryLib {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating User Use Cases library.'
      )
    }

    // Encapsulate dependencies
    this.EntryEntity = new EntryEntiy()
    this.EntryModel = this.adapters.localdb.Entry
    this.bchjs = this.adapters.bchjs
  }

  // Create a new entry model and add it to the Mongo database.
  async createEntry (entryObj) {
    try {
      // Input Validation
      const entryEntity = this.EntryEntity.validate(entryObj)

      // Verify that the entry was signed by a specific BCH address.
      const isValidSignature = this.bchjs._verifySignature(entryEntity.slpAddress)
      if (!isValidSignature) {
        throw new Error('Invalid signature')
      }

      // Verify psf tokens balance

      const psfBalance = await this.bchjs.getPSFTokenBalance(entryEntity.slpAddress)

      if (psfBalance < 10) {
        throw new Error('Insufficient psf balance')
      }

      const merit = await this.bchjs.getMerit(entryEntity.slpAddress)

      const updatedEntry = {
        entry: entryEntity.entry.trim(),
        slpAddress: entryEntity.slpAddress.trim(),
        description: entryEntity.description.trim(),
        signature: entryEntity.signature.trim(),
        category: entryEntity.category.trim(),
        balance: psfBalance,
        merit
      }

      const entryModel = new this.EntryModel(updatedEntry)
      await entryModel.save()

      return entryModel
    } catch (err) {
      // console.log("Error in use-cases/entry.js/createEntry()", err.message)
      wlogger.error('Error in use-cases/entry.js/createEntry()')
      throw err
    }
  }
}

module.exports = EntryLib
