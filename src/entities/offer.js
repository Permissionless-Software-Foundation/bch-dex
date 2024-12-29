/*
  Offer Entity
  An ffer is created when a new Signal is detected via the P2WDB webhook.
  It's destroyed when the UTXO described in the Signal has been detected as spent.
*/

class OfferEntity {
  constructor () {
    this.offerStatus = ['posted', 'taken', 'dead']
  }

  validate (offerData = {}) {
    // Throw an error if input object does not have a data property
    if (!offerData.data) {
      throw new Error(
        'Input to offer.validate() must be an object with a data property.'
      )
    }

    // console.log('offer entity validate() offerData: ', offerData)

    const {
      messageType,
      messageClass,
      tokenId,
      buyOrSell,
      rateInBaseUnit,
      minUnitsToExchange,
      numTokens,
      utxoTxid,
      utxoVout,
      offerStatus,
      makerAddr,
      ticker,
      tokenType,
      nostrEventId
    } = offerData.data

    // Input Validation
    if (!messageType || typeof messageType !== 'number') {
      throw new Error("Property 'messageType' must be an integer number.")
    }
    if (!messageClass || typeof messageClass !== 'number') {
      throw new Error("Property 'messageClass' must be an integer number.")
    }
    if (!tokenId || typeof tokenId !== 'string') {
      throw new Error("Property 'tokenId' must be a string.")
    }
    if (!buyOrSell || typeof buyOrSell !== 'string') {
      throw new Error("Property 'buyOrSell' must be a string.")
    }
    if (!rateInBaseUnit || typeof rateInBaseUnit !== 'number') {
      throw new Error("Property 'rateInBaseUnit' must be an integer number.")
    }
    if (!minUnitsToExchange || typeof minUnitsToExchange !== 'number') {
      throw new Error("Property 'minUnitsToExchange' must be an integer number.")
    }
    if (!numTokens || typeof numTokens !== 'number') {
      throw new Error("Property 'numTokens' must be a number.")
    }
    if (!utxoTxid || typeof utxoTxid !== 'string') {
      throw new Error("Property 'utxoTxid' must be a string.")
    }
    if (typeof utxoVout !== 'number') {
      throw new Error("Property 'utxoVout' must be an integer number.")
    }
    if (offerStatus && !this.offerStatus.includes(offerStatus)) {
      throw new Error("Property 'offerStatus' must be posted, taken, or dead")
    }
    if (!makerAddr || typeof makerAddr !== 'string') {
      throw new Error("Property 'makerAddr' must be a string.")
    }
    // if (!ticker || typeof ticker !== 'string') {
    //   throw new Error("Property 'ticker' must be a string.")
    // }
    if (!tokenType || typeof tokenType !== 'number') {
      throw new Error("Property 'tokenType' must be a number.")
    }
    if (!nostrEventId || typeof nostrEventId !== 'string') {
      throw new Error("Property 'nostrEventId' must be a string.")
    }

    // Convert the timestamp to a number.
    let timestamp = new Date(offerData.timestamp)
    timestamp = timestamp.getTime()

    const validatedOfferData = {
      messageType,
      messageClass,
      tokenId,
      buyOrSell,
      rateInBaseUnit,
      minUnitsToExchange,
      numTokens,
      utxoTxid,
      utxoVout,
      timestamp,
      globaltimestamp: offerData.timestamp,
      localTimestamp: offerData.localTimeStamp,
      txid: offerData.txid,
      p2wdbHash: offerData.hash,
      offerStatus: offerStatus || this.offerStatus[0],
      makerAddr,
      ticker,
      tokenType,
      nostrEventId
    }
    // console.log('offer entity validatedOfferData: ', validatedOfferData)

    return validatedOfferData
  }
}

export default OfferEntity
