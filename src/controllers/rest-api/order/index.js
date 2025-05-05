/*
  REST API library for /order route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import OrderRESTControllerLib from './controller.js'
import Validators from '../middleware/validators.js'

let _this

class OrderRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /order REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /order REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.validators = new Validators()
    this.orderRESTController = new OrderRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/order'
    this.router = new Router({ prefix: baseUrl })

    this.createOrder = this.createOrder.bind(this)
    _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attached REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', this.createOrder)
    this.router.get('/list/all/:page', _this.orderRESTController.listOrders)
    this.router.post('/delete', _this.orderRESTController.deleteOrder)

    // Attach the Controller routes to the Koa app.
    app.use(_this.router.routes())
    app.use(_this.router.allowedMethods())
  }

  async createOrder (ctx, next) {
    await _this.validators.ensureUser(ctx, next)
    await _this.orderRESTController.createOrder(ctx, next)
  }
}

export default OrderRouter
