/*
  Social Media Account Model.

  This model is used to track content creators using the DEX
  Nostr social media channel.
*/

import mongoose from 'mongoose'

const SmAccount = new mongoose.Schema({
  npub: { type: String, required: true },
  bchAddr: { type: String, required: true, default: '' },
  pubkey: { type: String, required: true }
})

export default mongoose.model('smAccount', SmAccount)
