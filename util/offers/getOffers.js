/*
  Get all Offers in the database.
*/

import mongoose from 'mongoose'

import config from '../../config/index.js'
import Offer from '../../src/adapters/localdb/models/offer.js'

async function getOffers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const offers = await Offer.find({})
  console.log(`offers: ${JSON.stringify(offers, null, 2)}`)

  mongoose.connection.close()
}
getOffers()
