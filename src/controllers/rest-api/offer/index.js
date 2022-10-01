/*
  REST API library for /offer route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import OfferRESTControllerLib from './controller.js'

let _this

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

    _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attached REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', _this.offerRESTController.createOffer)
    this.router.post('/take', _this.offerRESTController.takeOffer)
    this.router.get('/list/all/:page', _this.offerRESTController.listOffers)
    this.router.get('/list/nft/:page', _this.offerRESTController.listNftOffers)
    this.router.get('/list/fungible/:page', _this.offerRESTController.listFungibleOffers)

    // Attach the Controller routes to the Koa app.
    app.use(_this.router.routes())
    app.use(_this.router.allowedMethods())
  }
}

export default OfferRouter
