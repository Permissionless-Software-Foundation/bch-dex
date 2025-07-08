/*
  REST API Controller library for the /order route
*/

// const { wlogger } = require('../../../adapters/wlogger')

let _this

class SmAccountRESTControllerLib {
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
    this.SmAccountModel = this.adapters.localdb.SmAccount
    // this.userUseCases = this.useCases.user

    _this = this
  }

  /**
   * @api {get} /sm/list/all/{page} List all Social Media Accounts
   * @apiPermission public
   * @apiName ListAccounts
   * @apiGroup REST Social Media Accounts
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5700/sm/list/all/0
   *
   */
  // curl -X GET http://localhost:5700/sm/list/all/0
  async listAccounts (ctx) {
    try {
      let page = ctx.params.page
      if (!page) page = 0

      const offers = await _this.useCases.smAccount.listAccounts(page)

      ctx.body = offers
    } catch (err) {
      console.log('Error in listAccounts REST API handler: ', err)
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /sm/npub/{npub} Get Social Media Account by Npub
   * @apiPermission public
   * @apiName GetAccountByNpub
   * @apiGroup REST Social Media Accounts
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5700/sm/npub/npub1y3xq402pu9aqms3khetnt5gzm54t63pzcla56wwfmwshde0ws77qkff5gc
   *
   */
  // curl -X GET http://localhost:5700/sm/npub/npub1y3xq402pu9aqms3khetnt5gzm54t63pzcla56wwfmwshde0ws77qkff5gc
  async getAccountByNpub (ctx) {
    try {
      const npub = ctx.params.npub
      if (!npub) {
        ctx.throw(400, 'Npub is required')
      }

      const account = await _this.useCases.smAccount.getAccountByNpub(npub)

      if (!account) {
        ctx.throw(404, 'Account not found')
      }

      ctx.body = account
    } catch (err) {
      // console.log('Error in getAccountByNpub REST API handler: ', err)
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /sm/bchAddr/{bchAddr} Get Social Media Account by BCH address
   * @apiPermission public
   * @apiName GetAccountByBchAddr
   * @apiGroup REST Social Media Accounts
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5700/sm/bchAddr/bitcoincash:qz6lf6gpmn3secx73g7ucfcgy8mrh3sz2y2ylk643x
   *
   */
  // curl -X GET http://localhost:5700/sm/bchAddr/bitcoincash:qz6lf6gpmn3secx73g7ucfcgy8mrh3sz2y2ylk643x
  async getAccountByBchAddr (ctx) {
    try {
      const bchAddr = ctx.params.bchAddr
      if (!bchAddr) {
        ctx.throw(400, 'BCH address is required')
      }

      const account = await _this.useCases.smAccount.getAccountByBchAddr(bchAddr)

      if (!account) {
        ctx.throw(404, 'Account not found')
      }

      ctx.body = account
    } catch (err) {
      // console.log('Error in getAccountByBchAddr REST API handler: ', err)
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

export default SmAccountRESTControllerLib
