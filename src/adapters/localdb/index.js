/*
  This library encapsulates code concerned with MongoDB and Mongoose models.
*/

// Load Mongoose models.
import Users from './models/users.js'
import Entries from './models/entry.js'
import Order from './models/order.js'
import Offer from './models/offer.js'
import Usage from './models/usage.js'
import SmAccount from './models/smAccount.js'

class LocalDB {
  constructor () {
    // Encapsulate dependencies
    this.Users = Users
    this.Entry = Entries
    this.Order = Order
    this.Offer = Offer
    this.Usage = Usage
    this.SmAccount = SmAccount
  }
}

export default LocalDB
