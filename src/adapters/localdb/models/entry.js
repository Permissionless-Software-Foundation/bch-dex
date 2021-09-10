const mongoose = require('mongoose')

const Entry = new mongoose.Schema({
  entry: { type: String },
  description: { type: String },
  slpAddress: { type: String },
  signature: { type: String },
  category: { type: String },
  balance: { type: Number },
  merit: { type: Number }
})

module.exports = mongoose.model('entry', Entry)
