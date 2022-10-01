/*
  This is a top-level library that encapsulates all the additional Adapters.
  The concept of Adapters comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Public NPM libraries
import BCHJS from '@psf/bch-js'

// Load individual adapter libraries.
import IPFSAdapter from './ipfs/index.js'

import LocalDB from './localdb/index.js'
import LogsAPI from './logapi.js'
import Passport from './passport.js'
import Nodemailer from './nodemailer.js'

// const { wlogger } = require('./wlogger')
import JSONFiles from './json-files.js'

import FullStackJWT from './fullstack-jwt.js'
import config from '../../config/index.js'

import BCHAdapter from './bch.js'
import WalletAdapter from './wallet.js'
import P2wdbAdapter from './p2wdb-adapter.js'
import Webhook from './webhook.js'

class Adapters {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.ipfs = new IPFSAdapter()
    this.localdb = new LocalDB()
    this.logapi = new LogsAPI()
    this.passport = new Passport()
    this.nodemailer = new Nodemailer()
    this.jsonFiles = new JSONFiles()
    this.bchjs = new BCHJS()
    localConfig.bchjs = this.bchjs
    this.bch = new BCHAdapter()
    this.config = config
    this.wallet = new WalletAdapter()
    localConfig.bchWallet = this.wallet.bchWallet
    this.p2wdb = new P2wdbAdapter(localConfig)
    this.webhook = new Webhook()

    // Get a valid JWT API key and instance bch-js.
    this.fullStackJwt = new FullStackJWT(config)
  }

  async start () {
    try {
      if (this.config.getJwtAtStartup) {
        // Get a JWT token and instantiate bch-js with it. Then pass that instance
        // to all the rest of the apps controllers and adapters.
        await this.fullStackJwt.getJWT()
        // Instantiate bch-js with the JWT token, and overwrite the placeholder for bch-js.
        this.bchjs = await this.fullStackJwt.instanceBchjs()
      }

      // Start the IPFS node.
      // Do not start these adapters if this is an e2e test.
      // if (this.config.env !== 'test') {
      //   await this.ipfs.start()
      // }

      // Open the wallet file
      const walletData = await this.wallet.openWallet()
      // console.log('walletData: ', walletData)

      if (this.config.env !== 'test') {
        // Instance the wallet.
        await this.wallet.instanceWallet(walletData, this.bchjs)

        // Wait until a webhook is established with the P2WDB
        await this.webhook.waitUntilSuccess(this.config.webhookTarget)

        // Overwrite instances of wallet used by P2WDB lib.
        this.p2wdb.bchWallet = this.wallet.bchWallet
        this.p2wdb.bchjs = this.wallet.bchWallet.bchjs
      }

      console.log('Async Adapters have been started.')

      return true
    } catch (err) {
      console.error('Error in adapters/index.js/start()')
      throw err
    }
  }
}

export default Adapters
