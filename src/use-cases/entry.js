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
    this.EntryModel = this.adapters.localdb.Entries
  }

  // Create a new entry model and add it to the Mongo database.
  async createEntry (entryObj) {
    try {
      const {
        entry,
        description,
        slpAddress,
        signature,
        category
      } = entryObj

      // Input Validation
      if (!entry || typeof entry !== 'string') {
        throw new Error("Property 'entry' must be a string!")
      }
      if (!description || typeof description !== 'string') {
        throw new Error("Property 'description' must be a string!")
      }
      if (!slpAddress || typeof slpAddress !== 'string') {
        throw new Error("Property 'slpAddress' must be a string!")
      }
      if (!signature || typeof signature !== 'string') {
        throw new Error("Property 'signature' must be a string!")
      }
      if (!category || typeof category !== 'string') {
        throw new Error("Property 'category' must be a string!")
      }

      let psfBalance

      try {
        // Verify that the entry was signed by a specific BCH address.
        const isValidSignature = _this.bchjs._verifySignature(body)
        if (!isValidSignature) {
          throw new Error('Invalid signature')
        }

        // Verify psf tokens balance
        if (_this.env === 'test') {
          psfBalance = 100
        } else {
          psfBalance = 100// await _this.bchjs.getPSFTokenBalance(slpAddress)
        }

        if (psfBalance < 10) {
          throw new Error('Insufficient psf balance')
        }
      } catch (err) {
        ctx.throw(406, err.message)
      }
      let merit
      if (_this.env === 'test') {
        merit = 100
      } else {
        merit = 100// await _this.bchjs.getMerit(slpAddress)
      }

      const updatedEntry = {
        entry: entry.trim(),
        slpAddress: slpAddress.trim(),
        description: description.trim(),
        signature: signature.trim(),
        category: category.trim(),
        balance: psfBalance,
        merit
      }

      const entryModel = new this.EntryModel(updatedEntry)

      await entryModel.save()

      return { id: entry._id.toString() }
    } catch (err) {
      // console.log('createUser() error: ', err)
      wlogger.error('Error in use-cases/entry.js/createEntry()')
      throw err
    }
  }
}

module.exports = EntryLib
