/*
  This Koa server has two interfaces:
  - REST API over HTTP
  - JSON RPC over IPFS

  The architecture of the code follows the Clean Architecture pattern:
  https://troutsblog.com/blog/clean-architecture
*/

// npm libraries
import Koa from 'koa'

import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import mongoose from 'mongoose'
import session from 'koa-generic-session'
import passport from 'koa-passport'
import mount from 'koa-mount'
import serve from 'koa-static'
import cors from 'kcors'

// Local libraries
import config from '../config/index.js' // this first.

import AdminLib from '../src/adapters/admin.js'
import errorMiddleware from '../src/controllers/rest-api/middleware/error.js'
// import wlogger from '../src/adapters/wlogger.js'
import Controllers from '../src/controllers/index.js'
import { applyPassportMods } from '../config/passport.js'

class Server {
  constructor () {
    // Encapsulate dependencies
    this.adminLib = new AdminLib()
    this.controllers = new Controllers()
    this.mongoose = mongoose
    this.config = config
    this.process = process
  }

  async startServer () {
    try {
      // Create a Koa instance.
      const app = new Koa()
      app.keys = [this.config.session]

      // Connect to the Mongo Database.
      this.mongoose.Promise = global.Promise
      this.mongoose.set('useCreateIndex', true) // Stop deprecation warning.
      console.log(
        `Connecting to MongoDB with this connection string: ${this.config.database}`
      )
      await this.mongoose.connect(this.config.database, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })

      console.log(`Starting environment: ${this.config.env}`)
      console.log(`Debug level: ${this.config.debugLevel}\n`)
      console.log(`Using this web3 CashStack service: ${this.config.consumerUrl}`)
      console.log('Alternative web services listed here: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6')
      console.log('This app is built on top of the CashStack. Find out more: https://CashStack.info\n')

      // MIDDLEWARE START

      app.use(convert(logger()))
      app.use(bodyParser())
      app.use(session())
      app.use(errorMiddleware())

      // Used to generate the docs.
      app.use(mount('/', serve(`${process.cwd()}/docs`)))

      // Mount the page for displaying logs.
      app.use(mount('/logs', serve(`${process.cwd()}/config/logs`)))

      // User Authentication
      // require('../config/passport')
      applyPassportMods(passport)
      app.use(passport.initialize())
      app.use(passport.session())

      // Enable CORS for testing
      // THIS IS A SECURITY RISK. COMMENT OUT FOR PRODUCTION
      // Dev Note: This line must come BEFORE controllers.attachRESTControllers()
      app.use(cors({ origin: '*' }))

      // Wait for any adapters to initialize.
      await this.controllers.initAdapters()

      // Wait for any use-libraries to initialize.
      await this.controllers.initUseCases()

      // Attach REST API and JSON RPC controllers to the app.
      await this.controllers.attachRESTControllers(app)

      app.controllers = this.controllers

      // MIDDLEWARE END

      // 7/7/22 CT: This code paragraph can be deleted
      // Delay startup to give the P2WDB time to start first, so that it accepts the webook call
      // if (this.config.env !== 'test') {
      //   await this.sleep(20000)
      // }
      // Create webhook
      // try {
      //   try {
      //     // Delete an old webhook if it exists.
      //     await webhookLib.deleteWebhook(config.webhookTarget)
      //   } catch (err) {
      //     /* exit quietly */
      //     // console.log('err deleting webhook: ', err)
      //   }
      //
      //   await webhookLib.createWebhook(config.webhookTarget)
      //   console.log('Webhook created')
      // } catch (error) {
      //   console.log('Webhook cant be created')
      // }

      // startServer()
      this.server = await app.listen(config.port)
      console.log(`Server started on ${config.port}`)

      // Create the system admin user.
      const success = await this.adminLib.createSystemUser()
      if (success) console.log('System admin user created.')

      // Attach the other IPFS controllers.
      // Skip if this is a test environment.
      if (this.config.env !== 'test') {
        await this.controllers.attachControllers(app)
      }

      // Display configuration settings
      console.log('\nConfiguration:')
      console.log(`Circuit Relay: ${this.config.isCircuitRelay}`)
      console.log(`IPFS TCP port: ${this.config.ipfsTcpPort}`)
      console.log(`IPFS WS port: ${this.config.ipfsWsPort}\n`)

      return app
    } catch (err) {
      console.error('Could not start server. Error: ', err)

      console.log(
        'Exiting after 5 seconds. Depending on process manager to restart.'
      )
      await this.sleep(5000)
      this.process.exit(1)
    }
  }

  sleep (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

export default Server
