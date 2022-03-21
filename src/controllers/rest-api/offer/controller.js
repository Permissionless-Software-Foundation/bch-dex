/*
  REST API Controller library for the /offer route
*/

// const { wlogger } = require('../../../adapters/wlogger')

let _this

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

    _this = this
  }

  // No api-doc documentation because this wont be a public endpoint
  async createOffer (ctx) {
    try {
      console.log('body: ', ctx.request.body)

      const offerObj = ctx.request.body

      await _this.useCases.offer.createOffer(offerObj)

      ctx.body = {
        success: true
      }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      _this.handleError(ctx, err)
    }
  }

  // curl -X GET http://localhost:5700/offer/list
  async listOffers (ctx) {
    try {
      const offers = await _this.useCases.offer.listOffers()

      ctx.body = offers
    } catch (err) {
      console.log('Error in listOffers REST API handler.')
      _this.handleError(ctx, err)
    }
  }

  // Currently only supports 'sell' offers, and will only buy the 'numTokens'
  // listed in the offer.
  async takeOffer (ctx) {
    try {
      console.log('body: ', ctx.request.body)

      const offerCid = ctx.request.body.offerCid

      // Find the Offer.
      // const offerEntity = await _this.useCases.offer.findOffer(offerId)

      // 'Take' the Offer.
      const hash = await _this.useCases.offer.takeOffer(offerCid)

      ctx.body = { hash }
    } catch (err) {
      console.log('Error in takeOffer REST API handler.')
      _this.handleError(ctx, err)
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

module.exports = OfferRESTControllerLib
