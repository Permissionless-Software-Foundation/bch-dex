/*
  Database model for tracking deleted Nostr posts.
*/

import mongoose from 'mongoose'

const DeletedPost = new mongoose.Schema({
  eventId: { type: String, required: true, default: null }, // Event ID of the deleted post.
  npub: { type: String, default: null }, // Nostr public key of the user who created the post.
  bchAddr: { type: String, default: null }, // bch address of the user who created the post.
  pubkey: { type: String, default: null }, // Nostr public key of the user who created the post.
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('deletedPost', DeletedPost)
