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

  /**
   * @api {post} /order Create an order
   * @apiPermission User
   * @apiName CreateOrder
   * @apiGroup REST Order
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{"messageType": "1", "messageClass": "1", "tokenId": "1234567890", "buyOrSell": "buy", "rateInBaseUnit": "100000000", "minUnitsToExchange": "100000000", "numTokens": "1", "makerAddr": "1234567890"}' localhost:5001/order
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

  async createOrder (ctx) {
    try {
      // console.log('body: ', ctx.request.body)

      const orderObj = ctx.request.body.order
      const user = ctx.state.user
      orderObj.userId = user._id
      console.log('orderObj: ', orderObj)

      const { eventId, noteId } = await _this.useCases.order.createOrder(orderObj)

      ctx.body = { eventId, noteId }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      _this.handleError(ctx, err)
    }
  }
  /**
   * @api {get} /order/list/all/:page List all orders
   * @apiPermission user
   * @apiName ListOrders
   * @apiGroup REST Order
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5000/order/list/all/0
   *
   * @apiSuccess {Object[]} orders           Array of order objects
   * @apiSuccess {ObjectId} orders._id       Order id
   * @apiSuccess {String} orders.tokenId     Token id
   * @apiSuccess {String} orders.ticker      Ticker
   * @apiSuccess {String} orders.dataType    Data type
   * @apiSuccess {String} orders.utxoTxid   Utxo transaction id
   * @apiSuccess {Number} orders.utxoVout   Utxo output index
   * @apiSuccess {String} orders.buyOrSell  Buy or sell
   * @apiSuccess {Number} orders.numTokens  Number of tokens
   * @apiSuccess {String} orders.rateInBaseUnit Rate in base unit
   * @apiSuccess {String} orders.minUnitsToExchange Minimum units to exchange
   * @apiSuccess {String} orders.offerStatus Offer status
   * @apiSuccess {String} orders.makerAddr Maker address
   * @apiSuccess {Number} orders.timestamp Timestamp
   * @apiSuccess {String} orders.displayCategory Display category
   * @apiSuccess {Boolean} orders.nsfw Nsfw
   * @apiSuccess {Array} orders.flags Flags
   * @apiSuccess {Number} orders.messageType Message type
   * @apiSuccess {Number} orders.messageClass Message class
   * @apiSuccess {String} orders.nostrEventId Nostr event id
   * @apiSuccess {String} orders.operatorAddress Operator address
   * @apiSuccess {Number} orders.operatorPercentage Operator percentage
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "orders": [{
   *          "_id": "56bd1da600a526986cf65c80",
   *          "tokenId": "1234567890",
   *          "ticker": "BTC",
   *          "dataType": "offer",
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
  /**
   * @api {post} /order/delete Delete an order
   * @apiPermission user
   * @apiName DeleteOrder
   * @apiGroup REST Order
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "nostrEventId": "1234567890" }' localhost:5000/order/delete
   *
   * @apiSuccess {String} txid Transaction id
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "txid": "1234567890"
   *     }
   *
   * @apiUse TokenError
   */

  // curl -X POST http://localhost:5700/order/delete -d '{ "nostrEventId": "1234567890" }'

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
