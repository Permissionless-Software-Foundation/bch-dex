/*
  REST API library for /p2wdb route.
  This route handles incoming data from the P2WDB webhook, and routes the data
  to the proper handler.
*/

// Public npm libraries.
const Router = require('koa-router')

// Local libraries.
const P2WDBRESTControllerLib = require('./controller')

let _this

class P2WDBRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /p2wdb REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /p2wdb REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.p2wdbRESTController = new P2WDBRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/p2wdb'
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
    this.router.post('/', _this.p2wdbRESTController.routeWebhook)

    // Attach the Controller routes to the Koa app.
    app.use(_this.router.routes())
    app.use(_this.router.allowedMethods())
  }
}

module.exports = P2WDBRouter
