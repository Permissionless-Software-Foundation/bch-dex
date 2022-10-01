/*
  This library encapsulates code concerned with MongoDB and Mongoose models.
*/

// Load Mongoose models.
import Users from './models/users.js'
import Entries from './models/entry.js'
import Order from './models/order.js'
import Offer from './models/offer.js'

class LocalDB {
  constructor () {
    // Encapsulate dependencies
    this.Users = Users
    this.Entry = Entries
    this.Order = Order
    this.Offer = Offer
  }
}

export default LocalDB
