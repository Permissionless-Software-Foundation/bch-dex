import mongoose from 'mongoose'
// import config from '../../config/index.js'
import User from '../../../src/adapters/localdb/models/users.js'

const mongooseConnectStr = 'mongodb://172.17.0.1:5666/bch-swap-service-prod'

async function getUsers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(
    mongooseConnectStr,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  const users = await User.find({}, '-password')
  console.log(`users: ${JSON.stringify(users, null, 2)}`)

  mongoose.connection.close()
}
getUsers()
