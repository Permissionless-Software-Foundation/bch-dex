/*
  Order Model. Orders are 'internal' to the system and track the HD wallet index
  that contains funds for that Order. This is in contrast to Offers, which
  are 'external' to the system and mirrored by every instance of bch-dex.

  See the dev-docs/specification.md for details on each property.
*/

import mongoose from 'mongoose'

const Order = new mongoose.Schema({
  // Token data
  tokenId: { type: String, required: true },
  utxoTxid: { type: String, required: true },
  utxoVout: { type: Number, required: true },
  ticker: { type: String, required: true },
  tokenType: { type: Number, required: true },

  // Trade data
  buyOrSell: { type: String, required: true },
  numTokens: { type: Number, required: true },
  rateInBaseUnit: { type: String, required: true },
  minUnitsToExchange: { type: String },
  p2wdbTxid: { type: String },
  p2wdbHash: { type: String },
  makerAddr: { type: String, required: true },

  // Authentication data
  signature: { type: String },
  sigMsg: { type: String },
  offerBchAddr: { type: String },
  offerPubKey: { type: String },

  // Wallet Data
  hdIndex: { type: Number, required: true }, // HD index address holding the UTXO for this offer.

  // SWaP Protocol Properties
  lokadId: { type: String },
  messageType: { type: Number },
  messageClass: { type: Number },
  nostrEventId: { type: String, required: true }, // Nostr Event Id.

  // Additional properties found in createOrder
  dataType: { type: String, required: true },

  userId: { type: String, required: true },

  // Operator fee and address
  operatorAddress: { type: String },
  operatorPercentage: { type: Number }
})

export default mongoose.model('order', Order)
