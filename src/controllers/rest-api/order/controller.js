/*
  REST API Controller library for the /order route
*/

// const { wlogger } = require('../../../adapters/wlogger')

let _this

class OrderRESTControllerLib {
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

    // Encapsulate dependencies
    this.OrderModel = this.adapters.localdb.Order
    // this.userUseCases = this.useCases.user

    _this = this
  }

  // No api-doc documentation because this wont be a public endpoint
  async createOrder (ctx) {
    try {
      // console.log('body: ', ctx.request.body)

      const orderObj = ctx.request.body.order
      console.log('orderObj: ', orderObj)

      const hash = await _this.useCases.order.createOrder(orderObj)

      ctx.body = { hash }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      _this.handleError(ctx, err)
    }
  }

  // curl -X GET http://localhost:5700/order/list/all/0
  async listOrders (ctx) {
    try {
      let page = ctx.params.page
      if (!page) page = 0

      const offers = await _this.useCases.order.listOrders(page)

      ctx.body = offers
    } catch (err) {
      console.log('Error in listOrders REST API handler: ', err)
      _this.handleError(ctx, err)
    }
  }

  // Delete an existing order by returning the token to the root address of
  // the DEX wallet.
  async deleteOrder (ctx) {
    try {
      // console.log('body: ', ctx.request.body)

      const nostrEventId = ctx.request.body.nostrEventId
      // console.log('p2wdbHash: ', p2wdbHash)

      const txid = await _this.useCases.order.deleteOrder(nostrEventId)

      ctx.body = { txid }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      _this.handleError(ctx, err)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
    console.log('err', err)

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

export default OrderRESTControllerLib
