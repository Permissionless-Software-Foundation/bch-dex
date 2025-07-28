/*
  REST API library for /offer route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import OfferRESTControllerLib from './controller.js'

class OfferRouter {
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

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.offerRESTController = new OfferRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/offer'
    this.router = new Router({ prefix: baseUrl })

    // Bind 'this' object to all subfunctions.
    this.attach = this.attach.bind(this)
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attached REST API controllers.'
      )
    }

    // 12/3/24 CT:
    // Note: The createOffer() path was used by a P2WDB webhook to generate an
    // Offer from an Order. This has been deprecated and Offers are now created
    // by a Timer Controller monitoring a Nostr topic.

    // Define the routes and attach the controller.
    // this.router.post('/', _this.offerRESTController.createOffer) // Deprecated.
    this.router.post('/take', this.offerRESTController.takeOffer)
    this.router.get('/list/all/:page', this.offerRESTController.listOffers)
    this.router.get('/list/nft/:page', this.offerRESTController.listNftOffers)
    this.router.get('/list/fungible/:page', this.offerRESTController.listFungibleOffers)
    this.router.get('/list/addr/:addr', this.offerRESTController.listOffersByAddress)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

export default OfferRouter
