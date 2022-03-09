const mongoose = require('mongoose')

const Order = new mongoose.Schema({
  // SWaP Protocol Properties
  lokadId: { type: String },
  messageType: { type: Number },
  messageClass: { type: Number },
  tokenId: { type: String },
  buyOrSell: { type: String },
  rateInSats: { type: String },
  minSatsToExchange: { type: String },
  signature: { type: String },
  sigMsg: { type: String },
  utxoTxid: { type: String },
  utxoVout: { type: Number },
  numTokens: { type: Number },
  timestamp: { type: String },
  localTimestamp: { type: String },
  p2wdbTxid: { type: String },
  p2wdbHash: { type: String },
  orderStatus: { type: String }
})

module.exports = mongoose.model('order', Order)
