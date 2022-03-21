/*
  Get all Offers in the database.
*/

const mongoose = require('mongoose')

const config = require('../../config')

const Offer = require('../../src/adapters/localdb/models/offer')

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
