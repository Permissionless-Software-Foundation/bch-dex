/*
  REST API library for /nostr route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import NostrRESTControllerLib from './controller.js'

import Validators from '../middleware/validators.js'

import config from '../../../../config/index.js'

class NostrRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating NostrRouter REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating NostrRouter REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.config = config
    this.nostrRESTController = new NostrRESTControllerLib(dependencies)
    this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/nostr'
    this.router = new Router({ prefix: baseUrl })

    this.attach = this.attach.bind(this)
    this.createDeletedChat = this.createDeletedChat.bind(this)
    this.createDeletedPost = this.createDeletedPost.bind(this)
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/deletedChat', this.createDeletedChat)
    this.router.get('/deletedChat', this.nostrRESTController.getDeletedChats)
    this.router.post('/deletedPost', this.createDeletedPost)
    this.router.get('/deletedPost', this.nostrRESTController.getDeletedPosts)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }

  async createDeletedChat (ctx, next) {
    await this.validators.ensureAdmin(ctx, next)
    await this.nostrRESTController.createDeletedChat(ctx, next)
    return true
  }

  async createDeletedPost (ctx, next) {
    await this.validators.ensureAdmin(ctx, next)
    await this.nostrRESTController.createDeletedPost(ctx, next)
    return true
  }
}

export default NostrRouter
