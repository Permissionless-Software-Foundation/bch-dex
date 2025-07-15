/*
  Social Media Account Model.

  This model is used to track content creators using the DEX
  Nostr social media channel.
*/

import mongoose from 'mongoose'

const SmAccount = new mongoose.Schema({
  npub: { type: String, required: true },
  bchAddr: { type: String, required: true, default: '' },
  pubkey: { type: String, required: true },
  pfp: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  followerCnt: { type: Number, default: 0 },
  followingCnt: { type: Number, default: 0 },
  posts: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  reposts: { type: Number, default: 0 }
})

export default mongoose.model('smAccount', SmAccount)
