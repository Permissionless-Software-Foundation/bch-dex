const mongoose = require('mongoose')

const Offer = new mongoose.Schema({

  // Token data
  tokenId: { type: String },
  utxoTxid: { type: String },
  utxoVout: { type: Number },

  // Trade data
  buyOrSell: { type: String },
  numTokens: { type: Number },
  rateInBaseUnit: { type: String },
  minUnitsToExchange: { type: String },
  p2wdbTxid: { type: String },
  p2wdbHash: { type: String },
  offerStatus: { type: String },

  // Authentication data
  signature: { type: String },
  sigMsg: { type: String },

  // Utility data
  timestamp: { type: String },
  localTimestamp: { type: String },

  // SWaP Protocol Properties
  lokadId: { type: String },
  messageType: { type: Number },
  messageClass: { type: Number }

})

module.exports = mongoose.model('offer', Offer)
