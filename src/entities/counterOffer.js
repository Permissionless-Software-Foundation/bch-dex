/*
  Counter Offer Entity
*/

class CounterOfferEntity {
  validate (offerData = {}) {
    console.log('counter offer data input validation ', offerData)
    // Throw an error if input object does not have a data property
    if (!offerData.data) {
      throw new Error(
        'Input to counterOffer.validate() must be an object with a data property.'
      )
    }

    const {
      nostrEventId,
      takerAddr,
      takerNpub,
      counterOfferAddr,
      counterOfferUtxo
    } = offerData.data

    // Input Validation
    if (!nostrEventId || typeof nostrEventId !== 'string') {
      throw new Error("Property 'nostrEventId' must be a string.")
    }
    // Next validations are optional, to allow old counter offers without the data.
    if (takerAddr && typeof takerAddr !== 'string') {
      throw new Error("Property 'takerAddr' must be a string.")
    }
    if (takerNpub && typeof takerNpub !== 'string') {
      throw new Error("Property 'takerNpub' must be a string.")
    }
    if (counterOfferAddr && typeof counterOfferAddr !== 'string') {
      throw new Error("Property 'counterOfferAddr' must be a string.")
    }
    if (counterOfferUtxo && typeof counterOfferUtxo !== 'string') {
      throw new Error("Property 'counterOfferUtxo' must be a string.")
    }

    const validatedCounterOfferData = {
      nostrEventId,
      takerAddr,
      takerNpub,
      counterOfferAddr,
      counterOfferUtxo
    }

    return validatedCounterOfferData
  }
}

export default CounterOfferEntity
