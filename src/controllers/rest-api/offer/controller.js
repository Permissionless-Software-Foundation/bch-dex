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
    this.handleError = this.handleError.bind(this)
  }

  // No api-doc documentation because this wont be a public endpoint
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
