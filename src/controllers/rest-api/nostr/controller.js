/*
  REST API Controller library for the /nostr route
*/
import wlogger from '../../../adapters/wlogger.js'

class NostrRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /nostr REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /nostr REST Controller.'
      )
    }

    this.createDeletedChat = this.createDeletedChat.bind(this)
    this.getDeletedChats = this.getDeletedChats.bind(this)
    this.createDeletedPost = this.createDeletedPost.bind(this)
    this.getDeletedPosts = this.getDeletedPosts.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  /**
   * @api {post} /nostr/deletedChat Create Deleted Chat.
   * @apiPermission admin
   * @apiName CreateDeletedChat
   * @apiGroup REST Nostr
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -H "Authorization: Bearer <token>" -X POST -d '{"eventId": "note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q" , "npub" : "npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8" , "bchAddr" : "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a", "pubkey":"6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1"}' localhost:5700/nostr/deletedChat
   *
   * @apiSuccess {String} _id DB Model id
   * @apiSuccess {String} eventId Event id
   * @apiSuccess {String} bchAddr BCH Address
   * @apiSuccess {String} npub Nostr Npub
   * @apiSuccess {String} pubkey Nostr pubkey
   * @apiSuccess {Date} createdAt Created at date.
   * @apiSuccess {Date} updatedAt Updated at date.
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "_id": "6900f87f9cafee38028ea27e",
   *       "npub": "npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8",
   *       "bchAddr" : "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a",
   *       "pubKey": "6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1",
   *       "createdAt":"2025-10-28T17:08:15.409Z",
   *       "updatedAt": "2025-10-28T17:08:15.409Z"
   *     }
   *
   * @apiUse TokenError
   */
  async createDeletedChat (ctx) {
    try {
      const chat = ctx.request.body

      const result = await this.useCases.nostr.createDeletedChat(chat)

      ctx.body = {
        deletedChat: result
      }
    } catch (err) {
      wlogger.error('Error in createDeletedChat() REST API handler.')
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /nostr/deletedChat Get Deleted Chats.
   * @apiPermission public
   * @apiName GetDeletedChats
   * @apiGroup REST Nostr
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5700/nostr/deletedChat
   *
   * @apiSuccess {String} _id DB Model id
   * @apiSuccess {String} eventId Event id
   * @apiSuccess {String} bchAddr BCH Address
   * @apiSuccess {String} npub Nostr Npub
   * @apiSuccess {String} pubkey Nostr pubkey
   * @apiSuccess {Date} createdAt Created at date.
   * @apiSuccess {Date} updatedAt Updated at date.
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     [{
   *       "_id": "6900f87f9cafee38028ea27e",
   *       "npub": "npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8",
   *       "bchAddr" : "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a",
   *       "pubKey": "6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1",
   *       "createdAt":"2025-10-28T17:08:15.409Z",
   *       "updatedAt": "2025-10-28T17:08:15.409Z"
   *     }]
   *
   * */
  async getDeletedChats (ctx) {
    try {
      const deletedChats = await this.useCases.nostr.getDeletedChats()

      ctx.body = { deletedChats }
    } catch (err) {
      wlogger.error('Error in getDeletedChats() REST API handler.')
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {post} /nostr/deletedPost Create Deleted Post.
   * @apiPermission admin
   * @apiName CreateDeletedPost
   * @apiGroup REST Nostr
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -H "Authorization: Bearer <token>" -X POST -d '{"eventId": "note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q" , "npub" : "npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8" , "bchAddr" : "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a", "pubkey":"6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1"}' localhost:5700/nostr/deletedPost
   *
   * @apiSuccess {String} _id DB Model id
   * @apiSuccess {String} eventId Event id
   * @apiSuccess {String} bchAddr BCH Address
   * @apiSuccess {String} npub Nostr Npub
   * @apiSuccess {String} pubkey Nostr pubkey
   * @apiSuccess {Date} createdAt Created at date.
   * @apiSuccess {Date} updatedAt Updated at date.
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "_id": "6900f87f9cafee38028ea27e",
   *       "npub": "npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8",
   *       "bchAddr" : "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a",
   *       "pubKey": "6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1",
   *       "createdAt":"2025-10-28T17:08:15.409Z",
   *       "updatedAt": "2025-10-28T17:08:15.409Z"
   *     }
   *
   * @apiUse TokenError
   */
  async createDeletedPost (ctx) {
    try {
      const post = ctx.request.body

      const result = await this.useCases.nostr.createDeletedPost(post)

      ctx.body = {
        deletedPost: result
      }
    } catch (err) {
      wlogger.error('Error in createDeletedPost() REST API handler.')
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /nostr/deletedPost Get Deleted Posts.
   * @apiPermission public
   * @apiName GetDeletedPosts
   * @apiGroup REST Nostr
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5700/nostr/deletedPost
   *
   * @apiSuccess {String} _id DB Model id
   * @apiSuccess {String} eventId Event id
   * @apiSuccess {String} bchAddr BCH Address
   * @apiSuccess {String} npub Nostr Npub
   * @apiSuccess {String} pubkey Nostr pubkey
   * @apiSuccess {Date} createdAt Created at date.
   * @apiSuccess {Date} updatedAt Updated at date.
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     [{
   *       "_id": "6900f87f9cafee38028ea27e",
   *       "npub": "npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8",
   *       "bchAddr" : "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a",
   *       "pubKey": "6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1",
   *       "createdAt":"2025-10-28T17:08:15.409Z",
   *       "updatedAt": "2025-10-28T17:08:15.409Z"
   *     }]
   *
   * */
  async getDeletedPosts (ctx) {
    try {
      const deletedPosts = await this.useCases.nostr.getDeletedPosts()

      ctx.body = { deletedPosts }
    } catch (err) {
      wlogger.error('Error in getDeletedPosts() REST API handler.')
      this.handleError(ctx, err)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
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

export default NostrRESTControllerLib
