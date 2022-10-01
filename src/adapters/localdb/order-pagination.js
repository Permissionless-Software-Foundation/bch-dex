/*
  Adapter for the Order database model. Provides pagination when retrieving
  orders from the datatabase.
*/

import Order from './models/order.js'

// let _this

class OrderPagination {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.Order = Order
    // _this = this
  }

  // Read all entries in the P2WDB.
  async readAll (page = 0) {
    try {
      const ENTRIES_PER_PAGE = 20

      // Pull data from MongoDB.
      // Get all entries in the database.
      const data = await this.Order.find({})
        // Sort entries so newest entries show first.
        .sort('-timestamp')
        // Skip to the start of the selected page.
        .skip(page * ENTRIES_PER_PAGE)
        // Only return 20 results.
        .limit(ENTRIES_PER_PAGE)

      // console.log('data: ', data)

      return data
    } catch (err) {
      console.error('Error in order-pagination.js/readAll()')
      throw err
    }
  }
}

export default OrderPagination
