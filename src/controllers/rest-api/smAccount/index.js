/*
  REST API library for /order route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import SmAccountRESTControllerLib from './controller.js'
import Validators from '../middleware/validators.js'

let _this

class SmAccountRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /sm REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /sm REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.validators = new Validators()
    this.smAccountRESTController = new SmAccountRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/sm'
    this.router = new Router({ prefix: baseUrl })

    this.listAccounts = this.listAccounts.bind(this)
    _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attached REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.get('/list/all/:page', _this.smAccountRESTController.listAccounts)
    this.router.get('/npub/:npub', _this.smAccountRESTController.getAccountByNpub)
    this.router.get('/bchAddr/:bchAddr', _this.smAccountRESTController.getAccountByBchAddr)

    // Attach the Controller routes to the Koa app.
    app.use(_this.router.routes())
    app.use(_this.router.allowedMethods())
  }

  async listAccounts (ctx, next) {
    // await _this.validators.ensureUser(ctx, next)
    await _this.smAccountRESTController.listAccounts(ctx, next)
  }
}

export default SmAccountRouter
