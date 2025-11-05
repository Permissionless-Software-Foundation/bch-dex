/*
  Database model for tracking deleted Nostr chat messages.
*/

import mongoose from 'mongoose'

const DeletedChat = new mongoose.Schema({
  eventId: { type: String, required: true, default: null }, // Event ID of the deleted message.
  npub: { type: String, default: null }, // Nostr public key of the user who created the message.
  bchAddr: { type: String, default: null }, // bch address of the user who created the message.
  pubkey: { type: String, default: null }, // Nostr public key of the user who created the message.
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('deletedChat', DeletedChat)
