/*
  This is a top-level library that encapsulates all the additional Use Cases.
  The concept of Use Cases comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

import UserUseCases from './user.js'
import EntryUseCases from './entry.js'
import OfferUseCases from './offer/index.js'
import OrderUseCases from './order.js'

class UseCases {
  constructor (localConfig = {}) {
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Use Cases library.'
      )
    }

    // console.log('use-cases/index.js localConfig: ', localConfig)
    this.user = new UserUseCases(localConfig)
    this.entry = new EntryUseCases(localConfig)
    this.order = new OrderUseCases(localConfig)
    localConfig.order = this.order
    this.offer = new OfferUseCases(localConfig)
  }

  // Run any startup Use Cases at the start of the app.
  async start () {
    // try {
    console.log('Async Use Cases have been started.')

    return true
    // } catch (err) {
    //   console.error('Error in use-cases/index.js/start()')
    //   // console.log(err)
    //   throw err
    // }
  }
}

export default UseCases
