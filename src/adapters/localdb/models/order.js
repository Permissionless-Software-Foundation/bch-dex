/*
  Order Model. Orders are 'internal' to the system and track the HD wallet index
  that contains funds for that Order. This is in contrast to Offers, which
  are 'external' to the system and mirrored by every instance of bch-dex.

  See the dev-docs/specification.md for details on each property.
*/

const mongoose = require('mongoose')

const Order = new mongoose.Schema({
  // Token data
  tokenId: { type: String },
  utxoTxid: { type: String },
  utxoVout: { type: Number },
  ticker: { type: String },
  tokenType: { type: Number },

  // Trade data
  buyOrSell: { type: String },
  numTokens: { type: Number },
  rateInBaseUnit: { type: String },
  minUnitsToExchange: { type: String },
  p2wdbTxid: { type: String },
  p2wdbHash: { type: String },
  makerAddr: { type: String },

  // Authentication data
  signature: { type: String },
  sigMsg: { type: String },
  offerBchAddr: { type: String },
  offerPubKey: { type: String },

  // Wallet Data
  hdIndex: { type: Number }, // HD index address holding the UTXO for this offer.

  // SWaP Protocol Properties
  lokadId: { type: String },
  messageType: { type: Number },
  messageClass: { type: Number }
})

module.exports = mongoose.model('order', Order)
