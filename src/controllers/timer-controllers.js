/*
  This Controller library is concerned with timer-based functions that are
  kicked off periodicially.
*/

// Used to retain scope of 'this', when the scope is lost.
let _this

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

    _this = this

    this.startTimers()
  }

  // Start all the time-based controllers.
  startTimers () {
    setInterval(this.gcOrders, 60000 * 5)
    setInterval(this.gcOffers, 60000 * 5)
  }

  // Garbage Collect the Orders.
  gcOrders () {
    try {
      _this.useCases.order.removeStaleOrders()
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/gcOrders(): ', err)
    }
  }

  // Garbage Collect the Offers.
  gcOffers () {
    try {
      _this.useCases.offer.removeStaleOffers()
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/gcOffers(): ', err)
    }
  }
}

module.exports = TimerControllers
