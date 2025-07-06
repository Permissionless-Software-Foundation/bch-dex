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
