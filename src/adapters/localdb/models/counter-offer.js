import mongoose from 'mongoose'

const CounterOffer = new mongoose.Schema({
  nostrEventId: { type: String, required: true }, // Nostr Event Id.
  takerAddr: { type: String, default: null },
  takerNpub: { type: String, default: null },
  counterOfferAddr: { type: String, default: null },
  counterOfferUtxo: { type: String, default: null }
})

export default mongoose.model('counterOffer', CounterOffer)
