/*
  This is a top-level library that encapsulates all the additional Use Cases.
  The concept of Use Cases comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Local libraries
import UserUseCases from './user.js'
import EntryUseCases from './entry.js'
import OfferUseCases from './offer/index.js'
import OrderUseCases from './order.js'
import { UsageUseCases } from './usage-use-cases.js'

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
    this.usage = new UsageUseCases(localConfig)
  }

  // Run any startup Use Cases at the start of the app.
  async start () {
    console.log('Async Use Cases have been started.')

    return true
  }
}

export default UseCases
