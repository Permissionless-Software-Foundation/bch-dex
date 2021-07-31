const { wlogger } = require('../adapters/wlogger')

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
    this.EntryModel = this.adapters.localdb.Entry
    this.bchjs = this.adapters.bchjs
  }

  // Create a new entry model and add it to the Mongo database.
  async createEntry (entryObj) {
    try {
      // Input Validation
      if (!entryObj.entry || typeof entryObj.entry !== 'string') {
        throw new Error("Property 'entry' must be a string!")
      }
      if (!entryObj.description || typeof entryObj.description !== 'string') {
        throw new Error("Property 'description' must be a string!")
      }
      if (!entryObj.slpAddress || typeof entryObj.slpAddress !== 'string') {
        throw new Error("Property 'slpAddress' must be a string!")
      }
      if (!entryObj.signature || typeof entryObj.signature !== 'string') {
        throw new Error("Property 'signature' must be a string!")
      }
      if (!entryObj.category || typeof entryObj.category !== 'string') {
        throw new Error("Property 'category' must be a string!")
      }

      // Verify that the entry was signed by a specific BCH address.
      const isValidSignature = this.bchjs._verifySignature(entryObj.slpAddress)
      if (!isValidSignature) {
        throw new Error('Invalid signature')
      }

      // Verify psf tokens balance

      const psfBalance = await this.bchjs.getPSFTokenBalance(entryObj.slpAddress)

      if (psfBalance < 10) {
        throw new Error('Insufficient psf balance')
      }

      const merit = await this.bchjs.getMerit(entryObj.slpAddress)

      const updatedEntry = {
        entry: entryObj.entry.trim(),
        slpAddress: entryObj.slpAddress.trim(),
        description: entryObj.description.trim(),
        signature: entryObj.signature.trim(),
        category: entryObj.category.trim(),
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
