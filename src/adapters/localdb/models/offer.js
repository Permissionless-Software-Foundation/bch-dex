import mongoose from 'mongoose'

const Offer = new mongoose.Schema({

  // Token data
  tokenId: { type: String },
  utxoTxid: { type: String },
  utxoVout: { type: Number },
  ticker: { type: String, default: '' },
  tokenType: { type: Number },

  // Trade data
  buyOrSell: { type: String },
  numTokens: { type: Number },
  rateInBaseUnit: { type: String },
  minUnitsToExchange: { type: String },
  p2wdbTxid: { type: String },
  p2wdbHash: { type: String },
  offerStatus: { type: String },
  makerAddr: { type: String },

  // Authentication data
  signature: { type: String },
  sigMsg: { type: String },

  // Utility data
  timestamp: { type: Number },
  globalTimestamp: { type: String },
  localTimestamp: { type: String },
  displayCategory: { type: String },
  nsfw: { type: Boolean, default: false },
  flags: { type: Array },

  // SWaP Protocol Properties
  lokadId: { type: String },
  messageType: { type: Number },
  messageClass: { type: Number }

})

export default mongoose.model('offer', Offer)
