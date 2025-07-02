/*
  This Controller library is concerned with timer-based functions that are
  kicked off periodically.
*/

import config from '../../config/index.js'

class TimerControllers {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Timer Controller libraries.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Timer Controller libraries.'
      )
    }

    this.debugLevel = localConfig.debugLevel

    // Constants
    this.cleanUsageInterval = 60000 * 60 // 1 hour
    this.backupUsageInterval = 60000 * 10 // 10 minutes
    this.newSmAccountsInterval = 60000 * 1 // 1 minute

    // Encapsulate dependencies
    this.config = config

    // Bind 'this' object to all subfunctions
    this.startTimers = this.startTimers.bind(this)
    this.gcOrders = this.gcOrders.bind(this)
    this.gcOffers = this.gcOffers.bind(this)
    this.checkDupOffers = this.checkDupOffers.bind(this)
    this.loadOffers = this.loadOffers.bind(this)
    this.cleanUsage = this.cleanUsage.bind(this)
    this.backupUsage = this.backupUsage.bind(this)
    this.newSmAccounts = this.newSmAccounts.bind(this)

    // State
    this.gcOrdersInt = null
    this.gcOffersInt = null
    this.checkDupOffersInt = null
    this.loadOffersInt = null
    this.newSmAccountsInt = null
  }

  // Start all the time-based controllers.
  startTimers () {
    this.gcOrdersInt = setInterval(this.gcOrders, 60000 * 5)
    this.gcOffersInt = setInterval(this.gcOffers, 60000 * 5)
    // this.checkDupOffersInt = setInterval(this.checkDupOffers, 60000 * 4.5)
    this.loadOffersInt = setInterval(this.loadOffers, 60000 * 2)
    this.cleanUsageHandle = setInterval(this.cleanUsage, this.cleanUsageInterval)
    this.backupUsageHandle = setInterval(this.backupUsage, this.backupUsageInterval)
    this.newSmAccountsInt = setInterval(this.newSmAccounts, this.newSmAccountsInterval)

    return true
  }

  stopTimers () {
    clearInterval(this.gcOrdersInt)
    clearInterval(this.gcOffersInt)
    // clearInterval(this.checkDupOffers)
    clearInterval(this.optimizeWalletHandle)
    clearInterval(this.cleanUsageHandle)
    clearInterval(this.backupUsageHandle)
    clearInterval(this.newSmAccountsInt)
  }

  // Garbage Collect the Orders.
  gcOrders () {
    try {
      this.useCases.order.removeStaleOrders()
      return true
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/gcOrders(): ', err)
      return false
    }
  }

  // Clean the usage state so that stats reflect the last 24 hours.
  cleanUsage () {
    try {
      clearInterval(this.cleanUsageHandle)

      const now = new Date()
      console.log(`cleanUsage() Timer Controller executing at ${now.toLocaleString()}`)

      this.useCases.usage.cleanUsage()

      this.cleanUsageHandle = setInterval(this.cleanUsage, this.cleanUsageInterval)

      return true
    } catch (err) {
      console.error('Error in time-controller.js/cleanUsage(): ', err)

      this.cleanUsageHandle = setInterval(this.cleanUsage, this.cleanUsageInterval)
    }
  }

  // Garbage Collect the Offers.
  gcOffers () {
    try {
      this.useCases.offer.removeStaleOffers()
      return true
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/gcOffers(): ', err)
      return false
    }
  }

  // Remove duplicate Offers
  checkDupOffers () {
    try {
      this.useCases.offer.removeDuplicateOffers()
      return true
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/checkDupOffers(): ', err)
      return false
    }
  }

  // Load offers From nostr .
  async loadOffers () {
    try {
      await this.useCases.offer.loadOffers()
      return true
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/loadOffers(): ', err)
      return false
    }
  }

  // Backup the usage stats to the database
  async backupUsage () {
    try {
      clearInterval(this.backupUsageHandle)

      console.log('backupUsage() Timer Controller executing at ', new Date().toLocaleString())

      // Clear the database of old usage data.
      await this.useCases.usage.clearUsage()

      // Save the current usage snapshot to the database.
      await this.useCases.usage.saveUsage()

      this.backupUsageHandle = setInterval(this.backupUsage, this.backupUsageInterval)

      return true
    } catch (err) {
      console.error('Error in time-controller.js/backupUsage(): ', err)

      this.backupUsageHandle = setInterval(this.backupUsage, this.backupUsageInterval)

      // Note: Do not throw an error. This is a top-level function.
      return false
    }
  }

  // Check for new Social Media Accounts.
  async newSmAccounts () {
    try {
      await this.useCases.smAccount.checkForNewSmAccounts()
      return true
    } catch (err) {
      console.error('Error in time-controller.js/newSmAccounts(): ', err)

      // Note: Do not throw an error. This is a top-level function.
      return false
    }
  }
}

export default TimerControllers
