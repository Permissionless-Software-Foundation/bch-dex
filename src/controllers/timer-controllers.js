/*
  This Controller library is concerned with timer-based functions that are
  kicked off periodicially.
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
    this.config = config

    // Bind 'this' object to all subfunctions
    this.startTimers = this.startTimers.bind(this)
    this.gcOrders = this.gcOrders.bind(this)
    this.gcOffers = this.gcOffers.bind(this)
    this.checkDupOffers = this.checkDupOffers.bind(this)
    this.loadOffers = this.loadOffers.bind(this)
    // State
    this.gcOrdersInt = null
    this.gcOffersInt = null
    this.checkDupOffersInt = null
    this.loadOffersInt = null
  }

  // Start all the time-based controllers.
  startTimers () {
    this.gcOrdersInt = setInterval(this.gcOrders, 60000 * 5)
    this.gcOffersInt = setInterval(this.gcOffers, 60000 * 5)
    this.checkDupOffersInt = setInterval(this.checkDupOffers, 60000 * 4.5)
    this.loadOffersInt = setInterval(this.loadOffers, 60000 * 2)
    return true
  }

  stopTimers () {
    clearInterval(this.gcOrdersInt)
    clearInterval(this.gcOffersInt)
    clearInterval(this.checkDupOffers)
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
}

export default TimerControllers
