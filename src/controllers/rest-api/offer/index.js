/*
  REST API library for /offer route.
*/

// Public npm libraries.
const Router = require('koa-router')

// Local libraries.
const OfferRESTControllerLib = require('./controller')

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
    this.router.get('/list', _this.offerRESTController.listOffers)
    this.router.post('/take', _this.offerRESTController.takeOffer)

    // Attach the Controller routes to the Koa app.
    app.use(_this.router.routes())
    app.use(_this.router.allowedMethods())
  }
}

module.exports = OfferRouter
