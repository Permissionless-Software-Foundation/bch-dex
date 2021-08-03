/*
  REST API Controller library for the /entry route
*/

// const { wlogger } = require('../../../adapters/wlogger')

let _this

class EntryRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /users REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /users REST Controller.'
      )
    }

    // Encapsulate dependencies
    this.EntryModel = this.adapters.localdb.Entry
    // this.userUseCases = this.useCases.user

    _this = this
  }

  // No Documentation because this wont be a public endpoint
  async createEntry (ctx) {
    try {
      const entryObj = ctx.request.body.entry

      const entry = await _this.useCases.entry.createEntry(entryObj)
      // console.log('userData: ', userData)
      // console.log('token: ', token)

      ctx.body = { entry }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      _this.handleError(ctx, err)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
    console.log('err', err.message)
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
module.exports = EntryRESTControllerLib
