import mongoose from 'mongoose'
import config from '../../config/index.js'
import Order from '../../src/adapters/localdb/models/order.js'

async function getOrder () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const orders = await Order.find({})
  console.log(`orders: ${JSON.stringify(orders, null, 2)}`)

  mongoose.connection.close()
}
getOrder()
