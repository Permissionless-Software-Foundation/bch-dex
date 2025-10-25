/*
  REST API Controller library for the /offer route

  TODO:
  - Add api-doc documentation for all endpoints in this file.
*/

import wlogger from '../../../adapters/wlogger.js'

class OfferRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /offer REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /offer REST Controller.'
      )
    }

    // Encapsulate dependencies
    this.OfferModel = this.adapters.localdb.Offer
    // this.userUseCases = this.useCases.user

    // Bind 'this' object to all subfunctions.
    this.createOffer = this.createOffer.bind(this)
    this.listOffers = this.listOffers.bind(this)
    this.listNftOffers = this.listNftOffers.bind(this)
    this.listFungibleOffers = this.listFungibleOffers.bind(this)
    this.takeOffer = this.takeOffer.bind(this)
    this.listOffersByAddress = this.listOffersByAddress.bind(this)
    this.syncOfferMutableData = this.syncOfferMutableData.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  // No api-doc documentation because this wont be a public endpoint
  // This function  has no endpoint
  async createOffer (ctx) {
    try {
      console.log('body: ', ctx.request.body)

      const offerObj = ctx.request.body

      await this.useCases.offer.createOffer(offerObj)

      ctx.body = {
        success: true
      }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      this.handleError(ctx, err)
    }
  }
  /**
   * @api {get} /offer/list/all/:page Get all offers
   * @apiPermission public
   * @apiName ListOffers
   * @apiGroup REST Offer
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5000/offer/list/all/0
   *
   * @apiSuccess {Object[]} offers           Array of offer objects
   * @apiSuccess {ObjectId} offers._id       Offer id
   * @apiSuccess {String} offers.ticker      Ticker
   * @apiSuccess {String} offers.tokenId     Token id
   * @apiSuccess {String} offers.utxoTxid   Utxo transaction id
   * @apiSuccess {Number} offers.utxoVout   Utxo output index
   * @apiSuccess {String} offers.buyOrSell  Buy or sell
   * @apiSuccess {Number} offers.numTokens  Number of tokens
   * @apiSuccess {String} offers.rateInBaseUnit Rate in base unit
   * @apiSuccess {String} offers.minUnitsToExchange Minimum units to exchange
   * @apiSuccess {String} offers.offerStatus Offer status
   * @apiSuccess {String} offers.makerAddr Maker address
   * @apiSuccess {Number} offers.timestamp Timestamp
   * @apiSuccess {String} offers.displayCategory Display category
   * @apiSuccess {Boolean} offers.nsfw Nsfw
   * @apiSuccess {Array} offers.flags Flags
   * @apiSuccess {Number} offers.messageType Message type
   * @apiSuccess {Number} offers.messageClass Message class
   * @apiSuccess {String} offers.nostrEventId Nostr event id
   * @apiSuccess {String} offers.operatorAddress Operator address
   * @apiSuccess {Number} offers.operatorPercentage Operator percentage
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "offers": [{
   *          "_id": "56bd1da600a526986cf65c80",
   *          "tokenId": "1234567890",
   *          "utxoTxid": "1234567890",
   *          "utxoVout": 0,
   *          "buyOrSell": "buy",
   *          "numTokens": 1,
   *          "rateInBaseUnit": "100000000",
   *          "minUnitsToExchange": "100000000",
   *          "offerStatus": "active",
   *          "makerAddr": "1234567890",
   *          "timestamp": 1716883200,
   *          "displayCategory": "nft",
   *          "nsfw": false,
   *          "flags": [],
   *          "messageType": 1,
   *          "messageClass": 1,
   *          "nostrEventId": "1234567890",
   *          "operatorAddress": "1234567890",
   *          "operatorPercentage": 100
   *       }]
   *     }
   *
   * @apiUse TokenError
   */

  // curl -X GET http://localhost:5700/offer/list/all/0
  async listOffers (ctx) {
    try {
      let page = ctx.params.page
      if (!page) page = 0

      const offers = await this.useCases.offer.listOffers(page)

      ctx.body = offers
    } catch (err) {
      console.log('Error in listOffers REST API handler: ', err)
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /offer/list/nft/:page Get all nft offers
   * @apiPermission public
   * @apiName ListNftOffers
   * @apiGroup REST Offer
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5000/offer/list/nft/0
   *
   * @apiSuccess {Object[]} offers           Array of offer objects
   * @apiSuccess {ObjectId} offers._id       Offer id
   * @apiSuccess {String} offers.ticker      Ticker
   * @apiSuccess {String} offers.tokenId     Token id
   * @apiSuccess {String} offers.utxoTxid   Utxo transaction id
   * @apiSuccess {Number} offers.utxoVout   Utxo output index
   * @apiSuccess {String} offers.buyOrSell  Buy or sell
   * @apiSuccess {Number} offers.numTokens  Number of tokens
   * @apiSuccess {String} offers.rateInBaseUnit Rate in base unit
   * @apiSuccess {String} offers.minUnitsToExchange Minimum units to exchange
   * @apiSuccess {String} offers.offerStatus Offer status
   * @apiSuccess {String} offers.makerAddr Maker address
   * @apiSuccess {Number} offers.timestamp Timestamp
   * @apiSuccess {String} offers.displayCategory Display category
   * @apiSuccess {Boolean} offers.nsfw Nsfw
   * @apiSuccess {Array} offers.flags Flags
   * @apiSuccess {Number} offers.messageType Message type
   * @apiSuccess {Number} offers.messageClass Message class
   * @apiSuccess {String} offers.nostrEventId Nostr event id
   * @apiSuccess {String} offers.operatorAddress Operator address
   * @apiSuccess {Number} offers.operatorPercentage Operator percentage
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "offers": [{
   *          "_id": "56bd1da600a526986cf65c80",
   *          "tokenId": "1234567890",
   *          "utxoTxid": "1234567890",
   *          "utxoVout": 0,
   *          "buyOrSell": "buy",
   *          "numTokens": 1,
   *          "rateInBaseUnit": "100000000",
   *          "minUnitsToExchange": "100000000",
   *          "offerStatus": "active",
   *          "makerAddr": "1234567890",
   *          "timestamp": 1716883200,
   *          "displayCategory": "nft",
   *          "nsfw": false,
   *          "flags": [],
   *          "messageType": 1,
   *          "messageClass": 1,
   *          "nostrEventId": "1234567890",
   *          "operatorAddress": "1234567890",
   *          "operatorPercentage": 100
   *       }]
   *     }
   *
   * @apiUse TokenError
   */

  // curl -X GET http://localhost:5700/offer/list/nft/0
  async listNftOffers (ctx) {
    try {
      let page = ctx.params.page
      if (!page) page = 0

      const offers = await this.useCases.offer.listNftOffers(page)

      ctx.body = offers
    } catch (err) {
      console.log('Error in listNftOffers REST API handler: ', err)
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /offer/list/fungible/:page Get all fungible offers
   * @apiPermission public
   * @apiName ListFungibleOffers
   * @apiGroup REST Offer
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5000/offer/list/fungible/0
   *
   * @apiSuccess {Object[]} offers           Array of offer objects
   * @apiSuccess {ObjectId} offers._id       Offer id
   * @apiSuccess {String} offers.ticker      Ticker
   * @apiSuccess {String} offers.tokenId     Token id
   * @apiSuccess {String} offers.utxoTxid   Utxo transaction id
   * @apiSuccess {Number} offers.utxoVout   Utxo output index
   * @apiSuccess {String} offers.buyOrSell  Buy or sell
   * @apiSuccess {Number} offers.numTokens  Number of tokens
   * @apiSuccess {String} offers.rateInBaseUnit Rate in base unit
   * @apiSuccess {String} offers.minUnitsToExchange Minimum units to exchange
   * @apiSuccess {String} offers.offerStatus Offer status
   * @apiSuccess {String} offers.makerAddr Maker address
   * @apiSuccess {Number} offers.timestamp Timestamp
   * @apiSuccess {String} offers.displayCategory Display category
   * @apiSuccess {Boolean} offers.nsfw Nsfw
   * @apiSuccess {Array} offers.flags Flags
   * @apiSuccess {Number} offers.messageType Message type
   * @apiSuccess {Number} offers.messageClass Message class
   * @apiSuccess {String} offers.nostrEventId Nostr event id
   * @apiSuccess {String} offers.operatorAddress Operator address
   * @apiSuccess {Number} offers.operatorPercentage Operator percentage
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "offers": [{
   *          "_id": "56bd1da600a526986cf65c80",
   *          "tokenId": "1234567890",
   *          "utxoTxid": "1234567890",
   *          "utxoVout": 0,
   *          "buyOrSell": "buy",
   *          "numTokens": 1,
   *          "rateInBaseUnit": "100000000",
   *          "minUnitsToExchange": "100000000",
   *          "offerStatus": "active",
   *          "makerAddr": "1234567890",
   *          "timestamp": 1716883200,
   *          "displayCategory": "fungible",
   *          "nsfw": false,
   *          "flags": [],
   *          "messageType": 1,
   *          "messageClass": 1,
   *          "nostrEventId": "1234567890",
   *          "operatorAddress": "1234567890",
   *          "operatorPercentage": 100
   *       }]
   *     }
   *
   * @apiUse TokenError
   */
  // curl -X GET http://localhost:5700/offer/list/fungible/0
  async listFungibleOffers (ctx) {
    try {
      let page = ctx.params.page
      if (!page) page = 0

      const offers = await this.useCases.offer.listFungibleOffers(page)

      ctx.body = offers
    } catch (err) {
      console.log('Error in Fungible REST API handler: ', err)
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {post} /offer/take Take an offer
   * @apiPermission public
   * @apiName TakeOffer
   * @apiGroup REST Offer
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "nostrEventId": "1234567890" }' localhost:5010/offer/take
   *
   * @apiSuccess {String} eventId Event id
   * @apiSuccess {String} noteId Note id
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "eventId": "1234567890",
   *       "noteId": "1234567890"
   *     }
   *
   * @apiUse TokenError
   */
  // Currently only supports 'sell' offers, and will only buy the 'numTokens'
  // listed in the offer.
  async takeOffer (ctx) {
    try {
      console.log('REST API controller, body: ', ctx.request.body)

      const nostrEventId = ctx.request.body.nostrEventId

      const { eventId, noteId } = await this.useCases.offer.takeOffer(nostrEventId)

      ctx.body = { eventId, noteId }
    } catch (err) {
      wlogger.error('Error in takeOffer() REST API handler.')
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /offer/list/addr/:addr List all offers being made by a given address
   * @apiPermission public
   * @apiName ListOffersByAddress
   * @apiGroup REST Offer
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5000/offer/list/addr/bitcoincash:qrpxtnrlhfz9wsuuse7z5k2mxmvw0r3pu5qepyhmq2
   *
   *
   * @apiSuccess {Object[]} offers           Array of offer objects
   * @apiSuccess {ObjectId} offers._id       Offer id
   * @apiSuccess {String} offers.ticker      Ticker
   * @apiSuccess {String} offers.tokenId     Token id
   * @apiSuccess {String} offers.utxoTxid   Utxo transaction id
   * @apiSuccess {Number} offers.utxoVout   Utxo output index
   * @apiSuccess {String} offers.buyOrSell  Buy or sell
   * @apiSuccess {Number} offers.numTokens  Number of tokens
   * @apiSuccess {String} offers.rateInBaseUnit Rate in base unit
   * @apiSuccess {String} offers.minUnitsToExchange Minimum units to exchange
   * @apiSuccess {String} offers.offerStatus Offer status
   * @apiSuccess {String} offers.makerAddr Maker address
   * @apiSuccess {Number} offers.timestamp Timestamp
   * @apiSuccess {String} offers.displayCategory Display category
   * @apiSuccess {Boolean} offers.nsfw Nsfw
   * @apiSuccess {Array} offers.flags Flags
   * @apiSuccess {Number} offers.messageType Message type
   * @apiSuccess {Number} offers.messageClass Message class
   * @apiSuccess {String} offers.nostrEventId Nostr event id
   * @apiSuccess {String} offers.operatorAddress Operator address
   * @apiSuccess {Number} offers.operatorPercentage Operator percentage
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "offers": [{
   *          "_id": "56bd1da600a526986cf65c80",
   *          "tokenId": "1234567890",
   *          "utxoTxid": "1234567890",
   *          "utxoVout": 0,
   *          "buyOrSell": "buy",
   *          "numTokens": 1,
   *          "rateInBaseUnit": "100000000",
   *          "minUnitsToExchange": "100000000",
   *          "offerStatus": "active",
   *          "makerAddr": "bitcoincash:qrpxtnrlhfz9wsuuse7z5k2mxmvw0r3pu5qepyhmq2",
   *          "timestamp": 1716883200,
   *          "displayCategory": "fungible",
   *          "nsfw": false,
   *          "flags": [],
   *          "messageType": 1,
   *          "messageClass": 1,
   *          "nostrEventId": "1234567890",
   *          "operatorAddress": "1234567890",
   *          "operatorPercentage": 100
   *       }]
   *     }
   *
   * @apiUse TokenError
   */

  // List all offers being made by a given address.
  // curl -X GET http://localhost:5700/offer/list/addr/bitcoincash:qrpxtnrlhfz9wsuuse7z5k2mxmvw0r3pu5qepyhmq2
  async listOffersByAddress (ctx) {
    try {
      const addr = ctx.params.addr

      const offers = await this.useCases.offer.listOffersByAddress(addr)

      ctx.body = offers
    } catch (err) {
      console.log('Error in listOffersByAddress REST API handler: ', err)
      this.handleError(ctx, err)
    }
  }

  async syncOfferMutableData (ctx) {
    try {
      const tokenId = ctx.request.body.tokenId
      const offer = await this.useCases.offer.syncOfferMutableData(tokenId)

      ctx.body = offer
    } catch (err) {
      console.log('Error in syncOfferMutableData REST API handler: ', err)
      this.handleError(ctx, err)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
    console.log('err', err.message)
    // If an HTTP status is specified by the buisiness logic, use that.
    if (err.status) {
      if (err.message) {
        ctx.throw(err.status, err.message)
      } else {
        ctx.throw(err.status)
      }
    } else {
      // By default use a 422 error if the HTTP status is not specified.
      ctx.throw(422, err.message)
    }
  }
}

export default OfferRESTControllerLib
