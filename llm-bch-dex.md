Project Path: bch-dex

Source Tree:

```
bch-dex
├── PEDIGREE.md
├── index.js
├── logs
│   └── README.md
├── src
│   ├── adapters
│   │   ├── wallet.adapter.js
│   │   ├── contact.js
│   │   ├── index.js
│   │   ├── logapi.js
│   │   ├── nodemailer.js
│   │   ├── wallet.js
│   │   ├── localdb
│   │   │   ├── index.js
│   │   │   ├── models
│   │   │   │   ├── users.js
│   │   │   │   ├── offer.js
│   │   │   │   ├── order.js
│   │   │   │   └── entry.js
│   │   │   └── order-pagination.js
│   │   ├── p2wdb-adapter.js
│   │   ├── wlogger.js
│   │   ├── json-files.js
│   │   ├── nostr.js
│   │   ├── admin.js
│   │   ├── passport.js
│   │   ├── webhook.js
│   │   ├── fullstack-jwt.js
│   │   ├── bch.js
│   │   └── ipfs
│   │       ├── index.js
│   │       ├── ipfs-coord.js
│   │       └── ipfs.js
│   ├── controllers
│   │   ├── index.js
│   │   ├── rest-api
│   │   │   ├── index.js
│   │   │   ├── offer
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   ├── contact
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   ├── usage
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   ├── logs
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   ├── order
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   ├── middleware
│   │   │   │   ├── error.js
│   │   │   │   └── validators.js
│   │   │   ├── auth
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   ├── users
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   ├── entry
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   ├── p2wdb
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   └── ipfs
│   │   │       ├── index.js
│   │   │       └── controller.js
│   │   ├── json-rpc
│   │   │   ├── index.js
│   │   │   ├── rate-limit.js
│   │   │   ├── auth
│   │   │   │   └── index.js
│   │   │   ├── users
│   │   │   │   └── index.js
│   │   │   ├── validators.js
│   │   │   └── about
│   │   │       └── index.js
│   │   └── timer-controllers.js
│   ├── use-cases
│   │   ├── index.js
│   │   ├── offer
│   │   │   ├── index.js
│   │   │   └── retry-queue.js
│   │   ├── usage-use-cases.js
│   │   ├── order.js
│   │   ├── user.js
│   │   └── entry.js
│   └── entities
│       ├── offer.js
│       ├── order.js
│       ├── user.js
│       └── entry.js
├── test
│   ├── unit
│   │   ├── adapters
│   │   │   ├── nostr.adapter.unit.js
│   │   │   ├── webhook.adapter.unit.js
│   │   │   ├── ipfs.adapter.unit.js
│   │   │   ├── ipfs-index.adapter.unit.js
│   │   │   ├── order-pagination.unit.js
│   │   │   ├── users.adapter.unit.js
│   │   │   ├── passport.adapter.unit.js
│   │   │   ├── wlogger.adapter.unit.js
│   │   │   ├── logapi.adapter.unit.js
│   │   │   ├── contact.adapter.unit.js
│   │   │   ├── bch.adapter.unit.js
│   │   │   ├── nodemailer.adapter.unit.js
│   │   │   ├── wallet.unit.js
│   │   │   ├── p2wdb.adapter.unit.js
│   │   │   ├── json-files.adapter.unit.js
│   │   │   ├── wallet.adapter.unit.js
│   │   │   ├── adapters-index-unit.js
│   │   │   ├── fullstack-jwt.adapter.unit.js
│   │   │   └── ipfs-coord.adapter.unit.js
│   │   ├── README.md
│   │   ├── misc
│   │   │   ├── server-unit.js
│   │   │   ├── config-unit.js
│   │   │   └── passport.unit.js
│   │   ├── controllers
│   │   │   ├── rest-api
│   │   │   │   ├── offer
│   │   │   │   │   ├── offer.rest.router.unit.js
│   │   │   │   │   └── offer.rest.controller.unit.js
│   │   │   │   ├── contact
│   │   │   │   │   ├── contact.rest.controller.unit.js
│   │   │   │   │   └── contact.rest.router.unit.js
│   │   │   │   ├── usage
│   │   │   │   │   ├── usage.rest.controller.unit.js
│   │   │   │   │   └── usage.rest.router.unit.js
│   │   │   │   ├── logs
│   │   │   │   │   ├── logs.rest.router.unit.js
│   │   │   │   │   └── logs.rest.controller.unit.js
│   │   │   │   ├── order
│   │   │   │   │   ├── order.rest.controller.unit.js
│   │   │   │   │   └── order.rest.router.unit.js
│   │   │   │   ├── middleware
│   │   │   │   │   ├── error-unit.js
│   │   │   │   │   └── validators-unit.js
│   │   │   │   ├── auth
│   │   │   │   │   ├── auth.rest.controller.unit.js
│   │   │   │   │   └── auth.rest.router.unit.js
│   │   │   │   ├── users
│   │   │   │   │   ├── users.rest.router.unit.js
│   │   │   │   │   └── users.rest.controller.unit.js
│   │   │   │   ├── rest.controller.unit.js
│   │   │   │   ├── entry
│   │   │   │   │   ├── entry.rest.router.unit.js
│   │   │   │   │   └── entry.rest.controller.unit.js
│   │   │   │   ├── README.md
│   │   │   │   └── ipfs
│   │   │   │       ├── ipfs.rest.controller.unit.js
│   │   │   │       └── ipfs.rest.router.unit.js
│   │   │   ├── controllers.unit.js
│   │   │   ├── json-rpc
│   │   │   │   ├── auth.json-rpc.controller.unit.js
│   │   │   │   ├── a14-rate-limits.js
│   │   │   │   ├── a12-validators.unit.js
│   │   │   │   ├── a10-rpc.unit.js
│   │   │   │   ├── users.json-rpc-controller.unit.js
│   │   │   │   └── about.json-rpc.controller.unit.js
│   │   │   └── timer-controllers.unit.js
│   │   ├── use-cases
│   │   │   ├── offer.use-case.unit.js
│   │   │   ├── users.use-case.unit.js
│   │   │   ├── order.use-case.unit.js
│   │   │   ├── usage.use-case.unit.js
│   │   │   ├── entry.use-case.unit.js
│   │   │   └── index.use-case.unit.js
│   │   ├── entities
│   │   │   ├── order.entity.unit.js
│   │   │   ├── entry.entity.unit.js
│   │   │   ├── user.entity.unit.js
│   │   │   └── offer.entity.unit.js
│   │   └── mocks
│   │       ├── ipfs-mock.js
│   │       ├── adapters
│   │       │   ├── index.js
│   │       │   ├── fake-log
│   │       │   └── wallet.js
│   │       ├── ctx-mock.js
│   │       ├── log-api-mock.js
│   │       ├── helia-mock.js
│   │       ├── use-cases
│   │       │   ├── index.js
│   │       │   └── offer-mock-data.js
│   │       ├── bchjs-mock.js
│   │       ├── nostr-mock.js
│   │       ├── app-mock.js
│   │       └── ipfs-coord-mock.js
│   ├── e2e
│   │   ├── automated
│   │   │   ├── a10-offer.rest-e2e.js
│   │   │   ├── a01-auth.rest-e2e.js
│   │   │   ├── a08-validators.rest-e2e.js
│   │   │   ├── a10-usage.rest-e2e.js
│   │   │   ├── README.md
│   │   │   ├── a09-admin.rest-e2e.js
│   │   │   ├── a06-logapi.rest-e2e.js
│   │   │   ├── a04-contact.rest-e2e.js
│   │   │   └── a02-users.rest-e2e.js
│   │   └── manual
│   │       ├── 02-take-offer.js
│   │       └── 01-create-order.js
│   ├── integration
│   │   ├── adapters
│   │   │   ├── bch-adapter-integration.js
│   │   │   ├── p2wdb-adapter-integration.js
│   │   │   └── wallet-adapter-integration.js
│   │   └── use-cases
│   │       └── offer-use-case-integration.js
│   └── utils
│       └── test-utils.js
├── bin
│   └── server.js
├── README.md
├── shell-scripts
│   ├── ipfs-service-provider-generic.sh
│   ├── ipfs-service-provider-relay.sh
│   └── local-external-ipfs-node.sh
├── production
│   ├── rpi-docker
│   │   ├── cleanup-images.sh
│   │   ├── bch-dex-ui
│   │   │   └── Dockerfile
│   │   ├── bch-dex
│   │   │   ├── start-production.sh
│   │   │   └── Dockerfile
│   │   ├── docker-compose.yml
│   │   └── p2wdb
│   │       ├── start-production.sh
│   │       ├── dummyapp.js
│   │       └── Dockerfile
│   ├── scripts
│   │   ├── fullstack-sweep-wallet.js
│   │   ├── bulk-sweep-wallet.js
│   │   ├── sweep-wallet.js
│   │   ├── sweep-nfts.js
│   │   ├── create-wallet.js
│   │   ├── create-order.js
│   │   └── list-addrs.js
│   └── docker
│       ├── cleanup-images.sh
│       ├── bch-dex-ui
│       │   └── Dockerfile
│       ├── bch-dex
│       │   ├── start-production.sh
│       │   ├── dummy-app.js
│       │   └── Dockerfile
│       └── docker-compose.yml
├── util
│   ├── orders
│   │   ├── deleteOrders.js
│   │   └── getOrders.js
│   ├── users
│   │   ├── delete-all-test-users.js
│   │   ├── production
│   │   │   ├── createUser.js
│   │   │   └── getUsers.js
│   │   ├── createUsers.js
│   │   └── dev
│   │       ├── createUser.js
│   │       └── getUsers.js
│   ├── README.md
│   ├── wipe-test-db.js
│   ├── wallet
│   │   ├── sweep-funds2.js
│   │   └── sweep-funds.js
│   ├── offers
│   │   ├── getOffers.js
│   │   └── deleteOffers.js
│   └── wipe-db.md
├── CONTRIBUTING.md
├── LICENSE.md
├── install-mongo.sh
├── dev-docs
│   ├── README.md
│   ├── diagrams
│   │   ├── rest-api-subcomponents.dia
│   │   ├── software-interaction.dia
│   │   ├── swap-workflow.png
│   │   ├── swap-workflow.dia
│   │   ├── rest-api-subcomponents.png
│   │   └── software-interaction.png
│   └── specification.md
├── examples
│   └── README.md
├── apidoc.json
├── config
│   ├── index.js
│   ├── logs
│   │   └── index.html
│   ├── passport.js
│   └── env
│       ├── common.js
│       ├── production.js
│       ├── development.js
│       └── test.js
├── package.json
└── tools
    └── burn-and-write.js

```

`/home/trout/work/psf/code/bch-dex/PEDIGREE.md`:

```md
# Pedigree

This repository was forked from [koa-api-boilerplate](https://github.com/christroutner/koa-api-boilerplate). Code changes from that upstream repository is frequently pulled in and merged to this repository.

```

`/home/trout/work/psf/code/bch-dex/index.js`:

```js
import Server from './bin/server.js'
const server = new Server()

process.on('unhandledRejection', (reason, promise) => {
  console.log(`Handling ${reason.code} error. stack: `, reason)
})

server.startServer()

```

`/home/trout/work/psf/code/bch-dex/logs/README.md`:

```md
This directory will hold the Winston daily logs. Any files saved to this directory will be ignored by Git.

```

`/home/trout/work/psf/code/bch-dex/src/adapters/wallet.adapter.js`:

```js
/*
  Wallet adapter. This library instantiates minimal-slp-wallet based on different
  configuration settings. That single instance of minimal-slp-wallet is then
  easily passed around the rest of this application.
*/

// Global npm libraries
import BchWallet from 'minimal-slp-wallet'

// Local libraries
import config from '../../config/index.js'
import JsonFiles from './json-files.js'

class Wallet {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.config = config
    this.BchWallet = BchWallet
    this.jsonFiles = new JsonFiles()

    // Bind 'this' object to all subfunctions
    this.instanceWalletWithoutInitialization = this.instanceWalletWithoutInitialization.bind(this)
    this._instanceWallet = this._instanceWallet.bind(this)
    this.openWallet = this.openWallet.bind(this)
    this.instanceWallet = this.instanceWallet.bind(this)
    this.incrementNextAddress = this.incrementNextAddress.bind(this)
    this.getKeyPair = this.getKeyPair.bind(this)
    this.optimize = this.optimize.bind(this)
    this.getBalance = this.getBalance.bind(this)
  }

  // This is used for initializing the wallet, without waiting to update the wallet
  // UTXOs from the blockchain.
  // This is useful when the wallet is simply needed to make calls to the blockchain,
  // and there is no need to hydrate it with UTXO data.
  async instanceWalletWithoutInitialization (walletData = {}, advancedConfig = {}) {
    try {
      // Use the apiToken from the config settings, if one is not passed-in at
      // run-time.
      if (!advancedConfig.apiToken) {
        advancedConfig.apiToken = this.config.apiToken
      }

      // If an authentication password is passed in the config, add it.
      if (this.config.authPass) {
        advancedConfig.authPass = this.config.authPass
      }

      // Detect and configure different blockchain infrastructure settings.
      if (this.config.walletInterface === 'web2') {
        advancedConfig.interface = 'rest-api'
        advancedConfig.restURL = this.config.apiServer
      } else {
        // By default use the web3 Cash Stack (https://cashstack.info)
        advancedConfig.interface = 'consumer-api'
        advancedConfig.restURL = this.config.apiServer
      }

      // console.log('advancedConfig setting when creating wallet: ', advancedConfig)

      // Instantiate minimal-slp-wallet.
      if (walletData.mnemonic) {
        // Instance the wallet using the mnemonic passed in to this function.
        console.log('Mnemonic provided to wallet library from calling function.')
        this.bchWallet = await this._instanceWallet(walletData.mnemonic, advancedConfig)
      } else if (this.config.mnemonic) {
        // Otherwise use the mnemonic in the config setting or passed as an environment variable.
        console.log('Mnemonic retrieved from config file or environment variable.')
        this.bchWallet = await this._instanceWallet(this.config.mnemonic, advancedConfig)
      } else {
        // If no mnemonic is provided, then generate a new mnemonic to create the wallet.
        console.log('New mnemonic generated.')
        this.bchWallet = await this._instanceWallet(undefined, advancedConfig)
      }

      // Wait for wallet to initialize.
      await this.bchWallet.walletInfoPromise
      console.log('BCH wallet initialized.')
      console.log(`Wallet address: ${this.bchWallet.walletInfo.cashAddress}`)
      console.log(`Wallet mnemonic: ${this.bchWallet.walletInfo.mnemonic}`)

      return this.bchWallet
    } catch (err) {
      console.error('Error in instanceWalletWithoutInitialization()')
      throw err
    }
  }

  // This function is used for easier mocking of unit tests.
  async _instanceWallet (mnemonic, config) {
    const wallet = new this.BchWallet(mnemonic, config)
    await wallet.walletInfoPromise

    return wallet
  }

  // Open the wallet file, or create one if the file doesn't exist.
  // Does not instance the wallet. The output of this function is expected to
  // be passed to instanceWallet().
  async openWallet (advancedConfig = {}) {
    try {
      let walletData

      // Try to open the wallet.json file.
      try {
        walletData = await this.jsonFiles.readJSON(this.config.walletFile)
        walletData = walletData.wallet
      } catch (err) {
        // Create a new wallet file if one does not already exist.
        console.log('Wallet file not found. Creating new wallet.json file.')

        // Create a new wallet.
        // No-Update flag creates wallet without making any network calls.
        const walletInstance = await this.instanceWalletWithoutInitialization({}, advancedConfig)

        walletData = walletInstance.walletInfo

        // Add the nextAddress property
        walletData.nextAddress = 1

        // Write the wallet data to the JSON file.
        await this.jsonFiles.writeJSON({ wallet: walletData }, this.config.walletFile)
      }

      // console.log('walletData: ', walletData)
      return walletData
    } catch (err) {
      console.error('Error in openWallet()')
      throw err
    }
  }

  // Create an instance of minimal-slp-wallet. Same as
  // instanceWalletWithoutInitialization(), but waits for the wallet to initialize
  // its UTXOs (wallet balance and tokens).
  async instanceWallet (walletData = {}, advancedConfig = {}) {
    try {
      // Instance the wallet without initialization.
      await this.instanceWalletWithoutInitialization(walletData, advancedConfig)

      // Initialize the wallet
      await this.bchWallet.initialize()

      return this.bchWallet
    } catch (err) {
      console.error('Error in wallet.js/instanceWallet()')
      throw err
    }
  }

  // Increments the 'nextAddress' property in the wallet file. This property
  // indicates the HD index that should be used to generate a key pair for
  // storing funds for Offers.
  // This function opens the wallet file, increments the nextAddress property,
  // then saves the change to the wallet file.
  async incrementNextAddress () {
    try {
      const walletData = await this.openWallet()

      await this.instanceWalletWithoutInitialization(walletData)

      walletData.nextAddress++
      // console.log('walletData finish: ', walletData)

      await this.jsonFiles.writeJSON({ wallet: walletData }, this.config.walletFile)

      // Update the working instance of the wallet.
      this.bchWallet.walletInfo.nextAddress++
      // console.log('this.bchWallet.walletInfo: ', this.bchWallet.walletInfo)

      return walletData.nextAddress
    } catch (err) {
      console.error('Error in incrementNextAddress()')
      throw err
    }
  }

  // This method returns an object that contains a private key WIF, public address,
  // and the index of the HD wallet that the key pair was generated from.
  // TODO: Allow input integer. If input is used, use that as the index. If no
  // input is provided, then call incrementNextAddress().
  async getKeyPair (hdIndex = 0) {
    try {
      if (!hdIndex) {
        // Increment the HD index and generate a new key pair.
        hdIndex = await this.incrementNextAddress()
      }

      const mnemonic = this.bchWallet.walletInfo.mnemonic

      // root seed buffer
      const rootSeed = await this.bchWallet.bchjs.Mnemonic.toSeed(mnemonic)
      const masterHDNode = this.bchWallet.bchjs.HDNode.fromSeed(rootSeed)

      // HDNode of BIP44 account
      // const account = this.bchWallet.bchjs.HDNode.derivePath(masterHDNode, "m/44'/245'/0'")
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = this.bchWallet.bchjs.HDNode.toCashAddress(childNode)
      console.log('Generating a new key pair for cashAddress: ', cashAddress)

      const wif = this.bchWallet.bchjs.HDNode.toWIF(childNode)

      const outObj = {
        cashAddress,
        wif,
        hdIndex
      }
      return outObj
    } catch (err) {
      console.error('Error in getKeyPair()')
      throw err
    }
  }

  // Optimize the wallet by consolidating the UTXOs.
  async optimize () {
    const UTXO_THREASHOLD = 7
    // Do a dry-run first to see if there are enough UTXOs worth consolidating.
    const dryRunOut = await this.bchWallet.optimize(true)
    if (dryRunOut.bchUtxoCnt > UTXO_THREASHOLD) {
      // Consolidate BCH UTXOs if the count is above the threashold.
      const txids = await this.bchWallet.optimize()
      console.log(`Wallet optimized with these return values: ${JSON.stringify(txids, null, 2)}`)
    }
    return true
  }

  // Get the balance of the wallet in sats and PSF tokens.
  // This function is called by the GET /entry/balance controller.
  async getBalance () {
    const balance = await this.bchWallet.getBalance()
    // console.log('balance: ', balance)
    const tokens = await this.bchWallet.listTokens()
    // console.log('tokens: ', tokens)
    // Find the array entry for the PSF token
    const psfTokens = tokens.find(x => x.tokenId === '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0')
    // console.log('psfTokens: ', psfTokens)
    let psfBalance = 0
    if (psfTokens) {
      psfBalance = psfTokens.qty
    }
    const outObj = {
      satBalance: balance,
      psfBalance,
      success: true
    }
    return outObj
  }
}

export default Wallet

```

`/home/trout/work/psf/code/bch-dex/src/adapters/contact.js`:

```js
/*
  Business logic for the /contact endpoint.
*/

/* eslint-disable no-useless-escape */
import config from '../../config/index.js'
import NodeMailer from '../adapters/nodemailer.js'
import wlogger from '../adapters/wlogger.js'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const nodemailer = new NodeMailer()

let _this

class ContactLib {
  constructor () {
    _this = this
    _this.config = config
    _this.nodemailer = nodemailer
  }

  async sendEmail (emailObj) {
    try {
      // Validate input
      if (!emailObj.email || typeof emailObj.email !== 'string') {
        throw new Error("Property 'email' must be a string!")
      }

      if (!emailObj.formMessage || typeof emailObj.formMessage !== 'string') {
        throw new Error("Property 'formMessage' must be a string!")
      }

      // If an email list exists, the email will be sended to that list
      // otherwhise will be sended by default to the variable "_this.config.emailUser"
      let _to = [_this.config.emailUser]

      // Email list is optional
      if (emailObj.emailList) {
        if (
          !Array.isArray(emailObj.emailList) ||
          !emailObj.emailList.length > 0
        ) {
          throw new Error("Property 'emailList' must be a array of emails!")
        } else {
          _to = emailObj.emailList
        }
      }

      console.log(`Trying send message to : ${_to}`)

      emailObj.subject = 'Someone wants contact with you.'
      emailObj.to = _to

      const result = await _this.nodemailer.sendEmail(emailObj)
      return result
    } catch (err) {
      wlogger.error('Error in lib/contact.js/sendEmail()')
      throw err
    }
  }
}
export default ContactLib

```

`/home/trout/work/psf/code/bch-dex/src/adapters/index.js`:

```js
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
// import Wallet from './wallet.adapter.js'

import BCHAdapter from './bch.js'
import WalletAdapter from './wallet.js'
import P2wdbAdapter from './p2wdb-adapter.js'
import Webhook from './webhook.js'
import NostrAdapter from './nostr.js'

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
    this.nostr = new NostrAdapter(this.config)

    // this.wallet = new Wallet(localConfig)

    // Get a valid JWT API key and instance bch-js.
    this.fullStackJwt = new FullStackJWT(config)
  }

  async start () {
    try {
      // let apiToken
      if (this.config.getJwtAtStartup) {
        // Get a JWT token and instantiate bch-js with it. Then pass that instance
        // to all the rest of the apps controllers and adapters.
        // apiToken = await this.fullStackJwt.getJWT()
        // Instantiate bch-js with the JWT token, and overwrite the placeholder for bch-js.
        this.bchjs = await this.fullStackJwt.instanceBchjs()
      }

      // Create a default instance of minimal-slp-wallet without initializing it
      // (without retrieving the wallets UTXOs). This instance will be overwritten
      // if the operator has configured BCH payments.
      console.log('\nCreating default startup wallet. This wallet may be overwritten.')
      // await this.wallet.instanceWalletWithoutInitialization({}, { apiToken })
      this.bchjs = this.wallet.bchWallet.bchjs

      // Start the IPFS node.
      // Do not start these adapters if this is an e2e test.
      // if (this.config.env !== 'test') {
      //   await this.ipfs.start()
      // }

      // Open the wallet file
      const walletData = await this.wallet.openWallet()
      await this.nostr.start(walletData.privateKey)

      // console.log('walletData: ', walletData)

      if (this.config.env !== 'test') {
        // Instance the wallet.
        await this.wallet.instanceWallet(walletData, this.bchjs)

        // Wait until a webhook is established with the P2WDB
        // await this.webhook.waitUntilSuccess(this.config.webhookTarget)

        // Overwrite instances of wallet used by P2WDB lib.
        this.p2wdb.bchWallet = this.wallet.bchWallet
        this.p2wdb.bchjs = this.wallet.bchWallet.bchjs

        if (this.config.useIpfs) {
          await this.ipfs.start()
        }
      } else {
        // These lines are here to ensure code coverage hits 100%.
        console.log('Not starting IPFS node since this is an e2e test.')
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

```

`/home/trout/work/psf/code/bch-dex/src/adapters/logapi.js`:

```js
import lineReader from 'line-reader'
import fs from 'fs'

import config from '../../config/index.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'

let _this
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

class LogsApi {
  constructor () {
    _this = this
    _this.fs = fs
    _this.lineReader = lineReader
    _this.config = config
  }

  async getLogs (password) {
    try {
      // console.log('entering getLogs()')
      _this.password = password
      // console.log(`password: ${password}`)

      // Password matches the password set in the config file.
      if (password === _this.config.logPass) {
        // Generate the full path and file name for the current log file.
        const fullPath = _this.generateFileName()
        // console.log(`fullPath: ${JSON.stringify(fullPath, null, 2)}`)

        // Throw an error if the file does not exist.
        if (!_this.fs.existsSync(fullPath)) {
          return {
            success: false,
            data: 'file does not exist'
          }
        } else {
          // Read in the data from the log file.
          const data = await _this.readLines(fullPath)
          // console.log(`data: ${JSON.stringify(data, null, 2)}`)

          // Filter the logs before passing them to the front end.
          const filteredData = _this.filterLogs(data)

          return {
            success: true,
            data: filteredData
          }
        }

        // Password does not match password in config file.
      } else {
        return {
          success: false
        }
      }
    } catch (err) {
      console.error('Error in lib/logapi.js/getLogs()')
      throw err
    }
  }

  // Sorts the log data by their timestamp. Returns the LIMIT or less elements.
  filterLogs (data, LIMIT = 100) {
    try {
      if (!Array.isArray(data)) {
        throw new Error('Data must be array')
      }
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      // const LIMIT = 100 // Max number of entries to return.

      // Sort the elements by date.
      data.sort(function (a, b) {
        let dateA = new Date(a.timestamp)
        dateA = dateA.getTime()

        let dateB = new Date(b.timestamp)
        dateB = dateB.getTime()

        return dateB - dateA
      })

      // Limit the number of elements.
      if (data.length > LIMIT) {
        return data.slice(0, LIMIT)
      }

      // else
      return data
    } catch (err) {
      console.error('Error in lib/logapi.js/filterLogs()')
      throw err
    }
  }

  generateFileName () {
    try {
      const now = new Date()
      let thisDate = now.getDate()
      thisDate = ('0' + thisDate).slice(-2)

      let thisMonth = now.getMonth() + 1
      thisMonth = ('0' + thisMonth).slice(-2)
      // console.log(`thisMonth: ${thisMonth}`)

      const thisYear = now.getFullYear()

      const filename = `koa-${
        _this.config.env
      }-${thisYear}-${thisMonth}-${thisDate}.log`
      // console.log(`filename: ${filename}`)
      const logDir = `${__dirname.toString()}/../../logs/`
      const fullPath = `${logDir}${filename}`
      // console.log(`fullPath: ${fullPath}`)

      return fullPath
    } catch (err) {
      console.error('Error in lib/logapi.js/generateFileName()')
      throw err
    }
  }

  // Promise based read-file
  /*   readFile (path, opts = 'utf8') {
    return new Promise((resolve, reject) => {
      _this.fs.readFile(path, opts, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  } */

  // Returns an array with each element containing a line of the file.
  readLines (filename) {
    return new Promise((resolve, reject) => {
      try {
        if (!filename || typeof filename !== 'string') {
          throw new Error('filename must be a string')
        }

        console.log('readLines() filename: ', filename)

        // Throw an error if the file does not exist.
        if (!_this.fs.existsSync(filename)) {
          throw new Error('file does not exist')
        }

        const data = []

        // let i = 0

        _this.lineReader.eachLine(filename, function (line, last) {
          try {
            data.push(JSON.parse(line))

            // Uncomment to display the raw data in each line of the winston log file.
            // console.log(`line ${i}: ${line}`)
            // i++

            if (last) return resolve(data)
          } catch (err) {
            // console.log('err: ', err)
            if (last) return resolve(data)
          }
        })
      } catch (err) {
        console.log('Error in lib/logapi.js/readLines()')
        return reject(err)
      }
    })
  }
}

export default LogsApi

```

`/home/trout/work/psf/code/bch-dex/src/adapters/nodemailer.js`:

```js
/*
  A library for controlling the sending of email.
*/

'use strict'
import nodemailer from 'nodemailer'

import config from '../../config/index.js'
import wlogger from './wlogger.js'

let _this

class NodeMailer {
  constructor () {
    this.nodemailer = nodemailer
    this.config = config

    _this = this
    _this.transporter = _this.createTransporter()
  }

  // Define an email server 'transport' for nodemailer
  createTransporter () {
    const transporter = _this.nodemailer.createTransport({
      host: _this.config.emailServer,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: _this.config.emailUser, // generated ethereal user
        pass: _this.config.emailPassword // generated ethereal password
      }
    })
    return transporter
  }

  // Handles the sending of data via email.
  async sendEmail (data) {
    try {
      // Validate input
      if (!data.email || typeof data.email !== 'string') {
        throw new Error("Property 'email' must be a string!")
      }

      if (!data.to || !Array.isArray(data.to)) {
        throw new Error("Property 'to' must be a array!")
      }

      await _this.validateEmailArray(data.to)

      if (!data.formMessage || typeof data.formMessage !== 'string') {
        throw new Error("Property 'formMessage' must be a string!")
      }

      if (!data.subject || typeof data.subject !== 'string') {
        throw new Error("Property 'subject' must be a string!")
      }

      // Use the provided html or use a default html generated from the input data

      const html = data.htmlData || _this.getHtmlFromObject(data)
      const sendObj = {
        // from: `${data.email}`, // sender address
        from: data.email,
        to: data.to, // list of receivers
        // subject: `Pearson ${subject}`, // Subject line
        subject: data.subject,
        // html: '<b>This is a test email</b>' // html body
        html
      }

      // send mail with defined transport object
      const info = await _this.transporter.sendMail(sendObj)
      console.log('Message sent: %s', info.messageId)

      return info
    } catch (err) {
      wlogger.error('Error in lib/nodemailer.js/sendEmail()')
      throw err
    }
  }

  async validateEmailArray (emailList) {
    try {
      if (!emailList || !Array.isArray(emailList)) {
        throw new Error("Property 'emailList' must be a array!")
      }
      //  Email list can't be empty
      if (!emailList.length > 0) {
        throw new Error("Property 'emailList' cant be empty!")
      }

      return true
    } catch (err) {
      wlogger.error('Error in lib/nodemailer.js/validateEmailArray()')
      throw err
    }
  }

  // get the email html from object
  getHtmlFromObject (objectData) {
    try {
      if (!objectData || typeof objectData !== 'object') {
        throw new Error("Property 'objectData' must be a object!")
      }
      if (!objectData.subject) {
        throw new Error("Property 'subject' must be a string!")
      }
      if (!objectData.formMessage) {
        throw new Error("Property 'formMessage' must be a string!")
      }

      const obj = {}
      Object.assign(obj, objectData)

      // neccesary data
      const msg = obj.formMessage.replace(/(\r\n|\n|\r)/g, '<br />')
      const now = new Date()
      const subject = obj.subject

      // Delete unneccesary data if it exist
      delete obj.to
      delete obj.subject
      delete obj.from
      delete obj.emailList
      delete obj.formMessage

      const bodyJson = obj
      bodyJson.message = msg

      // Html body
      let htmlBody = ''

      // maps the object and converts it into html format
      Object.keys(bodyJson).forEach(function (key) {
        htmlBody += `${key}: ${bodyJson[key]}<br/>`
      })

      const defaultHtmlData = `<h3>${subject}:</h3>
       <p>
         time: ${now.toLocaleString()}<br/>
         ${htmlBody}
       </p>`

      return defaultHtmlData
    } catch (error) {
      wlogger.error('Error in lib/nodemailer.js/getHtmlFromObject()')
      throw error
    }
  }
}

export default NodeMailer

```

`/home/trout/work/psf/code/bch-dex/src/adapters/wallet.js`:

```js
/*
  Adapter library for working with a wallet.
  This library is specific to bch-dex. The other wallet adapter library is
  inherited from ipfs-service-provider.
*/

// Public npm libraries
import BchWallet from 'minimal-slp-wallet'
import BchTokenSweep from 'bch-token-sweep/index.js'
import bitcoinJs from 'bitcoincashjs-lib'
import RetryQueue from '@chris.troutner/retry-queue'

// Local libraries
import JsonFiles from './json-files.js'
import config from '../../config/index.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const WALLET_FILE = `${__dirname.toString()}/../../wallet.json`
// const PROOF_OF_BURN_QTY = 0.01
// const P2WDB_TOKEN_ID =
// '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'

const advancedConfig = {}

class WalletAdapter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.jsonFiles = new JsonFiles()
    this.WALLET_FILE = WALLET_FILE
    this.config = config
    this.bitcoinJs = bitcoinJs
    this.BchWallet = BchWallet
    this.bchWallet = {} // Will be replaced when initialized.
    // this.advancedConfig = localConfig.advancedConfig
    this.retryQueue = new RetryQueue({
      concurrency: 1,
      attempts: 5,
      retryPeriod: 5000
    })

    // Bind the 'this' object
    this.openWallet = this.openWallet.bind(this)
    this.instanceWallet = this.instanceWallet.bind(this)
    this.incrementNextAddress = this.incrementNextAddress.bind(this)
    this.getKeyPair = this.getKeyPair.bind(this)
    this.generateSignature = this.generateSignature.bind(this)
    this.generatePartialTx = this.generatePartialTx.bind(this)
    this.moveTokens = this.moveTokens.bind(this)
    this.moveBch = this.moveBch.bind(this)
    this.deseralizeTx = this.deseralizeTx.bind(this)
    this.completeTx = this.completeTx.bind(this)
    this.reclaimTokens = this.reclaimTokens.bind(this)
    this.moveTokensFromCustomWallet = this.moveTokensFromCustomWallet.bind(this)
  }

  // Open the wallet file, or create one if the file doesn't exist.
  // Does not instance the wallet. The output of this function is expected to
  // be passed to instanceWallet().
  async openWallet () {
    try {
      let walletData

      // Try to open the wallet.json file.
      try {
        // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
        walletData = await this.jsonFiles.readJSON(this.WALLET_FILE)
      } catch (err) {
        // Create a new wallet file if one does not already exist.
        console.log('Wallet file not found. Creating new wallet.json file.')

        // Create a new wallet.
        // No-Update flag creates wallet without making any network calls.
        const walletInstance = new this.BchWallet(undefined, { noUpdate: true })

        // Wait for wallet to initialize.
        await walletInstance.walletInfoPromise

        walletData = walletInstance.walletInfo

        // Add the nextAddress property
        walletData.nextAddress = 1

        // Write the wallet data to the JSON file.
        await this.jsonFiles.writeJSON(walletData, this.WALLET_FILE)
      }

      // console.log('walletData: ', walletData)

      return walletData
    } catch (err) {
      console.error('Error in openWallet()')
      throw err
    }
  }

  // Create an instance of minimal-slp-wallet. Use data in the wallet.json file,
  // and pass the bch-js information to the minimal-slp-wallet library.
  async instanceWallet (walletData) {
    try {
      // console.log(`instanceWallet() walletData: ${JSON.stringify(walletData, null, 2)}`)

      // TODO: throw error if wallet data is not passed in.
      if (!walletData.mnemonic) {
        throw new Error('Wallet data is not formatted correctly. Can not read mnemonic in wallet file!')
      }

      // const advancedConfig = {}
      console.log(`Using FullStack.cash: ${this.config.useFullStackCash}`)
      if (this.config.useFullStackCash) {
        advancedConfig.interface = 'rest-api'
        advancedConfig.restURL = this.config.apiServer
        advancedConfig.apiToken = this.config.apiToken
      } else {
        advancedConfig.interface = 'consumer-api'
        advancedConfig.restURL = this.config.consumerUrl
      }

      // Instantiate minimal-slp-wallet.
      this.bchWallet = new this.BchWallet(walletData.mnemonic, advancedConfig)

      // Wait for wallet to initialize.
      await this.bchWallet.walletInfoPromise
      await this.bchWallet.initialize()
      console.log(`BCH wallet initialized. Wallet address: ${this.bchWallet.walletInfo.cashAddress}`)
      // console.log(`this.bchWallet.walletInfo: ${JSON.stringify(this.bchWallet.walletInfo, null, 2)}`)

      return this.bchWallet
    } catch (err) {
      console.error('Error in instanceWallet()')
      throw err
    }
  }

  // Increments the 'nextAddress' property in the wallet file. This property
  // indicates the HD index that should be used to generate a key pair for
  // storing funds for Offers.
  // This function opens the wallet file, increments the nextAddress property,
  // then saves the change to the wallet file.
  async incrementNextAddress () {
    try {
      const walletData = await this.openWallet()
      // console.log('original walletdata: ', walletData)

      walletData.nextAddress++

      // console.log('walletData finish: ', walletData)
      await this.jsonFiles.writeJSON(walletData, this.WALLET_FILE)

      // Update the working instance of the wallet.
      this.bchWallet.walletInfo.nextAddress++
      // console.log('this.bchWallet.walletInfo: ', this.bchWallet.walletInfo)

      return walletData.nextAddress
    } catch (err) {
      console.error('Error in incrementNextAddress()')
      throw err
    }
  }

  // This method returns an object that contains a private key WIF, public address,
  // and the index of the HD wallet that the key pair was generated from.
  // TODO: Allow input integer. If input is used, use that as the index. If no
  // input is provided, then call incrementNextAddress().
  async getKeyPair (hdIndex = 0) {
    try {
      if (!hdIndex) {
        // Increment the HD index and generate a new key pair.
        hdIndex = await this.incrementNextAddress()
      }

      const mnemonic = this.bchWallet.walletInfo.mnemonic

      // root seed buffer
      const rootSeed = await this.bchWallet.bchjs.Mnemonic.toSeed(mnemonic)

      const masterHDNode = this.bchWallet.bchjs.HDNode.fromSeed(rootSeed)

      // HDNode of BIP44 account
      // const account = this.bchWallet.bchjs.HDNode.derivePath(masterHDNode, "m/44'/245'/0'")

      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)

      const cashAddress = this.bchWallet.bchjs.HDNode.toCashAddress(childNode)
      console.log('Generating a new key pair for cashAddress: ', cashAddress)

      const wif = this.bchWallet.bchjs.HDNode.toWIF(childNode)

      const outObj = {
        cashAddress,
        wif,
        hdIndex
      }

      return outObj
    } catch (err) {
      console.error('Error in getKeyPair()')
      throw err
    }
  }

  // Generate a cryptographic signature, required to write to the P2WDB.
  async generateSignature (message) {
    try {
      // TODO: Add input validation for message.

      const privKey = this.bchWallet.walletInfo.privateKey

      // console.log('privKey: ', privKey)
      // console.log('flags.data: ', flags.data)

      const signature = this.bchWallet.bchjs.BitcoinCash.signMessageWithPrivKey(
        privKey,
        message
      )

      return signature
    } catch (err) {
      console.error('Error in generateSignature()')
      throw err
    }
  }

  // Generate a partial transcation to *take* a 'sell' offer.
  async generatePartialTx (offerInfo, utxoInfo) {
    try {
      console.log(`offerInfo: ${JSON.stringify(offerInfo, null, 2)}`)

      const bchjs = this.bchWallet.bchjs

      // instance of transaction builder
      const transactionBuilder = new bchjs.TransactionBuilder()

      // Get a payment UTXO.
      // TODO: Create a segregated UTXO.
      // const bchUtxos = this.bchWallet.utxos.utxoStore.bchUtxos
      // const paymentUtxo = await bchjs.Utxo.findBiggestUtxo(bchUtxos)
      // console.log('paymentUtxo: ', paymentUtxo)

      // Get token info on the offered UTXO
      const txData = await this.bchWallet.getTxData([offerInfo.utxoTxid])
      console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // Construct the UTXO being offered for sale.
      const offeredUtxo = {
        txid: offerInfo.utxoTxid,
        vout: offerInfo.utxoVout,
        tokenId: offerInfo.tokenId,
        decimals: txData[0].tokenDecimals,
        tokenQty: offerInfo.numTokens.toString()
      }
      console.log(`offeredUtxo: ${JSON.stringify(offeredUtxo, null, 2)}`)

      // Build First part of the collaborative Tx a.k.a. Alice
      // Generate the OP_RETURN code.
      let slpSendObj
      if (offerInfo.tokenType === 65) {
        // Type 65 NFT

        slpSendObj = bchjs.SLP.NFT1.generateNFTChildSendOpReturn(
          [offeredUtxo],
          offerInfo.numTokens.toString()
        )
        console.log(`slpOutputs: ${slpSendObj.outputs}`)
      } else if (offerInfo.tokenType === 1) {
        // Type 1 fungible token

        slpSendObj = bchjs.SLP.TokenType1.generateSendOpReturn(
          [offeredUtxo],
          offerInfo.numTokens.toString()
        )
        console.log(`slpOutputs: ${slpSendObj.outputs}`)
      } else {
        throw new Error(`Unknown token type of ${offerInfo.tokenType}. Can not create Counter Offer.`)
      }
      const slpData = slpSendObj.script

      // Currently this app only supports a single SLP token UTXO for exact
      // token quantities (no token change). e.g. 1 UTXO representing the
      // exact number of 'numTokens'
      if (slpSendObj.outputs > 1) {
        console.log('WARNING: choose one UTXO with all tokens to exchange')
        return
      }

      // Calculate sats needed to pay the offer.
      const satsNeeded = offerInfo.numTokens * parseInt(offerInfo.rateInBaseUnit)
      if (isNaN(satsNeeded)) throw new Error('Can not calculate needed sats')

      // Calculate miner fees.
      // Get byte count (minimum 2 inputs, 3 outputs)
      // const opReturnBufLength = slpData.byteLength + 32 // add padding
      // const byteCount =
      // bchjs.BitcoinCash.getByteCount({ P2PKH: 2 }, { P2PKH: 4 }) +
      //   opReturnBufLength
      // const totalSatsNeeded = byteCount + satsNeeded
      // console.log(`satoshis needed: ${satsNeeded}`)

      // One last check to ensure the app wallet has enough BCH to complete
      // the trade.
      // if (totalSatsNeeded > paymentUtxo.value) {
      //   console.log(`Selected payment UTXO is not big enough. Sats needed: ${totalSatsNeeded}, UTXO value: ${paymentUtxo.value}`)
      // }

      // add UTXO for sale (STILL CANNOT SPEND - not signed yet)
      transactionBuilder.addInput(offerInfo.utxoTxid, offerInfo.utxoVout)

      // add payment UTXO
      // transactionBuilder.addInput(paymentUtxo.tx_hash, paymentUtxo.tx_pos)
      transactionBuilder.addInput(utxoInfo.txid, utxoInfo.vout)

      // const originalAmount = paymentUtxo.value
      const dust = 546
      // const remainder = originalAmount - satsNeeded - dust // exchange fee + token UTXO dust

      // Add the SLP OP_RETURN data as the first output.
      transactionBuilder.addOutput(slpData, 0)

      const buyerAddr = this.bchWallet.walletInfo.legacyAddress
      // console.log(`buyAddr: ${JSON.stringify(buyAddr, null, 2)}`)

      // Send dust transaction representing tokens being sent.
      transactionBuilder.addOutput(
        buyerAddr,
        dust
      )

      // Get seller address
      const sellerAddr = offerInfo.makerAddr

      // Send payment to the offer side
      transactionBuilder.addOutput(sellerAddr, satsNeeded)

      // Send the BCH change back to the buyer
      // if (remainder > 550) {
      //   transactionBuilder.addOutput(buyerAddr, remainder)
      // }

      // const buyerECPair = bchjs.ECPair.fromWIF(this.bchWallet.walletInfo.privateKey)
      const buyerECPair = bchjs.ECPair.fromWIF(utxoInfo.wif)

      // Sign the buyers input UTXO for spending.
      transactionBuilder.sign(
        1,
        buyerECPair,
        null,
        transactionBuilder.hashTypes.SIGHASH_ALL,
        utxoInfo.sats
      )

      const tx = transactionBuilder.transaction.buildIncomplete()

      const hex = tx.toHex()
      // console.log('hex: ', hex)

      return hex
    } catch (err) {
      console.error('Error in wallet.js/generatePartialTx(): ', err)
      throw err
    }

    // return true
  }

  // Move tokens to an address controlled by the HD wallet, to generate a
  // segregated UTXO.
  async moveTokens (inObj = {}) {
    try {
      const { tokenId, qty } = inObj

      const keyPair = await this.getKeyPair()
      console.log('keyPair: ', keyPair)

      const receiver = {
        address: keyPair.cashAddress,
        tokenId,
        qty
      }

      // Update the UTXO store of the wallet.
      await this.bchWallet.initialize()

      // Get the token type of the token being moved.
      // Combine Fungible and NFT token UTXOs.
      let tokenUtxos = this.bchWallet.utxos.utxoStore.slpUtxos.type1.tokens.concat(
        this.bchWallet.utxos.utxoStore.slpUtxos.nft.tokens)
      // Get token UTXOs that match the token in the order.
      tokenUtxos = tokenUtxos.filter(
        x => x.tokenId === tokenId
      )

      const txid = await this.bchWallet.sendTokens(receiver, 3)

      const utxoInfo = {
        txid,
        vout: 1,
        hdIndex: keyPair.hdIndex,
        tokenType: tokenUtxos[0].tokenType
      }

      return utxoInfo
    } catch (err) {
      console.error('Error in wallet.js/moveTokens()')
      throw err
    }
  }

  // Move a quanity of BCH to an address controlled by the HD wallet, to
  // generate a segregated UTXO.
  async moveBch (amountSat) {
    try {
      const keyPair = await this.getKeyPair()
      console.log('keyPair: ', keyPair)

      const receivers = [{
        address: keyPair.cashAddress,
        amountSat
      }]
      console.log(`receivers: ${JSON.stringify(receivers, null, 2)}`)

      // Update the UTXO store of the wallet.
      await this.bchWallet.getUtxos()

      const txid = await this.bchWallet.send(receivers)

      const utxoInfo = {
        txid,
        vout: 0,
        hdIndex: keyPair.hdIndex,
        wif: keyPair.wif
      }

      return utxoInfo
    } catch (err) {
      console.error('Error in wallet.js/moveBch()')
      throw err
    }
  }

  // Deserialize a hex string representing a partial TX. Returns an object
  // representing the transaction.
  async deseralizeTx (txHex) {
    try {
      // Ensure the URL points at FullStack.cash, since the web 3 infra does not
      // yet support this call.
      const oldUrl = this.bchWallet.bchjs.RawTransactions.restURL
      this.bchWallet.bchjs.RawTransactions.restURL = 'https://api.fullstack.cash/v5/'

      // Use a full node to deserialize the transaction.
      const txObj2 = await this.bchWallet.bchjs.RawTransactions.decodeRawTransaction(txHex)
      // console.log(`txObj2: ${JSON.stringify(txObj2, null, 2)}`)

      // Restore the old URL.
      this.bchWallet.bchjs.RawTransactions.restURL = oldUrl

      return txObj2
    } catch (err) {
      console.error('Error in wallet.js/deserializeTx()')
      throw err
    }
  }

  // Complete the partially signed transaction by signing the first input,
  // then broadcasting the transaction to the network.
  async completeTx (hex, hdIndex) {
    try {
      // Input validation
      if (!hex || typeof hex !== 'string') {
        throw new Error('hex must be a string!')
      }
      if (typeof hdIndex !== 'number' || hdIndex < 0) {
        throw new Error('hdIndex must be a non-negative number!')
      }
      // console.log('hex: ', hex)
      console.log('completeTx() hdIndex: ', hdIndex)

      const bchjs = this.bchWallet.bchjs

      // instance of transaction builder
      // const transactionBuilder = new bchjs.TransactionBuilder()

      // Convert the hex string version of the transaction into a Buffer.
      // const paymentBuffer = Buffer.from(hex, 'hex')

      // Generate a Transaction object from the transaction binary data.
      // const csTransaction = this.bitcoinJs.Transaction.fromBuffer(paymentBuffer)
      const csTransaction = this.bitcoinJs.Transaction.fromHex(hex)
      // console.log(`payment tx: ${JSON.stringify(csTransaction, null, 2)}`)

      // Instantiate the Transaction Builder.
      const csTransactionBuilder = this.bitcoinJs.TransactionBuilder.fromTransaction(
        csTransaction,
        'mainnet'
      )
      // const csTransactionBuilder = bchjs.TransactionBuilder.fromTransaction(
      //   csTransaction,
      //   'mainnet'
      // )

      console.log('completeTx() this.walletInfo: ', this.walletInfo)

      // Get the keypair for the address used in the Order
      const keyPair = await this.getKeyPair(hdIndex)
      console.log(`maker keyPair: ${JSON.stringify(keyPair, null, 2)}`)
      const makerECPair = bchjs.ECPair.fromWIF(keyPair.wif)

      // Assumption: segregated UTXO has a value of 546 sats. It might be better
      // to explicitly look this data up via the blockchain.
      const dust = 546

      // Coutnersign the Maker's input, representing the tokens for sale.
      csTransactionBuilder.sign(
        0,
        makerECPair,
        null,
        this.bitcoinJs.Transaction.SIGHASH_ALL,
        // csTransactionBuilder.hashTypes.SIGHASH_ALL,
        dust
      )

      // build tx
      const csTx = csTransactionBuilder.build()

      // output rawhex
      const csTxHex = csTx.toHex()
      console.log(`Fully signed Tx hex: ${csTxHex}`)

      // Debug: Display the fully signed TX
      const txObj = await this.deseralizeTx(csTxHex)
      console.log(`Final tx: ${JSON.stringify(txObj, null, 2)}`)

      // return csTxHex

      // Broadcast transaction to the network
      // const txid = await this.bchWallet.ar.sendTx(csTxHex)
      const txid = await this.retryQueue.addToQueue(this.bchWallet.broadcast, { hex: csTxHex })
      console.log('completeTx() txid: ', txid)

      return txid
    } catch (err) {
      console.error('Error in wallet.js/completeTx()')
      throw err
    }
  }

  // Given an Order database object, this function sends the tokens from the
  // HD index where they are stored, back to the root address of the wallet.
  async reclaimTokens (orderData) {
    try {
      // Get the key pair from the Order.
      const keyPair = await this.getKeyPair(orderData.hdIndex)
      console.log('keyPair: ', keyPair)

      // Instantiate the wallet using the private key of the Order.
      // const tempWallet = new this.BchWallet(keyPair.wif, advancedConfig)
      // await tempWallet.initialize()

      // Send the tokens from the Order to the root address.
      // const receiver = {
      //   address: this.bchWallet.walletInfo.address,
      //   tokenId: orderData.tokenId,
      //   qty: orderData.numTokens
      // }
      // console.log('receiver: ', receiver)
      //
      // const txid = await tempWallet.sendTokens(receiver)

      // Sweep the tokens to the root address.
      const sweeper = new BchTokenSweep(
        keyPair.wif,
        this.bchWallet.walletInfo.privateKey,
        this.bchWallet,
        550,
        this.bchWallet.walletInfo.cashAddress
      )
      await sweeper.populateObjectFromNetwork()
      const hex = await sweeper.sweepTo(this.bchWallet.walletInfo.cashAddress)
      const txid = await this.bchWallet.ar.sendTx(hex)

      return txid
    } catch (err) {
      console.error('Error in wallet.js/reclaimTokens()')
      throw err
    }
  }

  async moveTokensFromCustomWallet (inObj = {}) {
    try {
      const { tokenId, qty, wallet } = inObj
      // Input validation
      if (!tokenId || typeof tokenId !== 'string') {
        throw new Error('tokenId must be a string!')
      }
      if (!qty) {
        throw new Error('qty must be a number!')
      }
      if (!wallet) {
        throw new Error('wallet is required!')
      }

      const keyPair = await this.getKeyPair()
      console.log('keyPair: ', keyPair)

      const receiver = {
        address: keyPair.cashAddress,
        tokenId,
        qty
      }
      console.log('receiver: ', receiver)

      // Update the UTXO store of the wallet.
      await wallet.initialize()

      // Get the token type of the token being moved.
      // Combine Fungible and NFT token UTXOs.
      let tokenUtxos = wallet.utxos.utxoStore.slpUtxos.type1.tokens.concat(
        wallet.utxos.utxoStore.slpUtxos.nft.tokens)
      // Get token UTXOs that match the token in the order.
      tokenUtxos = tokenUtxos.filter(
        x => x.tokenId === tokenId
      )

      const txid = await wallet.sendTokens(receiver, 3)
      const utxoInfo = {
        txid,
        vout: 1,
        hdIndex: keyPair.hdIndex,
        tokenType: tokenUtxos[0].tokenType
      }

      return utxoInfo
    } catch (err) {
      console.error('Error in wallet.js/moveTokensFromCustomWallet()')
      throw err
    }
  }
}

export default WalletAdapter

```

`/home/trout/work/psf/code/bch-dex/src/adapters/localdb/index.js`:

```js
/*
  This library encapsulates code concerned with MongoDB and Mongoose models.
*/

// Load Mongoose models.
import Users from './models/users.js'
import Entries from './models/entry.js'
import Order from './models/order.js'
import Offer from './models/offer.js'

class LocalDB {
  constructor () {
    // Encapsulate dependencies
    this.Users = Users
    this.Entry = Entries
    this.Order = Order
    this.Offer = Offer
  }
}

export default LocalDB

```

`/home/trout/work/psf/code/bch-dex/src/adapters/localdb/models/users.js`:

```js
// Global npm libraries
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Local libraries
import config from '../../../../config/index.js'

const User = new mongoose.Schema({
  type: { type: String, default: 'user' },
  name: { type: String },
  username: { type: String },
  password: { type: String, required: true },
  mnemonic: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

// Before saving, convert the password to a hash.
User.pre('save', async function preSave (next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(user.password, salt)

  user.password = hash

  next(null)
})

// Validate the password by comparing to the saved hash.
User.methods.validatePassword = async function validatePassword (password) {
  const user = this

  const isMatch = await bcrypt.compare(password, user.password)

  return isMatch
}

// Generate a JWT token.
User.methods.generateToken = function generateToken () {
  const user = this

  const token = jwt.sign({ id: user.id }, config.token)
  // console.log(`config.token: ${config.token}`)
  // console.log(`generated token: ${token}`)
  return token
}

// export default mongoose.model('user', User)
export default mongoose.model('user', User)

```

`/home/trout/work/psf/code/bch-dex/src/adapters/localdb/models/offer.js`:

```js
import mongoose from 'mongoose'

const Offer = new mongoose.Schema({

  // Token data
  tokenId: { type: String },
  utxoTxid: { type: String },
  utxoVout: { type: Number },
  ticker: { type: String, default: '' },
  tokenType: { type: Number },

  // Trade data
  buyOrSell: { type: String },
  numTokens: { type: Number },
  rateInBaseUnit: { type: String },
  minUnitsToExchange: { type: String },
  p2wdbTxid: { type: String },
  p2wdbHash: { type: String },
  offerStatus: { type: String },
  makerAddr: { type: String },

  // Authentication data
  signature: { type: String },
  sigMsg: { type: String },

  // Utility data
  timestamp: { type: Number },
  globalTimestamp: { type: String },
  localTimestamp: { type: String },
  displayCategory: { type: String },
  nsfw: { type: Boolean, default: false },
  flags: { type: Array },

  // SWaP Protocol Properties
  lokadId: { type: String },
  messageType: { type: Number },
  messageClass: { type: Number },
  nostrEventId: { type: String } // Nostr Event Id.

})

export default mongoose.model('offer', Offer)

```

`/home/trout/work/psf/code/bch-dex/src/adapters/localdb/models/order.js`:

```js
/*
  Order Model. Orders are 'internal' to the system and track the HD wallet index
  that contains funds for that Order. This is in contrast to Offers, which
  are 'external' to the system and mirrored by every instance of bch-dex.

  See the dev-docs/specification.md for details on each property.
*/

import mongoose from 'mongoose'

const Order = new mongoose.Schema({
  // Token data
  tokenId: { type: String, required: true },
  utxoTxid: { type: String, required: true },
  utxoVout: { type: Number, required: true },
  ticker: { type: String, required: true },
  tokenType: { type: Number, required: true },

  // Trade data
  buyOrSell: { type: String, required: true },
  numTokens: { type: Number, required: true },
  rateInBaseUnit: { type: String, required: true },
  minUnitsToExchange: { type: String },
  p2wdbTxid: { type: String },
  p2wdbHash: { type: String },
  makerAddr: { type: String, required: true },

  // Authentication data
  signature: { type: String },
  sigMsg: { type: String },
  offerBchAddr: { type: String },
  offerPubKey: { type: String },

  // Wallet Data
  hdIndex: { type: Number, required: true }, // HD index address holding the UTXO for this offer.

  // SWaP Protocol Properties
  lokadId: { type: String },
  messageType: { type: Number },
  messageClass: { type: Number },
  nostrEventId: { type: String, required: true }, // Nostr Event Id.

  // Additional properties found in createOrder
  dataType: { type: String, required: true }
})

export default mongoose.model('order', Order)

```

`/home/trout/work/psf/code/bch-dex/src/adapters/localdb/models/entry.js`:

```js
import mongoose from 'mongoose'

const Entry = new mongoose.Schema({
  entry: { type: String },
  description: { type: String },
  slpAddress: { type: String },
  signature: { type: String },
  category: { type: String },
  balance: { type: Number },
  merit: { type: Number }
})

export default mongoose.model('entry', Entry)

```

`/home/trout/work/psf/code/bch-dex/src/adapters/localdb/order-pagination.js`:

```js
/*
  Adapter for the Order database model. Provides pagination when retrieving
  orders from the datatabase.
*/

import Order from './models/order.js'

// let _this

class OrderPagination {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.Order = Order
    // _this = this
  }

  // Read all entries in the P2WDB.
  async readAll (page = 0) {
    try {
      const ENTRIES_PER_PAGE = 20

      // Pull data from MongoDB.
      // Get all entries in the database.
      const data = await this.Order.find({})
        // Sort entries so newest entries show first.
        .sort('-timestamp')
        // Skip to the start of the selected page.
        .skip(page * ENTRIES_PER_PAGE)
        // Only return 20 results.
        .limit(ENTRIES_PER_PAGE)

      // console.log('data: ', data)

      return data
    } catch (err) {
      console.error('Error in order-pagination.js/readAll()')
      throw err
    }
  }
}

export default OrderPagination

```

`/home/trout/work/psf/code/bch-dex/src/adapters/p2wdb-adapter.js`:

```js
/*
  Adapter library for interacting with the P2WDB
*/

// Public npm libraries.
import axios from 'axios'

import P2WDB from 'p2wdb-esm'

// Local libraries
import config from '../../config/index.js'
const { Write, Read } = P2WDB

class P2wdbAdapter {
  constructor (localConfig = {}) {
    // Dependency injection
    this.bchWallet = localConfig.bchWallet
    if (!this.bchWallet) {
      throw new Error('Must pass an instance of minimal-slp-wallet as bchWallet when instantiating p2wdb.js adapter.')
    }

    // Encapsulate dependencies
    this.axios = axios
    this.config = config
    this.Write = Write
    this.Read = Read
    this.bchjs = this.bchWallet.bchjs

    // Allow the localConfig to overwrite the config file values.
    this.p2wdbURL = localConfig.p2wdbURL || config.p2wdbUrl

    // Bind the 'this' object to all functions
    this.write = this.write.bind(this)
    this.checkForSufficientFunds = this.checkForSufficientFunds.bind(this)
  }

  // Write some data to the P2WDB
  async write (inputObj = {}) {
    try {
      const { appId = 'test', data = {}, wif } = inputObj

      if (typeof wif !== 'string' || !wif) {
        throw new Error('wif input must be a private key starting with the letter L or K')
      }

      const p2write = this.instantiateWriteLib(wif)

      const result = await p2write.postEntry(data, appId)

      return result.hash
    } catch (err) {
      console.error('Error in p2wdb.js/write()')
      throw err
    }
  }

  // Instantiate the Write library with a WIF, handling the various config
  // settings.
  instantiateWriteLib (wif) {
    try {
      if (!wif) {
        throw new Error('WIF input required when calling instantiateWriteLib()')
      }

      // Object used to configure the Write library.
      let configObj = {}

      if (this.config.useFullStackCash) {
        // Use web 2 infrastructure.
        // bch-js and FullStack.cash

        configObj = {
          wif,
          serverURL: this.p2wdbURL,
          restURL: this.bchjs.restURL,
          apiToken: this.bchjs.apiToken,
          bchWallet: this.bchWallet
        }
      } else {
        // Use web 3 infrastructure.
        // ipfs-bch-wallet-consumer and bch-consumer library

        configObj = {
          wif,
          serverURL: this.p2wdbURL,
          interface: 'consumer-api',
          restURL: this.config.consumerUrl,
          bchWallet: this.bchWallet
        }
      }

      const write = new this.Write(configObj)

      return write
    } catch (err) {
      console.error('Error in p2wdb-adapter.js/instantitateWriteLib()')
      throw err
    }
  }

  // Returns a promise that resolves to true or false, to indicate if the
  // WIF controls the required funds to write to the P2WDB.
  async checkForSufficientFunds (wif) {
    try {
      if (typeof wif !== 'string' || !wif) {
        throw new Error('invalid wif to check for funds')
      }

      // Instatiate the Write library
      const p2write = this.instantiateWriteLib(wif)

      return await p2write.checkForSufficientFunds()
    } catch (err) {
      console.error('Error in p2wdb.js/checkForSufficientFunds()')
      throw err
    }
  }
}

export default P2wdbAdapter

```

`/home/trout/work/psf/code/bch-dex/src/adapters/wlogger.js`:

```js
/*
  Instantiates and configures the Winston logging library. This utitlity library
  can be called by other parts of the application to conveniently tap into the
  logging library.
*/

'use strict'

// Global npm libraries
import winston from 'winston'
import 'winston-daily-rotate-file'

// Local libraries
import config from '../../config/index.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

class Wlogger {
  constructor (localConfig = {}) {
    this.config = config

    // Configure daily-rotation transport.
    this.transport = new winston.transports.DailyRotateFile({
      filename: `${__dirname.toString()}/../../logs/koa-${
        this.config.env
      }-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxSize: '1m', // 1 megabyte
      maxFiles: '5d', // 5 days
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })

    this.transport.on('rotate', this.notifyRotation)

    // This controls what goes into the log FILES
    this.wlogger = winston.createLogger({
      level: 'verbose',
      format: winston.format.json(),
      transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        // new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        // new winston.transports.File({ filename: 'logs/combined.log' })
        this.transport
      ]
    })
  }

  notifyRotation (oldFilename, newFilename) {
    // this.wlogger.info('Rotating log files')
    console.log('Rotating log files')
  }

  outputToConsole () {
    this.wlogger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
        level: 'info'
      })
    )
  }
}

const logger = new Wlogger()

// Allow the logger to write to the console.
logger.outputToConsole()

const wlogger = logger.wlogger

export { wlogger as default, Wlogger }
// export default wlogger

```

`/home/trout/work/psf/code/bch-dex/src/adapters/json-files.js`:

```js
/*
  A utility file for reading and writing JSON files.
*/

import fs from 'fs'

let _this

class JsonFiles {
  constructor () {
    this.fs = fs

    _this = this
  }

  // Writes out a JSON file of any object passed to the function.
  // This is used for testing.
  writeJSON (obj, fileName) {
    return new Promise(function (resolve, reject) {
      try {
        if (!obj) {
          throw new Error('obj property is required')
        }
        if (!fileName || typeof fileName !== 'string') {
          throw new Error('fileName property must be a string')
        }
        const fileStr = JSON.stringify(obj, null, 2)

        _this.fs.writeFile(fileName, fileStr, function (err) {
          if (err) {
            console.error('Error while trying to write file: ')
            throw err
          } else {
            // console.log(`${fileName} written successfully!`)
            return resolve()
          }
        })
      } catch (err) {
        console.error(
          'Error trying to write out object in util.js/_writeJSON().'
        )
        return reject(err)
      }
    })
  }

  readJSON (fileName) {
    return new Promise(function (resolve, reject) {
      try {
        if (!fileName || typeof fileName !== 'string') {
          throw new Error('fileName property must be a string')
        }

        _this.fs.readFile(fileName, (err, data) => {
          if (err) {
            if (err.code === 'ENOENT') {
              console.log('.json file not found!')
            } else {
              console.log(`err: ${JSON.stringify(err, null, 2)}`)
            }

            // throw err
            return reject(err)
          }

          const obj = JSON.parse(data)

          return resolve(obj)
        })
      } catch (err) {
        console.error('Error trying to read JSON file in util.js/_readJSON().')
        return reject(err)
      }
    })
  }
}

export default JsonFiles

```

`/home/trout/work/psf/code/bch-dex/src/adapters/nostr.js`:

```js
/*
  Adapter library for working with Nostr.
*/

// Global npm libraries
import BchNostr from 'bch-nostr'
import { RelayPool } from 'nostr'
import RetryQueue from '@chris.troutner/retry-queue'
import * as nip19 from 'nostr-tools/nip19'

class NostrAdapter {
  constructor (localConfig = { nostrRelay: '', nostrTopic: '' }) {
    this.relayWs = localConfig.nostrRelay //
    this.topic = localConfig.nostrTopic

    if (!this.relayWs) {
      throw new Error(
        '"nostrRelay" must be passed when instantiate NostrAdapter'
      )
    }

    if (!this.topic) {
      throw new Error(
        '"nostrTopic" must be passed when instantiate NostrAdapter'
      )
    }

    // Encapsulate dependencies
    this.bchNostr = new BchNostr()
    this.RelayPool = RelayPool
    this.retryQueue = new RetryQueue({
      concurrency: 1,
      attempts: 5,
      retryPeriod: 1000
    })

    // Bind the 'this' object
    this.start = this.start.bind(this)
    this.post = this.post.bind(this)
    this.read = this.read.bind(this)
    this.eventId2note = this.eventId2note.bind(this)
  }

  // Create nostr keys.
  // NOTE:  WIF must be provided in this function instead the constructor function
  // we can provide it after app wallet creation.
  async start (WIF) {
    try {
      if (!WIF || typeof WIF !== 'string') {
        throw new Error('WIF must be a string!')
      }

      const { privKeyBuf, nostrPubKey } =
        this.bchNostr.keys.createNostrPubKeyFromWif({ wif: WIF })

      this.privKeyBuf = privKeyBuf
      this.nostrPubKey = nostrPubKey

      console.log(`Nostr Pub Key : ${nostrPubKey}`)

      return true
    } catch (error) {
      console.log(`Error in nostr.js/start() ${error.message} `)
      throw error
    }
  }

  // Post a message over the instance-topic.
  async post (msg = '') {
    try {
      if (!msg || typeof msg !== 'string') {
        throw new Error('msg must be a string!')
      }

      const inObj = {
        kind: 867,
        privKeyBuf: this.privKeyBuf,
        nostrPubKey: this.nostrPubKey,
        relayWs: this.relayWs,
        msg,
        tags: [['t', this.topic]]
      }
      const eventId = await this.retryQueue.addToQueue(this.bchNostr.post.uploadToNostr, inObj)
      return eventId
    } catch (error) {
      console.log(`Error in nostr.js/post() ${error.message} `)
      throw error
    }
  }

  // Read a message over the instance-topic.
  async read (limit = 10) {
    try {
      if (typeof limit !== 'number' || limit < 1) {
        throw new Error('Limit must be greater than 0')
      }

      const relays = [this.relayWs]
      const pool = this.RelayPool(relays)

      const nostrData = new Promise((resolve, reject) => {
        const messages = []

        pool.on('open', (relay) => {
          // relay.subscribe('REQ', { ids: [eventId] })
          relay.subscribe('REQ', { limit, kinds: [867], '#t': [this.topic] })
        })

        pool.on('eose', (relay) => {
          relay.close()
          resolve(messages)
        })

        pool.on('event', (relay, subId, ev) => {
          // console.log('ev: ', ev)
          messages.push({ content: ev.content, eventId: ev.id })
        })
      })

      const messages = await nostrData

      return messages
    } catch (error) {
      console.log(`Error in nostr.js/read() ${error.message} `)
      throw error
    }
  }

  // Convert an Event ID into a `noteabc..` syntax that Astral expects.
  // This can be used to generate a link to Astral to display the post.
  eventId2note (eventId) {
    return nip19.noteEncode(eventId)
  }
}

export default NostrAdapter

```

`/home/trout/work/psf/code/bch-dex/src/adapters/admin.js`:

```js
/*
  A library for working with the system admin user. This is an auto-generated
  account with 'admin' privledges, for interacting with private APIs.

  The admin account is regenerated every time the server is started. This improves
  security by not having stale passwords for the account. The login information
  and JWT token for the admin account is written to a JSON file, for easy
  retrieval by other apps running on the server that may need admin privledges
  to access private APIs.

  This library is really more of an Adapter to the internal systems default
  admin user. It's not really a central Entity, which is why this library lives
  in the Adapter directory.
*/

// Global npm libraries
import axios from 'axios'
import mongoose from 'mongoose'

// Local libraries
import User from '../adapters/localdb/models/users.js'
import config from '../../config/index.js'
import JsonFiles from '../adapters/json-files.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const jsonFiles = new JsonFiles()

const JSON_FILE = `system-user-${config.env}.json`
const JSON_PATH = `${__dirname.toString()}../../config/${JSON_FILE}`

const LOCALHOST = `http://localhost:${config.port}`
const context = {}

let _this
class Admin {
  constructor () {
    this.axios = axios
    this.User = User
    this.config = config
    this.jsonFiles = jsonFiles
    this.context = context

    _this = this
  }

  // Create the first user in the system. A 'admin' level system user that is
  // used by the Listing Manager and test scripts, in order access private API
  // functions.
  async createSystemUser () {
    try {
      const context = {
        email: 'system@system.com',
        name: 'admin',
        password: _this.config.adminPassword || _this._randomString(20),
        type: 'admin',
        mnemonic: 'spread ivory oval pioneer flash gap merit nerve simple image entire trouble'
      }
      // Check if the user already exists
      let adminUser = await _this.User.findOne({ email: context.email })

      if (adminUser) {
        // Update the password
        adminUser.password = context.password
      } else {
        // Create a new admin user
        adminUser = new _this.User(context)
      }
      // Update context with the new user id and token
      context.id = adminUser._id
      context.token = await adminUser.generateToken()

      // Save the user
      await adminUser.save()

      // Write the user data to the JSON file
      await _this.jsonFiles.writeJSON(context, JSON_PATH)

      return context
    } catch (error) {
      console.log('Error in admin.js/createSystemUser()')
      throw error
    }
  }

  async deleteExistingSystemUser () {
    try {
      mongoose.Promise = global.Promise
      mongoose.set('useCreateIndex', true) // Stop deprecation warning.

      await mongoose.connect(config.database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })

      await _this.User.deleteOne({ email: 'system@system.com' })
      return true
    } catch (err) {
      console.log('Error in admin.js/deleteExistingSystemUser()')
      throw err
    }
  }

  async loginAdmin () {
    // console.log(`loginAdmin() running.`)
    let existingUser

    try {
      // Read the exising file
      existingUser = await _this.jsonFiles.readJSON(JSON_PATH)
      // console.log(`existingUser: ${JSON.stringify(existingUser, null, 2)}`)

      // Log in as the user.
      const options = {
        method: 'POST',
        url: `${LOCALHOST}/auth`,
        headers: {
          Accept: 'application/json'
        },
        data: {
          email: existingUser.email,
          password: existingUser.password
        }
      }
      const result = await _this.axios.request(options)
      // console.log(`result1: ${JSON.stringify(result, null, 2)}`)
      return result
    } catch (err) {
      console.error('Error in admin.js/loginAdmin().')

      // console.error(`existingUser: ${JSON.stringify(existingUser, null, 2)}`)

      throw err
    }
  }

  _randomString (length) {
    let text = ''
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
}

export default Admin

```

`/home/trout/work/psf/code/bch-dex/src/adapters/passport.js`:

```js
/*
  koa-passport is an authorization library used for different authentication schemes.
*/

import passport from 'koa-passport'

let _this
class Passport {
  constructor () {
    _this = this
    this.passport = passport
  }

  async authUser (ctx) {
    return new Promise((resolve, reject) => {
      try {
        if (!ctx) throw new Error('ctx is required')

        _this.passport.authenticate('local', (err, user) => {
          try {
            if (err) throw err

            resolve(user)
          } catch (err) {
            return reject(err)
          }
        })(ctx, null)
      } catch (err) {
        return reject(err)
      }
    })
  }
}

export default Passport

```

`/home/trout/work/psf/code/bch-dex/src/adapters/webhook.js`:

```js
/*
  The (Clean Architecture) Adapter for manageing a webhook connection to P2WDB.
*/

import config from '../../config/index.js'

import axios from 'axios'

let _this

class WebHook {
  constructor () {
    _this = this
    _this.config = config
    _this.axios = axios
  }

  // REST petition to create a webhook in p2wdb-service
  async createWebhook (url) {
    try {
      if (!url || typeof url !== 'string') {
        throw new Error('url must be a string')
      }

      const endpoint = _this.config.webhookService

      const obj = {
        appId: this.config.p2wdbAppId,
        url
      }

      const result = await axios.post(endpoint, obj)

      return result.data
    } catch (err) {
      console.log('Error in adapters/webhook/createWebHook()')
      throw err
    }
  }

  // REST petition to delete a webhook in p2wdb-service
  async deleteWebhook (url) {
    try {
      if (!url || typeof url !== 'string') {
        throw new Error('url must be a string')
      }

      const endpoint = _this.config.webhookService

      const obj = {
        appId: this.config.p2wdbAppId,
        url
      }

      const result = await axios.delete(endpoint, { data: obj })

      return result.data
    } catch (err) {
      console.log('Error in adapters/webhook/deleteWebHook()')
      throw err
    }
  }

  // Returns a promise that will not resolve until a webhook has been successfully
  // created with the P2WDB.
  // Dev Note: This was created because establishing a webhook between bch-dex
  // and the P2WDB at startup is critical. If it's not established, then bch-dex
  // can not 'see' new Offers and Counter Offers.
  async waitUntilSuccess (url) {
    try {
      let success = false

      do {
        try {
          // Delete an old webhook if it exists.
          await this.deleteWebhook(this.config.webhookTarget)
        } catch (err) {
          /* exit quietly */
          // console.log('err deleting webhook: ', err)
        }

        try {
          await this.createWebhook(this.config.webhookTarget)
          console.log('Webhook created')
          success = true
        } catch (err) {
          const now = new Date()
          console.log(`${now.toLocaleString()}: Error trying to create webhook with P2WDB. Trying again...`)
          await sleep(2000)
        }
      } while (!success)

      return true
    } catch (err) {
      console.error('Error in webhook.js/waitUntilSuccess()')
      throw err
    }
  }
}

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default WebHook

```

`/home/trout/work/psf/code/bch-dex/src/adapters/fullstack-jwt.js`:

```js
/*
  A library of utility functions for working with FullStack.cash JWT tokens.

  Feel free to copy this library into your own app, as well as the unit tests
  for this file.
*/

import JwtLib from 'jwt-bch-lib'

import BCHJS from '@psf/bch-js'

class FullStackJWT {
  constructor (localConfig = {}) {
    // Input Validation
    this.authServer = localConfig.authServer
    if (!this.authServer || typeof this.authServer !== 'string') {
      throw new Error(
        'Must pass a url for the AUTH server when instantiating FullStackJWT class.'
      )
    }
    this.apiServer = localConfig.apiServer
    if (!this.apiServer || typeof this.apiServer !== 'string') {
      throw new Error(
        'Must pass a url for the API server when instantiating FullStackJWT class.'
      )
    }
    this.login = localConfig.fullstackLogin
    if (!this.login || typeof this.login !== 'string') {
      throw new Error(
        'Must pass a FullStack.cash login (email) instantiating FullStackJWT class.'
      )
    }
    this.password = localConfig.fullstackPassword
    if (!this.password || typeof this.password !== 'string') {
      throw new Error(
        'Must pass a FullStack.cash account password when instantiating FullStackJWT class.'
      )
    }

    // Encapsulate dependencies
    this.jwtLib = new JwtLib({
      // Overwrite default values with the values in the config file.
      server: this.authServer,
      login: this.login,
      password: this.password
    })

    // State
    this.apiToken = '' // Default value.
    this.bchjs = {}
  }

  // Get's a JWT token from FullStack.cash.
  async getJWT () {
    try {
      // Log into the auth server.
      await this.jwtLib.register()

      this.apiToken = this.jwtLib.userData.apiToken
      if (!this.apiToken) {
        throw new Error('This account does not have a JWT')
      }
      console.log(`Retrieved JWT token: ${this.apiToken}\n`)

      // Ensure the JWT token is valid to use.
      const isValid = await this.jwtLib.validateApiToken()

      // Get a new token with the same API level, if the existing token is not
      // valid (probably expired).
      if (!isValid.isValid) {
        this.apiToken = await this.jwtLib.getApiToken(
          this.jwtLib.userData.apiLevel
        )
        console.log(
          `The JWT token was not valid. Retrieved new JWT token: ${this.apiToken}\n`
        )
      } else {
        console.log('JWT token is valid.\n')
      }

      return this.apiToken
    } catch (err) {
      console.error(
        `Error trying to log into ${this.server} and retrieve JWT token.`
      )
      throw err
    }
  }

  // Create an instance of bchjs with the validated JWT token. Returns this
  // instance of bch-js.
  instanceBchjs () {
    this.bchjs = new BCHJS({
      restURL: this.apiServer,
      apiToken: this.apiToken
    })

    return this.bchjs
  }
}

export default FullStackJWT

```

`/home/trout/work/psf/code/bch-dex/src/adapters/bch.js`:

```js
/*
  This library contains methods for working with the BCHN and BCHA blockchains.
*/

// Public npm libraries
import BCHJS from '@psf/bch-js'

import MsgLib from 'bch-message-lib'
import BchWallet from 'minimal-slp-wallet'

class Bch {
  constructor () {
    // Encapsulate dependencies
    this.bchjs = new BCHJS()
    this.PSF_TOKEN_ID =
      '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'
    this.wallet = new BchWallet(undefined, { noUpdate: true })
    this.msgLib = new MsgLib({ wallet: this.wallet })
  }

  // Verify that the entry was signed by a specific BCH address.
  _verifySignature (verifyObj) {
    try {
      // Expand the input object.
      const { offerBchAddr, signature, sigMsg } = verifyObj

      // Convert to BCH address.
      // const scrubbedAddr = this.bchjs.SLP.Address.toCashAddress(slpAddress)

      const isValid = this.bchjs.BitcoinCash.verifyMessage(
        offerBchAddr,
        signature,
        sigMsg
      )

      return isValid
    } catch (err) {
      console.error('Error in bch.js/_verifySignature()')
      throw err
    }
  }

  // Gets the total psf token balance
  // async getPSFTokenBalance (slpAddress) {
  //   try {
  //     if (!slpAddress || typeof slpAddress !== 'string') {
  //       throw new Error('slpAddress must be a string')
  //     }
  //     let psfBalance = 0
  //     const balances = await this.bchjs.SLP.Utils.balancesForAddress(
  //       slpAddress
  //     )
  //
  //     // Sums all the balances of all tokens
  //     // that match the psf token ID
  //     for (let i = 0; i < balances.length; i++) {
  //       if (balances[i].tokenId === this.PSF_TOKEN_ID) {
  //         psfBalance += balances[i].balance
  //       }
  //     }
  //
  //     return psfBalance
  //   } catch (err) {
  //     console.error('Error in bch.js/getPSFTokenBalance()')
  //     throw err
  //   }
  // }

  async getMerit (slpAddr) {
    try {
      if (!slpAddr || typeof slpAddr !== 'string') {
        throw new Error('slpAddr must be a string')
      }
      const merit = await this.msgLib.merit.agMerit(slpAddr, this.PSF_TOKEN_ID)
      return merit
    } catch (error) {
      console.error('error in bch.js/getMerit()')
      throw error
    }
  }
}

export default Bch

```

`/home/trout/work/psf/code/bch-dex/src/adapters/ipfs/index.js`:

```js
/*
  top-level IPFS library that combines the individual IPFS-based libraries.
*/

// Local libraries
import IpfsAdapter from './ipfs.js'

import IpfsCoordAdapter from './ipfs-coord.js'
import config from '../../../config/index.js'

class IPFS {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.ipfsAdapter = new IpfsAdapter()
    this.IpfsCoordAdapter = IpfsCoordAdapter
    this.process = process
    this.config = config

    this.ipfsCoordAdapter = {} // placeholder

    // Properties of this class instance.
    this.isReady = false
  }

  // Provides a global start() function that triggers the start() function in
  // the underlying libraries.
  async start () {
    try {
      // Start IPFS
      await this.ipfsAdapter.start()
      console.log('IPFS is ready.')

      // this.ipfs is a Promise that will resolve into an instance of an IPFS node.
      this.ipfs = this.ipfsAdapter.ipfs

      // Start ipfs-coord
      this.ipfsCoordAdapter = new this.IpfsCoordAdapter({
        ipfs: this.ipfs,
        tcpPort: this.config.ipfsTcpPort,
        wsPort: this.config.ipfsWsPort
      })
      await this.ipfsCoordAdapter.start()
      console.log('ipfs-coord is ready.')

      // Subscribe to the chat pubsub channel
      await this.ipfsCoordAdapter.subscribeToChat()

      return true
    } catch (err) {
      console.error('Error in adapters/ipfs/index.js/start()')

      // If error is due to a lock file issue. Kill the process, so that
      // Docker or pm2 has a chance to restart the service.
      if (err.message.includes('Lock already being held')) {
        this.process.exit(1)
      }

      throw err
    }
  }

  // Get the status of this IPFS node.
  // Create an object with different metrics about this IPFS node, then return
  // the object.
  getStatus () {
    try {
      const statusObj = {
        ipfsId: this.ipfsCoordAdapter.ipfsCoord.thisNode.ipfsId,
        multiAddrs: this.ipfsCoordAdapter.ipfsCoord.thisNode.ipfsMultiaddrs,
        bchAddr: this.ipfsCoordAdapter.ipfsCoord.thisNode.bchAddr,
        slpAddr: this.ipfsCoordAdapter.ipfsCoord.thisNode.slpAddr,
        pubKey: this.ipfsCoordAdapter.ipfsCoord.thisNode.pubKey,
        peers: this.ipfsCoordAdapter.ipfsCoord.thisNode.peerList.length,
        relays: this.ipfsCoordAdapter.ipfsCoord.thisNode.relayData.length
      }

      return statusObj
    } catch (err) {
      console.error('Error in ipfs-coord.js/getStatus()')
      throw err
    }
  }

  // Get details on the other peers this node is connected to.
  async getPeers (showAll) {
    try {
      const peerData = this.ipfsCoordAdapter.ipfsCoord.thisNode.peerData
      // console.log(`peerData: ${JSON.stringify(peerData, null, 2)}`)

      let ipfsPeers =
        await this.ipfsCoordAdapter.ipfsCoord.adapters.ipfs.getPeers()
      // console.log('ipfsPeers: ', ipfsPeers)

      ipfsPeers = this._removeDuplicatePeers(ipfsPeers)
      // console.log('filtered ipfsPeers: ', ipfsPeers)

      const peerDataOut = []

      // Loop through each IPFS peer and hydrate it with data from the peerData.
      for (let i = 0; i < ipfsPeers.length; i++) {
        const thisPeer = {
          peer: ipfsPeers[i]
        }

        // if (!showAll) {
        //   // Delete properties that don't contain good info.
        //   delete thisPeer.muxer
        //   delete thisPeer.latency
        //   delete thisPeer.streams
        // }

        // Get the ipfs-coord peer data for this peer.
        let thisPeerData = peerData.filter((x) =>
          x.from.includes(thisPeer.peer)
        )
        thisPeerData = thisPeerData[0]
        // console.log('thisPeerData: ', thisPeerData)

        // Skip if peerData for this IPFS peer could not be found.
        // if (!thisPeerData) continue

        try {
          // console.log('thisPeerData: ', thisPeerData)

          // Add data to the IPFS peer data.
          thisPeer.name = thisPeerData.data.jsonLd.name
          thisPeer.protocol = thisPeerData.data.jsonLd.protocol
          thisPeer.version = thisPeerData.data.jsonLd.version
          thisPeer.connectionAddr = thisPeerData.data.connectionAddr

          if (showAll) {
            // Add all the peer data.
            thisPeer.peerData = thisPeerData
          }
        } catch (err) {
          console.warn(
            `warning: ${thisPeer.peer}: ${err.message}`
          )
        }

        peerDataOut.push(thisPeer)
      }

      return peerDataOut
    } catch (err) {
      console.error('Error in getPeers(): ', err)
      throw err
    }
  }

  // Expects an array of peers and returns an array of peers with duplicates
  // removed.
  // This function is used by getPeers()
  _removeDuplicatePeers (arr) {
    // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
    return arr.filter((v, i, a) => a.findIndex((t) => t === v) === i)
  }

  // Get data about the known Circuit Relays. Hydrate with data from peers list.
  getRelays () {
    try {
      const relayData = this.ipfsCoordAdapter.ipfsCoord.thisNode.relayData
      const peerData = this.ipfsCoordAdapter.ipfsCoord.thisNode.peerData
      // console.log(`relayData: ${JSON.stringify(relayData, null, 2)}`)
      // console.log(`peerData: ${JSON.stringify(peerData, null, 2)}`)

      for (let i = 0; i < relayData.length; i++) {
        const thisRelay = relayData[i]

        // Find the peer that corresponds to this relay.
        const thisPeer = peerData.filter((x) =>
          x.from.includes(thisRelay.ipfsId)
        )
        // console.log('thisPeer: ', thisPeer)

        // If the peer couldn't be found, skip.
        if (!thisPeer.length) {
          thisRelay.name = ''
          thisRelay.description = ''
          continue
        }

        thisRelay.name = thisPeer[0].data.jsonLd.name
        thisRelay.description = thisPeer[0].data.jsonLd.description
      }

      const v1Relays = this.config.v1Relays

      return { v2Relays: relayData, v1Relays }
    } catch (err) {
      console.error('Error in getRelays(): ', err)
      throw err
    }
  }
}

export default IPFS

```

`/home/trout/work/psf/code/bch-dex/src/adapters/ipfs/ipfs-coord.js`:

```js
/*
  Clean Architecture Adapter for ipfs-coord.
  This library deals with ipfs-coord library so that the apps business logic
  doesn't need to have any specific knowledge of the library.
*/

// Global npm libraries
// import IpfsCoord from 'ipfs-coord-esm'
import IpfsCoord from 'helia-coord'

// import BCHJS from '@psf/bch-js';
import SlpWallet from 'minimal-slp-wallet'
import { publicIpv4 } from 'public-ip'

// Local libraries
import config from '../../../config/index.js'

// const JSONRPC = require('../../controllers/json-rpc/')

let _this

class IpfsCoordAdapter {
  constructor (localConfig = {}) {
    // Dependency injection.
    this.ipfs = localConfig.ipfs
    if (!this.ipfs) {
      throw new Error(
        'Instance of IPFS must be passed when instantiating ipfs-coord.'
      )
    }

    // Encapsulate dependencies
    this.IpfsCoord = IpfsCoord
    this.ipfsCoord = {}
    // this.bchjs = new BCHJS()
    this.wallet = new SlpWallet()
    this.config = config
    this.publicIp = publicIpv4

    // Properties of this class instance.
    this.isReady = false

    _this = this
  }

  async start () {
    const circuitRelayInfo = {}

    // Wait for the BCH wallet to create the wallet.
    await this.wallet.walletInfoPromise

    // If configured as a Circuit Relay, get the public IP addresses for this node.
    if (this.config.isCircuitRelay) {
      try {
        const ip4 = await this.publicIp()
        // const ip6 = await publicIp.v6()

        circuitRelayInfo.ip4 = ip4
        circuitRelayInfo.tcpPort = this.config.ipfsTcpPort

        // Domain used by browser-based secure websocket connections.
        circuitRelayInfo.crDomain = this.config.crDomain
      } catch (err) {
        /* exit quietly */
      }
    }

    const nullLog = () => {}

    const ipfsCoordOptions = {
      ipfs: this.ipfs,
      type: 'node.js',
      // type: 'browser',
      wallet: this.wallet,
      // privateLog: console.log, // Default to console.log
      privateLog: nullLog,
      isCircuitRelay: this.config.isCircuitRelay,
      circuitRelayInfo,
      apiInfo: this.config.apiInfo,
      announceJsonLd: this.config.announceJsonLd,
      debugLevel: this.config.debugLevel,
      v1Relays: this.config.v1Relays,
      tcpPort: this.config.ipfsTcpPort
    }

    // Production env uses external go-ipfs node.
    // if (this.config.isProduction) {
    //   ipfsCoordOptions.nodeType = 'external'
    // }

    this.ipfsCoord = new this.IpfsCoord(ipfsCoordOptions)

    // Wait for the ipfs-coord library to signal that it is ready.
    await this.ipfsCoord.start()

    // Signal that this adapter is ready.
    this.isReady = true

    return this.isReady
  }

  // Expects router to be a function, which handles the input data from the
  // pubsub channel. It's expected to be capable of routing JSON RPC commands.
  attachRPCRouter (router) {
    try {
      _this.ipfsCoord.privateLog = router
      _this.ipfsCoord.adapters.pubsub.privateLog = router
    } catch (err) {
      console.error('Error in attachRPCRouter()')
      throw err
    }
  }

  // Subscribe to the chat pubsub channel
  async subscribeToChat () {
    // TODO: Allow user to replace nullog with their own log handler at startup.
    const nullLog = () => {}

    await this.ipfsCoord.adapters.pubsub.subscribeToPubsubChannel(
      this.config.chatPubSubChan,
      nullLog,
      this.ipfsCoord.thisNode
    )
  }
}

export default IpfsCoordAdapter

```

`/home/trout/work/psf/code/bch-dex/src/adapters/ipfs/ipfs.js`:

```js
/*
  Clean Architecture Adapter for IPFS.
  This library deals with IPFS so that the apps business logic doesn't need
  to have any specific knowledge of the js-ipfs library.

  TODO: Add the external IP address to the list of multiaddrs advertised by
  this node. See this GitHub Issue for details:
  https://github.com/Permissionless-Software-Foundation/ipfs-service-provider/issues/38
*/

// Global npm libraries
import { createHelia } from 'helia'
import fs from 'fs'
import { FsBlockstore } from 'blockstore-fs'
import { FsDatastore } from 'datastore-fs'
import { createLibp2p } from 'libp2p'
import { tcp } from '@libp2p/tcp'
import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
// import { bootstrap } from '@libp2p/bootstrap'
// import { identifyService } from 'libp2p/identify'
import { identify, identifyPush } from '@libp2p/identify'
import { circuitRelayServer, circuitRelayTransport } from '@libp2p/circuit-relay-v2'
// import { circuitRelayServer } from '@libp2p/circuit-relay-v2'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { webSockets } from '@libp2p/websockets'
import { publicIpv4 } from 'public-ip'
import { multiaddr } from '@multiformats/multiaddr'
import { webRTC, webRTCDirect } from '@libp2p/webrtc'
import { keychain } from '@libp2p/keychain'
import { unixfs } from '@helia/unixfs'
// import { generateKeyPairFromSeed } from '@libp2p/crypto/keys'
// import crypto from 'crypto'
import { ping } from '@libp2p/ping'
import { loadOrCreateSelfKey } from '@libp2p/config'

// Local libraries
import config from '../../../config/index.js'
import JsonFiles from '../json-files.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
// console.log('__dirname: ', __dirname)

const ROOT_DIR = `${__dirname}../../../`
const IPFS_DIR = `${__dirname}../../../.ipfsdata/ipfs`

class IpfsAdapter {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.config = config
    this.fs = fs
    this.createLibp2p = createLibp2p
    this.publicIp = publicIpv4
    this.multiaddr = multiaddr
    this.jsonFiles = new JsonFiles()
    this.keychain = keychain
    this.createHelia = createHelia

    // Properties of this class instance.
    this.isReady = false

    // Bind 'this' object to all subfunctions
    this.start = this.start.bind(this)
    this.createNode = this.createNode.bind(this)
    this.stop = this.stop.bind(this)
    this.ensureBlocksDir = this.ensureBlocksDir.bind(this)
    // this.getPrivateKey = this.getPrivateKey.bind(this)
    this.getSeed = this.getSeed.bind(this)
  }

  // Start an IPFS node.
  async start () {
    try {
      // Ensure the directory structure exists that is needed by the IPFS node to store data.
      this.ensureBlocksDir()

      // Create an IPFS node
      const ipfs = await this.createNode()
      // console.log('ipfs: ', ipfs)

      this.id = ipfs.libp2p.peerId.toString()
      console.log('IPFS ID: ', this.id)

      // Attempt to guess our ip4 IP address.
      const ip4 = await this.publicIp()
      let detectedMultiaddr = `/ip4/${ip4}/tcp/${this.config.ipfsTcpPort}/p2p/${this.id}`
      detectedMultiaddr = this.multiaddr(detectedMultiaddr)

      // Get the multiaddrs for the node.
      const multiaddrs = ipfs.libp2p.getMultiaddrs()
      multiaddrs.push(detectedMultiaddr)
      console.log('Multiaddrs: ', multiaddrs)

      this.multiaddrs = multiaddrs

      // Signal that this adapter is ready.
      this.isReady = true

      this.ipfs = ipfs

      return this.ipfs
    } catch (err) {
      console.error('Error in ipfs.js/start()')

      // If IPFS crashes because the /blocks directory is full, wipe the directory.
      // if (err.message.includes('No space left on device')) {
      //   this.rmBlocksDir()
      // }

      throw err
    }
  }

  // This function creates an IPFS node using Helia.
  // It returns the node as an object.
  async createNode () {
    try {
      // Create block and data stores.
      const blockstore = new FsBlockstore(`${IPFS_DIR}/blockstore`)
      const datastore = new FsDatastore(`${IPFS_DIR}/datastore`)

      // Get the private key.
      // const privateKey = await this.getPrivateKey()
      // console.log('privateKey: ', privateKey)

      // Create an identity
      const keychainInit = {
        selfKey: 'myKey',
        pass: await this.getSeed()
      }
      const privateKey = await loadOrCreateSelfKey(datastore, keychainInit)

      // Configure services
      const services = {
        identify: identify(),
        identifyPush: identifyPush(),
        pubsub: gossipsub({ allowPublishToZeroTopicPeers: true }),
        ping: ping(),
        keychain: keychain(keychainInit)
      }
      if (this.config.isCircuitRelay) {
        console.log('Helia (IPFS) node IS configured as Circuit Relay')
        services.relay = circuitRelayServer({ // makes the node function as a relay server
          hopTimeout: 30 * 1000, // incoming relay requests must be resolved within this time limit
          reservations: {
            maxReservations: 15, // how many peers are allowed to reserve relay slots on this server
            reservationClearInterval: 300 * 1000, // how often to reclaim stale reservations
            applyDefaultLimit: true, // whether to apply default data/duration limits to each relayed connection
            defaultDurationLimit: 2 * 60 * 1000, // the default maximum amount of time a relayed connection can be open for
            defaultDataLimit: BigInt(2 << 7) // the default maximum number of bytes that can be transferred over a relayed connection
          },
          maxInboundHopStreams: 32, // how many inbound HOP streams are allow simultaneously
          maxOutboundHopStreams: 64 // how many outbound HOP streams are allow simultaneously
        })
      } else {
        console.log('Helia (IPFS) node IS NOT configured as Circuit Relay')
      }

      const transports = [
        tcp(),
        webSockets(),
        circuitRelayTransport({
          discoverRelays: 3,
          reservationConcurrency: 3
        }),
        webRTC(),
        webRTCDirect()
      ]

      // libp2p is the networking layer that underpins Helia
      const libp2p = await this.createLibp2p({
        // peerId,
        privateKey,
        datastore,
        addresses: {
          listen: [
            '/ip4/127.0.0.1/tcp/0',
            `/ip4/0.0.0.0/tcp/${this.config.ipfsTcpPort}`,
            `/ip4/0.0.0.0/tcp/${this.config.ipfsWsPort}/ws`,
            '/webrtc',
            '/p2p-circuit'
          ]
        },
        transports,
        connectionEncrypters: [
          noise()
        ],
        streamMuxers: [
          yamux()
        ],
        services
      })

      // create a Helia node
      const helia = await this.createHelia({
        blockstore,
        datastore,
        libp2p
      })

      // Attach IPFS file system.
      const fs = unixfs(helia)
      helia.fs = fs

      return helia
    } catch (err) {
      console.error('Error creating Helia node: ', err)

      throw err
    }
  }

  async stop () {
    await this.ipfs.stop()

    return true
  }

  // Ensure that the directories exist to store blocks from the IPFS network.
  // This function is called at startup, before the IPFS node is started.
  ensureBlocksDir () {
    try {
      !this.fs.existsSync(`${ROOT_DIR}.ipfsdata`) && this.fs.mkdirSync(`${ROOT_DIR}.ipfsdata`)

      !this.fs.existsSync(`${IPFS_DIR}`) && this.fs.mkdirSync(`${IPFS_DIR}`)

      !this.fs.existsSync(`${IPFS_DIR}/blockstore`) && this.fs.mkdirSync(`${IPFS_DIR}/blockstore`)

      !this.fs.existsSync(`${IPFS_DIR}/datastore`) && this.fs.mkdirSync(`${IPFS_DIR}/datastore`)

      !this.fs.existsSync(`${IPFS_DIR}/datastore/pkcs8`) && this.fs.mkdirSync(`${IPFS_DIR}/datastore/pkcs8`)

      // !fs.existsSync(`${IPFS_DIR}/datastore/peers`) && fs.mkdirSync(`${IPFS_DIR}/datastore/peers`)

      return true
    } catch (err) {
      console.error('Error in adapters/ipfs.js/ensureBlocksDir(): ', err)
      throw err
    }
  }

  // This function opens the seed used to generate the key for this IPFS peer.
  // The seed is stored in a JSON file. If it doesn't exist, a new one is created.
  async getSeed () {
    try {
      let seed

      const filename = `${IPFS_DIR}/seed.json`

      try {
        // Try to read the JSON file containing the seed.
        seed = await this.jsonFiles.readJSON(filename)
      } catch (err) {
        const seedNum = Math.floor(Math.random() * 1000000000000000000000)
        seed = seedNum.toString()

        // Save the newly generated seed
        await this.jsonFiles.writeJSON(seed, filename)
      }

      // console.log('getSeed() seed: ', seed)

      return seed
    } catch (err) {
      console.error('Error in adapters/ipfs/ipfs.js/getSeed()')
      throw err
    }
  }

  // Get the private key from disk, or generate a new one and save it,
  // if it doesn't exist.
  // async getPrivateKey () {
  //   try {
  //     const filename = `${IPFS_DIR}/privkey.json`

  //     let privKeyHex
  //     try {
  //       // Try to read the JSON file containing the seed.
  //       privKeyHex = await this.jsonFiles.readJSON(filename)
  //       // console.log('saved privKeyHex: ', privKeyHex)
  //     } catch (err) {
  //       // Generate a new private key and save it to disk.

  //       // Generate a new private key and save it to disk.
  //       const randomBuffer = crypto.randomBytes(32)
  //       // console.log('randomBuffer: ', randomBuffer)

  //       privKeyHex = randomBuffer.toString('hex')
  //       // console.log('new privKeyHex: ', privKeyHex)

  //       // Save the newly generated seed
  //       await this.jsonFiles.writeJSON(privKeyHex, filename)
  //     }

  //     // Convert the saved hex string to a buffer.
  //     const privKeyBuf = Buffer.from(privKeyHex, 'hex')

  //     // Convert the buffer to a Uint8Array 'seed'
  //     const seed = new Uint8Array(privKeyBuf.buffer, privKeyBuf.byteOffset, privKeyBuf.byteLength)
  //     // console.log('seed: ', seed)

  //     // Generate a ED25519 key pair.
  //     const privKey = await generateKeyPairFromSeed('Ed25519', seed)

  //     return privKey
  //   } catch (err) {
  //     console.error('Error in adapters/ipfs/ipfs.js/getPrivateKey(): ', err)
  //     throw err
  //   }
  // }
}

export default IpfsAdapter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/index.js`:

```js
/*
  This is a top-level library that encapsulates all the additional Controllers.
  The concept of Controllers comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Public npm libraries.

// Local libraries
import Adapters from '../adapters/index.js'
import JSONRPC from './json-rpc/index.js'
import UseCases from '../use-cases/index.js'
import RESTControllers from './rest-api/index.js'
import TimerControllers from './timer-controllers.js'
import config from '../../config/index.js'

class Controllers {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.adapters = new Adapters()
    this.useCases = new UseCases({ adapters: this.adapters })
    this.timerControllers = new TimerControllers({ adapters: this.adapters, useCases: this.useCases })
    this.config = config

    // Bind 'this' object to all subfunction
    this.initAdapters = this.initAdapters.bind(this)
    this.initUseCases = this.initUseCases.bind(this)
    this.attachRESTControllers = this.attachRESTControllers.bind(this)
    this.attachControllers = this.attachControllers.bind(this)
    this.attachRPCControllers = this.attachRPCControllers.bind(this)
  }

  // Spin up any adapter libraries that have async startup needs.
  async initAdapters () {
    await this.adapters.start()
  }

  // Run any Use Cases to startup the app.
  async initUseCases () {
    await this.useCases.start()
  }

  // Top-level function for this library.
  // Start the various Controllers and attach them to the app.
  attachRESTControllers (app) {
    const restControllers = new RESTControllers({
      adapters: this.adapters,
      useCases: this.useCases
    })

    // Attach the REST API Controllers associated with the boilerplate code to the Koa app.
    restControllers.attachRESTControllers(app)
  }

  // Attach any other controllers other than REST API controllers.
  async attachControllers (app) {
    if (this.config.useIpfs) {
      // Attach JSON RPC controllers
      this.attachRPCControllers()
    }

    // Attach and start the timer controllers
    this.timerControllers.startTimers()
  }

  // Add the JSON RPC router to the ipfs-coord adapter.
  attachRPCControllers () {
    const jsonRpcController = new JSONRPC({
      adapters: this.adapters,
      useCases: this.useCases
    })

    // Attach the input of the JSON RPC router to the output of ipfs-coord.
    this.adapters.ipfs.ipfsCoordAdapter.attachRPCRouter(
      jsonRpcController.router
    )
  }
}

export default Controllers

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/index.js`:

```js
/*
  This index file for the Clean Architecture Controllers loads dependencies,
  creates instances, and attaches the controller to REST API endpoints for
  Koa.
*/

// Public npm libraries.

// Local libraries
import AuthRESTController from './auth/index.js'
import UserRouter from './users/index.js'
import ContactRESTController from './contact/index.js'
import LogsRESTController from './logs/index.js'
import IpfsRESTController from './ipfs/index.js'
import config from '../../../config/index.js'
import EntryRouter from './entry/index.js'
import OfferRouter from './offer/index.js'
import OrderRouter from './order/index.js'
import P2WDBRouter from './p2wdb/index.js'
import UsageRESTController from './usage/index.js'

class RESTControllers {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating REST Controller libraries.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating REST Controller libraries.'
      )
    }

    // Bind 'this' object to all subfunctions.
    this.attachRESTControllers = this.attachRESTControllers.bind(this)

    // Encapsulate dependencies
    this.config = config
  }

  attachRESTControllers (app) {
    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    if (!this.config.noMongo) {
      // Attach the REST API Controllers associated with the /auth route
      const authRESTController = new AuthRESTController(dependencies)
      authRESTController.attach(app)

      // Attach the REST API Controllers associated with the /user route
      const userRouter = new UserRouter(dependencies)
      userRouter.attach(app)
    }

    // Attach the REST API Controllers associated with the /contact route
    const contactRESTController = new ContactRESTController(dependencies)
    contactRESTController.attach(app)

    // Attach the REST API Controllers associated with the /logs route
    const logsRESTController = new LogsRESTController(dependencies)
    logsRESTController.attach(app)

    // Attach the REST API Controllers associated with the /ipfs route
    const ipfsRESTController = new IpfsRESTController(dependencies)
    ipfsRESTController.attach(app)

    // Attach the REST API Controllers associated with the /entry route
    const entryRouter = new EntryRouter(dependencies)
    entryRouter.attach(app)

    const offerRouter = new OfferRouter(dependencies)
    offerRouter.attach(app)

    const orderRouter = new OrderRouter(dependencies)
    orderRouter.attach(app)

    const p2wdbRouter = new P2WDBRouter(dependencies)
    p2wdbRouter.attach(app)

    // Attach the REST API Controllers associated with the /usage route
    const usageRESTController = new UsageRESTController(dependencies)
    usageRESTController.attach(app)
  }
}

export default RESTControllers

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/offer/index.js`:

```js
/*
  REST API library for /offer route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import OfferRESTControllerLib from './controller.js'

let _this

class OfferRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /offer REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /offer REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.offerRESTController = new OfferRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/offer'
    this.router = new Router({ prefix: baseUrl })

    _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attached REST API controllers.'
      )
    }

    // 12/3/24 CT:
    // Note: The createOffer() path was used by a P2WDB webhook to generate an
    // Offer from and Order. This has been deprecated and Offers are now created
    // by a Timer Controller monitoring a Nostr topic.

    // Define the routes and attach the controller.
    // this.router.post('/', _this.offerRESTController.createOffer) // Deprecated.
    this.router.post('/take', _this.offerRESTController.takeOffer)
    this.router.get('/list/all/:page', _this.offerRESTController.listOffers)
    this.router.get('/list/nft/:page', _this.offerRESTController.listNftOffers)
    this.router.get('/list/fungible/:page', _this.offerRESTController.listFungibleOffers)

    // Attach the Controller routes to the Koa app.
    app.use(_this.router.routes())
    app.use(_this.router.allowedMethods())
  }
}

export default OfferRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/offer/controller.js`:

```js
/*
  REST API Controller library for the /offer route
*/

import wlogger from '../../../adapters/wlogger.js'

class OfferRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /offer REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /offer REST Controller.'
      )
    }

    // Encapsulate dependencies
    this.OfferModel = this.adapters.localdb.Offer
    // this.userUseCases = this.useCases.user

    // Bind 'this' object to all subfunctions.
    this.createOffer = this.createOffer.bind(this)
    this.listOffers = this.listOffers.bind(this)
    this.listNftOffers = this.listNftOffers.bind(this)
    this.listFungibleOffers = this.listFungibleOffers.bind(this)
    this.takeOffer = this.takeOffer.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  // No api-doc documentation because this wont be a public endpoint
  async createOffer (ctx) {
    try {
      console.log('body: ', ctx.request.body)

      const offerObj = ctx.request.body

      await this.useCases.offer.createOffer(offerObj)

      ctx.body = {
        success: true
      }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      this.handleError(ctx, err)
    }
  }

  // curl -X GET http://localhost:5700/offer/list/all/0
  async listOffers (ctx) {
    try {
      let page = ctx.params.page
      if (!page) page = 0

      const offers = await this.useCases.offer.listOffers(page)

      ctx.body = offers
    } catch (err) {
      console.log('Error in listOffers REST API handler: ', err)
      this.handleError(ctx, err)
    }
  }

  // curl -X GET http://localhost:5700/offer/list/nft/0
  async listNftOffers (ctx) {
    try {
      let page = ctx.params.page
      if (!page) page = 0

      const offers = await this.useCases.offer.listNftOffers(page)

      ctx.body = offers
    } catch (err) {
      console.log('Error in listNftOffers REST API handler: ', err)
      this.handleError(ctx, err)
    }
  }

  // curl -X GET http://localhost:5700/offer/list/fungible/0
  async listFungibleOffers (ctx) {
    try {
      let page = ctx.params.page
      if (!page) page = 0

      const offers = await this.useCases.offer.listFungibleOffers(page)

      ctx.body = offers
    } catch (err) {
      console.log('Error in Fungible REST API handler: ', err)
      this.handleError(ctx, err)
    }
  }

  // Currently only supports 'sell' offers, and will only buy the 'numTokens'
  // listed in the offer.
  async takeOffer (ctx) {
    try {
      console.log('REST API controller, body: ', ctx.request.body)

      const nostrEventId = ctx.request.body.nostrEventId

      const { eventId, noteId } = await this.useCases.offer.takeOffer(nostrEventId)

      ctx.body = { eventId, noteId }
    } catch (err) {
      wlogger.error('Error in takeOffer() REST API handler.')
      this.handleError(ctx, err)
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

export default OfferRESTControllerLib

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/contact/index.js`:

```js
/*
  REST API library for /contact route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import ContactRESTControllerLib from './controller.js'

class ContactRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Contact REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Contact REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.contactRESTController = new ContactRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/contact'
    this.router = new Router({ prefix: baseUrl })
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/email', this.contactRESTController.email)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

export default ContactRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/contact/controller.js`:

```js
/*
  Controller for the /contact REST API endpoints.
*/

/* eslint-disable no-useless-escape */
import ContactLib from '../../../adapters/contact.js'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const contactLib = new ContactLib()

let _this

class ContactController {
  constructor () {
    _this = this
    _this.contactLib = contactLib
  }

  /**
   * @api {post} /contact/email Send Email
   * @apiName SendMail
   * @apiGroup Contact
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "obj": { "email": "email@format.com", "formMessage": "a message" } }' localhost:5001/contact/email
   *
   * @apiParam {Object} obj           object (required)
   * @apiParam {String} obj.email Sender Email.
   * @apiParam {String} obj.formMessage Message.
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *
   *        success:true
   *
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async email (ctx) {
    try {
      const data = ctx.request.body
      const emailObj = data.obj
      await _this.contactLib.sendEmail(emailObj)

      ctx.body = {
        success: true
      }
    } catch (err) {
      _this.handleError(ctx, err)
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
export default ContactController

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/usage/index.js`:

```js
/*
  REST API library for the /usage route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import UsageRESTControllerLib from './controller.js'
import Validators from '../middleware/validators.js'

// let _this

class UsageRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating IPFS REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating IPFS REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.usageRESTController = new UsageRESTControllerLib(dependencies)
    this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/usage'
    this.router = new Router({ prefix: baseUrl })

    // _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.get('/', this.usageRESTController.getStatus)
    this.router.get('/ips', this.usageRESTController.getTopIps)
    this.router.get('/endpoints', this.usageRESTController.getTopEndpoints)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

// module.exports = BchRouter
export default UsageRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/usage/controller.js`:

```js
/*
  REST API Controller library for the /usage route
*/

// Global npm libraries

// Local libraries
import wlogger from '../../../adapters/wlogger.js'

class UsageRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /usage REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /usage REST Controller.'
      )
    }

    // Encapsulate dependencies

    // Bind 'this' object to all subfunctions
    this.getStatus = this.getStatus.bind(this)
    this.getTopIps = this.getTopIps.bind(this)
    this.getTopEndpoints = this.getTopEndpoints.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  /**
   * @api {get} /usage Get status on IPFS infrastructure
   * @apiPermission public
   * @apiName GetUsageStatus
   * @apiGroup REST Usage
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5020/usage
   *
   */
  getStatus (ctx) {
    try {
      // const status = await this.adapters.ipfs.getStatus()
      const status = this.useCases.usage.getRestSummary()

      ctx.body = { status }
    } catch (err) {
      wlogger.error('Error in usage/controller.js/getStatus(): ')
      // ctx.throw(422, err.message)
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /usage/ips Get top IP addresses consuming the REST API
   * @apiPermission public
   * @apiName GetUsageIPs
   * @apiGroup REST Usage
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5020/usage/ips
   *
   */
  getTopIps (ctx) {
    try {
      const ips = this.useCases.usage.getTopIps()

      ctx.body = { ips }
    } catch (err) {
      wlogger.error('Error in usage/controller.js/getTopIps(): ')
      // ctx.throw(422, err.message)
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /usage/endpoints Get top endpoints consumed from the REST API
   * @apiPermission public
   * @apiName GetUsageEndpoints
   * @apiGroup REST Usage
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5020/usage/endpoints
   *
   */
  getTopEndpoints (ctx) {
    try {
      const endpoints = this.useCases.usage.getTopEndpoints()

      ctx.body = { endpoints }
    } catch (err) {
      wlogger.error('Error in usage/controller.js/getTopEndpoints(): ')
      // ctx.throw(422, err.message)
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

// module.exports = IpfsRESTControllerLib
export default UsageRESTControllerLib

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/logs/index.js`:

```js
/*
  REST API library for /logs route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import LogsRESTControllerLib from './controller.js'

class LogsRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Logs REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Logs REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    this.logsRESTController = new LogsRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/logs'
    this.router = new Router({ prefix: baseUrl })
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', this.logsRESTController.getLogs)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

export default LogsRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/logs/controller.js`:

```js
import LogsApiLib from '../../../adapters/logapi.js'
const logsApiLib = new LogsApiLib()
let _this

class LogsApi {
  constructor () {
    _this = this
    _this.logsApiLib = logsApiLib
  }

  /**
   * @api {post} /logapi Parse and return the log files.
   * @apiPermission public
   * @apiName LogApi
   * @apiGroup Logs
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "password": "secretpasas" }' localhost:5000/logapi
   *
   * @apiParam {String} password Password (required)
   *
   * @apiSuccess {Array}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "username": "johndoe"
   *       }
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async getLogs (ctx) {
    try {
      // console.log('entering getLogs()')

      // Get the user-provided password.
      const password = ctx.request.body.password
      const result = await _this.logsApiLib.getLogs(password)
      ctx.body = result
    } catch (err) {
      if (err && err.message) {
        ctx.throw(422, err.message)
      } else {
        ctx.throw(500, 'Unhandled error')
      }
    }
  }
}

export default LogsApi

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/order/index.js`:

```js
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

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/order/controller.js`:

```js
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

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/middleware/error.js`:

```js
export default function errorMiddleware () {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  }
};

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/middleware/validators.js`:

```js
/*
  REST API validator middleware.

  These are a series of functions that ensure the user making a REST API
  matches a user in the database (or not). In can do fine-grain user control
  such as telling the difference between an admin, a normal user, and an
  anonymous user.

  This middleware is used to gatekeep access to different REST API resources.

  CT 9/17/22:
  This library was lightly refactored to make it work with the new unit tests.
  This not and the commented code below can be deleted once it is verified that
  this refactor did not result in any breaking changes.
*/

import User from '../../../adapters/localdb/models/users.js'

import config from '../../../../config/index.js'
import jwt from 'jsonwebtoken'
import wlogger from '../../../adapters/wlogger.js'

let _this

class Validators {
  constructor () {
    this.User = User
    this.jwt = jwt
    this.config = config

    _this = this
  }

  async ensureUser (ctx, next) {
    try {
      const token = _this.getToken(ctx)

      if (!token) {
        throw new Error('Token could not be retrieved from header')
      }

      let decoded = null
      try {
        // console.log(`token: ${JSON.stringify(token, null, 2)}`)
        // console.log(`config: ${JSON.stringify(config, null, 2)}`)
        decoded = _this.jwt.verify(token, config.token)
      } catch (err) {
        throw new Error('Could not verify JWT')
      }

      ctx.state.user = await _this.User.findById(decoded.id, '-password')

      if (!ctx.state.user) {
        // console.log('Err: Could not find user.')
        throw new Error('Could not find user')
      }

      // return next()
      return true
    } catch (error) {
      // console.log('Ensure user error: ', error)
      // console.log('ctx: ', ctx)
      ctx.status = 401
      ctx.throw(401, error.message)
    }
  }

  // This funciton is almost identical to ensureUser, except at the end, it verifies
  // that the 'type' associated with the user equals 'admin'.
  async ensureAdmin (ctx, next) {
    try {
      // console.log(`getToken: ${typeof (getToken)}`)
      const token = _this.getToken(ctx)

      if (!token) {
        // console.log(`Err: Token not provided.`)
        // ctx.throw(401)
        throw new Error('Token could not be retrieved from header')
      }

      let decoded = null
      try {
        // console.log(`token: ${JSON.stringify(token, null, 2)}`)
        // console.log(`config: ${JSON.stringify(config, null, 2)}`)
        decoded = _this.jwt.verify(token, config.token)
      } catch (err) {
        // console.log(`Err: Token could not be decoded: ${err}`)
        // ctx.throw(401)
        throw new Error('Could not verify JWT')
      }

      ctx.state.user = await _this.User.findById(decoded.id, '-password')
      if (!ctx.state.user) {
        // console.log(`Err: Could not find user.`)
        // ctx.throw(401)
        throw new Error('Could not find user')
      }

      if (ctx.state.user.type !== 'admin') {
        // ctx.throw(401, 'not admin')
        throw new Error('User is not an admin')
      }

      // return next()
      return true
    } catch (error) {
      ctx.status = 401
      ctx.throw(401, error.message)
    }
  }

  // This middleware ensures that the :id used in the API endpoint matches the
  // the ID used in the JWT, or failing that, the ID used in the JWT matches
  // an Admin user. This prevents situations like users updating other users
  // profiles or non-admins deleting users.
  async ensureTargetUserOrAdmin (ctx, next) {
    try {
      // console.log(`getToken: ${typeof (getToken)}`)
      const token = _this.getToken(ctx)

      if (!token) {
        // console.log(`Err: Token not provided.`)
        // ctx.throw(401)
        throw new Error('Token could not be retrieved from header')
      }

      // The user ID targeted in this API call.
      const targetId = ctx.params.id
      // console.log(`targetId: ${JSON.stringify(targetId, null, 2)}`)

      let decoded = null
      try {
        // console.log(`token: ${JSON.stringify(token, null, 2)}`)
        // console.log(`config: ${JSON.stringify(config, null, 2)}`)
        decoded = _this.jwt.verify(token, config.token)
      } catch (err) {
        console.log(`Err: Token could not be decoded: ${err}`)
        // ctx.throw(401)
        throw new Error('Could not verify JWT')
      }

      ctx.state.user = await _this.User.findById(decoded.id, '-password')
      if (!ctx.state.user) {
        // console.log(`Err: Could not find user.`)
        // ctx.throw(401)
        throw new Error('Could not find user')
      }
      // console.log('ctx.state.user: ', ctx.state.user)

      // console.log(`ctx.state.user: ${JSON.stringify(ctx.state.user, null, 2)}`)
      // Ensure the calling user and the target user are the same.

      if (ctx.state.user._id.toString() !== targetId.toString()) {
        wlogger.verbose(
          `Calling user and target user do not match! Calling user: ${ctx.state.user._id}, Target user: ${targetId}`
        )

        // If they don't match, then the calling user better be an admin.
        if (ctx.state.user.type !== 'admin') {
          // ctx.throw(401, 'not admin')
          throw new Error('User is not an admin')
        } else {
          wlogger.verbose("It's ok. The user is an admin.")
        }
      }

      // return next()
      return true
    } catch (error) {
      // console.log('Error in ensureTargetUserOrAdmin(): ', error)
      ctx.status = 401
      ctx.throw(401, error.message)
    }
  }

  getToken (ctx) {
    const header = ctx.request.header.authorization
    if (!header) {
      return null
    }
    const parts = header.split(' ')
    if (parts.length !== 2) {
      return null
    }
    const scheme = parts[0]
    const token = parts[1]
    if (/^Bearer$/i.test(scheme)) {
      return token
    }
    return null
  }
}

export default Validators

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/auth/index.js`:

```js
/*
  REST API library for auth route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import AuthRESTController from './controller.js'

class AuthRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating PostEntry REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating PostEntry REST Controller.'
      )
    }

    // Encapsulate dependencies.
    this.authRESTController = new AuthRESTController(localConfig)

    // Instantiate the router and set the base route.
    const baseUrl = '/auth'
    this.router = new Router({ prefix: baseUrl })
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attached REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', this.authRESTController.authUser)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

export default AuthRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/auth/controller.js`:

```js
import Passport from '../../../adapters/passport.js'
const passport = new Passport()

let _this

class AuthRESTController {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Auth REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Auth REST Controller.'
      )
    }

    _this = this
    this.passport = passport
  }

  /**
   * @apiDefine TokenError
   * @apiError Unauthorized Invalid JWT token
   *
   * @apiErrorExample {json} Unauthorized-Error:
   *     HTTP/1.1 401 Unauthorized
   *     {
   *       "status": 401,
   *       "error": "Unauthorized"
   *     }
   */

  /**
   * @api {post} /auth Authenticate user
   * @apiName AuthUser
   * @apiGroup Auth
   *
   * @apiParam {String} username  User username.
   * @apiParam {String} password  User password.
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "username": "johndoe@gmail.com", "password": "foo" }' localhost:5000/auth
   *
   * @apiSuccess {Object}   user           User object
   * @apiSuccess {ObjectId} user._id       User id
   * @apiSuccess {String}   user.name      User name
   * @apiSuccess {String}   user.username  User username
   * @apiSuccess {String}   token          Encoded JWT
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "username": "johndoe"
   *        },
   *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
   *     }
   *
   * @apiError Unauthorized Incorrect credentials
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 401 Unauthorized
   *     {
   *       "status": 401,
   *       "error": "Unauthorized"
   *     }
   */
  async authUser (ctx, next) {
    try {
      // Retrieve the user from the database after they've proven the correct
      // password.
      const user = await _this.passport.authUser(ctx, next)
      if (!user) {
        ctx.throw(401)
      }

      const token = user.generateToken()

      const response = user.toJSON()

      delete response.password

      ctx.body = {
        token,
        user: response
      }
    } catch (err) {
      ctx.throw(401)
    }
  }
}

export default AuthRESTController

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/users/index.js`:

```js
/*
  REST API library for /user route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import UserRESTControllerLib from './controller.js'

import Validators from '../middleware/validators.js'

import config from '../../../../config/index.js'

let _this

class UserRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating PostEntry REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating PostEntry REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.config = config
    this.userRESTController = new UserRESTControllerLib(dependencies)
    this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/users'
    this.router = new Router({ prefix: baseUrl })

    _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', this.createUser)
    this.router.get('/', this.getAll)
    this.router.get('/:id', this.getById)
    this.router.put('/:id', this.updateUser)
    this.router.delete('/:id', this.deleteUser)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }

  async createUser (ctx, next) {
    if (process.env.DISABLE_NEW_ACCOUNTS) {
      await _this.validators.ensureAdmin(ctx, next)
    }
    await _this.userRESTController.createUser(ctx, next)
    return true
  }

  async getAll (ctx, next) {
    await _this.validators.ensureAdmin(ctx, next)
    await _this.userRESTController.getUsers(ctx, next)
  }

  async getById (ctx, next) {
    await _this.validators.ensureTargetUserOrAdmin(ctx, next)
    await _this.userRESTController.getUser(ctx, next)
  }

  async updateUser (ctx, next) {
    await _this.validators.ensureTargetUserOrAdmin(ctx, next)
    await _this.userRESTController.getUser(ctx, next)
    await _this.userRESTController.updateUser(ctx, next)
  }

  async deleteUser (ctx, next) {
    await _this.validators.ensureTargetUserOrAdmin(ctx, next)
    await _this.userRESTController.getUser(ctx, next)
    await _this.userRESTController.deleteUser(ctx, next)
  }
}

export default UserRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/users/controller.js`:

```js
/*
  REST API Controller library for the /user route
*/

import wlogger from '../../../adapters/wlogger.js'

let _this

class UserRESTControllerLib {
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
    this.UserModel = this.adapters.localdb.Users
    // this.userUseCases = this.useCases.user

    _this = this
  }

  /**
   * @api {post} /users Create a new user
   * @apiPermission user
   * @apiName CreateUser
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "user": { "email": "email@format.com", "name": "my name", "password": "secretpasas" } }' localhost:5010/users
   *
   * @apiParam {Object} user          User object (required)
   * @apiParam {String} user.email Email
   * @apiParam {String} user.password Password
   * @apiParam {String} user.name name or handle
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "email": "email@format.com",
   *          "password": "somestrongpassword"
   *       }
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async createUser (ctx) {
    try {
      const userObj = ctx.request.body.user

      const { userData, token } = await _this.useCases.user.createUser(userObj)
      // console.log('userData: ', userData)
      // console.log('token: ', token)

      ctx.body = {
        user: userData,
        token
      }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /users Get all users
   * @apiPermission user
   * @apiName GetUsers
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5000/users
   *
   * @apiSuccess {Object[]} users           Array of user objects
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "users": [{
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "email": "email@format.com"
   *       }]
   *     }
   *
   * @apiUse TokenError
   */
  async getUsers (ctx) {
    try {
      const users = await _this.useCases.user.getAllUsers()

      ctx.body = { users }
    } catch (err) {
      wlogger.error('Error in users/controller.js/getUsers(): ', err)
      ctx.throw(422, err.message)
    }
  }

  /**
   * @api {get} /users/:id Get user by id
   * @apiPermission user
   * @apiName GetUser
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5010/users/56bd1da600a526986cf65c80
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "email": "email@format.com"
   *       }
   *     }
   *
   * @apiUse TokenError
   */
  async getUser (ctx, next) {
    try {
      const user = await _this.useCases.user.getUser(ctx.params)

      ctx.body = {
        user
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }

    if (next) {
      return next()
    }
  }

  /**
   * @api {put} /users/:id Update a user
   * @apiPermission user
   * @apiName UpdateUser
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X PUT -d '{ "user": { "name": "Cool new Name" } }' localhost:5000/users/56bd1da600a526986cf65c80
   *
   * @apiParam {Object} user          User object (required)
   * @apiParam {String} user.name     Name.
   * @apiParam {String} user.email    Email.
   * @apiParam {String} user.password Password. (optional)
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type      User type (admin or user)
   * @apiSuccess {String}   users.name      Updated name
   * @apiSuccess {String}   users.username  Updated username
   * @apiSuccess {String}   users.email     Updated email
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "Cool new name"
   *          "email": "email@format.com"
   *       }
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   *
   * @apiUse TokenError
   */
  async updateUser (ctx) {
    try {
      const existingUser = ctx.body.user
      const newData = ctx.request.body.user

      const user = await _this.useCases.user.updateUser(existingUser, newData)

      ctx.body = {
        user
      }
    } catch (err) {
      ctx.throw(422, err.message)
    }
  }

  /**
   * @api {delete} /users/:id Delete a user
   * @apiPermission user
   * @apiName DeleteUser
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X DELETE localhost:5000/users/56bd1da600a526986cf65c80
   *
   * @apiSuccess {StatusCode} 200
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "success": true
   *     }
   *
   * @apiUse TokenError
   */
  async deleteUser (ctx) {
    try {
      const user = ctx.body.user

      // await user.remove()
      await _this.useCases.user.deleteUser(user)

      ctx.status = 200
      ctx.body = {
        success: true
      }
    } catch (err) {
      ctx.throw(422, err.message)
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

export default UserRESTControllerLib

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/entry/index.js`:

```js
/*
  REST API library for /entry route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import EntryRESTControllerLib from './controller.js'

let _this

class UserRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /entry REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /entry REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.entryRESTController = new EntryRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/entry'
    this.router = new Router({ prefix: baseUrl })

    _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', _this.entryRESTController.createEntry)

    // Attach the Controller routes to the Koa app.
    app.use(_this.router.routes())
    app.use(_this.router.allowedMethods())
  }
}

export default UserRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/entry/controller.js`:

```js
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
        'Instance of Adapters library required when instantiating /entry REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /entry REST Controller.'
      )
    }

    // Encapsulate dependencies
    this.EntryModel = this.adapters.localdb.Entry
    // this.userUseCases = this.useCases.user

    _this = this
  }

  // No api-doc documentation because this wont be a public endpoint
  async createEntry (ctx) {
    try {
      console.log('body: ', ctx.request.body)

      const entryObj = ctx.request.body.entry

      const entry = await _this.useCases.entry.createEntry(entryObj)

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

export default EntryRESTControllerLib

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/p2wdb/index.js`:

```js
/*
  REST API library for /p2wdb route.
  This route handles incoming data from the P2WDB webhook, and routes the data
  to the proper handler.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import P2WDBRESTControllerLib from './controller.js'

let _this

class P2WDBRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /p2wdb REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /p2wdb REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.p2wdbRESTController = new P2WDBRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/p2wdb'
    this.router = new Router({ prefix: baseUrl })

    _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attached REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', _this.p2wdbRESTController.routeWebhook)

    // Attach the Controller routes to the Koa app.
    app.use(_this.router.routes())
    app.use(_this.router.allowedMethods())
  }
}

export default P2WDBRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/p2wdb/controller.js`:

```js
/*
  REST API Controller library for the /p2wdb route
  This route handles incoming data from the P2WDB webhook, and routes the data
  to the proper handler.
*/

// const { wlogger } = require('../../../adapters/wlogger')

let _this

class P2WDBRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /p2wdb REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /p2wdb REST Controller.'
      )
    }

    // Encapsulate dependencies
    // this.OrderModel = this.adapters.localdb.Order
    // this.userUseCases = this.useCases.user

    _this = this
  }

  // No api-doc documentation because this wont be a public endpoint
  async routeWebhook (ctx) {
    try {
      console.log('p2wdb REST API handler: body: ', ctx.request.body)

      const dataType = ctx.request.body.data.dataType

      if (dataType.includes('counter')) {
        // Detect and handle Counter Offers
        console.log('counter-offer data detected.')

        const counterOffer = ctx.request.body

        await _this.useCases.offer.acceptCounterOffer(counterOffer)

        //
      } else if (dataType.includes('offer')) {
        // Detect and handle new Offers
        console.log('offer data detected')

        const offerObj = ctx.request.body
        await _this.useCases.offer.createOffer(offerObj)

        //
      } else if (dataType.includes('flag')) {
        // Detect and handle data generated by users flagging NSFW Offers.
        const flagData = ctx.request.body
        console.log('Flag type data received: ', flagData)

        // const p2wdbHash = flagData.p2wdbHash
        await _this.useCases.offer.flagOffer(flagData)
      } else {
        console.log('Could not route P2WDB webhook data.')
      }

      // const orderObj = ctx.request.body.order
      //
      // const hash = await _this.useCases.order.createOrder(orderObj)
      //
      // ctx.body = { hash }

      ctx.body = {
        success: true
      }
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

export default P2WDBRESTControllerLib

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/ipfs/index.js`:

```js
/*
  REST API library for the /ipfs route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import IPFSRESTControllerLib from './controller.js'
import Validators from '../middleware/validators.js'

// let _this

class IpfsRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating IPFS REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating IPFS REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.ipfsRESTController = new IPFSRESTControllerLib(dependencies)
    this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/ipfs'
    this.router = new Router({ prefix: baseUrl })

    // _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.get('/', this.ipfsRESTController.getStatus)
    this.router.post('/peers', this.ipfsRESTController.getPeers)
    this.router.post('/relays', this.ipfsRESTController.getRelays)
    this.router.post('/connect', this.ipfsRESTController.connect)
    this.router.get('/node', this.ipfsRESTController.getThisNode)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

// module.exports = BchRouter
export default IpfsRouter

```

`/home/trout/work/psf/code/bch-dex/src/controllers/rest-api/ipfs/controller.js`:

```js
/*
  REST API Controller library for the /ipfs route
*/

// Global npm libraries

// Local libraries
import wlogger from '../../../adapters/wlogger.js'

class IpfsRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /ipfs REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /ipfs REST Controller.'
      )
    }

    // Encapsulate dependencies
    // this.UserModel = this.adapters.localdb.Users
    // this.userUseCases = this.useCases.user

    // Bind 'this' object to all subfunctions
    this.getStatus = this.getStatus.bind(this)
    this.getPeers = this.getPeers.bind(this)
    this.getRelays = this.getRelays.bind(this)
    this.handleError = this.handleError.bind(this)
    this.connect = this.connect.bind(this)
    this.getThisNode = this.getThisNode.bind(this)
  }

  /**
   * @api {get} /ipfs Get status on IPFS infrastructure
   * @apiPermission public
   * @apiName GetIpfsStatus
   * @apiGroup REST BCH
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5001/ipfs
   *
   */
  async getStatus (ctx) {
    try {
      const status = await this.adapters.ipfs.getStatus()

      ctx.body = { status }
    } catch (err) {
      wlogger.error('Error in ipfs/controller.js/getStatus(): ')
      // ctx.throw(422, err.message)
      this.handleError(ctx, err)
    }
  }

  // Return information on IPFS peers this node is connected to.
  async getPeers (ctx) {
    try {
      const showAll = ctx.request.body.showAll

      const peers = await this.adapters.ipfs.getPeers(showAll)

      ctx.body = { peers }
    } catch (err) {
      wlogger.error('Error in ipfs/controller.js/getPeers(): ')
      // ctx.throw(422, err.message)
      this.handleError(ctx, err)
    }
  }

  // Get data about the known Circuit Relays. Hydrate with data from peers list.
  async getRelays (ctx) {
    try {
      const relays = await this.adapters.ipfs.getRelays()

      ctx.body = { relays }
    } catch (err) {
      wlogger.error('Error in ipfs/controller.js/getRelays(): ')
      // ctx.throw(422, err.message)
      this.handleError(ctx, err)
    }
  }

  async connect (ctx) {
    try {
      const multiaddr = ctx.request.body.multiaddr
      const getDetails = ctx.request.body.getDetails

      // console.log('this.adapters.ipfs.ipfsCoordAdapter.ipfsCoord.adapters.ipfs: ', this.adapters.ipfs.ipfsCoordAdapter.ipfsCoord.adapters.ipfs)
      const result = await this.adapters.ipfs.ipfsCoordAdapter.ipfsCoord.adapters.ipfs.connectToPeer({ multiaddr, getDetails })
      // console.log('result: ', result)

      ctx.body = result
    } catch (err) {
      wlogger.error('Error in ipfs/controller.js/connect():', err)
      // ctx.throw(422, err.message)
      this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /ipfs/node Get a copy of the thisNode object from helia-coord
   * @apiPermission public
   * @apiName GetThisNode
   * @apiGroup REST BCH
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5001/ipfs/node
   *
   */
  async getThisNode (ctx) {
    try {
      const thisNode = this.adapters.ipfs.ipfsCoordAdapter.ipfsCoord.thisNode

      ctx.body = { thisNode }
    } catch (err) {
      wlogger.error('Error in ipfs/controller.js/getThisNode(): ')
      // ctx.throw(422, err.message)
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

// module.exports = IpfsRESTControllerLib
export default IpfsRESTControllerLib

```

`/home/trout/work/psf/code/bch-dex/src/controllers/json-rpc/index.js`:

```js
/*
  This is the parent class library for the RPC controller.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local support libraries
import wlogger from '../../adapters/wlogger.js'

import UserController from './users/index.js'
import AuthController from './auth/index.js'
import AboutController from './about/index.js'

let _this

class JSONRPC {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating JSON RPC Controllers.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating JSON RPC Controllers.'
      )
    }

    // Encapsulate dependencies
    this.ipfsCoord = this.adapters.ipfs.ipfsCoordAdapter.ipfsCoord
    this.jsonrpc = jsonrpc
    this.userController = new UserController(localConfig)
    this.authController = new AuthController(localConfig)
    this.aboutController = new AboutController()

    // Cache to store IDs of processed JSON RPC commands. Used to prevent
    // duplicate processing.
    this.msgCache = []
    this.MSG_CACHE_SIZE = 30

    _this = this
  }

  // This method takes a raw string of data from IPFS, parses it, and determins
  // which controller to route the instruction to.
  async router (str, from) {
    try {
      // console.log('router str: ', str)
      console.log('JSON RPC router recieved data from: ', from)

      // Exit quietly if 'from' is not specified.
      if (!from || typeof from !== 'string') {
        wlogger.info(
          'Warning: Can not send JSON RPC response. Can not determine which peer this message came from.'
        )
        return false
      }

      // Attempt to parse the incoming data as a JSON RPC string.
      const parsedData = _this.jsonrpc.parse(str)
      // wlogger.debug(`parsedData: ${JSON.stringify(parsedData, null, 2)}`)

      // Exit quietly if the incoming string is an invalid JSON RPC string.
      if (parsedData.type === 'invalid') {
        wlogger.info('Rejecting invalid JSON RPC command.')
        return false
      }

      // Check for duplicate entries with same 'id' value.
      const alreadyProcessed = _this._checkIfAlreadyProcessed(parsedData)
      if (alreadyProcessed) {
        return false
      } else {
        // console.log(`parsedData: ${JSON.stringify(parsedData, null, 2)}`)

        // This node will regularly ping known circuit relays with an /about
        // JSON RPC call. These will be handled by ipfs-coord, but will percolate
        // up to this library. Ignore these messages.
        if (
          parsedData.type.includes('success') &&
          parsedData.payload.method === undefined
        ) {
          return false
        }

        // Log the incoming JSON RPC command.
        wlogger.info(
          `JSON RPC received from ${from}, ID: ${parsedData.payload.id}, type: ${parsedData.type}, method: ${parsedData.payload.method}`
        )
      }

      // Added the property "from" to the parsedData object;
      // necessary for calculating rate limits (based on the IPFS ID).
      parsedData.from = from

      // Default return string
      let retObj = _this.defaultResponse()

      // Route the command to the appropriate route handler.
      switch (parsedData.payload.method) {
        case 'users':
          retObj = await _this.userController.userRouter(parsedData)
          break
        case 'auth':
          retObj = await _this.authController.authRouter(parsedData)
          break
        case 'about':
          retObj = await _this.aboutController.aboutRouter(parsedData)
      }

      // console.log('retObj: ', retObj)

      // Convert the returned object into a JSON RPC response string.
      const retJson = _this.jsonrpc.success(parsedData.payload.id, {
        method: parsedData.payload.method,
        reciever: from,
        value: retObj
      })
      const retStr = JSON.stringify(retJson, null, 2)
      // console.log('retStr: ', retStr)

      // Encrypt and publish the response to the originators private OrbitDB,
      // if ipfs-coord has been initialized and the peers ID is registered.

      // console.log('responding to JSON RPC command')
      const thisNode = _this.ipfsCoord.thisNode
      // console.log('thisNode: ', thisNode)

      try {
        await _this.ipfsCoord.useCases.peer.sendPrivateMessage(
          from,
          retStr,
          thisNode
        )
      } catch (err) {
        console.log('sendPrivateMessage() err: ', err)
      }

      // Return the response and originator. Useful for testing.
      return { from, retStr }
    } catch (err) {
      // console.error('Error in rpc router(): ', err)
      wlogger.error('Error in rpc router(): ', err)
      // Do not throw error. This is a top-level function.
    }
  }

  // Checks the ID of the JSON RPC call, to see if the message has already been
  // processed. Returns true if the ID exists in the cache of processed messages.
  // If the ID is new, the function adds it to the cache and return false.
  _checkIfAlreadyProcessed (data) {
    try {
      // console.log('data: ', data)

      const id = data.payload.id

      // Check if the hash is in the array of already processed message.
      const alreadyProcessed = this.msgCache.includes(id)

      // Update the msgCache if this is a new message.
      if (!alreadyProcessed) {
        // Add the hash to the array.
        this.msgCache.push(id)

        // If the array is at its max size, then remove the oldest element.
        if (this.msgCache.length > this.MSG_CACHE_SIZE) {
          this.msgCache.shift()
        }
      }

      return alreadyProcessed
    } catch (err) {
      console.error('Error in _checkIfAlreadyProcessed: ', err)
      return true
    }
  }

  // The default JSON RPC response if the incoming command could not be routed.
  defaultResponse () {
    const errorObj = {
      success: false,
      status: 422,
      message: 'Input does not match routing rules.'
    }

    return errorObj
  }
}

export default JSONRPC

```

`/home/trout/work/psf/code/bch-dex/src/controllers/json-rpc/rate-limit.js`:

```js
/*
  Rate limit
*/
/* eslint no-useless-catch: 0 */

// Local libraries
import { RateLimit as RateLimitLib } from 'koa2-ratelimit'

class RateLimit {
  constructor (options) {
    // Encapsulate dependencies
    this.RateLimitLib = RateLimitLib

    // Set default rate limit options.
    this.defaultOptions = {
      interval: { min: 1 },
      max: 60,
      onLimitReached: this.onLimitReached
    }

    // ctx obj
    this.context = {
      state: {
        user: ''
      },
      request: {
        ip: ''
      },
      user: '',
      set: () => {}
    }

    // console.log(
    //   `this.defaultOptions: ${JSON.stringify(this.defaultOptions, null, 2)}`
    // )
    // console.log(`options: ${JSON.stringify(options, null, 2)}`)

    // Set rate limit settings. Default values are overwritten if user passes
    // in an options object.
    this.rateLimitOptions = Object.assign({}, this.defaultOptions, options)
    // console.log(
    //   `this.rateLimitOptions: ${JSON.stringify(this.rateLimitOptions, null, 2)}`
    // )
    this.rateLimit = this.RateLimitLib.middleware(this.rateLimitOptions)
  }

  // This function is called when the user hits their rate limits.
  onLimitReached () {
    try {
      const error = new Error() // Establish provided options as the default options.
      error.message = 'Too many requests, please try again later.'
      error.status = 429
      throw error
    } catch (error) {
      // console.log("Error in onLimitReached()", error)
      throw error
    }
  }

  // This is the middleware function called by the router.
  async limiter (from) {
    try {
      if (!from || typeof from !== 'string') {
        throw new Error('from must be a string')
      }

      // Set context.limiter
      // This overrides the default koa behavior and adapts the rate limiter
      // to work with the JSON RPC over IPFS.
      this.context.state.user = from
      this.context.request.ip = from
      this.context.user = from

      await this.rateLimit(this.context, () => {})
      return true
    } catch (error) {
      console.error('Error in rate-limit.js/limiter()')
      throw error
    }
  }
}

export default RateLimit

```

`/home/trout/work/psf/code/bch-dex/src/controllers/json-rpc/auth/index.js`:

```js
/*
  This is the JSON RPC router for the users API
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local libraries
// const AuthLib = require('../../lib/auth')
// const UserLib = require('../../../use-cases/user')
import wlogger from '../../../adapters/wlogger.js'

import RateLimit from '../rate-limit.js'

class AuthRPC {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Auth JSON RPC Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Auth JSON RPC Controller.'
      )
    }

    // Encapsulate dependencies
    // this.authLib = new AuthLib()
    this.jsonrpc = jsonrpc
    this.userLib = this.useCases.user
    this.rateLimit = new RateLimit()
  }

  // Top-level router for this library. All other methods in this class are for
  // a specific endpoint. This method routes incoming calls to one of those
  // methods.
  async authRouter (rpcData) {
    let endpoint = 'unknown'

    try {
      // console.log('authRouter rpcData: ', rpcData)

      endpoint = rpcData.payload.params.endpoint

      // Route the call based on the requested endpoint.
      switch (endpoint) {
        case 'authUser':
          await this.rateLimit.limiter(rpcData.from)
          return await this.authUser(rpcData)
      }
    } catch (err) {
      console.error('Error in AuthRPC/authRouter()')
      // throw err

      return {
        success: false,
        status: 500,
        message: err.message,
        endpoint
      }
    }
  }

  /**
   * @api {JSON} /auth Get JWT Token
   * @apiPermission public
   * @apiName AuthUser
   * @apiGroup JSON Auth
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"556","method":"auth","params":{ "endpoint": "authUser", "login": "test555@test.com", "password": "password"}}
   *
   * @apiParam {String} login Email(required).
   * @apiParam {String} password Password(required).
   * @apiParam {string} endpoint      (required)
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.email     User email
   * @apiSuccess {String}   token           JWT.
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  {
   *  "jsonrpc": "2.0",
   *  "id": "556",
   *  "result": {
   *    "method": "auth",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "endpoint": "authUser",
   *      "userId": "607de52d426f3d3148b3a467",
   *      "userType": "user",
   *      "userName": "testy tester",
   *      "userEmail": "test555@test.com",
   *      "apiToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2RlNTJkNDI2ZjNkMzE0OGIzYTQ2NyIsImlhdCI6MTYxODg2NTcwM30.acGe5ZiBAAcbOcPQDIhvc3z0KjnuYZd1Y5pJJJC9mJQ",
   *      "status": 200,
   *      "success": true,
   *      "message": ""
   *    }
   *  }
   *}
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 422 Unprocessable Entity
   * {
   *   "jsonrpc": "2.0",
   *   "id": "556",
   *   "result": {
   *     "method": "auth",
   *     "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *     "value": {
   *       "success": false,
   *       "status": 422,
   *       "message": "User not found",
   *       "endpoint": "authUser"
   *     }
   *   }
   * }
   */
  async authUser (rpcData) {
    try {
      // console.log('authUser rpcData: ', rpcData)

      if (!rpcData.payload.params.login) {
        throw new Error('login must be specified')
      }
      if (!rpcData.payload.params.password) {
        throw new Error('password must be specified')
      }

      const login = rpcData.payload.params.login
      const password = rpcData.payload.params.password

      const user = await this.userLib.authUser(login, password)
      // console.log('user: ', user)

      const token = user.generateToken()

      const response = {
        endpoint: 'authUser',
        userId: user._id,
        userType: user.type,
        userName: user.name,
        userEmail: user.email,
        apiToken: token,
        status: 200,
        success: true,
        message: ''
      }

      return response
    } catch (err) {
      // console.error('Error in authUser()')
      wlogger.error('Error in authUser(): ', err)
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'authUser'
      }
    }
  }
}

export default AuthRPC

```

`/home/trout/work/psf/code/bch-dex/src/controllers/json-rpc/users/index.js`:

```js
/*
  This is the JSON RPC router for the users API
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local libraries
// const UserLib = require('../../../use-cases/user')
import Validators from '../validators.js'

import RateLimit from '../rate-limit.js'

class UserRPC {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating User JSON RPC Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating User JSON RPC Controller.'
      )
    }

    // Encapsulate dependencies
    this.userLib = this.useCases.user
    this.jsonrpc = jsonrpc
    this.validators = new Validators(localConfig)
    this.rateLimit = new RateLimit()
  }

  // Top-level router for this library. All other methods in this class are for
  // a specific endpoint. This method routes incoming calls to one of those
  // methods.
  async userRouter (rpcData) {
    let endpoint = 'unknown'
    try {
      // console.log('userRouter rpcData: ', rpcData)

      endpoint = rpcData.payload.params.endpoint
      let user

      // Route the call based on the value of the method property.
      switch (endpoint) {
        case 'createUser':
          await this.rateLimit.limiter(rpcData.from)
          return await this.createUser(rpcData)

        case 'getAllUsers':
          await this.validators.ensureUser(rpcData)
          await this.rateLimit.limiter(rpcData.from)
          return await this.getAll(rpcData)

        case 'getUser':
          user = await this.validators.ensureUser(rpcData)
          await this.rateLimit.limiter(rpcData.from)
          return await this.getUser(rpcData, user)

        case 'updateUser':
          user = await this.validators.ensureTargetUserOrAdmin(rpcData)
          await this.rateLimit.limiter(rpcData.from)
          return await this.updateUser(rpcData, user)

        case 'deleteUser':
          user = await this.validators.ensureTargetUserOrAdmin(rpcData)
          await this.rateLimit.limiter(rpcData.from)
          return await this.deleteUser(rpcData, user)
      }
    } catch (err) {
      console.error('Error in UsersRPC/rpcRouter()')
      // throw err

      return {
        success: false,
        status: err.status || 500,
        message: err.message,
        endpoint
      }
    }
  }

  /**
   * @api {JSON} /users Create a new user
   * @apiPermission public
   * @apiName CreateUser
   * @apiGroup JSON Users
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"555","method":"users","params":{ "endpoint": "createUser", "email": "test555@test.com", "name": "testy tester", "password": "password"}}
   *
   * @apiParam {String} email Email(required).
   * @apiParam {String} password Password(required).
   * @apiParam {String} name name or handle(optional).
   * @apiParam {string} endpoint      (required)

   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  {
   *  "jsonrpc": "2.0",
   *  "id": "555",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "userData": {
   *        "type": "user",
   *        "_id": "607dd3e6426f3d3148b3a466",
   *        "email": "test555@test.com",
   *        "name": "testy tester",
   *        "__v": 0
   *      },
   *      "token": "eyJhbGciOiJIUzI1NiIs1nR5cCI6IkpXVTJ9.eyJpZCI6IjYwN2RkM2U2NDI2ZjNkMzE0OGIzYTQ2NiIsImlhdCI6MTYxODg1ODk4Mn0.in4vzxDqqyCd7LpuhG3xlXeBqrJ5bp9GJPwhaoVzldI",
   *      "endpoint": "createUser",
   *      "success": true,
   *      "status": 200,
   *      "message": ""
   *    }
   *  }
   *}
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 422 Unprocessable Entity
   * {
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "success": false,
   *      "status": 422,
   *      "message": "Unprocessable Entity",
   *      "endpoint": "getUser"
   *    }
   *  }
   *}
   */
  async createUser (rpcData) {
    try {
      // console.log('createUser rpcData: ', rpcData)

      const retObj = await this.userLib.createUser(rpcData.payload.params)

      // Add generic JSON RPC properties that every entry gets.
      retObj.endpoint = 'createUser'
      retObj.success = true
      retObj.status = 200
      retObj.message = ''

      return retObj
    } catch (err) {
      // console.error('Error in createUser()')
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'createUser'
      }
    }
  }

  /**
   * @api {JSON} /users Get all users
   * @apiPermission public
   * @apiName GetAllUsers
   * @apiGroup JSON Users
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"555","method":"users","params":{ "endpoint": "getAllUsers", "apiToken": "<JWT>"}}
   *
   * @apiParam {String} apiToken      (required)
   * @apiParam {string} endpoint      (required)
   *
   * @apiSuccess {Object[]} users           Array of user objects
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  result": {
   *  "method": "users",
   *  "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *  "value": {
   *   "users": [
   *     {
   *       "type": "user",
   *       "_id": "6070bc6da931e73d4d9e108d",
   *       "email": "test678@test.com",
   *       "name": "testy tester",
   *       "__v": 0
   *     }
   *   ],
   *   "endpoint": "getAllUsers",
   *   "success": true,
   *   "status": 200,
   *   "message": ""
   *  }
   * }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *     "jsonrpc": "2.0",
   *     "id": "123",
   *     "result": {
   *       "method": "users",
   *       "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *       "value": {
   *         "success": false,
   *         "status": 422,
   *         "message": "",
   *         "endpoint": "getAllUsers"
   *       }
   *     }
   */
  // Get all Users.
  async getAll () {
    try {
      const users = await this.userLib.getAllUsers()

      return {
        users,
        endpoint: 'getAllUsers',
        success: true,
        status: 200,
        message: ''
      }
    } catch (err) {
      // console.error('Error in getAll()')
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'getAllUsers'
      }
    }
  }

  /**
   * @api {JSON} /users Get a user
   * @apiPermission public
   * @apiName GetAUser
   * @apiGroup JSON Users
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "getUser", "apiToken": "<JWT>", "userId": "<_id>"}}
   *
   * @apiParam {String} apiToken      (required)
   * @apiParam {String} userId       (required)
   * @apiParam {string} endpoint      (required)
   *
   * @apiSuccess {Object[]} users           Array of user objects
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  result": {
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "user": {
   *        "type": "user",
   *        "_id": "607dd3e6426f3d3148b3a466",
   *        "email": "test555@test.com",
   *        "name": "testy tester",
   *        "__v": 0
   *      },
   *      "endpoint": "getUser",
   *      "success": true,
   *      "status": 200,
   *      "message": ""
   *  }
   *}
   *
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *     "jsonrpc": "2.0",
   *     "id": "123",
   *     "result": {
   *       "method": "users",
   *       "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *       "value": {
   *         "success": false,
   *         "status": 422,
   *         "message": "Unprocessable Entity",
   *         "endpoint": "getUser"
   *       }
   *     }
   *
   */
  // Get a specific user.
  async getUser (rpcData, userModel) {
    try {
      // console.log('getUser rpcData: ', rpcData)

      // Throw error if rpcData does not include 'userId' property for target user.
      const userId = rpcData.payload.params.userId

      const user = await this.userLib.getUser({ id: userId })

      return {
        user,
        endpoint: 'getUser',
        success: true,
        status: 200,
        message: ''
      }
    } catch (err) {
      // console.error('Error in getUser()')
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'getUser'
      }
    }
  }

  /**
   * @api {JSON} /users Update a user
   * @apiPermission public
   * @apiName UpdateAUser
   * @apiGroup JSON Users
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "updateUser", "apiToken": "<JWT>", "userId": "<_id>", "name": "test999"}}
   *
   * @apiParam {String} apiToken      (required)
   * @apiParam {String} userId       (required)
   * @apiParam {string} endpoint      (required)
   * @apiParam {String} email Email(Optional).
   * @apiParam {String} password Password(Optional).
   * @apiParam {String} name name or handle(Optional).
   *
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type      User type (admin or user)
   * @apiSuccess {String}   users.name      Updated name
   * @apiSuccess {String}   users.username  Updated username
   * @apiSuccess {String}   users.email     Updated email
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  result": {
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "user": {
   *        "type": "user",
   *        "_id": "607dd3e6426f3d3148b3a466",
   *        "email": "test555@test.com",
   *        "name": "test001",
   *        "__v": 0
   *      },
   *      "endpoint": "updateUser",
   *      "success": true,
   *      "status": 200,
   *      "message": ""
   *    }
   *  }
   *}
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 422 Unprocessable Entity
   *  {
   *    "jsonrpc": "2.0",
   *    "id": "123",
   *    "result": {
   *      "method": "users",
   *      "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *      "value": {
   *        "success": false,
   *        "status": 422,
   *        "message": "Unprocessable Entity.",
   *        "endpoint": "updateUser"
   *      }
   *    }
   *  }
   *
   */
  async updateUser (rpcData, userModel) {
    try {
      // console.log('updateUser rpcData: ', rpcData)

      const newData = rpcData.payload.params

      const user = await this.userLib.updateUser(userModel, newData)

      return {
        user,
        endpoint: 'updateUser',
        success: true,
        status: 200,
        message: ''
      }
    } catch (err) {
      // console.log('updateUser err: ', err)

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'updateUser'
      }
    }
  }

  /**
   * @api {JSON} /users Delete a user
   * @apiPermission public
   * @apiName DeleteAUser
   * @apiGroup JSON Users
   *
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "deleteUser", "userId": "<_id>", "apiToken": "<JWT>"}}
   *
   * @apiParam {String} apiToken      (required)
   * @apiParam {String} userId       (required)
   * @apiParam {string} endpoint      (required)
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  result":  {
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "endpoint": "deleteUser",
   *      "success": true,
   *      "status": 200,
   *      "message": ""
   *    }
   *  }
   *}
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 422 Unprocessable Entity
   * {
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "success": false,
   *      "status": 422,
   *      "message": "Unprocessable Entity",
   *      "endpoint": "deleteUser"
   *    }
   *  }
   *}
   *
   *
   */
  async deleteUser (rpcData, userModel) {
    try {
      // console.log('deleteUser rpcData: ', rpcData)

      await this.userLib.deleteUser(userModel)

      const retObj = {
        endpoint: 'deleteUser',
        success: true,
        status: 200,
        message: ''
      }

      return retObj
    } catch (err) {
      // console.error('Error in deleteUser()')
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'deleteUser'
      }
    }
  }

  // TODO create deleteUser()
}

export default UserRPC

```

`/home/trout/work/psf/code/bch-dex/src/controllers/json-rpc/validators.js`:

```js
/*
  Validators for the JSON RPC
*/
/* eslint no-useless-catch: 0 */

// Public npm libraries
import jwt from 'jsonwebtoken'

// Local libraries
import config from '../../../config/index.js'

// const UserModel = require('../../adapters/localdb/models/users')

class Validators {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating JSON RPC Validators library.'
      )
    }

    // Encapsulate dependencies
    this.config = config
    this.jwt = jwt
    this.UserModel = this.adapters.localdb.Users
  }

  // Returns if user passes a valid JWT token that resolves to a valid user.
  // Otherwise it throws an error.
  async ensureUser (rpcData) {
    try {
      // console.log('rpcData: ', rpcData)

      const apiToken = rpcData.payload.params.apiToken
      if (!apiToken) throw new Error('apiToken JWT required as a parameter')

      const decoded = this.jwt.verify(apiToken, this.config.token)

      const user = await this.UserModel.findById(decoded.id, '-password')
      if (!user) throw new Error('User not found!')

      return user
    } catch (err) {
      // console.error('Error in ensureUser()')
      throw err
    }
  }

  // This middleware ensures that the :id used in the API endpoint matches the
  // the ID used in the JWT, or failing that, the ID used in the JWT matches
  // an Admin user. This prevents situations like users updating other users
  // profiles or non-admins deleting users.
  async ensureTargetUserOrAdmin (rpcData) {
    try {
      // console.log('rpcData: ', rpcData)

      // Ensure the JWT is passed in.
      const apiToken = rpcData.payload.params.apiToken
      if (!apiToken) throw new Error('apiToken JWT required as a parameter')

      // Ensure a target user ID is provided.
      const targetUserId = rpcData.payload.params.userId
      if (!targetUserId) throw new Error('userId must be specified')

      // Decode the JWT token.
      const decoded = this.jwt.verify(apiToken, this.config.token)

      // Get the user described by the JWT token.
      const user = await this.UserModel.findById(decoded.id, '-password')
      if (!user) throw new Error('User not found!')

      // If this current user is an admin, then quietly exit.
      if (user.type === 'admin') return true

      // Throw an error if the JWT token does not match the targeted user.
      if (user._id.toString() !== targetUserId) {
        throw new Error('User is neither admin nor target user.')
      }

      // Get the user model for the targeted User
      const targetedUser = await this.UserModel.findById(
        targetUserId,
        '-password'
      )

      // Return the user model.
      return targetedUser
    } catch (error) {
      // console.error('Error in ensureUser()')
      throw error
    }
  }
}

export default Validators

```

`/home/trout/work/psf/code/bch-dex/src/controllers/json-rpc/about/index.js`:

```js
/*
  This is the JSON RPC router for the users API

  CT 3/5/22: This library can probably be deleted. Handling of the /about endpoint
  is now directly controlled by the ipfs-coord library.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local libraries
import config from '../../../../config/index.js'

class AboutRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.jsonrpc = jsonrpc
  }

  /**
   * @api {JSON} /about About IPFS Node
   * @apiPermission public
   * @apiName About
   * @apiGroup JSON About
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"555","method":"about"}
   *
   * @apiDescription
   * This endpoint can be customized so that users can retrieve information about
   * your IPFS node and Service Provider application. This is a great place to
   * put a website URL, an IPFS hash, an other basic information.
   */

  // This is the top-level router for this library.
  // This is a bit different than other router libraries, because there is
  // only one response, which is a string about this node.
  async aboutRouter (rpcData) {
    console.log('debugging: aboutRouter from ipfs-service-provider triggered')

    return {
      success: true,
      status: 200,
      // message: aboutStr,
      message: JSON.stringify(config.announceJsonLd),
      endpoint: 'about'
    }
  }
}

export default AboutRPC

```

`/home/trout/work/psf/code/bch-dex/src/controllers/timer-controllers.js`:

```js
/*
  This Controller library is concerned with timer-based functions that are
  kicked off periodically.
*/

import config from '../../config/index.js'

class TimerControllers {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Timer Controller libraries.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Timer Controller libraries.'
      )
    }

    this.debugLevel = localConfig.debugLevel
    this.config = config

    // Bind 'this' object to all subfunctions
    this.startTimers = this.startTimers.bind(this)
    this.gcOrders = this.gcOrders.bind(this)
    this.gcOffers = this.gcOffers.bind(this)
    this.checkDupOffers = this.checkDupOffers.bind(this)
    this.loadOffers = this.loadOffers.bind(this)
    // Bind 'this' object to all subfunctions.
    // this.exampleTimerFunc = this.exampleTimerFunc.bind(this)
    this.cleanUsage = this.cleanUsage.bind(this)

    // State
    this.gcOrdersInt = null
    this.gcOffersInt = null
    this.checkDupOffersInt = null
    this.loadOffersInt = null
  }

  // Start all the time-based controllers.
  startTimers () {
    this.gcOrdersInt = setInterval(this.gcOrders, 60000 * 5)
    this.gcOffersInt = setInterval(this.gcOffers, 60000 * 5)
    // this.checkDupOffersInt = setInterval(this.checkDupOffers, 60000 * 4.5)
    this.loadOffersInt = setInterval(this.loadOffers, 60000 * 2)
    // Any new timer control functions can be added here. They will be started
    // when the server starts.
    // this.optimizeWalletHandle = setInterval(this.exampleTimerFunc, 60000 * 60)
    this.cleanUsageHandle = setInterval(this.cleanUsage, 60000 * 60) // 1 hour

    return true
  }

  stopTimers () {
    clearInterval(this.gcOrdersInt)
    clearInterval(this.gcOffersInt)
    // clearInterval(this.checkDupOffers)
    clearInterval(this.optimizeWalletHandle)
    clearInterval(this.cleanUsageHandle)
  }

  // Garbage Collect the Orders.
  gcOrders () {
    try {
      this.useCases.order.removeStaleOrders()
      return true
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/gcOrders(): ', err)
      return false
    }
  }

  // Garbage Collect the Offers.
  gcOffers () {
    try {
      this.useCases.offer.removeStaleOffers()
      return true
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/gcOffers(): ', err)
      return false
    }
  }

  // Remove duplicate Offers
  checkDupOffers () {
    try {
      this.useCases.offer.removeDuplicateOffers()
      return true
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/checkDupOffers(): ', err)
      return false
    }
  }

  // Load offers From nostr .
  async loadOffers () {
    try {
      await this.useCases.offer.loadOffers()
      return true
    } catch (err) {
      // Do not throw an error. This is a top-level function.
      console.log('Error in timer-controllers.js/loadOffers(): ', err)
      return false
    }
  }

  // Clean the usage state so that stats reflect the last 24 hours.
  cleanUsage () {
    try {
      const now = new Date()
      console.log(`cleanUsage() Timer Controller executing at ${now.toLocaleString()}`)

      this.useCases.usage.cleanUsage()

      return true
    } catch (err) {
      console.error('Error in time-controller.js/cleanUsage(): ', err)

      // Note: Do not throw an error. This is a top-level function.
      return false
    }
  }
}

export default TimerControllers

```

`/home/trout/work/psf/code/bch-dex/src/use-cases/index.js`:

```js
/*
  This is a top-level library that encapsulates all the additional Use Cases.
  The concept of Use Cases comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Local libraries
import UserUseCases from './user.js'
import EntryUseCases from './entry.js'
import OfferUseCases from './offer/index.js'
import OrderUseCases from './order.js'
import { UsageUseCases } from './usage-use-cases.js'

class UseCases {
  constructor (localConfig = {}) {
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Use Cases library.'
      )
    }

    // console.log('use-cases/index.js localConfig: ', localConfig)
    this.user = new UserUseCases(localConfig)
    this.entry = new EntryUseCases(localConfig)
    this.order = new OrderUseCases(localConfig)
    localConfig.order = this.order
    this.offer = new OfferUseCases(localConfig)
    this.usage = new UsageUseCases(localConfig)
  }

  // Run any startup Use Cases at the start of the app.
  async start () {
    console.log('Async Use Cases have been started.')

    return true
  }
}

export default UseCases

```

`/home/trout/work/psf/code/bch-dex/src/use-cases/offer/index.js`:

```js
/*
  Use Case library for Offers.

  Offers are created by a webhook trigger from the P2WDB. Offers are a result of
  new data in P2WDB. They differ from Offers, which are generated by a local
  user.

  An Offer is created to match a local Offer, but it's created indirectly, as
  a response to the webhook from the P2WDB. In this way, Offers generated from
  local Offers are no different than Offers generated by other peers.

  A Counter Offer is created by calling the /take/:cid endpoint. It creates
  a partially signed transaction.
 */

// Global npm libraries
import axios from 'axios'
import RetryQueue from '@chris.troutner/retry-queue'

// Local libraries
import OfferEntity from '../../entities/offer.js'
import config from '../../../config/index.js'

const DEFAULT_ENTRIES_PER_PAGE = 20
const NFT_ENTRIES_PER_PAGE = 6
const FUNGIBLE_ENTRIES_PER_PAGE = 20

class OfferUseCases {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Offer Use Cases library.'
      )
    }
    this.orderUseCase = localConfig.order
    if (!this.orderUseCase) {
      throw new Error(
        'Instance of Order Use Cases must be passed in when instantiating Offer Use Cases library.'
      )
    }

    // Encapsulate dependencies
    this.config = config
    this.axios = axios
    this.offerEntity = new OfferEntity()
    this.OfferModel = this.adapters.localdb.Offer
    this.retryQueue = new RetryQueue({ retryPeriod: 1000, attempts: 3 })

    // Bind 'this' object to functions
    this.createOffer = this.createOffer.bind(this)
    this.detectNsfw = this.detectNsfw.bind(this)
    this.categorizeToken = this.categorizeToken.bind(this)
    this.listOffers = this.listOffers.bind(this)
    this.listNftOffers = this.listNftOffers.bind(this)
    this.listFungibleOffers = this.listFungibleOffers.bind(this)
    this.takeOffer = this.takeOffer.bind(this)
    this.ensureFunds = this.ensureFunds.bind(this)
    this.findOfferByEvent = this.findOfferByEvent.bind(this)
    this.findOfferByTxid = this.findOfferByTxid.bind(this)
    this.acceptCounterOffer = this.acceptCounterOffer.bind(this)
    this.removeDuplicateOffers = this.removeDuplicateOffers.bind(this)
    this.removeStaleOffers = this.removeStaleOffers.bind(this)
    this.flagOffer = this.flagOffer.bind(this)
    this.loadOffers = this.loadOffers.bind(this)

    // State
    this.seenOffers = []
    this.seenCounterOffers = []
  }

  // This method is called by timer controller to load offers from a Nostr topic.
  async createOffer (offerObj) {
    try {
      // console.log('Use Case createOffer(offerObj): ', offerObj)

      // Return if Offer already exists in database with the same utxo transaction id.
      try {
        await this.findOfferByTxid(offerObj.data.utxoTxid)

        // console.log('Offer already found in local database.')
        return false
      } catch (err) { /* exit quietly */ }

      // console.log('this.adapters.bchjs: ', this.adapters.bchjs)

      // Input Validation
      // TODO: This is a hack. Find a better way to protect against the corner-
      // case of counter-offers getting routed here.
      // if (offerObj.data.dataType === 'counter-offer') {
      //   console.log('WARN: Counter Offer innappropriately routed to createOffer()')
      // }

      // Quickly skip over offers that have already been processed.
      const eventId = offerObj.data.nostrEventId
      if (this.seenOffers.includes(eventId)) {
        // console.log(`Offer with event ID ${eventId} already processed. Skipping.`)
        return false
      }
      this.seenOffers.push(eventId)

      // Verify that UTXO in offer is unspent. If it is spent, then ignore the
      // offer.
      const utxo = {
        tx_hash: offerObj.data.utxoTxid,
        tx_pos: offerObj.data.utxoVout
      }
      // const utxoStatus = await this.adapters.wallet.bchWallet.utxoIsValid(utxo)
      const utxoStatus = await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.utxoIsValid, utxo)
      // console.log('utxoStatus: ', utxoStatus)
      // if (utxoStatus === null) return false
      if (!utxoStatus) return false

      // A new offer gets a status of 'posted'
      offerObj.data.offerStatus = 'posted'

      // Set timestamp
      offerObj.timestamp = new Date().getTime()

      const offerEntity = this.offerEntity.validate(offerObj)
      // console.log('offerEntity: ', offerEntity)

      console.log(`New Offer for token ID ${offerEntity.tokenId} detected from Nostr post ${eventId}`)

      // Get data about the token.
      const tokenId = offerEntity.tokenId
      // const tokenData = await this.adapters.wallet.bchWallet.getTokenData(tokenId)
      const tokenData = await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.getTokenData, tokenId)
      // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

      // Generate a 'display category' for the token. This will allow the
      // front end UI to figure out how to display the token.
      const displayCategory = this.categorizeToken(offerEntity, tokenData)
      console.log('displayCategory: ', displayCategory)
      offerEntity.displayCategory = displayCategory

      // Detect if user set the NSFW flag.
      // const nsfw = false
      // nsfw = await this.retryQueue.addToQueue(this.detectNsfw, tokenData)
      // offerEntity.nsfw = nsfw

      // Add offer to the local database.
      const offerModel = new this.OfferModel(offerEntity)
      await offerModel.save()

      return true
    } catch (err) {
      console.error('Error in createOffer()', err.message)
      throw err
    }
  }

  // By default this function returns false, to indicate the NFT is safe for work.
  // If the user who created the token sets the nsfw property in the mutable data,
  // this function will return true.
  async detectNsfw (tokenData) {
    try {
      let nsfw = false

      const mutableCid = tokenData.mutableData

      // If there is no mutable IPFS CID, then skip this token.
      if (!mutableCid.includes('ipfs://')) return nsfw

      // Revove the ipfs:// prefix.
      const cid = mutableCid.substring(7)

      // Retrieve the mutable data from Filecoin/IPFS.
      // const url = `https://${cid}.ipfs.w3s.link/data.json`
      let mutableData = {}

      try {
        // Try the conventional data URL.
        const url = `${this.config.ipfsGateway}${cid}/data.json`
        const result = await this.axios.get(url)
        mutableData = result.data
        // console.log(`mutableData: ${JSON.stringify(mutableData, null, 2)}`)
      } catch (err) {
        // Try the newer data URL.
        const url = `${this.config.ipfsGateway}${cid}`
        const result = await this.axios.get(url)
        mutableData = result.data
        // console.log(`mutableData: ${JSON.stringify(mutableData, null, 2)}`)
      }
      console.log('mutableData: ', mutableData)

      // Logical tests
      const hasNsfw = !!mutableData.nsfw
      const nsfwSetTrue = mutableData.nsfw === true
      const nsfwStringTrue = mutableData.nsfw === 'true'
      const nsfwDetected = hasNsfw && (nsfwSetTrue || nsfwStringTrue)
      // console.log(`hasNsfw: ${hasNsfw}, nsfwSetTrue: ${nsfwSetTrue}, nsfwStringTrue: ${nsfwStringTrue}, nsfwDetected: ${nsfwDetected}`)

      if (nsfwDetected) {
        console.log('NSFW flag set as true')
        nsfw = true
      }

      return nsfw
    } catch (err) {
      console.error('Error in detectNsfw(): ', err)
      return false
    }
  }

  // Categorize the token for display purposes. This will categorize a token
  // into one of these categories:
  // - nft
  // - group
  // - fungible
  // - simple-nft
  //
  // The first three are easy to categorize. The simple-nft is a fungible token
  // with a quantity of 1, decimals of 0, and no minting baton. Categorizing this
  // type of token is the main reason why this function exists.
  categorizeToken (offerData, tokenData) {
    try {
      // console.log(`categorizeToken(): ${JSON.stringify(offerData, null, 2)}`)

      // const tokenId = offerData.tokenId
      //
      // const tokenData = await this.adapters.wallet.bchWallet.getTokenData(tokenId)
      // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

      if (tokenData.genesisData.type === 65) {
        return 'nft'
      }

      // Create a set of checks to detect a simple NFT
      const isType1 = tokenData.genesisData.type === 1
      const hasNoMintingBaton = !tokenData.genesisData.mintBatonIsActive
      const hasNoDecimals = !tokenData.genesisData.decimals
      const hasQtyOfOne = parseInt(tokenData.genesisData.tokensInCirculationStr) === 1

      if (isType1 && hasNoMintingBaton && hasNoDecimals && hasQtyOfOne) {
        return 'simple-nft'
      }

      if (isType1) return 'fungible'

      throw new Error(`Unknown token type: ${tokenData.genesisData.type}`)
    } catch (err) {
      console.error('Error in use-cases/offer/index.js categorizeToken(): ', err)
      throw err
    }
  }

  async listOffers (page = 0) {
    try {
      const data = await this.OfferModel.find({})
        // Sort entries so newest entries show first.
        .sort('-timestamp')
        // Skip to the start of the selected page.
        .skip(page * DEFAULT_ENTRIES_PER_PAGE)
        // Only return 20 results.
        .limit(DEFAULT_ENTRIES_PER_PAGE)

      return data
    } catch (error) {
      console.error('Error in use-cases/offer/listOffers()')
      throw error
    }
  }

  async listNftOffers (page = 0, nsfw = false) {
    try {
      const data = await this.OfferModel.find({
        displayCategory: { $ne: 'fungible' },
        nsfw
      })
        // Sort entries so newest entries show first.
        .sort('-timestamp')
        // Skip to the start of the selected page.
        .skip(page * NFT_ENTRIES_PER_PAGE)
        // Only return 20 results.
        .limit(NFT_ENTRIES_PER_PAGE)

      // console.log('listNftOffers() returning this data: ', data)

      return data
    } catch (error) {
      console.error('Error in use-cases/offer/listNftOffers()')
      throw error
    }
  }

  async listFungibleOffers (page = 0) {
    try {
      const data = await this.OfferModel.find({ displayCategory: 'fungible' })
        // Sort entries so newest entries show first.
        .sort('-timestamp')
        // Skip to the start of the selected page.
        .skip(page * FUNGIBLE_ENTRIES_PER_PAGE)
        // Only return 20 results.
        .limit(FUNGIBLE_ENTRIES_PER_PAGE)

      // console.log('listFungibleOffers() returning this data: ', data)

      return data
    } catch (error) {
      console.error('Error in use-cases/offer/listFungibleOffers()')
      throw error
    }
  }

  // Generate phase 2 of 3 - take the other side of an Offer.
  // Based on this example:
  // https://github.com/Permission=less-Software-Foundation/bch-js-examples/blob/master/bch/applications/collaborate/sell-slp/e2e-exchange/step2-purchase-tx.js
  //
  // Dev Note: Right now this use cases takes all the tokens offered. It does not
  // provide functionality to take less than the total amount of tokens offered
  // (offerInfo.numTokens). Taking less than the offered amount will be added
  // in the future.
  async takeOffer (eventId) {
    try {
      if (!eventId || typeof eventId !== 'string') throw new Error('eventId must be a string')

      // Get the Offer information
      const offerInfo = await this.findOfferByEvent(eventId)
      console.log(`offerInfo: ${JSON.stringify(offerInfo, null, 2)}`)

      // Ensure the offer is in a 'posted' state and not already 'taken'
      if (!offerInfo.offerStatus || offerInfo.offerStatus !== 'posted') {
        throw new Error('offer status is not "posted", so offer is dead and can not be countered.')
      }

      // Verify that UTXO for sale is unspent. Abort if it's been spent.
      const utxo = {
        tx_hash: offerInfo.utxoTxid,
        tx_pos: offerInfo.utxoVout
      }

      // Note : should be added to retry-queue?
      const utxoStatus = await this.adapters.wallet.bchWallet.utxoIsValid(utxo)
      // console.log('utxoStatus: ', utxoStatus)
      if (!utxoStatus) {
        console.log(`utxo txid: ${offerInfo.utxoTxid}, vout: ${offerInfo.utxoVout}`)

        // TODO: Mark this Offer as 'dead'

        throw new Error('UTXO does not exist. Aborting.')
      }

      // Ensure the app has enough funds to complete the trade.
      await this.ensureFunds(offerInfo)

      // Get UTXOs.
      // const utxos = this.adapters.wallet.bchWallet.utxos.utxoStore
      // console.log(`utxos: ${JSON.stringify(utxos, null, 2)}`)

      // Calculate amount of sats to generate a counter offer.
      let satsToMove = Math.ceil(offerInfo.numTokens * parseInt(offerInfo.rateInBaseUnit))
      console.log('satsToMove', satsToMove, offerInfo)
      if (isNaN(satsToMove)) {
        throw new Error('Could not calculate the amount of BCH to generate counter offer')
      }

      // Add sats to cover mining fees and dust for token UTXO
      satsToMove += 1000

      // Move funds to create a segrated UTXO for taking the offer
      const utxoInfo = await this.adapters.wallet.moveBch(satsToMove)
      utxoInfo.sats = satsToMove
      console.log('utxoInfo: ', utxoInfo)

      // Create a partially signed transaction.
      // https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/bch/applications/collaborate/sell-slp/e2e-exchange/step2-purchase-tx.js#L59
      const partialTxHex = await this.adapters.wallet.generatePartialTx(offerInfo, utxoInfo)
      console.log('partialTxHex: ', partialTxHex)
      // return partialTxHex

      // Debug: Decode the transaction for manual QA
      const txObj = await this.adapters.wallet.deseralizeTx(partialTxHex)
      console.log(`partially-signed transaction: ${JSON.stringify(txObj, null, 2)}`)

      // Create valid Offer object
      const takenOfferInfo = Object.assign({}, offerInfo)
      takenOfferInfo.partialTxHex = partialTxHex
      delete takenOfferInfo.nostrEventId
      delete takenOfferInfo._id
      takenOfferInfo.offerHash = offerInfo.nostrEventId

      // Add P2WDB specific flag for signaling that this is a new offer.
      takenOfferInfo.dataType = 'counter-offer'

      // Write offer info to the P2WDB
      // TODO: This will trigger the webhook. Find some way of triggering the
      // webhook on new offers, but not on counteroffers
      const nostrData = {
        // wif: this.adapters.wallet.bchWallet.walletInfo.privateKey,
        data: takenOfferInfo
        // appId: this.config.p2wdbAppId
      }
      const resultEventId = await this.adapters.nostr.post(JSON.stringify(nostrData))

      const noteId = this.adapters.nostr.eventId2note(resultEventId)

      // Delete the Offer from the database, so that the user doesn't attempt
      // to take the offer more than once.
      // offerInfo.remove()

      // Return the P2WDB CID
      return { eventId: resultEventId, noteId }

      // return 'fake-hash'
    } catch (err) {
      console.error('Error in use-cases/offer/takeOffer(): ', err)
      throw err
    }
  }

  // Ensure that the wallet has enough BCH and tokens to complete the requested
  // trade. Will return true if it does. Will throw an error if it doesn't.
  async ensureFunds (offerEntity) {
    try {
      // console.log('this.adapters.wallet: ', this.adapters.wallet.bchWallet)
      // console.log(`walletInfo: ${JSON.stringify(this.adapters.wallet.bchWallet.walletInfo, null, 2)}`)

      await this.adapters.wallet.bchWallet.walletInfoPromise
      // console.log(`utxos: ${JSON.stringify(this.adapters.wallet.bchWallet.utxos.utxoStore, null, 2)}`)

      // Refresh the wallet UTXOs
      await this.adapters.wallet.bchWallet.initialize()

      // Ensure the app wallet has enough funds to write to the P2WDB.
      // Note :  this validation should be deprecated for nostr functionality?
      // const wif = this.adapters.wallet.bchWallet.walletInfo.privateKey
      // const canWriteToP2WDB = await this.adapters.p2wdb.checkForSufficientFunds(wif)
      // if (!canWriteToP2WDB) throw new Error('App wallet does not have funds for writing to the P2WDB.')

      if (offerEntity.buyOrSell.includes('sell')) {
        // Sell Offer

        // Calculate the sats needed
        const satsNeeded = Math.ceil(offerEntity.numTokens * parseInt(offerEntity.rateInBaseUnit))
        if (isNaN(satsNeeded)) {
          throw new Error('Could not calculate sats needed!')
        }

        // Ensure the app wallet controlls enough BCH to pay for the tokens.
        const balance = await this.adapters.wallet.bchWallet.getBalance()
        console.log(`wallet balance: ${balance}, sats needed: ${satsNeeded}`)
        const SATS_MARGIN = 5000
        if (satsNeeded + SATS_MARGIN > balance) {
          throw new Error('App wallet does not control enough BCH to purchase the tokens.')
        }

        //
      } else {
        // Buy Offer
        throw new Error('Buy offers are not supported yet.')
      }

      return true
    } catch (err) {
      console.error('Error in offer/index.js/ensureFunds()')

      // Debugging
      try {
        console.error(`Error with this address: ${this.adapters.wallet.bchWallet.walletInfo.cashAddress}`)
      } catch (err) { /* exit quietly */ }

      throw err
    }
  }

  // Retrieve an Order model from the database. Find it by its event Id.
  async findOfferByEvent (nostrEventId) {
    try {
      if (typeof nostrEventId !== 'string' || !nostrEventId) {
        throw new Error('nostrEventId must be a string')
      }

      const order = await this.OfferModel.findOne({ nostrEventId })

      if (!order) {
        throw new Error('offer not found')
      }

      const orderObject = order.toObject()
      // return this.offerEntity.validateFromModel(offerObject)

      return orderObject
    } catch (err) {
      console.error('Error in findOfferByEvent()')
      throw err
    }
  }

  async findOfferByTxid (utxoTxid) {
    // try {
    // try {
    if (typeof utxoTxid !== 'string' || !utxoTxid) {
      throw new Error('utxoTxid must be a string')
    }

    const offer = await this.OfferModel.findOne({ utxoTxid })

    // TODO: Offer should be found by TXID, then if there is more than one
    // result, they should be filtered by the vout property. That will leave
    // one remaining UTXO.

    if (!offer) {
      throw new Error('offer not found')
    }

    return offer
    // } catch (error) {
    //   // console.error('Error in use-cases/offer/findOfferByTxid(): ', error.message)
    //   throw error
    // }
  }

  // This function is called by the P2WDB webhook REST API handler. When a
  // Counter Offer is passed to bch-dex by the P2WDB, the data is then passed
  // to this function. It does due diligence on the Counter Offer, then signs
  // and broadcasts the transaction to accept the Counter Offer.
  async acceptCounterOffer (offerData) {
    try {
      // console.log(`acceptCounterOffer() offerData: ${JSON.stringify(offerData, null, 2)}`)

      // Quickly skip over offers that have already been processed.
      const eventId = offerData.data.nostrEventId
      if (this.seenOffers.includes(eventId)) {
        // console.log(`Offer with event ID ${eventId} already processed. Skipping.`)
        return false
      }

      // See if this instance of bch-dex is managing the Order associated with
      // the incoming Counter Offer.

      // Note : this should be handled by nostrEvent id or UtxoId?
      // const orderHash = offerData.data.nostrEventId
      let orderData = {}
      try {
        orderData = await this.orderUseCase.findOrderByUtxo(offerData)
        console.log(`orderData: ${JSON.stringify(orderData, null, 2)}`)
      } catch (err) {
        console.log('Order matching this Counter Offer is not managed by this instance of bch-dex. Skipping.')

        // Add order to list of seen orders, so that we don't spent time trying to validate it again.
        this.seenOffers.push(eventId)

        return 'N/A'
      }

      // Verify that the UTXO for sale is valid.
      let utxoStatus = null
      try {
        // Get the status of the UTXO associate with this Offer.
        const utxo = {
          tx_hash: offerData.data.utxoTxid,
          tx_pos: offerData.data.utxoVout
        }
        // console.log(`Checking this UTXO: ${JSON.stringify(utxo, null, 2)}`)

        // utxoStatus = await this.adapters.wallet.bchWallet.utxoIsValid(utxo)
        utxoStatus = await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.utxoIsValid, utxo)
        console.log('utxoStatus: ', utxoStatus)
      } catch (err) {
        console.log('acceptCounterOffer() err validating UTXO: ', err)

        // Handle corner case of bad-data in the Offer model.
        if (err.isAxiosError) {
          console.log('Error trying to contact wallet service: ', err)
          return 'N/A'
        } else {
          return 'N/A'
        }
      }

      // If the Offer UTXO is spent, exit.
      if (utxoStatus === false) {
        // Add order to list of seen orders, so that we don't spent time trying to validate it again.
        this.seenOffers.push(eventId)

        console.log(`Aborting Counter Offer from Event ID ${eventId}`)
        console.log(`https://astral.psfoundation.info/${this.adapters.nostr.eventId2note(eventId)}`)

        return 'N/A'
      }

      // Deserialize the partially signed transaction.
      const txHex = offerData.data.partialTxHex
      const txObj = await this.adapters.wallet.deseralizeTx(txHex)
      console.log(`txObj: ${JSON.stringify(txObj, null, 2)}`)

      // Ensure the 3rd output (vout=2) contains the required amount of BCH.
      const satsToReceive = Math.ceil(orderData.numTokens * parseInt(orderData.rateInBaseUnit))
      console.log('Ceil', satsToReceive)
      if (isNaN(satsToReceive)) {
        throw new Error('Could not calculate the amount of BCH offered in the Counter Offer')
      }
      const satsOut = this.adapters.wallet.bchWallet.bchjs.BitcoinCash.toSatoshi(txObj.vout[2].value)
      const hasRequiredAmount = satsOut === satsToReceive
      if (!hasRequiredAmount) {
        throw new Error(`The Counter Offer has an output of ${satsOut}, which does not match the required ${satsToReceive} in the Offer.`)
      }

      // Ensure the 3rd output (vout=2) is going to the maker address specified
      // in the Offer.
      const addrInCounterOffer = txObj.vout[2].scriptPubKey.addresses[0]
      const makerAddr = orderData.makerAddr
      const hasCorrectAddr = makerAddr === addrInCounterOffer
      if (!hasCorrectAddr) {
        throw new Error(`The Counter Offer has an output address of ${addrInCounterOffer}, which does not match the Maker address of ${makerAddr} in the Offer.`)
      }

      // Sign and broadcast the transaction.
      const txid = await this.adapters.wallet.completeTx(txHex, orderData.hdIndex)
      console.log('txid: ', txid)

      return txid
    } catch (err) {
      console.error('Error in acceptCounterOffer(): ', err)
      throw err
    }
  }

  // TODO: Write unit tests for this function, then add it to the Timer Controllers
  // Looks for duplicate offers and removes the duplicate.
  // Duplicates are checked for when an offer is created, and so should not
  // exist. But emperical testing shows that they do. This function is called
  // periodically by a timer, to clean up any duplicates that slipped through
  // the cracks.
  async removeDuplicateOffers () {
    try {
      const now = new Date()
      console.log(`Starting removeDuplicateOffers() at ${now.toLocaleString()}`)

      let duplicateFound = false

      // Get all Offers in the database.
      const offers = await this.OfferModel.find({})
      // console.log('offers: ', offers)

      const offerZcids = []

      for (let i = 0; i < offers.length; i++) {
        const thisOffer = offers[i]

        if (offerZcids.includes(thisOffer.p2wdbHash)) {
          await thisOffer.remove()
          duplicateFound = true
          continue
        }

        // Add the zcid to the array.
        offerZcids.push(thisOffer.p2wdbHash)
      }

      return duplicateFound
    } catch (err) {
      console.error('Error in removeDuplicateOffers()')
      throw err
    }
  }

  // This function is called by the garbage collection timer controller. It
  // checks the UTXO associated with each Offer in the database. If the UTXO
  // has been spent, the Offer is deleted from the database.
  async removeStaleOffers () {
    try {
      const now = new Date()
      console.log(`Starting garbage collection for Offers at ${now.toLocaleString()}`)

      // Get all Offers in the database.
      const offers = await this.OfferModel.find({})
      // console.log('offers: ', offers)

      // Loop through each Offer and ensure the UTXO is still valid.
      for (let i = 0; i < offers.length; i++) {
        const thisOffer = offers[i]

        let utxoStatus = null
        try {
          // Get the status of the UTXO associate with this Offer.
          const utxo = {
            tx_hash: thisOffer.utxoTxid,
            tx_pos: thisOffer.utxoVout
          }
          // console.log(`Checking this UTXO: ${JSON.stringify(utxo, null, 2)}`)

          // utxoStatus = await this.adapters.wallet.bchWallet.utxoIsValid(utxo)
          utxoStatus = await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.utxoIsValid, utxo)
          // console.log('utxoStatus: ', utxoStatus)
        } catch (err) {
          // Handle corner case of bad-data in the Offer model.
          if (err.message && err.message.includes('txid needs to be a proper transaction ID')) {
            console.log(`Deleting Offer with bad data: ${JSON.stringify(thisOffer, null, 2)}`)
            await thisOffer.remove()
            continue
          } else if (err.isAxiosError) {
            console.log('Error trying to contact wallet service: ', err)
            continue
          } else {
            throw err
          }
        }

        // If the Offer UTXO is spent, delete the Offer model.
        if (utxoStatus === false) {
          // console.log('utxoStatus: ', utxoStatus)
          console.log(`Spent UTXO detected. Deleting this Offer: ${JSON.stringify(thisOffer, null, 2)}`)
          await thisOffer.remove()
        }

        // If the Offer is older than 7 days, delete it.
        const nowMs = now.getTime()
        const eightWeeks = 1000 * 60 * 60 * 24 * 7 * 8
        const eightWeeksAgo = nowMs - eightWeeks
        if (thisOffer.timestamp < eightWeeksAgo) {
          console.log('Offer older than 8 weeks. Deleting.')
          await thisOffer.remove()
        }
      }
    } catch (err) {
      console.error('Error in removeStaleOffers(): ', err)
      throw err
    }
  }

  // Flag offers as NSFW.
  async flagOffer (flagData = {}) {
    try {
      if (!flagData.data) throw new Error('"data" property is required')

      console.log(`flagData: ${JSON.stringify(flagData, null, 2)}`)

      const eventId = flagData.data.nostrEventId

      // Get the offer from the database.
      const offer = await this.findOfferByEvent(eventId)
      console.log(`Flagging this offer: ${JSON.stringify(offer, null, 2)}`)

      if (!offer) {
        throw new Error(`Offer ${eventId} not found in the database.`)
      }

      // Add the raw flag data to the database model.
      offer.flags.push(flagData)

      // If flag count is 3 or more, mark the Offer as NSFW
      const flagCnt = offer.flags.length
      if (flagCnt >= 3) {
        offer.nsfw = true
      }

      // Save the updated offer data to the database.
      await offer.save()

      return true
    } catch (error) {
      console.error('Error in flagOffer(): ', error)
      throw error
    }
  }

  // Get offers data from nostr.
  async loadOffers () {
    try {
      // Retrieve offers array.
      const offers = await this.adapters.nostr.read()
      // console.log('offers: ', offers)

      for (let i = 0; i < offers.length; i++) {
        try {
          const offer = offers[i]

          // offer data
          const offerObj = JSON.parse(offer.content)

          // Append the Nostr Event ID to the offer object
          offerObj.data.nostrEventId = offer.eventId
          // console.log('loadOffers() offerObj: ', offerObj)

          if (offerObj.data.dataType === 'offer') {
            // Try to create new offer
            await this.createOffer(offerObj)
          }

          if (offerObj.data.dataType === 'counter-offer') {
            // console.log('Counter offer detected: ', offerObj)
            // console.log('Counter offer detected: ', offerObj.data.nostrEventId)
            console.log(`Counter offer detected: https://astral.psfoundation.info/${this.adapters.nostr.eventId2note(offerObj.data.nostrEventId)}`)
            await this.acceptCounterOffer(offerObj)
          }

          // Ignore the post if it doesn't fit the above filters.
        } catch (error) {
          /* exit quietly */
        }
      }
    } catch (error) {
      console.error('Error in loadOffers(): ', error)
      throw error
    }
  }
}

export default OfferUseCases

```

`/home/trout/work/psf/code/bch-dex/src/use-cases/offer/retry-queue.js`:

```js
/*
  This library leverages the p-retry and p-queue libraries, to create a
  validation queue with automatic retry.

  New nodes syncing will attempt to rapidly validate a lot of entries.
  A promise-based queue allows this to happen while respecting rate-limits
  of the blockchain service provider.

  pay-to-write-access-controller.js depends on this library.
*/

// Global npm libraries
import PQueue from 'p-queue'
import pRetry from 'p-retry'

let _this

class RetryQueue {
  constructor (localConfig = {}) {
    if (!localConfig.bchjs) {
      throw new Error(
        'Must pass instance of bch-js when instantiating RetryQueue Class.'
      )
    }
    this.bchjs = localConfig.bchjs

    // Encapsulate dependencies
    this.validationQueue = new PQueue({ concurrency: 1 })
    this.pRetry = pRetry

    this.attempts = 5

    _this = this
  }

  // Add an async function to the queue, and execute it with the input object.
  async addToQueue (funcHandle, inputObj) {
    try {
      console.log('addToQueue inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }

      const returnVal = await _this.validationQueue.add(() =>
        _this.retryWrapper(funcHandle, inputObj)
      )
      return returnVal
    } catch (err) {
      console.error('Error in addToQueue(): ', err)
      throw err
    }
  }

  // Wrap the p-retry library.
  // This function returns a promise that will resolve to the output of the
  // function 'funcHandle'.
  async retryWrapper (funcHandle, inputObj) {
    try {
      console.log('retryWrapper inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }
      console.log('Entering retryWrapper()')

      // Add artificial delay to prevent 429 errors.
      await this.bchjs.Util.sleep(2000)

      return this.pRetry(
        async () => {
          return await funcHandle(inputObj)
        },
        {
          onFailedAttempt: _this.handleValidationError,
          retries: this.attempts // Retry 5 times
        }
      )
    } catch (err) {
      console.error('Error in retryWrapper: ', err)
      throw err
    }
  }

  // Notifies the user that an error occured and that a retry will be attempted.
  // It tracks the number of retries until it fails.
  async handleValidationError (error) {
    try {
      const errorMsg = `Attempt ${error.attemptNumber} to validate entry. There are ${error.retriesLeft} retries left. Waiting before trying again.`
      console.log(errorMsg)
      const SLEEP_TIME = 30000
      console.log(`Waiting ${SLEEP_TIME} milliseconds before trying again.\n`)
      await _this.bchjs.Util.sleep(SLEEP_TIME) // 30 sec
    } catch (err) {
      console.error('Error in handleValidationError(): ', err)
      throw err
    }
  }
}

export default RetryQueue

```

`/home/trout/work/psf/code/bch-dex/src/use-cases/usage-use-cases.js`:

```js
/*
  Use Case library for tracking usage. This library contains business logic
  for tracking the usage of REST API and JSON RPC calls. This library is used
  by admins to keep an eye on how many API calls were made in a 24-hour and
  1-hour time period.
*/

// This global variable is used to share data between the REST middleware and
// the Usage Use Case class instance.
let restCalls = []

class UsageUseCases {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Usage Use Cases library.'
      )
    }

    // Bind 'this' object to all subfunctions
    this.cleanUsage = this.cleanUsage.bind(this)
    this.getRestSummary = this.getRestSummary.bind(this)
    this.getTopIps = this.getTopIps.bind(this)
    this.getTopEndpoints = this.getTopEndpoints.bind(this)

    // State
  }

  // Clean up the state by removing entries that are older than 24 hours. This
  // ensures stats reflect only the last 24 hours.
  // This function is called by a Timer Controller.
  cleanUsage () {
    try {
      const now = new Date()
      const twentyFourHoursAgo = now.getTime() - (60000 * 60 * 24)

      console.log('cleanUsage() now: ', now)
      console.log('cleanUsage() restCalls.length before filtering: ', restCalls.length)
      restCalls = restCalls.filter(x => x.timestamp > twentyFourHoursAgo)
      console.log('cleanUsage() restCalls.length after filtering: ', restCalls.length)

      return restCalls
    } catch (err) {
      console.error('Error in usage-use-cases.js/cleanUsage()')
      throw err
    }
  }

  // Track the calls to a REST API
  getRestSummary (inObj = {}) {
    try {
      console.log(`getRestSummary(): There have been ${restCalls.length} REST calls`)

      return restCalls.length
    } catch (err) {
      console.error('Error in usage-use-cases.js/getRestSummary()')
      throw err
    }
  }

  // Get the top 20 IP addresses from the stats.
  getTopIps () {
    try {
      const ips = restCalls.map(x => x.ip)
      // Create a Map to count occurrences of each IP address string
      const countMap = new Map()
      ips.forEach(ip => {
        countMap.set(ip, (countMap.get(ip) || 0) + 1)
      })

      // Convert the Map into an array of objects with `str` and `cnt` properties
      const result = Array.from(countMap, ([ip, cnt]) => ({ ip, cnt }))

      // Sort the results by the `cnt` property in descending order
      result.sort((a, b) => b.cnt - a.cnt)

      // Ensure the result has at most 20 elements
      return result.slice(0, 20)
    } catch (err) {
      console.error('Error in usage-use-cases.js/getTopIps()')
      throw err
    }
  }

  // Get the top 20 most consumed endpoints.
  getTopEndpoints () {
    try {
      const endpoints = restCalls.map(x => `${x.method} ${x.url}`)

      // Create a Map to count occurrences of each IP address string
      const countMap = new Map()
      endpoints.forEach(endpoint => {
        countMap.set(endpoint, (countMap.get(endpoint) || 0) + 1)
      })

      // Convert the Map into an array of objects with `str` and `cnt` properties
      const result = Array.from(countMap, ([endpoint, cnt]) => ({ endpoint, cnt }))

      // Sort the results by the `cnt` property in descending order
      result.sort((a, b) => b.cnt - a.cnt)

      // Ensure the result has at most 20 elements
      return result.slice(0, 20)
    } catch (err) {
      console.error('Error in usage-use-cases.js/getTopEndpoints()')
      throw err
    }
  }
}

// This Koa middleware is called any time there is a REST API. It logs the
// details from the request object.
function usageMiddleware () {
  return async (ctx, next) => {
    try {
      await next()

      // console.log('ctx.request: ', ctx.request)
      const now = new Date()

      const reqObj = {
        ip: ctx.request.ip,
        url: ctx.request.url,
        method: ctx.request.method,
        timestamp: now.getTime()
      }
      // console.log('reqObj: ', reqObj)

      restCalls.push(reqObj)
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  }
};

export { UsageUseCases, usageMiddleware, restCalls }

```

`/home/trout/work/psf/code/bch-dex/src/use-cases/order.js`:

```js
/*
  Order use-case library.
*/

// Global npm libraries
import RetryQueue from '@chris.troutner/retry-queue'

// Local libraries
import wlogger from '../adapters/wlogger.js'
import OrderEntity from '../entities/order.js'
import config from '../../config/index.js'

const DEFAULT_ENTRIES_PER_PAGE = 20

class OrderLib {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Order Use Cases library.'
      )
    }

    // Encapsulate dependencies
    this.orderEntity = new OrderEntity()
    this.OrderModel = this.adapters.localdb.Order
    this.UserModel = this.adapters.localdb.Users
    this.bch = this.adapters.bch
    this.config = config
    this.retryQueue = new RetryQueue({ retryPeriod: 1000, attempts: 3 })

    // Bind subfunctions to the 'this' object.
    this.ensureFunds = this.ensureFunds.bind(this)
    this.createOrder = this.createOrder.bind(this)
    this.findOrderByUtxo = this.findOrderByUtxo.bind(this)
  }

  // Create a new order model and add it to the Mongo database.
  async createOrder (entryObj) {
    try {
      // console.log('createOrder(entryObj): ', entryObj)
      if (!entryObj) return false

      if (!entryObj.tokenId) throw new Error('entry does not contain required properties')

      const user = await this.UserModel.findById(entryObj.userId)
      if (!user) throw new Error('user not found')

      console.log(`Using FullStack.cash: ${this.config.useFullStackCash}`)
      const advancedConfig = {}
      if (this.config.useFullStackCash) {
        advancedConfig.interface = 'rest-api'
        advancedConfig.restURL = this.config.apiServer
        advancedConfig.apiToken = this.config.apiToken
      } else {
        advancedConfig.interface = 'consumer-api'
        advancedConfig.restURL = this.config.consumerUrl
      }

      // Instantiate minimal-slp-wallet with the user's mnemonic.
      const BchWallet = this.adapters.wallet.BchWallet
      const userWallet = new BchWallet(user.mnemonic, advancedConfig)

      // Wait for wallet to initialize.
      await userWallet.walletInfoPromise
      await userWallet.initialize()

      // Specify the address to send payment.
      console.log('userWallet.walletInfo: ', userWallet.walletInfo)
      entryObj.makerAddr = userWallet.walletInfo.cashAddress
      console.log('entryObj.makerAddr: ', entryObj.makerAddr)
      // console.log('entryObj.makerAddr: ', entryObj.makerAddr)

      // Input Validation
      const orderEntity = this.orderEntity.inputValidate(entryObj)
      // console.log('orderEntity: ', orderEntity)

      // Optimize the wallet to speed up working with it.
      console.log('Optimizing wallet before creating new order.')
      // await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.optimize, {})
      await userWallet.optimize()

      // Ensure sufficient tokens exist to create the order.
      // await this.ensureFunds(orderEntity)
      // await this.retryQueue.addToQueue(this.ensureFunds, orderEntity)

      // Get Ticker for token ID.
      // const tokenData = await this.adapters.wallet.bchWallet.getTxData([entryObj.tokenId])
      // const tokenData = await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.getTxData, [entryObj.tokenId])
      const tokenData = await userWallet.getTxData([entryObj.tokenId])
      // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)
      orderEntity.ticker = tokenData[0].tokenTicker

      // Move the tokens to holding address.
      const moveObj = {
        tokenId: orderEntity.tokenId,
        qty: orderEntity.numTokens,
        wallet: userWallet
      }
      // const utxoInfo = await this.adapters.wallet.moveTokens(moveObj)
      const utxoInfo = await this.retryQueue.addToQueue(this.adapters.wallet.moveTokensFromCustomWallet, moveObj)
      // console.log('utxoInfo: ', utxoInfo)

      // Update the UTXO store for the wallet.
      await userWallet.bchjs.Util.sleep(3000)
      // await this.adapters.wallet.bchWallet.getUtxos()
      // await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.initialize, {})
      await userWallet.initialize()
      // Update the order with the new UTXO information.
      orderEntity.utxoTxid = utxoInfo.txid
      orderEntity.utxoVout = utxoInfo.vout
      orderEntity.tokenType = utxoInfo.tokenType

      // Add P2WDB specific flag for signaling that this is a new offer.
      orderEntity.dataType = 'offer'

      // Post the new Order information to Nostr under the topic set in the
      // config file.
      const postObj = {
        data: orderEntity
      }
      const postMsg = JSON.stringify(postObj)
      const eventId = await this.adapters.nostr.post(postMsg)
      // console.log('hash: ', hash)

      // Create a MongoDB model to hold the Order
      orderEntity.hdIndex = utxoInfo.hdIndex
      orderEntity.nostrEventId = eventId

      console.log(`creating new order model: ${JSON.stringify(orderEntity, null, 2)}`)
      const order = new this.OrderModel(orderEntity)
      await order.save()

      const noteId = this.adapters.nostr.eventId2note(eventId)

      return { eventId, noteId }
    } catch (err) {
      // console.log("Error in use-cases/entry.js/createEntry()", err.message)
      wlogger.error('Error in use-cases/order.js/createOrder(): ', err)
      console.log('error entryObj: ', entryObj)
      throw err
    }
  }

  // Ensure that the wallet has enough BCH and tokens to complete the requested
  // trade.
  async ensureFunds (orderEntity) {
    try {
      // console.log('this.adapters.wallet: ', this.adapters.wallet.bchWallet)
      // console.log(`walletInfo: ${JSON.stringify(this.adapters.wallet.bchWallet.walletInfo, null, 2)}`)

      // Update the wallet balance
      await this.adapters.wallet.bchWallet.getUtxos()
      // console.log(`wallet UTXOs: ${JSON.stringify(this.adapters.wallet.bchWallet.utxos.utxoStore, null, 2)}`)

      // Ensure the app wallet has enough funds to write to the P2WDB.
      const wif = this.adapters.wallet.bchWallet.walletInfo.privateKey
      const canWriteToP2WDB = await this.adapters.p2wdb.checkForSufficientFunds(wif)
      if (!canWriteToP2WDB) throw new Error('App wallet does not have funds for writing to the P2WDB.')

      // Get UTXOs.
      const utxos = this.adapters.wallet.bchWallet.utxos.utxoStore
      // console.log(`utxos: ${JSON.stringify(utxos, null, 2)}`)

      if (orderEntity.buyOrSell.includes('sell')) {
        // Sell Order

        // Combine Fungible and NFT token UTXOs.
        let tokenUtxos = utxos.slpUtxos.type1.tokens.concat(utxos.slpUtxos.nft.tokens)
        // Get token UTXOs that match the token in the order.
        tokenUtxos = tokenUtxos.filter(
          x => x.tokenId === orderEntity.tokenId
        )

        // Get the total amount of tokens in the wallet that match the token
        // in the order.
        let totalTokenBalance = 0
        tokenUtxos.map(x => (totalTokenBalance += parseFloat(x.qtyStr)))
        console.log('totalTokenBalance: ', totalTokenBalance)

        // If there are fewer tokens in the wallet than what's in the order,
        // throw an error.
        if (totalTokenBalance < orderEntity.numTokens || isNaN(totalTokenBalance)) {
          throw new Error(
            'App wallet does not have enough tokens to satisfy the SELL order.'
          )
        }

        //
      } else {
        // Buy Order
        throw new Error('Buy orders are not supported yet.')
      }

      return true
    } catch (err) {
      console.error('Error in ensureFunds()')
      throw err
    }
  }

  // Retrieve an Order model from the database. Find it by its event Id.
  async findOrderByEvent (nostrEventId) {
    try {
      if (typeof nostrEventId !== 'string' || !nostrEventId) {
        throw new Error('nostrEventId must be a string')
      }

      const order = await this.OrderModel.findOne({ nostrEventId })

      if (!order) {
        throw new Error('order not found')
      }

      const orderObject = order.toObject()
      // return this.offerEntity.validateFromModel(offerObject)

      return orderObject
    } catch (err) {
      console.error('Error in findOrderByEvent()')
      throw err
    }
  }

  // Retrieve an Order model from the database. Find it by its UTXO (TXID & Vout)
  async findOrderByUtxo (offerData = {}) {
    try {
      // console.log('findOrderByUtxo() offerData: ', offerData)

      // const order = await this.OrderModel.findOne({ nostrEventId })
      const order = await this.OrderModel.findOne({ utxoTxid: offerData.data.utxoTxid, utxoVout: offerData.data.utxoVout })
      // const order = await this.OrderModel.findOne({ utxoTxid: offerData.data.utxoTxid })
      // const order = await this.OrderModel.findOne({ tokenId: offerData.data.tokenId })
      console.log('findOrderByUtxo() order: ', order)

      if (!order) {
        throw new Error('order not found')
      }
      if (!order.nostrEventId) {
        throw new Error('order not found')
      }

      const orderObject = order.toObject()
      // return this.offerEntity.validateFromModel(offerObject)

      return orderObject
    } catch (err) {
      console.error('Error in findOrderByUtxo(): ', err)
      throw err
    }
  }

  // This function is called by the garbage collection timer controller. It
  // checks the UTXO associated with each Order in the database. If the UTXO
  // has been spent, the Order is deleted from the database.
  async removeStaleOrders () {
    try {
      const now = new Date()
      console.log(`Starting garbage collection for Orders at ${now.toLocaleString()}`)

      // Get all Orders in the database.
      const orders = await this.OrderModel.find({})
      // console.log('orders: ', orders)

      // Loop through each Order and ensure the UTXO is still valid.
      for (let i = 0; i < orders.length; i++) {
        const thisOrder = orders[i]

        let utxoStatus = null
        try {
          // Get the status of the UTXO associate with this Order.
          // utxoStatus = await this.adapters.bchjs.Blockchain.getTxOut(
          //   thisOrder.utxoTxid,
          //   thisOrder.utxoVout
          // )

          // Get the status of the UTXO associate with this Order.
          const utxo = {
            tx_hash: thisOrder.utxoTxid,
            tx_pos: thisOrder.utxoVout
          }
          // utxoStatus = await this.adapters.wallet.bchWallet.utxoIsValid(utxo)
          utxoStatus = await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.utxoIsValid, utxo)
          // console.log('utxoStatus: ', utxoStatus)
        } catch (err) {
          // Handle corner case of bad-data in the Order model.
          if (err.message && err.message.includes('txid needs to be a proper transaction ID')) {
            console.log(`Deleting Order with bad data: ${JSON.stringify(thisOrder, null, 2)}`)
            await thisOrder.remove()
            continue
          } else if (err.isAxiosError) {
            console.log('Error trying to contact wallet service: ', err)
            continue
          } else {
            throw err
          }
        }

        // If the Order UTXO is spent, delete the Order model.
        if (utxoStatus === false) {
          // console.log('utxoStatus: ', utxoStatus)
          console.log(`Spent UTXO detected. Deleting this Order: ${JSON.stringify(thisOrder, null, 2)}`)
          await thisOrder.remove()
        }
      }
    } catch (err) {
      console.error('Error in removeStaleOrders()')
      throw err
    }
  }

  async listOrders (page = 0) {
    try {
      const data = await this.OrderModel.find({})

        // Sort entries so newest entries show first.
        .sort('-timestamp')
        // Skip to the start of the selected page.
        .skip(page * DEFAULT_ENTRIES_PER_PAGE)
        // Only return 20 results.
        .limit(DEFAULT_ENTRIES_PER_PAGE)

      return data
    } catch (error) {
      console.error('Error in use-cases/order/listOrders()')
      throw error
    }
  }

  // Delete an Order model by sending the token back to the root address. This
  // will allow the garbage collectors to delete the Order and the Offer.
  async deleteOrder (nostrEventId) {
    try {
      // Find the order by the given hash.
      const order = await this.findOrderByEvent(nostrEventId)
      console.log('order: ', order)

      // Reclaim the tokens
      const txid = await this.adapters.wallet.reclaimTokens(order)

      return txid
    } catch (err) {
      console.error('Error in use-cases/order/deleteOrder()')
      throw err
    }
  }
}

export default OrderLib

```

`/home/trout/work/psf/code/bch-dex/src/use-cases/user.js`:

```js
/*
  This library contains business-logic for dealing with users. Most of these
  functions are called by the /user REST API endpoints.
*/

import UserEntity from '../entities/user.js'

import wlogger from '../adapters/wlogger.js'

class UserLib {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating User Use Cases library.'
      )
    }
    this.BchWallet = this.adapters.wallet.BchWallet
    // Encapsulate dependencies
    this.UserEntity = new UserEntity()
    this.UserModel = this.adapters.localdb.Users
  }

  // Create a new user model and add it to the Mongo database.
  async createUser (userObj) {
    try {
      // Input Validation

      const userEntity = this.UserEntity.validate(userObj)
      const user = new this.UserModel(userEntity)

      const wallet = new this.BchWallet()
      const walletInfo = await wallet.walletInfoPromise
      const mnemonic = walletInfo.mnemonic
      user.mnemonic = mnemonic

      // Enforce default value of 'user'
      user.type = 'user'
      // console.log('user: ', user)

      // Save the new user model to the database.
      await user.save()

      // Generate a JWT token for the user.
      const token = user.generateToken()

      // Convert the database model to a JSON object.
      const userData = user.toJSON()
      // console.log('userData: ', userData)

      // Delete the password property.
      delete userData.password

      return { userData, token }
    } catch (err) {
      // console.log('createUser() error: ', err)
      wlogger.error('Error in lib/users.js/createUser()')
      throw err
    }
  }

  // Returns an array of all user models in the Mongo database.
  async getAllUsers () {
    try {
      // Get all user models. Delete the password property from each model.
      const users = await this.UserModel.find({}, '-password')

      return users
    } catch (err) {
      wlogger.error('Error in lib/users.js/getAllUsers()')
      throw err
    }
  }

  // Get the model for a specific user.
  async getUser (params) {
    try {
      const { id } = params

      const user = await this.UserModel.findById(id, '-password')

      // Throw a 404 error if the user isn't found.
      if (!user) {
        const err = new Error('User not found')
        err.status = 404
        throw err
      }

      return user
    } catch (err) {
      // console.log('Error in getUser: ', err)

      if (err.status === 404) throw err

      // Return 422 for any other error
      err.status = 422
      err.message = 'Unprocessable Entity'
      throw err
    }
  }

  async updateUser (existingUser, newData) {
    try {
      // console.log('existingUser: ', existingUser)
      // console.log('newData: ', newData)

      // Input Validation
      // Optional inputs, but they must be strings if included.

      if (newData.email && typeof newData.email !== 'string') {
        throw new Error("Property 'email' must be a string!")
      }
      if (newData.name && typeof newData.name !== 'string') {
        throw new Error("Property 'name' must be a string!")
      }
      if (newData.password && typeof newData.password !== 'string') {
        throw new Error("Property 'password' must be a string!")
      }
      if (newData.mnemonic) {
        throw new Error("Property 'mnemonic' cannot be updated!")
      }

      // Save a copy of the original user type.
      const userType = existingUser.type
      // console.log('userType: ', userType)

      // If user 'type' property is sent by the client
      if (newData.type) {
        if (typeof newData.type !== 'string') {
          throw new Error("Property 'type' must be a string!")
        }

        // Unless the calling user is an admin, they can not change the user type.
        if (userType !== 'admin') {
          throw new Error("Property 'type' can only be changed by Admin user")
        }
      }

      // Overwrite any existing data with the new data.
      Object.assign(existingUser, newData)

      // Save the changes to the database.
      await existingUser.save()

      // Delete the password property.
      delete existingUser.password

      return existingUser
    } catch (err) {
      wlogger.error('Error in lib/users.js/updateUser()')
      throw err
    }
  }

  async deleteUser (user) {
    try {
      await user.remove()
    } catch (err) {
      wlogger.error('Error in lib/users.js/deleteUser()')
      throw err
    }
  }

  // Used to authenticate a user. If the login and password salt match a user in
  // the database, then it returns the user model. The Koa REST API uses the
  // Passport library for this functionality. This function is used to
  // authenticate users who login via the JSON RPC.
  async authUser (login, passwd) {
    try {
      // console.log('login: ', login)
      // console.log('passwd: ', passwd)

      const user = await this.UserModel.findOne({ email: login })
      if (!user) {
        throw new Error('User not found')
      }

      const isMatch = await user.validatePassword(passwd)

      if (!isMatch) {
        throw new Error('Login credential do not match')
      }

      return user
    } catch (err) {
      // console.error('Error in users.js/authUser()')
      console.log('')
      throw err
    }
  }
}

export default UserLib

```

`/home/trout/work/psf/code/bch-dex/src/use-cases/entry.js`:

```js

// local libraries
import wlogger from '../adapters/wlogger.js'
import EntryEntiy from '../entities/entry.js'

class EntryLib {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating User Use Cases library.'
      )
    }

    // Encapsulate dependencies
    this.EntryEntity = new EntryEntiy()
    this.EntryModel = this.adapters.localdb.Entry
    this.bch = this.adapters.bch
  }

  // Create a new entry model and add it to the Mongo database.
  async createEntry (entryObj) {
    try {
      // Input Validation
      const entryEntity = this.EntryEntity.validate(entryObj)

      // Verify that the entry was signed by a specific BCH address.
      const isValidSignature = this.bch._verifySignature(entryEntity)
      if (!isValidSignature) {
        throw new Error('Invalid signature')
      }

      // Verify psf tokens balance
      // const psfBalance = await this.bch.getPSFTokenBalance(
      //   entryEntity.slpAddress
      // )
      const psfBalance = 1

      if (psfBalance < 10) {
        throw new Error('Insufficient psf balance')
      }

      const merit = await this.bch.getMerit(entryEntity.slpAddress)

      const updatedEntry = {
        entry: entryEntity.entry.trim(),
        slpAddress: entryEntity.slpAddress.trim(),
        description: entryEntity.description.trim(),
        signature: entryEntity.signature.trim(),
        category: entryEntity.category.trim(),
        balance: psfBalance,
        merit
      }

      const entryModel = new this.EntryModel(updatedEntry)
      await entryModel.save()

      return entryModel
    } catch (err) {
      // console.log("Error in use-cases/entry.js/createEntry()", err.message)
      wlogger.error('Error in use-cases/entry.js/createEntry()')
      throw err
    }
  }
}

export default EntryLib

```

`/home/trout/work/psf/code/bch-dex/src/entities/offer.js`:

```js
/*
  Offer Entity
  An ffer is created when a new Signal is detected via the P2WDB webhook.
  It's destroyed when the UTXO described in the Signal has been detected as spent.
*/

class OfferEntity {
  constructor () {
    this.offerStatus = ['posted', 'taken', 'dead']
  }

  validate (offerData = {}) {
    // Throw an error if input object does not have a data property
    if (!offerData.data) {
      throw new Error(
        'Input to offer.validate() must be an object with a data property.'
      )
    }

    // console.log('offer entity validate() offerData: ', offerData)

    const {
      messageType,
      messageClass,
      tokenId,
      buyOrSell,
      rateInBaseUnit,
      minUnitsToExchange,
      numTokens,
      utxoTxid,
      utxoVout,
      offerStatus,
      makerAddr,
      ticker,
      tokenType,
      nostrEventId
    } = offerData.data

    // Input Validation
    if (!messageType || typeof messageType !== 'number') {
      throw new Error("Property 'messageType' must be an integer number.")
    }
    if (!messageClass || typeof messageClass !== 'number') {
      throw new Error("Property 'messageClass' must be an integer number.")
    }
    if (!tokenId || typeof tokenId !== 'string') {
      throw new Error("Property 'tokenId' must be a string.")
    }
    if (!buyOrSell || typeof buyOrSell !== 'string') {
      throw new Error("Property 'buyOrSell' must be a string.")
    }
    if (!rateInBaseUnit || typeof rateInBaseUnit !== 'number') {
      throw new Error("Property 'rateInBaseUnit' must be an integer number.")
    }
    if (!minUnitsToExchange || typeof minUnitsToExchange !== 'number') {
      throw new Error("Property 'minUnitsToExchange' must be an integer number.")
    }
    if (!numTokens || typeof numTokens !== 'number') {
      throw new Error("Property 'numTokens' must be a number.")
    }
    if (!utxoTxid || typeof utxoTxid !== 'string') {
      throw new Error("Property 'utxoTxid' must be a string.")
    }
    if (typeof utxoVout !== 'number') {
      throw new Error("Property 'utxoVout' must be an integer number.")
    }
    if (offerStatus && !this.offerStatus.includes(offerStatus)) {
      throw new Error("Property 'offerStatus' must be posted, taken, or dead")
    }
    if (!makerAddr || typeof makerAddr !== 'string') {
      throw new Error("Property 'makerAddr' must be a string.")
    }
    // if (!ticker || typeof ticker !== 'string') {
    //   throw new Error("Property 'ticker' must be a string.")
    // }
    if (!tokenType || typeof tokenType !== 'number') {
      throw new Error("Property 'tokenType' must be a number.")
    }
    if (!nostrEventId || typeof nostrEventId !== 'string') {
      throw new Error("Property 'nostrEventId' must be a string.")
    }

    // Convert the timestamp to a number.
    let timestamp = new Date(offerData.timestamp)
    timestamp = timestamp.getTime()

    const validatedOfferData = {
      messageType,
      messageClass,
      tokenId,
      buyOrSell,
      rateInBaseUnit,
      minUnitsToExchange,
      numTokens,
      utxoTxid,
      utxoVout,
      timestamp,
      globaltimestamp: offerData.timestamp,
      localTimestamp: offerData.localTimeStamp,
      txid: offerData.txid,
      p2wdbHash: offerData.hash,
      offerStatus: offerStatus || this.offerStatus[0],
      makerAddr,
      ticker,
      tokenType,
      nostrEventId
    }
    // console.log('offer entity validatedOfferData: ', validatedOfferData)

    return validatedOfferData
  }
}

export default OfferEntity

```

`/home/trout/work/psf/code/bch-dex/src/entities/order.js`:

```js
/*
  Order Entity
  An Order Entity is nearly the same as an Offer. But while an Offer is generated
  by a webhook from P2WDB, the Order Entity is created internally. It is used
  to track an Order generated by this application.

  The Order tracks the hdIndex address used to hold tokens or BCH for sale.
*/
class Order {
  // TODO: Create a fullValidate() function that validates a fully-hydrated
  // order model.

  inputValidate (data) {
    const {
      messageType,
      messageClass,
      tokenId,
      buyOrSell,
      rateInBaseUnit,
      minUnitsToExchange,
      numTokens,
      makerAddr
    } = data

    // Input Validation
    if (!messageType || typeof messageType !== 'number') {
      throw new Error("Property 'messageType' must be an integer number.")
    }
    if (!messageClass || typeof messageClass !== 'number') {
      throw new Error("Property 'messageClass' must be an integer number.")
    }
    if (!tokenId || typeof tokenId !== 'string') {
      throw new Error("Property 'tokenId' must be a string.")
    }
    if (!buyOrSell || typeof buyOrSell !== 'string') {
      throw new Error("Property 'buyOrSell' must be a string.")
    }
    if (!rateInBaseUnit || typeof rateInBaseUnit !== 'number') {
      throw new Error("Property 'rateInBaseUnit' must be an integer number.")
    }
    if (!minUnitsToExchange || typeof minUnitsToExchange !== 'number') {
      throw new Error("Property 'minUnitsToExchange' must be an integer number.")
    }
    if (!numTokens || typeof numTokens !== 'number') {
      throw new Error("Property 'numTokens' must be a number.")
    }
    if (!makerAddr || typeof makerAddr !== 'string') {
      throw new Error("Property 'makerAddr' must be a string.")
    }
    // if (!ticker || typeof ticker !== 'string') {
    //   throw new Error("Property 'ticker' must be a string.")
    // }

    const offerData = {
      messageType,
      messageClass,
      tokenId,
      buyOrSell,
      rateInBaseUnit,
      minUnitsToExchange,
      numTokens,
      makerAddr
      // ticker
    }

    return offerData
  }
}

export default Order

```

`/home/trout/work/psf/code/bch-dex/src/entities/user.js`:

```js
/*
  User Entity
*/

class User {
  validate ({ name, email, password } = {}) {
    // Input Validation
    if (!email || typeof email !== 'string') {
      throw new Error("Property 'email' must be a string!")
    }
    if (!password || typeof password !== 'string') {
      throw new Error("Property 'password' must be a string!")
    }
    if (!name || typeof name !== 'string') {
      throw new Error("Property 'name' must be a string!")
    }

    const userData = { name, email, password }

    return userData
  }
}

export default User

```

`/home/trout/work/psf/code/bch-dex/src/entities/entry.js`:

```js
/*
  Entry Entity
*/
class Entry {
  validate ({
    entry,
    description,
    slpAddress,
    signature,
    category
  } = {}) {
    // Input Validation
    if (!entry || typeof entry !== 'string') {
      throw new Error("Property 'entry' must be a string!")
    }
    if (!description || typeof description !== 'string') {
      throw new Error("Property 'description' must be a string!")
    }
    if (!slpAddress || typeof slpAddress !== 'string') {
      throw new Error("Property 'slpAddress' must be a string!")
    }
    if (!signature || typeof signature !== 'string') {
      throw new Error("Property 'signature' must be a string!")
    }
    if (!category || typeof category !== 'string') {
      throw new Error("Property 'category' must be a string!")
    }

    const entryData = {
      entry,
      description,
      slpAddress,
      signature,
      category
    }

    return entryData
  }
}

export default Entry

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/nostr.adapter.unit.js`:

```js
/*
  Unit tests for the Nostr Adapter library.
*/

// Public npm libraries.
import { assert } from 'chai'
import sinon from 'sinon'
import NostrAdapter from '../../../src/adapters/nostr.js'
import NostrMock from '../mocks/nostr-mock.js'

describe('#nostr.js', () => {
  let uut
  let sandbox

  before(() => {})

  beforeEach(() => {
    uut = new NostrAdapter({
      nostrRelay: 'wss://nostr',
      nostrTopic: 'uut-topic'
    })
    uut.RelayPool = NostrMock.RelayPoolMock

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  after(() => {})

  describe('#contructor', () => {
    it('should throw an error if nostr relay is not provided', async () => {
      try {
        const _uut = new NostrAdapter()
        // Eslint
        console.log(_uut)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(
          err.message,
          '"nostrRelay" must be passed when instantiate NostrAdapter'
        )
      }
    })
    it('should throw an error if nostr topic is not provided', async () => {
      try {
        const _uut = new NostrAdapter({ nostrRelay: 'wss://' })
        // Eslint
        console.log(_uut)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(
          err.message,
          '"nostrTopic" must be passed when instantiate NostrAdapter'
        )
      }
    })
  })
  describe('#start', () => {
    it('should throw an error if WIF is not provided', async () => {
      try {
        await uut.start()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'WIF must be a string!')
      }
    })
    it('should start adapter', async () => {
      // Stub bchNostr
      sandbox
        .stub(uut.bchNostr.keys, 'createNostrPubKeyFromWif')
        .returns({ privKeyBuf: 'privKeyBuf', nostrPubKey: 'nostrPubKey' })

      const result = await uut.start('WIF')
      assert.isTrue(result)
    })
  })

  describe('#post', () => {
    it('should throw an error if msg is not provided', async () => {
      try {
        await uut.post()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'msg must be a string!')
      }
    })
    it('should post message', async () => {
      const evId = 'uut-eventId' // Mock

      sandbox.stub(uut.bchNostr.post, 'uploadToNostr').resolves(evId)

      const result = await uut.post('uut-message')
      assert.isString(result)
      assert.equal(result, evId)
    })
  })

  describe('#read', () => {
    it('should throw an error if provided limit is wrong', async () => {
      try {
        await uut.read(-5)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Limit must be greater than 0')
      }
    })

    it('should read message', async () => {
      const result = await uut.read()
      assert.isArray(result)
      assert.equal(result.length, 1)
    })

    it('should read message with custom limit', async () => {
      const result = await uut.read(1)
      assert.isArray(result)
      assert.equal(result.length, 1)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/webhook.adapter.unit.js`:

```js
/*
  Unit tests for the webhook adapter.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import WebHook from '../../../src/adapters/webhook.js'

// Set the environment variable to signal this is a test.
process.env.TORLIST_ENV = 'test'

describe('#Webhook-Adapter', () => {
  let uut
  let sandbox

  beforeEach(async () => {
    uut = new WebHook()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#createWebHook', () => {
    it('should throw error if input is not provided', async () => {
      try {
        await uut.createWebhook()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'url must be a string')
      }
    })

    it('should throw error if input is not string', async () => {
      try {
        await uut.createWebhook(1)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'url must be a string')
      }
    })

    it('should handle error', async () => {
      try {
        sandbox.stub(uut.axios, 'post').throws(new Error('test error'))
        await uut.createWebhook('https://test.com/my-webhook')
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should return response', async () => {
      sandbox
        .stub(uut.axios, 'post')
        .resolves({ data: { success: true, id: '61018c8c9a71973a596cdccb' } })

      const url = 'https://test.com/my-webhook'
      const result = await uut.createWebhook(url)

      assert.isObject(result)
      assert.property(result, 'success')
      assert.property(result, 'id')
      assert.isBoolean(result.success)
      assert.isString(result.id)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/ipfs.adapter.unit.js`:

```js
/*
  Unit tests for the IPFS Adapter.
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'
// import { peerIdFromString } from '@libp2p/peer-id'

// Local libraries
import IPFSLib from '../../../src/adapters/ipfs/ipfs.js'
// import create from '../mocks/ipfs-mock.js'
import config from '../../../config/index.js'
import createHeliaLib from '../mocks/helia-mock.js'

// config.isProduction =  true;
describe('#IPFS-adapter', () => {
  let uut
  let sandbox
  let ipfs

  beforeEach(() => {
    uut = new IPFSLib()

    ipfs = cloneDeep(createHeliaLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#constructor', () => {
    it('should instantiate IPFS Lib in dev mode.', async () => {
      const _uut = new IPFSLib()
      assert.exists(_uut)
      assert.isFunction(_uut.start)
      assert.isFunction(_uut.stop)
    })

    it('should instantiate dev IPFS Lib in production mode.', async () => {
      config.isProduction = true
      const _uut = new IPFSLib()
      assert.exists(_uut)
      assert.isFunction(_uut.start)
      assert.isFunction(_uut.stop)
      config.isProduction = false
    })
  })

  describe('#start', () => {
    it('should return a promise that resolves into an instance of IPFS.', async () => {
      // Mock dependencies.
      sandbox.stub(uut, 'createNode').resolves(ipfs)
      sandbox.stub(uut, 'publicIp').resolves('192.168.2.4')
      sandbox.stub(uut, 'multiaddr').returns('/ip4/fake-multiaddr')

      const result = await uut.start()
      // console.log('result: ', result)

      // Assert properties of the instance are set.
      assert.equal(uut.isReady, true)
      assert.property(uut, 'multiaddrs')
      assert.property(uut, 'id')

      // Output should be an instance of IPFS
      assert.property(result, 'libp2p')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'createNode').rejects(new Error('test error'))

        await uut.start()
        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#stop', () => {
    it('should stop the IPFS node', async () => {
      // Mock dependencies
      uut.ipfs = {
        stop: () => {
        }
      }

      const result = await uut.stop()

      assert.equal(result, true)
    })
  })

  describe('#ensureBlocksDir', () => {
    it('should create directory if it does not exist', () => {
      // Force desired code path
      sandbox.stub(uut.fs, 'existsSync').returns(false)
      sandbox.stub(uut.fs, 'mkdirSync').returns(true)

      const result = uut.ensureBlocksDir()

      assert.equal(result, true)
    })

    it('should report and throw errors', () => {
      // Force an error
      sandbox.stub(uut.fs, 'existsSync').throws(new Error('test error'))

      try {
        uut.ensureBlocksDir()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#createNode', () => {
    it('should report and throw errors', async () => {
      // Force an error
      sandbox.stub(uut, 'createLibp2p').rejects(new Error('test error'))

      try {
        await uut.createNode()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should create an IPFS node from Helia', async () => {
      uut.config.isCircuitRelay = false
      const result = await uut.createNode()
      // console.log('result: ', result)

      // Assert the returned IPFS node has expected properties
      assert.property(result, 'libp2p')
      assert.property(result, 'blockstore')

      // Stop the IPFS node
      await result.stop()
    })

    it('should create a Circuit Relay if configured', async () => {
      uut.config.isCircuitRelay = true
      const result = await uut.createNode()

      // Assert the returned IPFS node has expected properties
      assert.property(result, 'libp2p')
      assert.property(result, 'blockstore')

      // Stop the IPFS node
      await result.stop()
    })

    it('should create a new private key on first run', async () => {
      uut.config.isCircuitRelay = false

      // Mock dependencies and force desired code path.
      // const beenCalled = false
      // sandbox.stub(uut, 'getKeychain').resolves({
      //   exportPeerId: async () => {
      //     if (!beenCalled) {
      //       beenCalled = true
      //       throw new Error('test error')
      //     }
      //     return peerIdFromString('12D3KooWSXF1PnEfiA8bCG8SJduCvzdwHtvhVPK4WC6zzDoto2XP')
      //   },
      //   createKey: async () => {}
      // })
      sandbox.stub(uut, 'createLibp2p').resolves()
      sandbox.stub(uut, 'createHelia').resolves({})

      const result = await uut.createNode()
      // console.log('result: ', result)

      assert.property(result, 'fs')
    })

    it('should not use circuit relay when CONNECT_PREF is set to direct', async () => {
      process.env.CONNECT_PREF = 'direct'

      uut.config.isCircuitRelay = false
      const result = await uut.createNode()
      // console.log('result: ', result)

      delete process.env.CONNECT_PREF

      // Assert the returned IPFS node has expected properties
      assert.property(result, 'libp2p')
      assert.property(result, 'blockstore')

      // Stop the IPFS node
      await result.stop()
    })
  })

  describe('#getSeed', () => {
    it('should read the seed from the JSON file', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut.jsonFiles, 'readJSON').resolves('12345678')

      const result = await uut.getSeed()
      // console.log('result: ', result)

      assert.isString(result)
    })

    it('should generate a new seed if the JSON file is not found', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut.jsonFiles, 'readJSON').rejects(new Error('test error'))
      sandbox.stub(uut.jsonFiles, 'writeJSON').resolves()

      const result = await uut.getSeed()
      // console.log('result: ', result)

      assert.isString(result)
    })

    it('should catch, report, and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.jsonFiles, 'readJSON').rejects(new Error('test error'))
        sandbox.stub(uut.jsonFiles, 'writeJSON').rejects(new Error('test error'))

        await uut.getSeed()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/ipfs-index.adapter.unit.js`:

```js
/*
  Unit tests for the index.js file for the IPFS and ipfs-coord libraries.
*/

import { assert } from 'chai'

import sinon from 'sinon'
import IPFSLib from '../../../src/adapters/ipfs/index.js'
// import create from '../mocks/ipfs-mock.js'
import IPFSCoordMock from '../mocks/ipfs-coord-mock.js'

describe('#IPFS-adapter-index', () => {
  let uut
  let sandbox

  beforeEach(() => {
    uut = new IPFSLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#start', () => {
    it('should return a promise that resolves into an instance of IPFS.', async () => {
      // Mock dependencies.
      uut.ipfsAdapter = {
        start: async () => {}
      }
      uut.IpfsCoordAdapter = IPFSCoordMock

      const result = await uut.start()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.ipfsAdapter, 'start').rejects(new Error('test error'))

        await uut.start()

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })

    it('should handle lock-file errors', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.ipfsAdapter, 'start')
          .rejects(new Error('Lock already being held'))

        // Prevent process from exiting
        sandbox.stub(uut.process, 'exit').returns()

        await uut.start()

        assert.fail('Unexpected code path.')
      } catch (err) {
        assert.include(err.message, 'Lock already being held')
      }
    })
  })

  describe('#getStatus', () => {
    it('should return an object with node metrics', () => {
      // Force uut to have the needed properties
      uut.ipfsCoordAdapter = {
        ipfsCoord: {
          thisNode: {
            ipfsId: 'fake-id',
            ipfsMultiaddrs: [],
            bchAddr: 'fake-bch-addr',
            slpAddr: 'fake-slp-addr',
            pubKey: 'fake-pubkey',
            peerList: [],
            relayData: []
          }
        }
      }

      const result = uut.getStatus()
      // console.log('result: ', result)

      assert.property(result, 'ipfsId')
      assert.property(result, 'multiAddrs')
      assert.property(result, 'bchAddr')
      assert.property(result, 'slpAddr')
      assert.property(result, 'pubKey')
      assert.property(result, 'peers')
      assert.property(result, 'relays')
    })

    it('should catch, report, and throw errors', () => {
      try {
        uut.getStatus()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err.message: ', err.message)
        assert.include(err.message, 'Cannot read properties')
      }
    })
  })

  describe('#_removeDuplicatePeers', () => {
    it('should return the same array when there are no duplicates', () => {
      const inArray = [
        '12D3KooWPpBXhhAeoCZCGuQ3KR4xwHzzvtP57f6zLmo8P7ZFBJFE',
        '12D3KooWRBhwfeP2Y9CDkFRBAZ1pmxUadH36TKuk3KtKm5XXP8mA',
        '12D3KooWGsgHWyDLKuV4ZSfRJfsxQJj77rxx3i8Px3qXKHsLN7a2',
        '12D3KooWJyc54njjeZGbLew4D8u1ghrmZTTPyh3QpBF7dxtd3zGY',
        '12D3KooWDtj9cfj1SKuLbDNKvKRKSsGN8qivq9M8CYpLPDpcD5pu'
      ]

      const result = uut._removeDuplicatePeers(inArray)
      // console.log('result: ', result)

      assert.equal(result.length, inArray.length)
    })

    it('should remove duplicates from an array', () => {
      const inArray = [
        '12D3KooWPpBXhhAeoCZCGuQ3KR4xwHzzvtP57f6zLmo8P7ZFBJFE',
        '12D3KooWRBhwfeP2Y9CDkFRBAZ1pmxUadH36TKuk3KtKm5XXP8mA',
        '12D3KooWGsgHWyDLKuV4ZSfRJfsxQJj77rxx3i8Px3qXKHsLN7a2',
        '12D3KooWJyc54njjeZGbLew4D8u1ghrmZTTPyh3QpBF7dxtd3zGY',
        '12D3KooWDtj9cfj1SKuLbDNKvKRKSsGN8qivq9M8CYpLPDpcD5pu',
        '12D3KooWPpBXhhAeoCZCGuQ3KR4xwHzzvtP57f6zLmo8P7ZFBJFE',
        '12D3KooWRBhwfeP2Y9CDkFRBAZ1pmxUadH36TKuk3KtKm5XXP8mA'
      ]

      const result = uut._removeDuplicatePeers(inArray)
      // console.log('result: ', result)

      assert.equal(result.length, inArray.length - 2)
    })
  })

  describe('#getPeers', () => {
    it('should return an array of current JSON data about each peer when showAll is true', async () => {
      // Mock dependencies
      uut.ipfsCoordAdapter.ipfsCoord = {
        thisNode: {
          peerData: [{ from: 'a', data: { jsonLd: { name: 'a', protocol: 'test', version: '1' } } }, { from: 'b' }]
        },
        adapters: {
          ipfs: {
            getPeers: async () => ['a', 'b']
          }
        }
      }

      const result = await uut.getPeers(true)

      assert.isArray(result)
    })

    it('should catch, report, and throw errors', async () => {
      try {
        // Force an error
        uut.ipfsCoordAdapter.ipfsCoord = {
          thisNode: {},
          adapters: {
            ipfs: {
              getPeers: async () => { throw new Error('test error') }
            }
          }
        }

        await uut.getPeers()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err.message: ', err.message)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getRelays', () => {
    it('should return known relays', () => {
      uut.ipfsCoordAdapter.ipfsCoord = {
        thisNode: {
          peerData: [{ from: 'a', data: { jsonLd: { name: 'a', description: 'test' } } }, { from: 'b' }],
          relayData: [{ ipfsId: 'c' }, { ipfsId: 'a' }]
        }
      }

      const result = uut.getRelays()
      // console.log('result: ', result)

      assert.isArray(result.v2Relays)
      assert.equal(result.v2Relays.length, 2)
      assert.property(result.v2Relays[0], 'name')
      assert.property(result.v2Relays[0], 'description')
      assert.property(result.v2Relays[1], 'name')
      assert.property(result.v2Relays[1], 'description')
    })

    it('should catch, report, and throw errors', () => {
      try {
        // Force an error
        uut.ipfsCoordAdapter.ipfsCoord = { thisNode: {} }

        uut.getRelays()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err.message: ', err.message)
        assert.include(err.message, 'Cannot read')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/order-pagination.unit.js`:

```js
/*
  Unit tests for the order-pagination.js library.

  These unit tests will probably be rolled into a larger library in the
  the future.
*/

// Public npm libraries.
import { assert } from 'chai'

import sinon from 'sinon'
import mongoose from 'mongoose'

// Local libraries.
import OrderPagination from '../../../src/adapters/localdb/order-pagination.js'

import Order from '../../../src/adapters/localdb/models/order.js'
import config from '../../../config/index.js'

describe('#OrderPagination', () => {
  let uut, sandbox

  before(async () => {
    // Connect to the Mongo Database.
    console.log(`Connecting to database: ${config.database}`)
    mongoose.Promise = global.Promise
    mongoose.set('useCreateIndex', true) // Stop deprecation warning.

    await mongoose.connect(config.database, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    const order = new Order({
      lokadId: 'lokadId',
      messageType: 1,
      messageClass: 1,
      tokenId: 'tokenId',
      buyOrSell: 'buy',
      rateInSats: 'rateInSats',
      minSatsToExchange: '100',
      signature: 'signature',
      sigMsg: 'sigMsg',
      utxoTxid: 'utxoTxid',
      utxoVout: 1,
      numTokens: 1,
      timestamp: 'timestamp',
      localTimestamp: 'localTimestamp',
      txid: 'txid',
      p2wdbHash: 'p2wdbHash',
      hdIndex: 0,
      nostrEventId: 'nostrEventId',
      dataType: 'dataType',
      makerAddr: 'makerAddr',
      rateInBaseUnit: 'rateInBaseUnit',
      minUnitsToExchange: 'minUnitsToExchange',
      ticker: 'ticker',
      tokenType: 1
    })
    await order.save()
  })

  beforeEach(() => {
    uut = new OrderPagination()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  after(() => {
    mongoose.connection.close()
  })

  describe('#readAll', () => {
    it('should get the first page of Order entries', async () => {
      const data = await uut.readAll()
      // console.log('data: ', data)

      assert.isArray(data)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force and error.
        sandbox.stub(uut.Order, 'find').rejects(new Error('test error'))

        await uut.readAll()

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'is not a function')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/users.adapter.unit.js`:

```js
/*
  Unit tests for the users Mongoose model.
*/

import { assert } from 'chai'

import sinon from 'sinon'
import mongoose from 'mongoose'

import User from '../../../src/adapters/localdb/models/users.js'
import config from '../../../config/index.js'

// Set the environment variable to signal this is a test.
process.env.TORLIST_ENV = 'test'

describe('#User-Adapter', () => {
  // let uut
  let sandbox
  let testuser

  before(async () => {
    // Connect to the Mongo Database.
    console.log(`Connecting to database: ${config.database}`)
    mongoose.Promise = global.Promise
    mongoose.set('useCreateIndex', true) // Stop deprecation warning.
    await mongoose.connect(config.database, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    testuser = new User({
      email: 'test983@test.com',
      name: 'test983',
      password: 'password',
      mnemonic: '12 words mnemonic'
    })
  })

  beforeEach(async () => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  after(async () => {
    await testuser.remove()

    mongoose.connection.close()
  })

  describe('#save', () => {
    it('should replace the password with a salt', async () => {
      await testuser.save()
      // console.log('testuser: ', testuser)

      assert.notEqual(testuser.password, 'password')
    })
  })

  describe('#validatePassword', () => {
    it('should return true when password matches', async () => {
      const result = await testuser.validatePassword('password')
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return false when password does not match', async () => {
      const result = await testuser.validatePassword('wrongpassword')
      // console.log('result: ', result)

      assert.equal(result, false)
    })
  })

  describe('#generateToken', () => {
    it('should generate a JWT token', () => {
      const token = testuser.generateToken()
      // console.log('token: ', token)

      assert.include(token, 'eyJ')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/passport.adapter.unit.js`:

```js
import { assert } from 'chai'
import PassportLib from '../../../src/adapters/passport.js'
import sinon from 'sinon'

let uut
let sandbox

describe('#passport.js', () => {
  beforeEach(() => {
    uut = new PassportLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('authUser()', () => {
    it('should throw error if ctx is not provided', async () => {
      try {
        await uut.authUser()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'ctx is required')
      }
    })

    it('Should throw error if the passport library fails', async () => {
      try {
        const error = new Error('cant auth user')
        const user = null

        // Mock calls
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.passport, 'authenticate').yields(error, user)

        const ctx = {}
        await uut.authUser(ctx)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'cant auth user')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/wlogger.adapter.unit.js`:

```js
import { assert } from 'chai'
import { Wlogger } from '../../../src/adapters/wlogger.js'
import sinon from 'sinon'

let uut
let sandbox

describe('#wlogger', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()

    uut = new Wlogger()
  })

  describe('#constructor', () => {
    it('should create a new wlogger instance', () => {
      uut = new Wlogger()
      // console.log('uut: ', uut)

      assert.property(uut, 'transport')
    })
  })

  describe('#notifyRotation', () => {
    it('should notify of a log rotation', () => {
      uut.notifyRotation()
    })
  })

  describe('#envronment', () => {
    it('should write to console in non-test environment', () => {
      uut.outputToConsole()
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/logapi.adapter.unit.js`:

```js
import { assert } from 'chai'
import sinon from 'sinon'
import util from 'util'

import LogsApiLib from '../../../src/adapters/logapi.js'
import mockData from '../mocks/log-api-mock.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
util.inspect.defaultOptions = { depth: 1 }
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const context = {}
let sandbox
let uut
describe('#LogsApiLib', () => {
  beforeEach(() => {
    uut = new LogsApiLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#getLogs()', () => {
    it('should return false if password is not provided', async () => {
      try {
        const result = await uut.getLogs()
        assert.property(result, 'success')
        assert.isFalse(result.success)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should return log', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'generateFileName').returns(`${__dirname.toString()}/../mocks/adapters/fake-log`)

      const pass = 'test'
      const result = await uut.getLogs(pass)
      // console.log('result', result)

      assert.isTrue(result.success)
      assert.isArray(result.data)
      assert.property(result.data[0], 'message')
      assert.property(result.data[0], 'level')
      assert.property(result.data[0], 'timestamp')
    })

    it('should return false if files are not found!', async () => {
      try {
        sandbox.stub(uut, 'generateFileName').resolves('bad router')

        const password = 'test'

        const result = await uut.getLogs(password)
        // console.log(result)

        assert.isFalse(result.success)
        assert.include(result.data, 'file does not exist')
      } catch (err) {
        console.log('ERRROR', err)
        assert.fail('Unexpected result')
      }
    })

    it('should catch and handle errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.fs, 'existsSync').throws(new Error('test error'))
        const password = 'test'

        await uut.getLogs(password)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw unhandled error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.fs, 'existsSync').throws(new Error('Unhandled error'))
        const password = 'test'

        await uut.getLogs(password)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Unhandled error')
      }
    })
  })

  describe('#filterLogs()', () => {
    it('should throw error if data is not provided', async () => {
      try {
        await uut.filterLogs()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Data must be array')
      }
    })

    it('should throw error if data provided is not an array', async () => {
      try {
        const data = 'data'
        await uut.filterLogs(data)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Data must be array')
      }
    })

    it('should sort the log data', async () => {
      try {
        const data = mockData.data
        const result = await uut.filterLogs(data)
        assert.isArray(result)
        assert.property(result[1], 'message')
        assert.property(result[1], 'level')
        assert.property(result[1], 'timestamp')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })

    it('should sort the log data with a limit', async () => {
      try {
        const data = mockData.data
        const limit = 1
        const result = await uut.filterLogs(data, limit)
        assert.isArray(result)
        assert.equal(result.length, limit)
        assert.property(result[0], 'message')
        assert.property(result[0], 'level')
        assert.property(result[0], 'timestamp')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })
  })

  describe('#generateFileName()', () => {
    it('should return file name', async () => {
      try {
        const fileName = await uut.generateFileName()
        assert.isString(fileName)
        context.fileName = fileName
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })

    it('should throw error if something fails', async () => {
      try {
        uut.config = null
        await uut.generateFileName()
        assert.fail('Unexpected result')
      } catch (err) {
        assert.exists(err)
        assert.isString(err.message)
      }
    })
  })

  describe('#readLines()', () => {
    it('should throw error if fileName is not provided', async () => {
      try {
        await uut.readLines()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'filename must be a string')
      }
    })

    it('should throw error if fileName provided is not string', async () => {
      try {
        const fileName = true
        await uut.readLines(fileName)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'filename must be a string')
      }
    })

    it('should throw error if the file does not exist', async () => {
      try {
        const fileName = 'test/logs/'
        await uut.readLines(fileName)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'file does not exist')
      }
    })

    it('should ignore fileReader callback errors', async () => {
      // https://sinonjs.org/releases/latest/stubs/
      // About yields
      sandbox.stub(uut.lineReader, 'eachLine').yieldsRight({}, true)

      const fileName = `${__dirname.toString()}/../mocks/adapters/fake-log`

      const result = await uut.readLines(fileName)
      assert.isArray(result)
    })

    it('should return data', async () => {
      const fileName = `${__dirname.toString()}/../mocks/adapters/fake-log`

      const result = await uut.readLines(fileName)

      assert.isArray(result)
      assert.property(result[1], 'message')
      assert.property(result[1], 'level')
      assert.property(result[1], 'timestamp')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/contact.adapter.unit.js`:

```js
import { assert } from 'chai'
import sinon from 'sinon'
import ContactLib from '../../../src/adapters/contact.js'
let uut
let sandbox

describe('Contact', () => {
  beforeEach(() => {
    uut = new ContactLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('sendEmail()', () => {
    it('should throw error if email property is not provided', async () => {
      try {
        const data = {
          formMessage: 'test msg'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw error if formMessage property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should throw error if email list provided is not a array', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(
          err.message,
          "Property 'emailList' must be a array of emails!"
        )
      }
    })

    it('should throw error if email list provided is a empty array', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: []
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(
          err.message,
          "Property 'emailList' must be a array of emails!"
        )
      }
    })

    it('should send email to default server email', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com'
        }
        const result = await uut.sendEmail(data)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should catch and throw nodemailer lib error', async () => {
      try {
        // Force an error with the database.
        sandbox
          .stub(uut.nodemailer, 'sendEmail')
          .throws(new Error('test error'))

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should send email to specifics email list', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: ['testcontact@email.com']
        }
        const result = await uut.sendEmail(data)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/bch.adapter.unit.js`:

```js
import { assert } from 'chai'
import BCHJS from '../../../src/adapters/bch.js'
import sinon from 'sinon'
import util from 'util'
util.inspect.defaultOptions = { depth: 1 }

// const mockData = require('../mocks/bchjs-mock')

let sandbox
let uut
describe('bch', () => {
  beforeEach(() => {
    uut = new BCHJS()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#_verifySignature', () => {
    it('should return true for valid signature', () => {
      const offerBchAddr =
        'bitcoincash:qphjncqpnv444jq8acqk4dkm3296c50xhqggeatvn8'
      const signature =
        'Hz8bi9CsHaYkk5SGtHLU0aaxFspEXz7IdBNn6xV8ejE6OCuIRoZuVE9QJsGSlJ3Rt0ez2LWD0e292NZ84rRwnfk='
      const sigMsg = 'example.com'
      const verifyObj = { offerBchAddr, signature, sigMsg }

      const result = uut._verifySignature(verifyObj)

      assert.equal(result, true)
    })

    it('should return false for invalid signature', () => {
      const offerBchAddr =
        'bitcoincash:qphjncqpnv444jq8acqk4dkm3296c50xhqggeatvn8'
      const signature =
        'Hz8bi9CsHaYkk5SGtHLU0aaxFspEXz7IdBNn6xV8ejE6OCuIRoZuVE9QJsGSlJ3Rt0ez2LWD0e292NZ84rRwnfd='
      const sigMsg = 'example.com'
      const verifyObj = { offerBchAddr, signature, sigMsg }

      const result = uut._verifySignature(verifyObj)

      assert.equal(result, false)
    })

    it('should catch and throw errors', () => {
      try {
        // Force an error
        sandbox
          .stub(uut.bchjs.BitcoinCash, 'verifyMessage')
          .throws(new Error('test error'))

        const offerBchAddr =
          'bitcoincash:qphjncqpnv444jq8acqk4dkm3296c50xhqggeatvn8'
        const signature =
          'Hz8bi9CsHaYkk5SGtHLU0aaxFspEXz7IdBNn6xV8ejE6OCuIRoZuVE9QJsGSlJ3Rt0ez2LWD0e292NZ84rRwnfk='
        const sigMsg = 'example.com'
        const verifyObj = { offerBchAddr, signature, sigMsg }
        uut._verifySignature(verifyObj)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  // describe('#getPSFTokenBalance', () => {
  //   it('should throw error if slpAddress is not provided', async () => {
  //     try {
  //       await uut.getPSFTokenBalance()
  //       assert.fail('Unexpected result')
  //     } catch (err) {
  //       assert.include(err.message, 'slpAddress must be a string')
  //     }
  //   })
  //
  //   it('should return psf tokens balance', async () => {
  //     // Mock live network calls.
  //     sandbox
  //       .stub(uut.bchjs.SLP.Utils, 'balancesForAddress')
  //       .resolves(mockData.psfBalances)
  //
  //     const slpAddress =
  //       'simpleledger:qp49th03gvjn58d6fxzaga6u09w4z56smyuk43lzkd'
  //     const result = await uut.getPSFTokenBalance(slpAddress)
  //
  //     assert.isNumber(result)
  //     assert.equal(result, 2)
  //   })
  //
  //   it('should return 0 if the slp address does not has Psf tokens', async () => {
  //     // Mock live network calls.
  //     sandbox
  //       .stub(uut.bchjs.SLP.Utils, 'balancesForAddress')
  //       .resolves(mockData.noPsfBalances)
  //
  //     const slpAddress =
  //       'simpleledger:qp49th03gvjn58d6fxzaga6u09w4z56smyuk43lzkd'
  //     const result = await uut.getPSFTokenBalance(slpAddress)
  //
  //     assert.isNumber(result)
  //     assert.equal(result, 0)
  //   })
  //
  //   it('should return 0 for empty balances', async () => {
  //     // Mock live network calls.
  //     sandbox.stub(uut.bchjs.SLP.Utils, 'balancesForAddress').resolves([])
  //
  //     const slpAddress =
  //       'simpleledger:qp49th03gvjn58d6fxzaga6u09w4z56smyuk43lzkd'
  //     const result = await uut.getPSFTokenBalance(slpAddress)
  //
  //     assert.isNumber(result)
  //     assert.equal(result, 0)
  //   })
  // })

  describe('#getMerit', () => {
    it('should throw error if slpAddr is not provided', async () => {
      try {
        await uut.getMerit()
        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'slpAddr must be a string')
      }
    })
    it('should throw error if slpAddr provided is invalid type', async () => {
      try {
        await uut.getMerit(1)
        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'slpAddr must be a string')
      }
    })

    // it('should return the merit ', async () => {
    //   try {
    //     // Mock live network calls.
    //     sandbox.stub(uut.msgLib.merit, 'agMerit').resolves(100)
    //
    //     const slpAddr =
    //       'simpleledger:qqgnksc6zr4nzxrye69fq625wu2myxey6uh9kzjy96'
    //     const merit = await uut.getMerit(slpAddr)
    //     assert.isNumber(merit)
    //   } catch (err) {
    //     assert.fail('Unexpected result')
    //   }
    // })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/nodemailer.adapter.unit.js`:

```js
/*
  Unit tests for the nodemailer.js library.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'
import NodeMailer from '../../../src/adapters/nodemailer.js'

let sandbox
let uut

describe('NodeMailer', () => {
  beforeEach(() => {
    uut = new NodeMailer()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('sendEmail()', () => {
    it('should throw error if email property is not provided', async () => {
      try {
        const data = {
          formMessage: 'test msg',
          name: 'test name',
          subject: 'test subject',
          to: ['test2@email.com']
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw error if formMessage property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com',
          name: 'test name',
          subject: 'test subject',
          to: ['test2@email.com']
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should throw error if <to> property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com',
          name: 'test name',
          subject: 'test subject'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'to' must be a array!")
      }
    })

    it('should throw error if  <to> is wrong type', async () => {
      try {
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          subject: 'test subject',
          to: 'test'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'to' must be a array!")
      }
    })

    it('should throw error if subject Property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          to: ['test2@email.com']
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'subject' must be a string!")
      }
    })

    it('should send email with default html data', async () => {
      try {
        sandbox
          .stub(uut.transporter, 'sendMail')
          .resolves({ messageId: 'messageId' })

        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          to: ['test2@email.com'],
          subject: 'test subject'
        }

        const info = await uut.sendEmail(data)

        assert.isObject(info)
        assert.isString(info.messageId)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should send email if htmlData is provided', async () => {
      try {
        sandbox
          .stub(uut.transporter, 'sendMail')
          .resolves({ messageId: 'messageId' })
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          to: ['test2@email.com'],
          subject: 'test subject',
          htmlData: '<p> Unit test </p>'
        }
        const info = await uut.sendEmail(data)
        assert.isObject(info)
        assert.isString(info.messageId)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('validateEmailArray()', () => {
    it('should throw error if email list is not provided ', async () => {
      try {
        await uut.validateEmailArray()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'emailList' must be a array!")
      }
    })

    it('should throw error if email list is empty', async () => {
      try {
        const emailList = []
        await uut.validateEmailArray(emailList)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'emailList' cant be empty!")
      }
    })

    it('should return true ', async () => {
      try {
        const emailList = ['test@email.com', 'simple@email.com']
        const result = await uut.validateEmailArray(emailList)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('getHtmlFromObject()', () => {
    it('should throw error if the input  is not provided ', async () => {
      try {
        await uut.getHtmlFromObject()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'objectData' must be a object!")
      }
    })

    it('should throw error if the object is empty', async () => {
      try {
        await uut.getHtmlFromObject({})
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'subject' must be a string!")
      }
    })

    it('should throw error if "formMessage" property is not provided', async () => {
      try {
        const obj = {
          subject: 'unit'
        }
        await uut.getHtmlFromObject(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should return the html', async () => {
      try {
        const obj = {
          subject: 'unit ',
          formMessage: 'test',
          value1: 'value1',
          value2: 'value2',
          value3: 'value3'
        }
        const result = await uut.getHtmlFromObject(obj)
        assert.isString(result)
        assert.include(result, '<p>', 'expect html tag')
        assert.include(result, '</p>', 'expect html tag')
        assert.include(
          result,
          'value1',
          'Expect value 1 is included in the html'
        )
        assert.include(result, 'value2', 'expect is included in the html')
        assert.include(result, 'value3', 'expect is included in the html')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/wallet.unit.js`:

```js

/*
  Unit tests for the adapter/wallet.js library.
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

import WalletAdapter from '../../../src/adapters/wallet.js'
import { MockBchWallet } from '../mocks/adapters/wallet.js'

describe('#wallet', () => {
  let uut
  let sandbox

  beforeEach(() => {
    uut = new WalletAdapter()
    uut.bchWallet = new MockBchWallet()
    uut.bitcoinJs = {
      Transaction: {
        fromHex: () => { return { } },
        SIGHASH_ALL: () => { return { } }
      },
      TransactionBuilder: {
        fromTransaction: () => { return { sign: () => { return { } }, build: () => { return { toHex: () => { return 'hex' } } } } }
      },
      ECPair: {
        fromWIF: () => { return { } }
      }
    }
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#moveTokensFromCustomWallet', () => {
    it('should move tokens from a custom wallet', async () => {
      sandbox.stub(uut, 'getKeyPair').resolves({
        cashAddress: 'cashAddress',
        wif: 'wif',
        hdIndex: 11
      })

      const customWallet = new MockBchWallet()
      customWallet.sendTokens = () => { return 'move token tx id result' }
      customWallet.utxos.utxoStore.slpUtxos.type1.tokens = [
        {
          tokenId: 'tokenId',
          tokenType: 1,
          qty: 1
        }
      ]
      const inObj = {
        qty: 1,
        wallet: customWallet,
        tokenId: 'tokenId'
      }
      const result = await uut.moveTokensFromCustomWallet(inObj)
      assert.equal(result.txid, 'move token tx id result')
      assert.equal(result.hdIndex, 11)
      assert.equal(result.tokenType, 1)
      assert.equal(result.vout, 1)
    })
    it('should throw an error if the wallet is not provided', async () => {
      try {
        const inObj = {
          qty: 1,
          tokenId: 'tokenId'
        }
        await uut.moveTokensFromCustomWallet(inObj)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'wallet is required!')
      }
    })
    it('should throw an error if the tokenId is not provided', async () => {
      try {
        const inObj = {
          qty: 1,
          wallet: new MockBchWallet()
        }
        await uut.moveTokensFromCustomWallet(inObj)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'tokenId must be a string!')
      }
    })
    it('should throw an error if the qty is not provided', async () => {
      try {
        const inObj = {
          tokenId: 'tokenId',
          wallet: new MockBchWallet()
        }
        await uut.moveTokensFromCustomWallet(inObj)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'qty must be a number!')
      }
    })
  })
  describe('#completeTx', () => {
    it('should complete a transaction', async () => {
      sandbox.stub(uut, 'getKeyPair').resolves({
        cashAddress: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
        wif: 'L5D2UAam8tvo3uii5kpgaGyjvVMimdrXu8nWGQSQjuuAix6ji1YQ',
        hdIndex: 11
      })
      sandbox.stub(uut, 'deseralizeTx').resolves({
        txid: 'complete tx id result'
      })
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves('complete tx id result')

      const hex = 'hex'
      const hdIndex = 11
      const txid = await uut.completeTx(hex, hdIndex)
      assert.equal(txid, 'complete tx id result')
    })
    it('should throw an error if the hex is not provided', async () => {
      try {
        const hdIndex = 11
        await uut.completeTx(null, hdIndex)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'hex must be a string!')
      }
    })
    it('should throw an error if the hdIndex is not provided', async () => {
      try {
        const hex = 'hex'
        await uut.completeTx(hex, null)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'hdIndex must be a non-negative number!')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/p2wdb.adapter.unit.js`:

```js
/*
  Unit tests for the p2wdb adapter library.
*/

// Public npm libraries.
import { assert } from 'chai'

import sinon from 'sinon'

// const BCHJS = require('@psf/bch-js')
import BchWallet from 'minimal-slp-wallet'

// Local libraries.
import P2wdbAdapter from '../../../src/adapters/p2wdb-adapter.js'

describe('#P2wdbAdapter', () => {
  let uut, sandbox, bchWallet

  beforeEach(async () => {
    // const bchjs = new BCHJS()
    bchWallet = new BchWallet()
    await bchWallet.walletInfoPromise

    uut = new P2wdbAdapter({ bchWallet })
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if bchWallet is not passed in', () => {
      try {
        uut = new P2wdbAdapter()

        assert.fail('Unexpected coded path')
      } catch (err) {
        assert.include(err.message, 'Must pass an instance of minimal-slp-wallet as bchWallet when instantiating p2wdb.js adapter.')
      }
    })
  })

  describe('#instantiateWriteLib', () => {
    it('should instantiate Write library using web 3 interface', async () => {
      // Force code path
      uut.config.useFullStackCash = false

      // Mock dependencies
      uut.Write =
        class Write {
          constructor () {
            this.interface = 'web3'
          }
        }

      const wif = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'

      const result = uut.instantiateWriteLib(wif)
      // console.log('result: ', result)

      assert.equal(result.interface, 'web3')
    })

    it('should instantiate Write library using web 2 interface', async () => {
      // Force code path
      uut.config.useFullStackCash = true

      // Mock dependencies
      uut.Write =
        class Write {
          constructor () {
            this.interface = 'fullstack'
          }
        }

      const wif = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'

      const result = uut.instantiateWriteLib(wif)
      // console.log('result: ', result)

      assert.equal(result.interface, 'fullstack')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.instantiateWriteLib()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'WIF input required when calling instantiateWriteLib()')
      }
    })
  })

  describe('#checkForSufficientFunds', () => {
    it('should throw error if WIF is not provided', async () => {
      try {
        await uut.checkForSufficientFunds()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'invalid wif to check for funds')
      }
    })

    it('should return status of funds', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'instantiateWriteLib').returns({
        checkForSufficientFunds: () => true
      })

      const wif = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'

      const result = await uut.checkForSufficientFunds(wif)

      assert.equal(result, true)
    })
  })

  describe('#write', async () => {
    it('should throw error if WIF is not provided', async () => {
      try {
        await uut.write()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'wif input must be a private key starting with the letter L or K')
      }
    })

    it('should write data to the P2WDB', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'instantiateWriteLib').returns({
        postEntry: async () => {
          return { hash: 'fake-hash' }
        }
      })

      const wif = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'
      const inObj = { wif }

      const result = await uut.write(inObj)
      // console.log('result: ', result)

      assert.equal(result, 'fake-hash')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/json-files.adapter.unit.js`:

```js
/*
  Unit tests for the JSON File adapter.
*/

import { assert } from 'chai'
import fs from 'fs'
import sinon from 'sinon'
import util from 'util'

import JsonFiles from '../../../src/adapters/json-files.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
util.inspect.defaultOptions = { depth: 1 }
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const JSON_FILE = 'test-json-file.json'
const JSON_PATH = `${__dirname.toString()}/${JSON_FILE}`

const deleteFile = (filepath) => {
  try {
    // Delete state if exist
    fs.unlinkSync(filepath)
  } catch (error) {}
}

let sandbox
let uut

describe('JsonFiles', () => {
  const obj = {
    json: 'file'
  }

  beforeEach(() => {
    uut = new JsonFiles()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  after(() => {
    deleteFile(JSON_PATH)
  })

  describe('writeJSON()', () => {
    it('should throw error if  inputs is not provided', async () => {
      try {
        await uut.writeJSON()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'obj property is required')
      }
    })

    it('should throw error if  filename property is not provided', async () => {
      try {
        await uut.writeJSON(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if  filename property is not string', async () => {
      try {
        await uut.writeJSON(obj, 1)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if fs library return an error', async () => {
      try {
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.fs, 'writeFile').yields(new Error('test error'))

        await uut.writeJSON(obj, JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should write a json file', async () => {
      try {
        await uut.writeJSON(obj, JSON_PATH)

        assert.isTrue(fs.existsSync(JSON_PATH))
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('readJSON()', () => {
    it('should throw error if  filename property is not provided', async () => {
      try {
        await uut.readJSON(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if  filename property is not string', async () => {
      try {
        await uut.readJSON(obj, 1)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if fs library return an error', async () => {
      try {
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.fs, 'readFile').yields(new Error('test error'))

        await uut.readJSON(JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should throw error if file not found', async () => {
      try {
        const testError = new Error('test error')
        testError.code = 'ENOENT'

        sandbox.stub(uut.fs, 'readFile').yields(testError)

        await uut.readJSON(JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should read a json file', async () => {
      try {
        const result = await uut.readJSON(JSON_PATH)

        const objKeys = Object.keys(obj)
        const resultKeys = Object.keys(result)

        assert.isObject(result)
        assert.equal(objKeys.length, resultKeys.length)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/wallet.adapter.unit.js`:

```js
/*
  Unit tests for the Wallet Adapter library.
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import BchWallet from 'minimal-slp-wallet'
import fs from 'fs'

// Local libraries
import WalletAdapter from '../../../src/adapters/wallet.adapter.js'
import { MockBchWallet } from '../mocks/adapters/wallet.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// Global constants
const testWalletFile = `${__dirname.toString()}test-wallet.json`

describe('#wallet', () => {
  let uut
  let sandbox

  before(() => {
    // Delete the test file if it exists.
    try {
      deleteFile(testWalletFile)
    } catch (err) { }
  })

  beforeEach(() => {
    uut = new WalletAdapter()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  after(() => {
    // Delete the test file if it exists.
    try {
      deleteFile(testWalletFile)
    } catch (err) { }
  })

  describe('#_instanceWallet', () => {
    it('should create a wallet given a mnemonic', async () => {
      const mnemonic = 'wagon tray learn flat erase laugh lonely rug check captain jacket morning'
      const result = await uut._instanceWallet(mnemonic)
      // console.log('result: ', result)
      assert.equal(result.walletInfo.mnemonic, mnemonic)
    })
  })

  describe('#openWallet', () => {
    it('should create a new wallet when wallet file does not exist', async () => {
      // Mock dependencies
      uut.BchWallet = MockBchWallet
      // Ensure we open the test file, not the production wallet file.
      uut.config.walletFile = testWalletFile
      const result = await uut.openWallet()
      // console.log('result: ', result)
      assert.property(result, 'mnemonic')
      assert.property(result, 'privateKey')
      assert.property(result, 'publicKey')
      assert.property(result, 'cashAddress')
      assert.property(result, 'address')
      assert.property(result, 'slpAddress')
      assert.property(result, 'legacyAddress')
      assert.property(result, 'hdPath')
    })

    it('should open existing wallet file', async () => {
      // This test case uses the file created in the previous test case.
      // Ensure we open the test file, not the production wallet file.
      uut.config.walletFile = testWalletFile
      const result = await uut.openWallet()
      // console.log('result: ', result)
      assert.property(result, 'mnemonic')
      assert.property(result, 'privateKey')
      assert.property(result, 'publicKey')
      assert.property(result, 'cashAddress')
      assert.property(result, 'address')
      assert.property(result, 'slpAddress')
      assert.property(result, 'legacyAddress')
      assert.property(result, 'hdPath')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        uut.config.walletFile = ''
        uut.BchWallet = () => {
        }
        await uut.openWallet()
        // console.log('result: ', result)
        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'this.BchWallet is not a constructor')
      }
    })
  })

  describe('#instanceWalletWithoutInitialization', () => {
    it('should create an instance of BchWallet', async () => {
      // Create a mock wallet.
      const mockWallet = new BchWallet()
      await mockWallet.walletInfoPromise
      sandbox.stub(mockWallet, 'initialize').resolves()

      // Mock dependencies
      sandbox.stub(uut, '_instanceWallet').resolves(mockWallet)
      uut.config.authPass = 'fake-auth-pass'

      // Ensure we open the test file, not the production wallet file.
      uut.config.walletFile = testWalletFile
      const walletData = await uut.openWallet()

      // console.log('walletData: ', walletData)
      const result = await uut.instanceWalletWithoutInitialization(walletData)
      // console.log('result: ', result)

      assert.property(result, 'walletInfoPromise')
      assert.property(result, 'walletInfo')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut, '_instanceWallet').rejects(new Error('test error'))

        await uut.instanceWalletWithoutInitialization()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'test error')
      }
    })

    it('should create an instance of BchWallet using web2 infra', async () => {
      // Create a mock wallet.
      const mockWallet = new BchWallet()
      await mockWallet.walletInfoPromise
      sandbox.stub(mockWallet, 'initialize').resolves()

      // Mock dependencies
      sandbox.stub(uut, '_instanceWallet').resolves(mockWallet)

      // Ensure we open the test file, not the production wallet file.
      uut.config.walletFile = testWalletFile
      const walletData = await uut.openWallet()
      // console.log('walletData: ', walletData)

      // Force desired code path
      uut.config.walletInterface = 'web2'
      const result = await uut.instanceWalletWithoutInitialization(walletData)

      // console.log('result: ', result)
      assert.property(result, 'walletInfoPromise')
      assert.property(result, 'walletInfo')
    })

    it('should generate wallet from mnemonic in config', async () => {
      // Create a mock wallet.
      const mockWallet = new BchWallet()
      await mockWallet.walletInfoPromise
      sandbox.stub(mockWallet, 'initialize').resolves()

      // Mock dependencies
      sandbox.stub(uut, '_instanceWallet').resolves(mockWallet)

      // Ensure we open the test file, not the production wallet file.
      uut.config.walletFile = testWalletFile
      const walletData = await uut.openWallet()
      // console.log('walletData: ', walletData)

      const originalConfig = uut.config.mnemonic
      uut.config.mnemonic = walletData.mnemonic

      const result = await uut.instanceWalletWithoutInitialization({})
      // console.log('result: ', result)

      uut.config.mnemonic = originalConfig

      assert.property(result, 'walletInfoPromise')
      assert.property(result, 'walletInfo')
    })
  })

  describe('#instanceWallet', () => {
    it('should create an instance of BchWallet', async () => {
      // Create a mock wallet.
      const mockWallet = new BchWallet()
      await mockWallet.walletInfoPromise
      sandbox.stub(mockWallet, 'initialize').resolves()

      // Mock dependencies
      sandbox.stub(uut, '_instanceWallet').resolves(mockWallet)

      // Ensure we open the test file, not the production wallet file.
      uut.WALLET_FILE = testWalletFile
      const walletData = await uut.openWallet()
      // console.log('walletData: ', walletData)
      const result = await uut.instanceWallet(walletData)
      // console.log('result: ', result)

      assert.property(result, 'walletInfoPromise')
      assert.property(result, 'walletInfo')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'instanceWalletWithoutInitialization').rejects(new Error('test error'))

        await uut.instanceWallet()
        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'test error')
      }
    })

    it('should create an instance of BchWallet using web2 infra', async () => {
      // Create a mock wallet.
      const mockWallet = new BchWallet()
      await mockWallet.walletInfoPromise
      sandbox.stub(mockWallet, 'initialize').resolves()

      // Mock dependencies
      sandbox.stub(uut, '_instanceWallet').resolves(mockWallet)

      // Ensure we open the test file, not the production wallet file.
      uut.WALLET_FILE = testWalletFile
      const walletData = await uut.openWallet()
      // console.log('walletData: ', walletData)

      // Force desired code path
      uut.config.useFullStackCash = true
      const result = await uut.instanceWallet(walletData)
      // console.log('result: ', result)

      assert.property(result, 'walletInfoPromise')
      assert.property(result, 'walletInfo')
    })
  })

  describe('#incrementNextAddress', () => {
    it('should increment the nextAddress property', async () => {
      // Ensure we open the test file, not the production wallet file.
      uut.WALLET_FILE = testWalletFile
      // mock instance of minimal-slp-wallet
      uut.bchWallet = new MockBchWallet()
      const result = await uut.incrementNextAddress()
      assert.equal(result, 2)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'openWallet').rejects(new Error('test error'))
        await uut.incrementNextAddress()
        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getKeyPair', () => {
    it('should return an object with a key pair', async () => {
      // Ensure we open the test file, not the production wallet file.
      // uut.WALLET_FILE = testWalletFile
      uut.config.walletFile = testWalletFile

      const result = await uut.getKeyPair()
      // console.log('result: ', result)

      assert.property(result, 'cashAddress')
      assert.property(result, 'wif')
      assert.property(result, 'hdIndex')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut, 'incrementNextAddress')
          .rejects(new Error('test error'))
        await uut.getKeyPair()
        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#optimize', () => {
    it('should call the wallet optimize function', async () => {
      // mock instance of minimal-slp-wallet
      uut.bchWallet = new MockBchWallet()
      sandbox.stub(uut.bchWallet, 'optimize').resolves({ bchUtxoCnt: 10 })
      const result = await uut.optimize()
      assert.equal(result, true)
    })
  })

  describe('#getBalance', () => {
    it('should get the balance for the wallet', async () => {
      // mock instance of minimal-slp-wallet
      uut.bchWallet = new MockBchWallet()
      // Mock dependencies and force desired code path
      sandbox.stub(uut.bchWallet, 'getBalance').resolves(41012)
      sandbox.stub(uut.bchWallet, 'listTokens').resolves([{
        tokenId: '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
        ticker: 'PSF',
        name: 'Permissionless Software Foundation',
        decimals: 8,
        tokenType: 1,
        url: 'psfoundation.cash',
        qty: 2
      }])
      const result = await uut.getBalance()
      // console.log('result: ', result)
      // Assert the expected properties exist and have the expected values.
      assert.equal(result.satBalance, 41012)
      assert.equal(result.psfBalance, 2)
      assert.equal(result.success, true)
    })
  })
})

const deleteFile = (filepath) => {
  try {
    // Delete state if exist
    fs.unlinkSync(filepath)
  } catch (err) {
    // console.error('Error trying to delete file: ', err)
  }
}

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/adapters-index-unit.js`:

```js
/*
  Unit tests for the adapters index.js library
*/

// Global npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local libraries
import Adapters from '../../../src/adapters/index.js'

describe('#adapters', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new Adapters()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#start', () => {
    it('should start the async adapters', async () => {
      // Mock dependencies
      uut.config.getJwtAtStartup = true
      uut.config.useIpfs = true
      uut.config.env = 'not-a-test'
      sandbox.stub(uut.fullStackJwt, 'getJWT').resolves()
      sandbox.stub(uut.fullStackJwt, 'instanceBchjs').resolves()
      sandbox.stub(uut.ipfs, 'start').resolves()

      const result = await uut.start()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        uut.config.getJwtAtStartup = false
        // uut.config.env = 'dev'
        sandbox.stub(uut.wallet, 'openWallet').rejects(new Error('test error'))

        await uut.start()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'test error')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/fullstack-jwt.adapter.unit.js`:

```js
/*
  Unit tests for the jwt-bch-lib and fullstack-jwt.js adapter library.

*/

import { assert } from 'chai'

import sinon from 'sinon'
import FullStackJWT from '../../../src/adapters/fullstack-jwt.js'

describe('#FullStackJWT', () => {
  let sandbox
  let uut

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const localConfig = {
      authServer: 'someserver',
      apiServer: 'someserver',
      fullstackLogin: 'somelogin',
      fullstackPassword: 'somepassword'
    }
    uut = new FullStackJWT(localConfig)
  })
  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if auth server is not specified', () => {
      try {
        uut = new FullStackJWT()

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a url for the AUTH server when instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if api server is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver'
        }

        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a url for the API server when instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if login is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver',
          apiServer: 'someserver'
        }
        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a FullStack.cash login (email) instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if login is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver',
          apiServer: 'someserver',
          fullstackLogin: 'somelogin'
        }
        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a FullStack.cash account password when instantiating FullStackJWT class.'
        )
      }
    })
  })

  describe('#getJWT', () => {
    it('should return the JWT token', async () => {
      // Mock dependencies to force a code path.
      sandbox.stub(uut.jwtLib, 'register').resolves({})
      uut.jwtLib.userData.apiToken = 'abc123'
      sandbox.stub(uut.jwtLib, 'validateApiToken').resolves({ isValid: true })

      const result = await uut.getJWT()
      // console.log('result: ', result)

      assert.equal(result, 'abc123')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.jwtLib, 'register').rejects(new Error('test error'))

        await uut.getJWT()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw an error if user does not have a JWT', async () => {
      try {
        // Mock dependencies to force a code path.
        sandbox.stub(uut.jwtLib, 'register').resolves({})

        await uut.getJWT()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err.message: ', err.message)
        assert.include(err.message, 'This account does not have a JWT')
      }
    })

    it('should retrieve a new JWT token if the old one invalid', async () => {
      // Mock dependencies to force a code path.
      sandbox.stub(uut.jwtLib, 'register').resolves({})
      uut.jwtLib.userData.apiToken = 'abc123'
      uut.jwtLib.userData.apiLevel = 30
      sandbox.stub(uut.jwtLib, 'validateApiToken').resolves({ isValid: false })
      sandbox.stub(uut.jwtLib, 'getApiToken').resolves('xyz789')

      const result = await uut.getJWT()
      // console.log('result: ', result)

      assert.equal(result, 'xyz789')
    })
  })

  describe('#instanceBchjs', () => {
    it('should return an instance of bch-js', () => {
      const result = uut.instanceBchjs()
      // console.log('result: ', result)

      assert.property(result, 'restURL')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/adapters/ipfs-coord.adapter.unit.js`:

```js
/*
  Unit tests for the IPFS Adapter.
*/

import { assert } from 'chai'

import sinon from 'sinon'
import IPFSCoordAdapter from '../../../src/adapters/ipfs/ipfs-coord.js'
import create from '../mocks/ipfs-mock.js'
import IPFSCoordMock from '../mocks/ipfs-coord-mock.js'
import config from '../../../config/index.js'

describe('#IPFS', () => {
  let uut
  let sandbox

  beforeEach(() => {
    const ipfs = create()
    uut = new IPFSCoordAdapter({ ipfs })

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if ipfs instance is not included', () => {
      try {
        uut = new IPFSCoordAdapter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of IPFS must be passed when instantiating ipfs-coord.'
        )
      }
    })
  })

  describe('#start', () => {
    it('should return a promise that resolves into an instance of IPFS.', async () => {
      // Mock dependencies.
      uut.IpfsCoord = IPFSCoordMock

      const result = await uut.start()
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should get the public IP address if this node is a Circuit Relay', async () => {
      // Mock dependencies.
      uut.IpfsCoord = IPFSCoordMock
      sandbox.stub(uut, 'publicIp').resolves('123')

      // Force Circuit Relay
      uut.config.isCircuitRelay = true

      const result = await uut.start()
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should exit quietly if this node is a Circuit Relay and there is an issue getting the IP address', async () => {
      // Mock dependencies.
      uut.IpfsCoord = IPFSCoordMock
      sandbox.stub(uut, 'publicIp').rejects(new Error('test error'))

      // Force Circuit Relay
      uut.config.isCircuitRelay = true

      const result = await uut.start()
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return a promise that resolves into an instance of IPFS in production mode', async () => {
      uut.config.isProduction = true
      // Mock dependencies.
      uut.IpfsCoord = IPFSCoordMock

      const result = await uut.start()
      // console.log('result: ', result)
      assert.equal(result, true)
      config.isProduction = false
    })
  })

  describe('#attachRPCRouter', () => {
    it('should attached a router output', async () => {
      // Mock dependencies
      uut.ipfsCoord = {
        privateLog: {},
        ipfs: {
          orbitdb: {
            privateLog: {}
          }
        },
        adapters: {
          pubsub: {
            privateLog: () => {
            }
          }
        }
      }

      const router = console.log

      uut.attachRPCRouter(router)
    })

    it('should catch and throw an error', () => {
      try {
        // Force an error
        delete uut.ipfsCoord.adapters

        const router = console.log

        uut.attachRPCRouter(router)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#subscribeToChat', () => {
    it('should subscribe to the chat channel', async () => {
      // Mock dependencies
      uut.ipfsCoord = {
        adapters: {
          pubsub: {
            subscribeToPubsubChannel: async () => {
            }
          }
        }
      }

      await uut.subscribeToChat()
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/README.md`:

```md
# Unit Tests
Unit tests are defined as testing the smallest possible unit of a function. They also do not make any live network calls.

Unit tests are broken up by directory:

- [biz-logic](./biz-logic) tests the business logic libraries.
- [rest-api](./rest-api) tests the REST API specific handling of the router.
- json-rpc (coming soon) tests the JSON-RPC routing using ipfs-coord library.

```

`/home/trout/work/psf/code/bch-dex/test/unit/misc/server-unit.js`:

```js
/*
  Unit tests for the bin/server.js file
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import Server from '../../../bin/server.js'

describe('#server', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Server()
  })

  afterEach(() => sandbox.restore())

  describe('#startServer', () => {
    it('should start the server', async () => {
      // Mock dependencies
      sandbox.stub(uut.mongoose, 'connect').resolves()
      sandbox.stub(uut.controllers, 'initAdapters').resolves()
      sandbox.stub(uut.controllers, 'initUseCases').resolves()
      sandbox.stub(uut.controllers, 'attachRESTControllers').resolves()
      sandbox.stub(uut.adminLib, 'createSystemUser').resolves(true)
      sandbox.stub(uut.controllers, 'attachControllers').resolves()
      sandbox.stub(uut, 'sleep').resolves()
      uut.config.env = 'dev'

      const result = await uut.startServer()
      // console.log('result: ', result)

      assert.property(result, 'env')

      // Turn off the server.
      uut.server.close()

      // Restor config env
      uut.config.env = 'test'
    })

    it('should exit on failure', async () => {
      // Force an error
      sandbox.stub(uut.mongoose, 'connect').rejects(new Error('test error'))

      // Prevent default behavior of exiting the program.
      sandbox.stub(uut, 'sleep').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      await uut.startServer()

      // Not throwing an error is a success
    })
  })

  describe('#sleep', () => {
    it('should execute', async () => {
      await uut.sleep(1)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/misc/config-unit.js`:

```js
/*
  Unit tests for the config directory
*/

import { assert } from 'chai'

let currentEnv

describe('#config', () => {
  before(() => {
    // Backup the current environment setting.
    currentEnv = process.env.BCH_DEX
  })

  after(() => {
    // Restore the environment setting before starting these tests.
    process.env.BCH_DEX = currentEnv
  })

  it('Should return development environment config by default', async () => {
    process.env.BCH_DEX = 'dev'

    const importedConfig = await import('../../../config/index.js?foo=bar3')
    const config = importedConfig.default
    // console.log('config: ', config)

    assert.equal(config.env, 'dev')
  })

  it('Should return test environment config', async () => {
    // Hack to dynamically import a library multiple times:
    // https://github.com/denoland/deno/issues/6946

    process.env.BCH_DEX = 'test'

    const importedConfig2 = await import('../../../config/index.js?foo=bar1')
    const config = importedConfig2.default
    // console.log('config: ', config)

    assert.equal(config.env, 'test')
  })

  it('Should return prod environment config', async () => {
    process.env.BCH_DEX = 'prod'

    process.env.WALLET_INTERFACE = 'web2'
    process.env.APISERVER = 'https://api.fullstack.cash/v5/'

    await import('../../../config/env/common.js?foo=bar2')
    const importedConfig3 = await import('../../../config/index.js?foo=bar2')
    const config = importedConfig3.default
    // console.log('config: ', config)

    assert.equal(config.env, 'prod')
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/misc/passport.unit.js`:

```js
/*
  Unit tests for the passport library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import passport from 'koa-passport'

// Local libraries
import User from '../../../src/adapters/localdb/models/users.js'

import { applyPassportMods, passportCallback } from '../../../config/passport.js'
import adaptersMock from '../mocks/adapters/index.js'

describe('#passport', () => {
  let sandbox
  let id
  let done

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    id = 'abc123'
    done = () => {}
  })

  afterEach(() => sandbox.restore())

  describe('#passportCallback', () => {
    it('should return if user is found', () => {
      // Mock Users model.
      sandbox.stub(User, 'findOne').resolves({ id })

      passportCallback(id, 'password', done)
    })

    it('should return if password is validated', () => {
      // Mock Users model.
      sandbox.stub(User, 'findOne').resolves(new adaptersMock.localdb.Users())

      passportCallback(id, 'password', done)
    })

    it('should catch a high-level error', () => {
      // Force an error
      sandbox.stub(User, 'findOne').rejects(new Error('test error'))

      passportCallback(id, 'password', done)
    })
  })

  describe('#applyPassportMods', () => {
    it('should apply modifications to default passport behavior', () => {
      const result = applyPassportMods(passport)

      assert.equal(result, true)
    })
  })

  describe('#serializeUser', () => {
    it('should serialize a user', () => {
      const user = {
        id: 'abc123'
      }
      const done = () => {}

      applyPassportMods(passport)

      passport.serializeUser(user, done)
    })
  })

  describe('#deserializeUser', () => {
    it('should deserialize a user', () => {
      // Mock Users model.
      sandbox.stub(User, 'findById').resolves({ id })

      applyPassportMods(passport)

      passport.deserializeUser(id, done)
    })

    it('should catch and handle errors', () => {
      // Force an error
      sandbox.stub(User, 'findById').rejects(new Error('test error'))

      applyPassportMods(passport)

      passport.deserializeUser(id, done)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/offer/offer.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import OfferRouter from '../../../../../src/controllers/rest-api/offer/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Offer-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new OfferRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new OfferRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /offer REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new OfferRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /offer REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attached REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/offer/offer.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /offer endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import OfferRESTController from '../../../../../src/controllers/rest-api/offer/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

let uut
let sandbox
let ctx

describe('#Offer-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new OfferRESTController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new OfferRESTController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /offer REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new OfferRESTController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /offer REST Controller.'
        )
      }
    })
  })

  describe('#createOffer', () => {
    it('should create a new offer', async () => {
      ctx.request.body = {
        appId: 'swapTest555',
        data: {
          messageType: 1,
          messageClass: 1,
          tokenId:
            '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
          buyOrSell: 'sell',
          rateInSats: 1000,
          minSatsToExchange: 10,
          numTokens: 0.02,
          utxoTxid:
            '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
          utxoVout: 0
        },
        timestamp: '2021-09-20T17:54:26.395Z',
        localTimeStamp: '9/20/2021, 10:54:26 AM',
        txid: '46f50f2a0cf44e3ed70dfb0618ef3ebfee57aabcf229b5d2d17c07322b54a8d7',
        hash: 'zdpuB2X25AZCKo3wpr4sSbw44vqPWJRqcxWQRHZccK5BdtoGD'
      }

      // Mock dependencies
      // sandbox.stub(uut.useCases.offer, 'createOffer').resolves()

      await uut.createOffer(ctx)

      // assert.equal(ctx.body.hash, 'testHash')
    })

    // it('should catch and throw an error', async () => {
    //   try {
    //     ctx.request.body = {
    //       offer: {}
    //     }
    //
    //     // Force an error
    //     sandbox
    //       .stub(uut.useCases.offer, 'createOffer')
    //       .rejects(new Error('test error'))
    //
    //     await uut.createOffer(ctx)
    //
    //     assert.fail('Unexpected code path')
    //   } catch (err) {
    //     // console.log('err: ', err)
    //     assert.include(err.message, 'test error')
    //   }
    // })
  })

  describe('#handleError', () => {
    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })
    it('should catch error if message is provided', () => {
      try {
        const err = {
          status: 422,
          message: 'Unprocessable Entity'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Unprocessable Entity')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/contact/contact.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'
import ContactController from '../../../../../src/controllers/rest-api/contact/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx

describe('Contact', () => {
  before(async () => {
  })

  beforeEach(() => {
    uut = new ContactController()

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#POST /contact', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.email(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      sandbox.stub(uut.contactLib, 'sendEmail').resolves(true)

      ctx.request.body = {
        email: 'test02@test.com',
        formMessage: 'test'
      }

      await uut.email(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'success')
      assert.isTrue(ctx.response.body.success)
    })
  })

  describe('#handleError', () => {
    it('should pass an error message', () => {
      try {
        const err = {
          status: 422,
          message: 'Unprocessable Entity'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Unprocessable Entity')
      }
    })

    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/contact/contact.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import ContactRouter from '../../../../../src/controllers/rest-api/contact/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Contact-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new ContactRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new ContactRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Contact REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new ContactRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Contact REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attaching REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/usage/usage.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /usage endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import UsageController from '../../../../../src/controllers/rest-api/usage/controller.js'

import { context as mockContext } from '../../../mocks/ctx-mock.js'

let uut
let sandbox
let ctx

describe('#Usage-REST-Controller', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new UsageController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UsageController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /usage REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new UsageController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /usage REST Controller.'
        )
      }
    })
  })

  describe('#Get /usage', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        sandbox.stub(uut.useCases.usage, 'getRestSummary').throws(new Error('test error'))
        await uut.getStatus(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      await uut.getStatus(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'status')
    })
  })

  describe('#Get /ips', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        sandbox.stub(uut.useCases.usage, 'getTopIps').throws(new Error('test error'))
        await uut.getTopIps(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      await uut.getTopIps(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'ips')
    })
  })

  describe('#Get /endpoints', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        sandbox.stub(uut.useCases.usage, 'getTopEndpoints').throws(new Error('test error'))
        await uut.getTopEndpoints(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      await uut.getTopEndpoints(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'endpoints')
    })
  })

  describe('#handleError', () => {
    it('should pass an error message', () => {
      try {
        const err = {
          status: 422,
          message: 'Unprocessable Entity'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Unprocessable Entity')
      }
    })
    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/usage/usage.rest.router.unit.js`:

```js
/*
Unit tests for the REST API handler for the /usage endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

import UsageRouter from '../../../../../src/controllers/rest-api/usage/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Usage-REST-Router', () => {
  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new UsageRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UsageRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating IPFS REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new UsageRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating IPFS REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attaching REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/logs/logs.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import LogsRouter from '../../../../../src/controllers/rest-api/logs/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Contact-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new LogsRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new LogsRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Logs REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new LogsRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Logs REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attaching REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/logs/logs.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'
import LogsApiController from '../../../../../src/controllers/rest-api/logs/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx

describe('Logapi', () => {
  before(async () => {
  })

  beforeEach(() => {
    uut = new LogsApiController()

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#POST /logapi', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.getLogs(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 500 status on biz logic Unhandled error', async () => {
      try {
        // eslint-disable
        sandbox
          .stub(uut.logsApiLib, 'getLogs')
          .returns(Promise.reject(new Error()))

        ctx.request.body = {
          password: 'test'
        }

        await uut.getLogs(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 500)
        assert.include(err.message, 'Unhandled error')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.logsApiLib, 'getLogs').resolves({})

      ctx.request.body = {
        password: 'test'
      }

      await uut.getLogs(ctx)

      assert.isOk(ctx.body)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/order/order.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /order endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import OrderRESTController from '../../../../../src/controllers/rest-api/order/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

let uut
let sandbox
let ctx

describe('#Order-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new OrderRESTController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new OrderRESTController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /order REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new OrderRESTController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /order REST Controller.'
        )
      }
    })
  })

  describe('#createOrder', () => {
    it('should create a new order', async () => {
      ctx.request.body = {
        order: {}
      }
      ctx.state.user = {
        id: 'testUserId'
      }

      // Mock dependencies
      sandbox.stub(uut.useCases.order, 'createOrder').resolves({ eventId: 'testEventId', noteId: 'testNoteId' })

      await uut.createOrder(ctx)

      assert.equal(ctx.body.eventId, 'testEventId')
      assert.equal(ctx.body.noteId, 'testNoteId')
    })

    it('should catch and throw an error', async () => {
      try {
        ctx.request.body = {
          order: {}
        }
        ctx.state.user = {
          id: 'testUserId'
        }

        // Force an error
        sandbox
          .stub(uut.useCases.order, 'createOrder')
          .rejects(new Error('test error'))

        await uut.createOrder(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#handleError', () => {
    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })
    it('should catch error if message is provided', () => {
      try {
        const err = {
          status: 422,
          message: 'Unprocessable Entity'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Unprocessable Entity')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/order/order.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import OrderRouter from '../../../../../src/controllers/rest-api/order/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Order-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new OrderRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new OrderRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /order REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new OrderRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /order REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attached REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/middleware/error-unit.js`:

```js
/*
Unit tests for the REST API middleware that handle response errors.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import errorMiddleware from '../../../../../src/controllers/rest-api/middleware/error.js'
import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

describe('#Validators', () => {
  let ctx
  let sandbox

  beforeEach(() => {
    // Mock the context object.
    ctx = mockContext()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#errorMiddleware', () => {
    it('should run next function', async () => {
      // Spy on next
      const next = sinon.spy(() => { })
      errorMiddleware()(ctx, next)

      assert.isTrue(next.calledOnce)
    })

    it('should handle unknown status error', async () => {
      try {
        const next = async () => {
          const e = new Error('test error')
          e.status = null
          throw e
        }

        await errorMiddleware()(ctx, next)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(ctx.status, 500)
        assert.equal(ctx.body, 'test error')
      }
    })
    it('should handle known status error', async () => {
      try {
        const next = async () => {
          const e = new Error('test error')
          e.status = 422
          throw e
        }

        await errorMiddleware()(ctx, next)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(ctx.status, 422)
        assert.equal(ctx.body, 'test error')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/middleware/validators-unit.js`:

```js
/*
  Unit tests for the REST API middleware that validates users.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import Validators from '../../../../../src/controllers/rest-api/middleware/validators.js'
import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

describe('#Validators', () => {
  let uut
  let ctx
  let sandbox

  beforeEach(() => {
    uut = new Validators()

    // Mock the context object.
    ctx = mockContext()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#getToken', () => {
    it('should return null if no header is provided', () => {
      const result = uut.getToken(ctx)

      assert.equal(result, null)
    })

    it('should return null if header is not in two parts', () => {
      ctx.request.header.authorization = 'Bearer'

      const result = uut.getToken(ctx)

      assert.equal(result, null)
    })

    it('should return null if first part of header does not container the word bearer', () => {
      ctx.request.header.authorization = 'some thing'

      const result = uut.getToken(ctx)

      assert.equal(result, null)
    })

    it('should return the JWT token from the header', () => {
      const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjNiNTUwNzgxYWYzNTc4YzI0ZmU5YiIsImlhdCI6MTY2MzQ0NDczNCwiZXhwIjoxNjYzNTMxMTM0fQ.BY5sOfXc4z5axS98CdTfyqnO9y2wijOlwnv52rcvxHA'
      ctx.request.header.authorization = `Bearer ${jwt}`

      const result = uut.getToken(ctx)

      assert.equal(result, jwt)
    })
  })

  describe('#ensureUser', () => {
    it('should throw error if token is not provided', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns()

        await uut.ensureUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if token can not be verified', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').throws(new Error('test error'))

        await uut.ensureUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user can not be found in database', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves(false)

        await uut.ensureUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should return true if the user is verified', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getToken').returns('fake-jwt')
      sandbox.stub(uut.jwt, 'verify').returns({})
      sandbox.stub(uut.User, 'findById').resolves({ user: 'alice' })

      const result = await uut.ensureUser(ctx)

      assert.equal(result, true)
    })
  })

  describe('#ensureUser', () => {
    it('should throw error if token is not provided', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns()

        await uut.ensureAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if token can not be verified', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').throws(new Error('test error'))

        await uut.ensureAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user can not be found in database', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves(false)

        await uut.ensureAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user is not an admin', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves({ type: 'user' })

        await uut.ensureAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should return true if the user is an admin', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getToken').returns('fake-jwt')
      sandbox.stub(uut.jwt, 'verify').returns({})
      sandbox.stub(uut.User, 'findById').resolves({ type: 'admin' })

      const result = await uut.ensureAdmin(ctx)

      assert.equal(result, true)
    })
  })

  describe('#ensureTargetUserOrAdmin', () => {
    it('should throw error if token is not provided', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns()

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if token can not be verified', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').throws(new Error('test error'))

        ctx.params = {
          id: '456'
        }

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user can not be found in database', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves(false)

        ctx.params = {
          id: '456'
        }

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user is not an admin', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves({ type: 'user' })

        ctx.params = {
          id: '456'
        }

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error is user is not admin or target user', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves({ type: 'user', _id: '123' })

        ctx.params = {
          id: '456'
        }

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should return true if the user is an admin', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getToken').returns('fake-jwt')
      sandbox.stub(uut.jwt, 'verify').returns({})
      sandbox.stub(uut.User, 'findById').resolves({ type: 'admin', _id: '123' })

      ctx.params = {
        id: '456'
      }

      const result = await uut.ensureTargetUserOrAdmin(ctx)

      assert.equal(result, true)
    })

    it('should return true if the user is the target user', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getToken').returns('fake-jwt')
      sandbox.stub(uut.jwt, 'verify').returns({})
      sandbox.stub(uut.User, 'findById').resolves({ type: 'user', _id: '123' })

      ctx.params = {
        id: '123'
      }

      const result = await uut.ensureTargetUserOrAdmin(ctx)

      assert.equal(result, true)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/auth/auth.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import AuthRESTController from '../../../../../src/controllers/rest-api/auth/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

let uut
let sandbox
let ctx

describe('#Auth-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new AuthRESTController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new AuthRESTController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Auth REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new AuthRESTController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Auth REST Controller.'
        )
      }
    })
  })

  describe('#authUser', () => {
    it('should authorize a user', async () => {
      // Mock dependencies
      const user = {
        toJSON: () => {
          return { password: 'password' }
        },
        generateToken: () => {}
      }
      sandbox.stub(uut.passport, 'authUser').resolves(user)

      await uut.authUser(ctx)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.passport, 'authUser').rejects('test error')

        await uut.authUser(ctx)
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Unauthorized')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/auth/auth.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import AuthRouter from '../../../../../src/controllers/rest-api/auth/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Auth-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new AuthRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new AuthRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating PostEntry REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new AuthRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating PostEntry REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attached REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/users/users.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import UserRouter from '../../../../../src/controllers/rest-api/users/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Users-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new UserRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UserRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating PostEntry REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new UserRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating PostEntry REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attaching REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/users/users.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import UserController from '../../../../../src/controllers/rest-api/users/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx

describe('#Users-REST-Controller', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new UserController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UserController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /users REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new UserController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /users REST Controller.'
        )
      }
    })
  })

  describe('#POST /users', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.createUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      ctx.request.body = {
        user: {
          email: 'test02@test.com',
          password: 'test',
          name: 'test02'
        }
      }

      await uut.createUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'user')
      assert.property(ctx.response.body, 'token')

    // Used by downstream tests.
    // testUser = ctx.response.body.user
    // console.log('testUser: ', testUser)
    })
  })

  describe('GET /users', () => {
    it('should return 422 status on arbitrary biz logic error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.useCases.user, 'getAllUsers')
          .rejects(new Error('test error'))

        await uut.getUsers(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      await uut.getUsers(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'users')
    })
  })

  describe('GET /users/:id', () => {
    it('should return 422 status on arbitrary biz logic error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.useCases.user, 'getUser')
          .rejects(new Error('test error'))

        await uut.getUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.useCases.user, 'getUser').resolves({ _id: '123' })

      await uut.getUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'user')
    })

    it('should return other error status passed by biz logic', async () => {
      try {
        // Mock dependencies
        const testErr = new Error('test error')
        testErr.status = 404
        sandbox.stub(uut.useCases.user, 'getUser').rejects(testErr)

        await uut.getUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 404)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('PUT /users/:id', () => {
    it('should return 422 if no input data given', async () => {
      try {
        await uut.updateUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 on success', async () => {
      // Prep the testUser data.
      // console.log('testUser: ', testUser)
      // testUser.password = 'password'
      // delete testUser.type

      // Replace the testUser variable with an actual model from the DB.
      // const existingUser = await User.findById(testUser._id)

      ctx.body = {
        user: {}
      }
      ctx.request.body = {
        user: {}
      }

      // Mock dependencies
      sandbox.stub(uut.useCases.user, 'updateUser').resolves({})

      await uut.updateUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'user')
    })
  })

  describe('DELETE /users/:id', () => {
    it('should return 422 if no input data given', async () => {
      try {
        await uut.deleteUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      // Replace the testUser variable with an actual model from the DB.
      const existingUser = {}

      ctx.body = {
        user: existingUser
      }

      await uut.deleteUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)
    })
  })

  describe('#handleError', () => {
    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API controllers/rest-api/index.js library.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local libraries
import RESTControllers from '../../../../src/controllers/rest-api/index.js'

// const mockContext = require('../../../unit/mocks/ctx-mock').context
import adapters from '../../mocks/adapters/index.js'

import UseCasesMock from '../../mocks/use-cases/index.js'

describe('#RESTControllers', () => {
  let uut
  let sandbox
  // let ctx

  before(async () => {})

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new RESTControllers({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new RESTControllers()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating REST Controller libraries.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new RESTControllers({ adapters })

        assert.fail('Unexpected code path')

        // use to prevent complaints from linter.
        console.log('uut: ', uut)
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating REST Controller libraries.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/entry/entry.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import EntryRouter from '../../../../../src/controllers/rest-api/entry/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Entry-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new EntryRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new EntryRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /entry REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new EntryRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /entry REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attaching REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/entry/entry.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'
import EntryController from '../../../../../src/controllers/rest-api/entry/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx

describe('#Entry-REST-Controller', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new EntryController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new EntryController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /entry REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new EntryController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /entry REST Controller.'
        )
      }
    })
  })

  describe('#POST /entry', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.createEntry(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      ctx.request.body = {
        entry: {
          entry: 'entry',
          description: 'test',
          slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
          signature: 'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
          category: 'test'
        }
      }

      await uut.createEntry(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'entry')
    })
  })

  describe('#handleError', () => {
    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })
    it('should catch error if message is provided', () => {
      try {
        const err = {
          status: 422,
          message: 'Unprocessable Entity'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Unprocessable Entity')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/README.md`:

```md
# REST API Unit Tests

The tests in this directory are unit tests of REST API. These tests are not
concerned with the business logic behind the endpoints. They are only concerned
with the handling of the REST API endpoint. These tests answer questions like:

- Is the endpoint responding properly when the business logic throws an error?
- When returning an error, is it returning the proper HTTP response?
- When returning success, is it returning the correct payload?

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/ipfs/ipfs.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /ipfs endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import IpfsApiController from '../../../../../src/controllers/rest-api/ipfs/controller.js'
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'

import { context as mockContext } from '../../../mocks/ctx-mock.js'
let uut
let sandbox
let ctx

describe('#IPFS REST API', () => {
  before(async () => {
  })

  beforeEach(() => {
    const useCases = new UseCasesMock()

    uut = new IpfsApiController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new IpfsApiController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /ipfs REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new IpfsApiController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /ipfs REST Controller.'
        )
      }
    })
  })

  describe('#GET /status', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.adapters.ipfs, 'getStatus').rejects(new Error('test error'))

        await uut.getStatus(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.ipfs, 'getStatus').resolves({ a: 'b' })

      await uut.getStatus(ctx)
      // console.log('ctx.body: ', ctx.body)

      assert.property(ctx.body, 'status')
      assert.equal(ctx.body.status.a, 'b')
    })
  })

  describe('#POST /peers', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.adapters.ipfs, 'getPeers').rejects(new Error('test error'))

        ctx.request.body = {
          showAll: true
        }

        await uut.getPeers(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.ipfs, 'getPeers').resolves({ a: 'b' })

      ctx.request.body = {
        showAll: true
      }

      await uut.getPeers(ctx)
      // console.log('ctx.body: ', ctx.body)

      assert.property(ctx.body, 'peers')
      assert.equal(ctx.body.peers.a, 'b')
    })
  })

  describe('#POST /relays', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.adapters.ipfs, 'getRelays').rejects(new Error('test error'))

        await uut.getRelays(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.ipfs, 'getRelays').resolves({ a: 'b' })

      await uut.getRelays(ctx)
      // console.log('ctx.body: ', ctx.body)

      assert.property(ctx.body, 'relays')
      assert.equal(ctx.body.relays.a, 'b')
    })
  })

  describe('#POST /connect', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.adapters.ipfs.ipfsCoordAdapter.ipfsCoord.adapters.ipfs, 'connectToPeer').rejects(new Error('test error'))

        ctx.request.body = {
          multiaddr: '/ip4/161.35.99.207/tcp/4001/p2p/12D3KooWDtj9cfj1SKuLbDNKvKRKSsGN8qivq9M8CYpLPDpcD5pu'
        }

        await uut.connect(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.ipfs.ipfsCoordAdapter.ipfsCoord.adapters.ipfs, 'connectToPeer').resolves({ success: true })

      ctx.request.body = {
        multiaddr: '/ip4/161.35.99.207/tcp/4001/p2p/12D3KooWDtj9cfj1SKuLbDNKvKRKSsGN8qivq9M8CYpLPDpcD5pu'
      }

      await uut.connect(ctx)
      // console.log('ctx.body: ', ctx.body)

      assert.property(ctx.body, 'success')
      assert.equal(ctx.body.success, true)
    })
  })

  describe('#handleError', () => {
    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })

    it('should throw error with message', () => {
      try {
        const err = {
          status: 422,
          message: 'test error'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getThisNode', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        // Force an error
        // sandbox.stub(uut.adapters.ipfs.ipfsCoordAdapter.ipfsCoord, 'thisNode').rejects(new Error('test error'))
        uut.adapters.ipfs.ipfsCoordAdapter = {}

        ctx.request.body = {}

        await uut.getThisNode(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log('err: ', err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      // sandbox.stub(uut.adapters.ipfs.ipfsCoordAdapter.ipfsCoord.adapters.ipfs, 'connectToPeer').resolves({ success: true })

      uut.adapters.ipfs.ipfsCoordAdapter = {
        ipfsCoord: {
          thisNode: {}
        }
      }

      ctx.request.body = {}

      await uut.getThisNode(ctx)

      assert.property(ctx.body, 'thisNode')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/rest-api/ipfs/ipfs.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /ipfs endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import IpfsRouter from '../../../../../src/controllers/rest-api/ipfs/index.js'
// const app = require('../../../mocks/app-mock')

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#IPFS-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new IpfsRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new IpfsRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating IPFS REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new IpfsRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating IPFS REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attaching REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/controllers.unit.js`:

```js
/*
  Unit tests for controllers index.js file.
*/

// Public npm libraries
// const assert = require('chai').assert
import sinon from 'sinon'

import Controllers from '../../../src/controllers/index.js'

describe('#Controllers', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Controllers()
  })

  afterEach(() => sandbox.restore())

  describe('#attachControllers', () => {
    it('should attach the controllers', async () => {
      // mock IPFS
      sandbox.stub(uut.adapters, 'start').resolves({})
      uut.adapters.ipfs.ipfsCoordAdapter = {
        attachRPCRouter: () => {}
      }

      // Mock the timer controllers
      sandbox.stub(uut.timerControllers, 'startTimers').returns()

      const app = {
        use: () => {}
      }

      await uut.attachControllers(app)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/json-rpc/auth.json-rpc.controller.unit.js`:

```js
/*
  Unit tests for the json-rpc/auth/index.js file.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

import sinon from 'sinon'
import { assert } from 'chai'
import { v4 as uid } from 'uuid'

// Local libraries
import AuthRPC from '../../../../src/controllers/json-rpc/auth/index.js'

import RateLimit from '../../../../src/controllers/json-rpc/rate-limit.js'
import adapters from '../../mocks/adapters/index.js'
import UseCasesMock from '../../mocks/use-cases/index.js'

// Set the environment variable to signal this is a test.
process.env.TORLIST_ENV = 'test'

describe('#AuthRPC', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const useCases = new UseCasesMock()

    uut = new AuthRPC({ adapters, useCases })
    uut.rateLimit = new RateLimit({ max: 100 })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new AuthRPC()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Auth JSON RPC Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new AuthRPC({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Auth JSON RPC Controller.'
        )
      }
    })
  })

  describe('#authRouter', () => {
    it('should route to the authUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'authUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', { endpoint: 'authUser' })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.authRouter(rpcData)

      assert.equal(result, true)
    })

    it('should return 500 status on routing issue', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'authUser').rejects(new Error('test error'))

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', { endpoint: 'authUser' })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.authRouter(rpcData)

      assert.equal(result.success, false)
      assert.equal(result.status, 500)
      assert.equal(result.message, 'test error')
      assert.equal(result.endpoint, 'authUser')
    })
  })

  describe('#authUser', () => {
    it('should return a JWT token if user successfully authenticates', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', {
        endpoint: 'authUser',
        login: 'test543@test.com',
        password: 'password'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const response = await uut.authUser(rpcData)
      // console.log('response: ', response)

      assert.equal(response.endpoint, 'authUser')
      assert.property(response, 'userId')
      // assert.equal(response.userType, 'user')
      assert.property(response, 'userName')
      assert.property(response, 'userEmail')
      assert.property(response, 'apiToken')
      assert.equal(response.status, 200)
      assert.equal(response.success, true)
      assert.property(response, 'message')
    })

    it('should return an error for invalid credentials', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', {
        endpoint: 'authUser',
        login: 'test543@test.com',
        password: 'badpassword'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      // Force an error.
      sandbox
        .stub(uut.userLib, 'authUser')
        .rejects(new Error('Login credential do not match'))

      const response = await uut.authUser(rpcData)
      // console.log('response: ', response)

      assert.equal(response.success, false)
      assert.equal(response.status, 422)
      assert.equal(response.message, 'Login credential do not match')
      assert.equal(response.endpoint, 'authUser')
    })

    it('should throw an error if login is not provided', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', {
        endpoint: 'authUser'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const response = await uut.authUser(rpcData)
      // console.log('response: ', response)

      assert.equal(response.success, false)
      assert.equal(response.status, 422)
      assert.equal(response.message, 'login must be specified')
      assert.equal(response.endpoint, 'authUser')
    })

    it('should throw an error if password is not provided', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', {
        endpoint: 'authUser',
        login: 'test543@test.com'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const response = await uut.authUser(rpcData)
      // console.log('response: ', response)

      assert.equal(response.success, false)
      assert.equal(response.status, 422)
      assert.equal(response.message, 'password must be specified')
      assert.equal(response.endpoint, 'authUser')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/json-rpc/a14-rate-limits.js`:

```js
/*
  Unit tests for the JSON RPC validator middleware.

  TODO: ensureTargetUserOrAdmin: it should exit quietly if user is an admin.
*/

// Public npm libraries
import sinon from 'sinon'

import { assert } from 'chai'

// Local libraries
import RateLimit from '../../../../src/controllers/json-rpc/rate-limit.js'

// Set the environment variable to signal this is a test.
process.env.TORLIST_ENV = 'test'

describe('#rate-limit', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new RateLimit()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should use the options provided', async () => {
      try {
        const options = {
          interval: { min: 10 },
          delayAfter: 1,
          timeWait: { sec: 5 },
          max: 2,
          onLimitReached: () => {
            throw new Error('custom message error')
          }
        }
        const _uut = new RateLimit(options)

        // Assert  options
        assert.equal(_uut.rateLimitOptions.interval.min, options.interval.min)
        assert.equal(_uut.rateLimitOptions.delayAfter, options.delayAfter)
        assert.equal(_uut.rateLimitOptions.timeWait.sec, options.timeWait.sec)

        const from = 'constructor test'
        const firstRequest = await _uut.limiter(from)
        assert.isTrue(firstRequest)

        const secondRequest = await _uut.limiter(from)
        assert.isTrue(secondRequest)

        await _uut.limiter(from)
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(error.message, 'custom message error')
      }
    })
  })

  describe('#onLimitReached', () => {
    it('should throw error', async () => {
      try {
        uut.onLimitReached()
        assert.fail('unexpected error')
      } catch (error) {
        assert.equal(error.status, 429)
        assert.include(
          error.message,
          'Too many requests, please try again later.'
        )
      }
    })
  })

  describe('#limiter', () => {
    it('should throw error if "from" input is not provider', async () => {
      try {
        await uut.limiter()
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(error.message, 'from must be a string')
      }
    })

    it('should throw error 429', async () => {
      try {
        const _uut = new RateLimit({ max: 1 })
        const from = 'Origin request'

        const firstRequest = await _uut.limiter(from)
        assert.isTrue(firstRequest)

        const secondRequest = await _uut.limiter(from)
        assert.isTrue(secondRequest)

        await _uut.limiter(from)
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(
          error.message,
          'Too many requests, please try again later.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/json-rpc/a12-validators.unit.js`:

```js
/*
  Unit tests for the JSON RPC validator middleware.

  TODO: ensureTargetUserOrAdmin: it should exit quietly if user is an admin.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

import sinon from 'sinon'
import { assert } from 'chai'
import { v4 as uid } from 'uuid'

// Local libraries
import Validators from '../../../../src/controllers/json-rpc/validators.js'

import adapters from '../../mocks/adapters/index.js'

// Set the environment variable to signal this is a test.
process.env.TORLIST_ENV = 'test'

describe('#validators', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Validators({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters is not passed in.', () => {
      try {
        uut = new Validators()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating JSON RPC Validators library.'
        )
      }
    })
  })

  describe('#ensureUser', () => {
    it('should return user model for valid JWT token', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getAll',
        apiToken: 'fakeJWTToken'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      // Mock external dependencies.
      sandbox.stub(uut.jwt, 'verify').returns(true)
      sandbox.stub(uut.UserModel, 'findById').resolves(true)

      const user = await uut.ensureUser(rpcData)
      // console.log('user: ', user)

      // For this test, we return a value of 'true' instead of actual user data.
      assert.equal(user, true)
    })

    it('should throw an error if JWT token is not included', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'apiToken JWT required as a parameter')
      }
    })

    it('should throw an error if JWT token can not be decoded', async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmQxYTlkNTgxNTVjMjIzNWFmMTNhMSIsImlhdCI6MTYxNzc2Mjk3M30.6JkM1v0n71Mzsd3qzClzlMKtq6HlD0umoauG23N9FFF'

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll',
          apiToken: token
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'invalid signature')
      }
    })

    it('should throw an error if the user can not be found', async () => {
      try {
        // Force 'error not found' error
        sandbox.stub(uut.UserModel, 'findById').resolves(null)
        sandbox.stub(uut.jwt, 'verify').returns(true)

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll',
          apiToken: 'fakeJWTToken'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'User not found!')
      }
    })
  })

  describe('#ensureTargetUserOrAdmin', () => {
    it('should return user model for valid JWT token', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'deleteUser',
        apiToken: 'fakeJWTToken',
        userId: 'abc123'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      // Mock external dependencies.
      sandbox.stub(uut.jwt, 'verify').returns(true)
      sandbox.stub(uut.UserModel, 'findById').resolves({ _id: 'abc123' })

      const user = await uut.ensureTargetUserOrAdmin(rpcData)
      // console.log('user: ', user)

      // Assert that the mocked data expected is returned.
      assert.equal(user._id, 'abc123')
    })

    it('should throw error if JWT token is not provided', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'apiToken JWT required as a parameter')
      }
    })

    it('should throw error if user ID is not specified', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: 'fakeJWTToken'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'userId must be specified')
      }
    })

    it('should throw error if JWT token can not be decoded', async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmU0YzkxYzdlYWNjN2Q4NWJjOGI0NCIsImlhdCI6MTYxNzg0MTI5N30.n1sas7YlqtmhBlNDBY_IXxQCrIQTiE8UITqy0PJAFFF'

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: token,
          userId: 'abc123'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'invalid signature')
      }
    })

    it('should throw an error if user can not be found', async () => {
      try {
        // Mock external dependencies.
        sandbox.stub(uut.jwt, 'verify').returns(true)
        sandbox.stub(uut.UserModel, 'findById').resolves(null)

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: 'fakeJWTToken',
          userId: 'abc123'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'User not found!')
      }
    })

    it('should throw an error if JWT is from a different user', async () => {
      try {
        // Mock external dependencies.
        sandbox.stub(uut.jwt, 'verify').returns(true)
        sandbox.stub(uut.UserModel, 'findById').resolves({ _id: 'badId' })

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: 'fakeJWTToken',
          userId: 'abc123'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'User is neither admin nor target user.')
      }
    })

    it('should return true if user is an admin', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'deleteUser',
        apiToken: 'fakeJWTToken',
        userId: 'abc123'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      // Mock external dependencies.
      sandbox.stub(uut.jwt, 'verify').returns(true)
      sandbox
        .stub(uut.UserModel, 'findById')
        .resolves({ _id: 'abc123', type: 'admin' })

      const user = await uut.ensureTargetUserOrAdmin(rpcData)
      // console.log('user: ', user)

      // Assert that the mocked data expected is returned.
      assert.equal(user, true)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/json-rpc/a10-rpc.unit.js`:

```js
/*
  Unit tests for the rpc/index.js library.
*/

// Public npm libraries
import { assert } from 'chai'

import jsonrpc from 'jsonrpc-lite'
import sinon from 'sinon'
import { v4 as uid } from 'uuid'

// Local libraries.
import JSONRPC from '../../../../src/controllers/json-rpc/index.js'

import adapters from '../../mocks/adapters/index.js'
import UseCasesMock from '../../mocks/use-cases/index.js'

// Set the environment variable to signal this is a test.
process.env.TORLIST_ENV = 'test'

describe('#JSON RPC', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const useCases = new UseCasesMock()
    uut = new JSONRPC({ adapters, useCases })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new JSONRPC()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating JSON RPC Controllers.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new JSONRPC({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating JSON RPC Controllers.'
        )
      }
    })
  })

  describe('#router', () => {
    it('should exit quietly if given a random string', async () => {
      const str = 'random string message'
      await uut.router(str)

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should exit quietly if invalid JSON RPC message received', async () => {
      const malformedRpc = '{"jsonrpc":"2.0"}'

      await uut.router(malformedRpc, 'peerA')

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should return default response if routing is not possible', async () => {
      const id = uid()
      const json = jsonrpc.request(id, 'unknownMethod', {})

      const str = JSON.stringify(json)

      const result = await uut.router(str, 'peerA')
      // console.log('result: ', result)

      const jsonObj = jsonrpc.parse(result.retStr)
      // console.log(`jsonObj: ${JSON.stringify(jsonObj, null, 2)}`)

      // Assert the expected properties exist on the returned object.
      assert.property(jsonObj, 'payload')
      assert.property(jsonObj, 'type')
      assert.property(jsonObj.payload, 'jsonrpc')
      assert.property(jsonObj.payload, 'id')
      assert.property(jsonObj.payload, 'result')
      assert.property(jsonObj.payload.result, 'reciever')
      assert.property(jsonObj.payload.result.value, 'success')
      assert.property(jsonObj.payload.result.value, 'message')

      // Assert the expected values exist.
      assert.equal(jsonObj.payload.id, id)
      assert.equal(jsonObj.payload.result.value.success, false)
      assert.equal(jsonObj.payload.result.value.status, 422)
      assert.equal(
        jsonObj.payload.result.value.message,
        'Input does not match routing rules.'
      )
    })

    it('should catch and handle errors', async () => {
      // Force an error
      sandbox.stub(uut.jsonrpc, 'parse').throws(new Error('test error'))

      const malformedRpc = '{"jsonrpc":"2.0"}'

      await uut.router(malformedRpc, 'peerA')

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should route to users handler', async () => {
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', { endpoint: 'getAll' })
      const jsonStr = JSON.stringify(userCall, null, 2)

      // Mock the users controller.
      sandbox.stub(uut.userController, 'userRouter').resolves('true')

      const result = await uut.router(jsonStr, 'peerA')
      // console.log(result)

      const obj = JSON.parse(result.retStr)
      // console.log('obj: ', obj)

      assert.equal(obj.result.value, 'true')
      assert.equal(obj.result.method, 'users')
      assert.equal(obj.id, id)
    })

    it('should route to auth handler', async () => {
      const id = uid()
      const userCall = jsonrpc.request(id, 'auth', { endpoint: 'getAll' })
      const jsonStr = JSON.stringify(userCall, null, 2)

      // Mock the controller.
      sandbox.stub(uut.authController, 'authRouter').resolves('true')

      const result = await uut.router(jsonStr, 'peerA')
      // console.log(result)

      const obj = JSON.parse(result.retStr)
      // console.log('obj: ', obj)

      assert.equal(obj.result.value, 'true')
      assert.equal(obj.result.method, 'auth')
      assert.equal(obj.id, id)
    })

    it('should route to about handler', async () => {
      const id = uid()
      const userCall = jsonrpc.request(id, 'about', { endpoint: 'getAll' })
      const jsonStr = JSON.stringify(userCall, null, 2)

      // Mock the controller.
      sandbox.stub(uut.aboutController, 'aboutRouter').resolves('true')

      // Force ipfs-coord communication.
      uut.ipfsCoord.ipfs = {
        orbitdb: {
          sendToDb: () => {}
        }
      }

      const result = await uut.router(jsonStr, 'peerA')
      // console.log(result)

      const obj = JSON.parse(result.retStr)
      // console.log('obj: ', obj)

      assert.equal(obj.result.value, 'true')
      assert.equal(obj.result.method, 'about')
      assert.equal(obj.id, id)
    })

    it('should exit quietly for duplicate RPC message', async () => {
      const id = uid()
      const json = jsonrpc.request(id, 'unknownMethod', {})

      const str = JSON.stringify(json)

      // Call router once.
      await uut.router(str, 'peerA')

      // Call the router again with the same input.
      const result = await uut.router(str, 'peerA')

      assert.equal(result, false)
    })

    it('should ignore metric queries from ipfs-coord', async () => {
      const id = uid()
      const json = jsonrpc.request(id, 'unknownMethod', {})

      const str = JSON.stringify(json)

      // Force the RPC type to be 'success', to indicate an RPC that was
      // processed internal to ipfs-coord.
      sandbox.stub(uut.jsonrpc, 'parse').returns({
        payload: {},
        type: 'success'
      })

      // Call the router again with the same input.
      const result = await uut.router(str, 'peerA')

      assert.equal(result, false)
    })

    it('should report errors when trying to send messages to peers', async () => {
      const id = uid()
      const json = jsonrpc.request(id, 'unknownMethod', {})

      const str = JSON.stringify(json)

      // Force issue with sendPrivateMessage()
      sandbox
        .stub(uut.ipfsCoord.useCases.peer, 'sendPrivateMessage')
        .rejects('test error')

      // Call the router again with the same input.
      const result = await uut.router(str, 'peerA')
      // console.log('result: ', result)

      assert.property(result, 'from')
      assert.property(result, 'retStr')
    })
  })

  describe('#_checkIfAlreadyProcessed', () => {
    it('should return false the first time an RPC command is seen', () => {
      const data = {
        payload: {
          jsonrpc: '2.0',
          id: '6c515f3c-cf8a-42ec-870e-e416edd4923f',
          method: 'unknownMethod',
          params: {}
        },
        type: 'request'
      }

      const result = uut._checkIfAlreadyProcessed(data)

      assert.equal(result, false)
    })

    it('should return true the second time an RPC command is seen', () => {
      const data = {
        payload: {
          jsonrpc: '2.0',
          id: '6c515f3c-cf8a-42ec-870e-e416edd4923f',
          method: 'unknownMethod',
          params: {}
        },
        type: 'request'
      }

      // First call.
      uut._checkIfAlreadyProcessed(data)

      // Second call.
      const result = uut._checkIfAlreadyProcessed(data)

      assert.equal(result, true)
    })

    it('should push out old data from the cache for new data', () => {
      const data = {
        payload: {
          jsonrpc: '2.0',
          id: '6c515f3c-cf8a-42ec-870e-e416edd4923f',
          method: 'unknownMethod',
          params: {}
        },
        type: 'request'
      }

      uut.MSG_CACHE_SIZE = 0

      const result = uut._checkIfAlreadyProcessed(data)

      assert.equal(result, false)
    })

    it('should return true on error', () => {
      const result = uut._checkIfAlreadyProcessed()

      assert.equal(result, true)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/json-rpc/users.json-rpc-controller.unit.js`:

```js
/*
  Unit tests for the rpc/users/index.js file.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

import sinon from 'sinon'
import { assert } from 'chai'
import { v4 as uid } from 'uuid'

// Local libraries
import UserRPC from '../../../../src/controllers/json-rpc/users/index.js'

import adapters from '../../mocks/adapters/index.js'
import UseCasesMock from '../../mocks/use-cases/index.js'

// Set the environment variable to signal this is a test.
process.env.TORLIST_ENV = 'test'

describe('#UserRPC', () => {
  let uut
  let sandbox
  let testUser

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const useCases = new UseCasesMock()

    uut = new UserRPC({ adapters, useCases })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UserRPC()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating User JSON RPC Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new UserRPC({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating User JSON RPC Controller.'
        )
      }
    })
  })

  describe('#createUser', () => {
    it('should create a new user', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'createUser',
        email: 'test973@test.com',
        name: 'test973',
        password: 'password'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.createUser(rpcData)
      // console.log('result: ', result)

      // CreateUser() specific return values.
      // assert.equal(result.userData.type, 'user')
      // assert.equal(result.userData.email, 'test973@test.com')
      // assert.equal(result.userData.name, 'test973')
      // assert.property(result.userData, '_id')
      // assert.property(result, 'token')

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'createUser')
      assert.equal(result.success, true)
      assert.equal(result.status, 200)
      assert.equal(result.message, '')

      // Save the user ID for future tests.
      testUser = result
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error
      sandbox.stub(uut.userLib, 'createUser').rejects(new Error('test error'))

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'createUser',
        email: 'test973@test.com',
        name: 'test973',
        password: 'password'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.createUser(rpcData)
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'createUser')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.equal(result.message, 'test error')
    })
  })

  describe('#userRouter', () => {
    it('should route to the createUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'createUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', { endpoint: 'createUser' })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.userRouter(rpcData)

      assert.equal(result, true)
    })

    it('should route to the getAllUsers method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAll').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getAllUsers',
        apiToken: testUser.token
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      // Force middleware to pass.
      sandbox.stub(uut.validators, 'ensureUser').resolves(true)

      const result = await uut.userRouter(rpcData)
      // console.log('result', result)
      assert.equal(result, true)
    })

    it('should route to the updateUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'updateUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'updateUser',
        apiToken: 'fakeJWTToken',
        userId: 'abc123'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      // Force middleware to pass.
      sandbox.stub(uut.validators, 'ensureTargetUserOrAdmin').resolves(true)

      const result = await uut.userRouter(rpcData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should route to the getUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getUser',
        apiToken: testUser.token
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      // Force middleware to pass.
      sandbox.stub(uut.validators, 'ensureUser').resolves(true)

      const result = await uut.userRouter(rpcData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should route to the deleteUsers method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'deleteUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'deleteUser',
        apiToken: 'fakeJWTToken',
        userId: 'abc123'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      // Force middleware to pass.
      sandbox.stub(uut.validators, 'ensureTargetUserOrAdmin').resolves(true)

      const result = await uut.userRouter(rpcData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return 500 status on routing issue', async () => {
      // Force an error
      sandbox.stub(uut, 'createUser').rejects(new Error('test error'))

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', { endpoint: 'createUser' })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.userRouter(rpcData)
      // console.log('result: ', result)

      assert.equal(result.success, false)
      assert.equal(result.status, 500)
      assert.equal(result.message, 'test error')
      assert.equal(result.endpoint, 'createUser')
    })
  })

  describe('#getAllUsers', () => {
    it('should return all users', async () => {
      const result = await uut.getAll()
      // console.log('getAll result: ', result)

      // Endpoint specific properties
      assert.property(result, 'users')

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'getAllUsers')
      assert.equal(result.success, true)
      assert.equal(result.status, 200)
      assert.equal(result.message, '')
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error
      sandbox.stub(uut.userLib, 'getAllUsers').rejects(new Error('test error'))

      const result = await uut.getAll()
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'getAllUsers')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.equal(result.message, 'test error')
    })
  })

  describe('#updateUser', () => {
    it('should update a user', async () => {
      // Get the user model for the test user.
      // const testUserModel = await UserModel.findById(
      //   testUser.userData._id,
      //   '-password'
      // )

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'updateUser',
        // userId: testUser.userData._id.toString(),
        userId: 'abc123',
        name: 'test777'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.updateUser(rpcData, {})
      // console.log('updateUser result: ', result)

      // Endpoint specific properties
      assert.property(result, 'user')
      // assert.property(result.user, 'type')
      // assert.property(result.user, '_id')
      // assert.property(result.user, 'email')
      // assert.property(result.user, 'name')

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'updateUser')
      assert.equal(result.success, true)
      assert.equal(result.status, 200)
      assert.equal(result.message, '')
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error by not specifying an user ID.
      const result = await uut.updateUser()
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'updateUser')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.include(result.message, 'Cannot read')
    })
  })

  describe('#getUser', () => {
    it('should return a specific user', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getUser',
        userId: 'abc123'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.getUser(rpcData)
      // console.log('getUser result: ', result)

      // Endpoint specific properties
      assert.property(result, 'user')
      // assert.property(result.user, 'type')
      // assert.property(result.user, '_id')
      // assert.property(result.user, 'email')
      // assert.property(result.user, 'name')

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'getUser')
      assert.equal(result.success, true)
      assert.equal(result.status, 200)
      assert.equal(result.message, '')
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error by not specifying an user ID.
      const result = await uut.getUser()
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'getUser')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.include(result.message, 'Cannot read')
    })
  })

  describe('#deleteUser', () => {
    it('should delete a user', async () => {
      // Get the user model for the test user.
      // const testUserModel = await UserModel.findById(
      //   testUser.userData._id,
      //   '-password'
      // )

      await uut.deleteUser({}, {})
      // console.log(result)

      assert.isOk('Not throwing an error is a success')
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error:
      sandbox
        .stub(uut.userLib, 'deleteUser')
        .rejects(new Error('Cannot read property'))

      const result = await uut.deleteUser()
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'deleteUser')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.include(result.message, 'Cannot read property')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/json-rpc/about.json-rpc.controller.unit.js`:

```js
/*
  Unit tests for the json-rpc/about/index.js file.
*/

// Public npm libraries
import sinon from 'sinon'

import { assert } from 'chai'

// Local libraries
import AboutRPC from '../../../../src/controllers/json-rpc/about/index.js'

describe('#AboutRPC', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new AboutRPC()
  })

  afterEach(() => sandbox.restore())

  describe('#aboutRouter', () => {
    it('should return information about the service', async () => {
      const result = await uut.aboutRouter()
      // console.log('result: ', result)

      assert.property(result, 'success')
      assert.equal(result.success, true)
      assert.property(result, 'status')
      assert.equal(result.status, 200)
      assert.property(result, 'message')
      assert.property(result, 'endpoint')
      assert.equal(result.endpoint, 'about')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/controllers/timer-controllers.unit.js`:

```js
/*
  Unit tests for the timer-controller.js Controller library
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import TimerControllers from '../../../src/controllers/timer-controllers.js'
import adapters from '../mocks/adapters/index.js'
import UseCasesMock from '../mocks/use-cases/index.js'

describe('#Timer-Controllers', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const useCases = new UseCasesMock()
    uut = new TimerControllers({ adapters, useCases })
  })

  afterEach(() => {
    sandbox.restore()

    uut.stopTimers()
  })

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new TimerControllers()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Timer Controller libraries.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new TimerControllers({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Timer Controller libraries.'
        )
      }
    })
  })

  describe('#startTimers', () => {
    it('should start the timers', () => {
      const result = uut.startTimers()

      // uut.stopTimers()

      assert.equal(result, true)
    })
  })

  describe('#gcOrders', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.gcOrders()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.order, 'removeStaleOrders').throws(new Error('test error'))
      const result = await uut.gcOrders()

      assert.equal(result, false)
    })
  })
  describe('#gcOffers', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.gcOffers()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.offer, 'removeStaleOffers').throws(new Error('test error'))
      const result = await uut.gcOffers()

      assert.equal(result, false)
    })
  })
  describe('#checkDupOffers', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.checkDupOffers()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.offer, 'removeDuplicateOffers').throws(new Error('test error'))
      const result = await uut.checkDupOffers()

      assert.equal(result, false)
    })
  })
  describe('#loadOffers', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.loadOffers()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.offer, 'loadOffers').throws(new Error('test error'))
      const result = await uut.loadOffers()

      assert.equal(result, false)
    })
  })

  describe('#cleanUsage', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.cleanUsage()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.usage, 'cleanUsage').throws(new Error('test error'))
      const result = await uut.cleanUsage()

      assert.equal(result, false)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/use-cases/offer.use-case.unit.js`:

```js
/*
  Unit tests for the Offer Use Case library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
// const testUtils = require('../../utils/test-utils')

// Unit under test (uut)
import OfferLib from '../../../src/use-cases/offer/index.js'

import OrderUseCase from '../../../src/use-cases/order.js'
import adapters from '../mocks/adapters/index.js'
import mockData from '../mocks/use-cases/offer-mock-data.js'

describe('#offer-use-case', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const order = new OrderUseCase({ adapters })
    uut = new OfferLib({ adapters, order })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new OfferLib()

        assert.fail('Unexpected code path')
        console.log(uut) // linter
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating Offer Use Cases library.'
        )
      }
    })

    it('should throw an error if order use cases are not passed in', () => {
      try {
        uut = new OfferLib({ adapters })

        assert.fail('Unexpected code path')
        console.log(uut) // linter
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Order Use Cases must be passed in when instantiating Offer Use Cases library.'
        )
      }
    })
  })

  describe('#createOffer', () => {
    it('should handle error', async () => {
      try {
        await uut.createOffer()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.include(error.message, 'Cannot read properties of undefined')
      }
    })

    it('should return false if offer already exist', async () => {
      const offerObj = mockData.offerMockData

      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').resolves({})

      const result = await uut.createOffer(offerObj)
      assert.isFalse(result)
    })

    it('should return false for invalid utxo', async () => {
      const offerObj = mockData.offerMockData

      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').throws(new Error('offer not found'))
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves(null)

      const result = await uut.createOffer(offerObj)
      assert.isFalse(result)
    })

    it('should create offer', async () => {
      const tokenDataMock = mockData.simpleNftTokenData01
      const offerObj = mockData.offerMockData

      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').throws(new Error('offer not found'))
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves({}) // Utxo Status call
        .onCall(1).resolves(tokenDataMock) // Token Data call
        .onCall(2).resolves(false) // detectNsfw  call

      const result = await uut.createOffer(offerObj)
      assert.isTrue(result)
    })
  })

  describe('#categorizeToken', () => {
    it('should categorize an NFT', async () => {
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'getTokenData').resolves(mockData.nftTokenData01)

      const offerData = mockData.nftOffer01
      const tokenData = mockData.nftTokenData01

      const result = await uut.categorizeToken(offerData, tokenData)

      assert.equal(result, 'nft')
    })

    it('should categorize a simple NFT', async () => {
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'getTokenData').resolves(mockData.simpleNftTokenData01)

      const offerData = mockData.simpleNftOffer01
      const tokenData = mockData.simpleNftTokenData01

      const result = await uut.categorizeToken(offerData, tokenData)

      assert.equal(result, 'simple-nft')
    })

    it('should categorize a fungible token', async () => {
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'getTokenData').resolves(mockData.fungibleTokenData01)

      const offerData = mockData.fungibleOffer01
      const tokenData = mockData.fungibleTokenData01

      const result = await uut.categorizeToken(offerData, tokenData)

      assert.equal(result, 'fungible')
    })

    it('should unknow type', async () => {
      try {
        // Mock dependencies
        const offerData = mockData.fungibleOffer01
        const tokenData = { genesisData: {} }

        await uut.categorizeToken(offerData, tokenData)

        assert.fail('unexpected code path')
      } catch (error) {
        assert.include(error.message, 'Unknown token type:')
      }
    })
  })

  describe('#removeDuplicateOffers', () => {
    it('should remove duplicate entries and return true', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([
        { p2wdbHash: 'a', remove: async () => { } },
        { p2wdbHash: 'a', remove: async () => { } },
        { p2wdbHash: 'b', remove: async () => { } }
      ])
      // sandbox.stub(uut.OfferModel, 'remove').resolves()

      const result = await uut.removeDuplicateOffers()
      console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return false if there are no duplicate entries', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([
        { p2wdbHash: 'a', remove: async () => { } },
        { p2wdbHash: 'b', remove: async () => { } }
      ])
      // sandbox.stub(uut.OfferModel, 'remove').resolves()

      const result = await uut.removeDuplicateOffers()
      console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should handle error', async () => {
      try {
        // Mock dependencies and force desired code path.
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))
        // sandbox.stub(uut.OfferModel, 'remove').resolves()

        await uut.removeDuplicateOffers()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'test error')
      }
    })
  })

  describe('#removeStaleOffers', () => {
    it('remove offer with wrong utxoState', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([{ remove: async () => { } }])
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves(false)

      await uut.removeStaleOffers()
    })

    it('remove offer with wrong txid', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([{ remove: async () => { } }])
      sandbox.stub(uut.retryQueue, 'addToQueue').throws(new Error('txid needs to be a proper transaction ID'))

      await uut.removeStaleOffers()
    })

    it('remove expired offer ', async () => {
      const tsMock = new Date()
      tsMock.setMonth(tsMock.getMonth() - 3)

      const timestamp = tsMock.getTime()
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([{ timestamp, remove: async () => { } }])
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves(true)

      await uut.removeStaleOffers()
    })

    it('should handle axios error ', async () => {
      const testErr = new Error()
      testErr.isAxiosError = true

      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([{ remove: async () => { } }])
      sandbox.stub(uut.retryQueue, 'addToQueue').throws(testErr)

      await uut.removeStaleOffers()
    })

    it('should handle error ', async () => {
      try {
        const testErr = new Error('unknow error')

        // Mock dependencies and force desired code path.
        sandbox.stub(uut.OfferModel, 'find').resolves([{ remove: async () => { } }])
        sandbox.stub(uut.retryQueue, 'addToQueue').throws(testErr)

        await uut.removeStaleOffers()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'unknow error')
      }
    })
  })

  describe('#findOfferByTxid', () => {
    it('should throw an error if input is not provided', async () => {
      try {
        await uut.findOfferByTxid()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'utxoTxid must be a string')
      }
    })

    it('should throw an error if offer is not found', async () => {
      try {
        // Mock dependencies and force desired code path.
        sandbox.stub(uut.OfferModel, 'findOne').resolves(null)

        await uut.findOfferByTxid('241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87')
        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'offer not found')
      }
    })

    it('should return offer', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'findOne').resolves(mockData.nftOffer01)

      const result = await uut.findOfferByTxid('241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87')
      assert.isObject(result)
    })
  })

  describe('#detectNsfw', () => {
    it('should return false for wrong cid format', async () => {
      const result = await uut.detectNsfw({ mutableData: '' })
      assert.isFalse(result)
    })

    it('should return true if nft boolean detected', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').resolves({ data: { nsfw: true } })

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isTrue(result)
    })

    it('should return true if nft string detected', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').resolves({ data: { nsfw: 'true' } })

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isTrue(result)
    })

    it('should return false if nfsw property does not exist', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').resolves({ data: {} })

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isFalse(result)
    })

    it('should return false on error', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').throws(new Error('test error'))

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isFalse(result)
    })
  })

  describe('#listOffers', () => {
    it('should handle error', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))

        await uut.listOffers()

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should list orders', async () => {
      const queryMock = {
        sort () {
          return this
        },
        skip () {
          return this
        },
        limit () { return [] }
      }
      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'find').returns(queryMock)

      const result = await uut.listOffers()
      assert.isArray(result)
    })
  })

  describe('#listNftOffers', () => {
    it('should handle error', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))

        await uut.listNftOffers()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should list orders', async () => {
      const queryMock = {
        sort () {
          return this
        },
        skip () {
          return this
        },
        limit () { return [] }
      }
      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'find').returns(queryMock)

      const result = await uut.listNftOffers(1, true)
      assert.isArray(result)
    })
  })

  describe('#listFungibleOffers', () => {
    it('should handle error', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))

        await uut.listFungibleOffers()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should list orders', async () => {
      const queryMock = {
        sort () {
          return this
        },
        skip () {
          return this
        },
        limit () { return [] }
      }

      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'find').returns(queryMock)

      const result = await uut.listFungibleOffers()
      assert.isArray(result)
    })
  })

  describe('#takeOffer', () => {
    it('should handle error if input is not provided', async () => {
      try {
        await uut.takeOffer()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'eventId must be a string')
      }
    })

    it('should handle error for wrong offer status', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'completed' })

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'offer status is not "posted", so offer is dead and can not be countered.')
      }
    })

    it('should handle error for invalid utxo', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'posted' })
        sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(false)

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'UTXO does not exist. Aborting.')
      }
    })

    it('should handle insufficient funds', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'posted' })
        sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(true)
        sandbox.stub(uut, 'ensureFunds').throws(new Error('test error'))

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should handle error if counter offer cant be calculated', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'posted' })
        sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(true)
        sandbox.stub(uut, 'ensureFunds').resolves(true)

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not calculate the amount of BCH to generate counter offer')
      }
    })

    it('should handle error if counter offer cant be calculated', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'posted' })
        sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(true)
        sandbox.stub(uut, 'ensureFunds').resolves(true)

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not calculate the amount of BCH to generate counter offer')
      }
    })

    it('should take offer', async () => {
      // Mock data
      const offerMock = Object.assign({}, mockData.offerMockData.data)
      offerMock.remove = async () => { }
      offerMock.offerStatus = 'posted'

      // Mock dependencies
      sandbox.stub(uut, 'findOfferByEvent').returns(offerMock)
      sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(true)
      sandbox.stub(uut, 'ensureFunds').resolves(true)
      sandbox.stub(uut.adapters.wallet, 'moveBch').resolves({ sats: 1 })

      await uut.takeOffer('eventId')
    })
  })

  describe('#ensureFunds', () => {
    // it('should handle insufficient funds to use p2wdb', async () => {
    //   try {
    //     // Mock dependencies
    //     sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(false)
    //
    //     await uut.ensureFunds(mockData.offerMockData.data)
    //
    //     assert.fail('Unexpected code path')
    //   } catch (err) {
    //     assert.include(err.message, 'App wallet does not have funds for writing to the P2WDB')
    //   }
    // })

    it('should throw error if sats needed could no be able to calculated', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(true)

        // Mock Input
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.rateInBaseUnit = null

        await uut.ensureFunds(mock)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not calculate sats needed!')
      }
    })

    it('should throw error if app wallet does not have enough bch', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(true)
        sandbox.stub(uut.adapters.wallet.bchWallet, 'getBalance').resolves(0)

        await uut.ensureFunds(mockData.offerMockData.data)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'App wallet does not control enough BCH to purchase the tokens.')
      }
    })

    it('should handle BUY offer', async () => {
      try {
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.buyOrSell = 'buy'

        await uut.ensureFunds(mock)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Buy offers are not supported yet.')
      }
    })

    it('should return true', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(true)
      sandbox.stub(uut.adapters.wallet.bchWallet, 'getBalance').resolves(10 * 10 ** 6)

      const result = await uut.ensureFunds(mockData.offerMockData.data)
      assert.isTrue(result)
    })
  })

  describe('#findOrderByEvent', () => {
    it('should throw an error if hash is not provided', async () => {
      try {
        await uut.findOfferByEvent()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'nostrEventId must be a string')
      }
    })

    it('should throw an error if order is not found!', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'findOne').resolves(null)

        await uut.findOfferByEvent('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'offer not found')
      }
    })

    it('should return offer by eventId', async () => {
      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'findOne').resolves({ toObject: () => { return { hash: 'hash' } } })

      const result = await uut.findOfferByEvent('eventId')
      assert.isObject(result)
    })
  })

  describe('#flagOffer', () => {
    it('should throw an error if input is not provided', async () => {
      try {
        await uut.flagOffer()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, '"data" property is required')
      }
    })

    it('should throw an error if offer is not found!', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').resolves(null)

        const input = {
          data:
          {
            nostrEventId: 'eventId'
          }
        }
        await uut.flagOffer(input)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'not found in the database')
      }
    })

    it('should flag offer', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'findOfferByEvent').resolves({ flags: ['a', 'b', 'c'], save: () => { } })

      const input = {
        data:
        {
          nostrEventId: 'eventId'
        }
      }
      const result = await uut.flagOffer(input)
      assert.isTrue(result)
    })
  })

  describe('#loadOffers', () => {
    it('should handle nostr error', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.adapters.nostr, 'read').throws(new Error('test error'))

        await uut.loadOffers()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should skip internal function errors ', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.nostr, 'read').resolves([mockData.offerMockData])

      await uut.loadOffers()
    })

    it('should review and load offers', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.nostr, 'read').resolves([JSON.stringify(mockData.offerMockData)])

      await uut.loadOffers()
    })
  })

  describe('#acceptCounterOffer', () => {
    it('should return if order is not found!', async () => {
      // Mock dependencies
      sandbox.stub(uut.orderUseCase, 'findOrderByEvent').throws(new Error('test error'))

      const result = await uut.acceptCounterOffer({ data: { /** .... */ } })
      assert.equal(result, 'N/A')
    })

    it('should handle error if counter offer cant be calculated', async () => {
      try {
        // Mock Data
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.rateInBaseUnit = null

        // Mock dependencies
        sandbox.stub(uut.orderUseCase, 'findOrderByEvent').resolves(mock)
        sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)

        const result = await uut.acceptCounterOffer({ data: { /** .... */ } })
        console.log('result: ', result)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not calculate the amount of BCH offered in the Counter Offer')
      }
    })

    it('should handle error for wrong transaction output', async () => {
      try {
        // Mock Data
        const mock = Object.assign({}, mockData.offerMockData.data)

        // Mock dependencies
        sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
        sandbox.stub(uut.orderUseCase, 'findOrderByEvent').resolves(mockData.offerMockData.data)
        sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').returns(0)
        sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMock)

        await uut.acceptCounterOffer({ data: mock })
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'The Counter Offer has an output of ')
        assert.include(err.message, 'which does not match the required')
      }
    })

    it('should handle error for wrong transaction output address', async () => {
      try {
        // Mock data
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.makerAddr = 'bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7477' // Unknow Adress
        mock.rateInBaseUnit = 0
        mock.numTokens = 0

        // Mock dependencies
        sandbox.stub(uut.orderUseCase, 'findOrderByEvent').resolves(mock)
        sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
        sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').returns(0)

        sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMock)

        await uut.acceptCounterOffer({ data: { /** .... */ } })
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'The Counter Offer has an output address of')
        assert.include(err.message, 'which does not match the Maker address')
      }
    })

    it('should return tx id', async () => {
      // Mock data
      const mock = Object.assign({}, mockData.offerMockData.data)
      mock.makerAddr = mockData.deserealizeTxMock.vout[2].scriptPubKey.addresses[0] // Maker Address
      mock.rateInBaseUnit = 0
      mock.numTokens = 0

      // Mock dependencies
      sandbox.stub(uut.orderUseCase, 'findOrderByEvent').resolves(mock)
      sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').returns(0)
      sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMock)

      //
      const result = await uut.acceptCounterOffer({ data: { /** .... */ } })
      assert.isString(result)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/use-cases/users.use-case.unit.js`:

```js
/*
  Unit tests for the src/lib/users.js business logic library.

  TODO: verify that an admin can change the type of a user
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Unit under test (uut)
import UserLib from '../../../src/use-cases/user.js'

// Local support libraries
import adapters from '../mocks/adapters/index.js'

describe('#users-use-case', () => {
  let uut
  let sandbox
  let testUser = {}

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new UserLib({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UserLib()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating User Use Cases library.'
        )
      }
    })
  })

  describe('#createUser', () => {
    it('should throw an error if no input is given', async () => {
      try {
        await uut.createUser()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        // assert.equal(err.status, 422)
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw an error if email is not provided', async () => {
      try {
        await uut.createUser({})

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw an error if password is not provided', async () => {
      try {
        const usrObj = {
          email: 'test@test.com'
        }

        await uut.createUser(usrObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'password' must be a string!")
      }
    })

    it('should throw an error if name is not provided', async () => {
      try {
        const usrObj = {
          email: 'test@test.com',
          password: 'password'
        }

        await uut.createUser(usrObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'name' must be a string!")
      }
    })

    it('should catch and throw DB errors', async () => {
      try {
        // Force an error with the database.
        sandbox.stub(uut, 'UserModel').throws(new Error('test error'))

        const usrObj = {
          email: 'test@test.com',
          password: 'password',
          name: 'test'
        }

        await uut.createUser(usrObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should handle wallet errors', async () => {
      try {
        // Force an error with the database.
        class MockErrorBchWallet {
          constructor () {
            this.walletInfoPromise = Promise.reject(new Error('test error'))
          }
        }
        uut.BchWallet = MockErrorBchWallet

        const usrObj = {
          email: 'test@test.com',
          password: 'password',
          name: 'test'
        }

        await uut.createUser(usrObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should create a new user in the DB', async () => {
      // Note: The user created in this test is used by the getUser, update,
      // and delete tests.

      const usrObj = {
        email: 'test01@test.com',
        password: 'test',
        name: 'test01'
      }

      const { userData, token } = await uut.createUser(usrObj)
      testUser = userData

      // Commented out because there is some sophisticated mocking required that
      // I didn't have time to figure out. -CT 6/11/21
      // Assert that the user model has the expected properties with expected values.
      // assert.property(userData, 'type')
      // assert.equal(userData.type, 'user')
      // assert.property(userData, '_id')
      // assert.property(userData, 'email')
      // assert.property(userData, 'name')

      // Assert that the JWT token was generated for this user.
      assert.isString(token)
      assert.include(token, '123')
    })
  })

  describe('#getAllUsers', () => {
    it('should return all users from the database', async () => {
      await uut.getAllUsers()
      // console.log(`users: ${JSON.stringify(users, null, 2)}`)

    // assert.isArray(users)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error.
        sandbox.stub(uut.UserModel, 'find').rejects(new Error('test error'))

        await uut.getAllUsers()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getUser', () => {
    it('should throw 422 if no id given.', async () => {
      try {
        await uut.getUser()

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Unprocessable Entity')
      }
    })

    it('should throw 422 for malformed id', async () => {
      try {
        // Force an error.
        sandbox
          .stub(uut.UserModel, 'findById')
          .rejects(new Error('Unprocessable Entity'))

        const params = { id: 1 }
        await uut.getUser(params)

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Unprocessable Entity')
      }
    })

    it('should throw 404 if user is not found', async () => {
      try {
        const params = { id: '5fa4bd7ee1828f5f4d3ed004' }
        await uut.getUser(params)

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 404)
        assert.include(err.message, 'User not found')
      }
    })

    it('should return the user model', async () => {
      sandbox.stub(uut.UserModel, 'findById').resolves({ _id: 'abc123' })

      const params = { id: testUser._id }
      const result = await uut.getUser(params)
      // console.log('result: ', result)

      // Replace the JSON model with an actual Mongoos model. Used by later
      // test cases.
      testUser = result

      // Assert that the expected properties for the user model exist.
      // assert.property(result, 'type')
      assert.property(result, '_id')
    // assert.property(result, 'email')
    // assert.property(result, 'name')
    })
  })

  describe('#updateUser', () => {
    it('should throw an error if no input is given', async () => {
      try {
        await uut.updateUser()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should throw an error if email is not a string', async () => {
      try {
        await uut.updateUser(testUser, {
          email: 1234
        })

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw an error if name is not a string', async () => {
      try {
        const newData = {
          name: 1234
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'name' must be a string!")
      }
    })

    it('should throw an error if non-string password given', async () => {
      try {
        const newData = {
          email: 'test@test.com',
          name: 'test',
          password: 1234
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'password' must be a string!")
      }
    })

    it('should throw an error for malformed type given', async () => {
      try {
        const newData = {
          email: 'test@test.com',
          password: 'password',
          name: 'test',
          type: 1234
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'type' must be a string!")
      }
    })

    it('should throw an error if normal user tries to change themselves into an admin', async () => {
      try {
        const newData = {
          email: 'test@test.com',
          password: 'password',
          name: 'test',
          type: 'admin'
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'type' can only be changed by Admin user"
        )
      }
    })
    it('should throw an error if mnemonic is provided', async () => {
      try {
        const newData = {
          email: 'test@test.com',
          password: 'password',
          name: 'test',
          mnemonic: 'test'
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'mnemonic' cannot be updated!"
        )
      }
    })

    it('should update the user model', async () => {
      const newData = {
        email: 'test@test.com',
        password: 'password',
        name: 'testy tester'
      }
      testUser.save = async () => {}

      const result = await uut.updateUser(testUser, newData)

      // Assert that expected properties and values exist.
      assert.property(result, '_id')
      assert.property(result, 'email')
      assert.equal(result.email, 'test@test.com')
      assert.property(result, 'name')
      assert.equal(result.name, 'testy tester')
    })

  // TODO: verify that an admin can change the type of a user
  })

  describe('#authUser', () => {
    it('should return a user db model after successful authentication', async () => {
      // sandbox.stub(uut.UserModel, 'findOne').resolves(true)

      await uut.authUser('test@test.com', 'password')
      // console.log('user: ', user)

    // assert.property(user, '_id')
    // assert.property(user, 'email')
    // assert.property(user, 'name')
    })

    it('should throw an error if no user matches the login', async () => {
      try {
        sandbox.stub(uut.UserModel, 'findOne').resolves(false)

        await uut.authUser('noone@nowhere.com', 'password')
        // console.log('user: ', user)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'User not found')
      }
    })

    it('should throw an error if password does not match', async () => {
      try {
        // Force authentication to fial.
        adapters.localdb.validatePassword = () => {
          return false
        }

        await uut.authUser('test@test.com', 'badpassword')
        // console.log('user: ', user)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Login credential do not match')
      }
    })
  })

  describe('#deleteUser', () => {
    it('should throw error if no user provided', async () => {
      try {
        await uut.deleteUser()

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should delete the user from the database', async () => {
      testUser = new adapters.localdb.Users()

      await uut.deleteUser(testUser)

      assert.isOk('Not throwing an error is a pass!')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/use-cases/order.use-case.unit.js`:

```js
/*
  Unit tests for the Order Use Case library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Unit under test (uut)
import OrderLib from '../../../src/use-cases/order.js'

// Local support libraries
import adapters from '../mocks/adapters/index.js'

describe('#order-use-case', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new OrderLib({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new OrderLib()

        assert.fail('Unexpected code path')
        console.log(uut) // linter
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating Order Use Cases library.'
        )
      }
    })
  })

  describe('#ensureFunds', () => {
    it('should return true if wallet has enough funds for a sell order', async () => {
      const orderEntity = {
        lokadId: 'SWP',
        messageType: 1,
        messageClass: 1,
        tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
        buyOrSell: 'sell',
        rateInSats: 1000,
        minSatsToExchange: 0,
        numTokens: 1
      }

      const result = await uut.ensureFunds(orderEntity)

      assert.equal(result, true)
    })
    it('should handle insufficient funds', async () => {
      try {
        sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(false)
        const orderEntity = {
          lokadId: 'SWP',
          messageType: 1,
          messageClass: 1,
          tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
          buyOrSell: 'sell',
          rateInSats: 1000,
          minSatsToExchange: 0,
          numTokens: 1
        }

        await uut.ensureFunds(orderEntity)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'App wallet does not have funds for writing to the P2WDB')
      }
    })

    it('should handle insufficient tokens to satisfy the order', async () => {
      try {
        const orderEntity = {
          lokadId: 'SWP',
          messageType: 1,
          messageClass: 1,
          tokenId: '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
          buyOrSell: 'sell',
          rateInSats: 1000,
          minSatsToExchange: 0,
          numTokens: 1000
        }

        await uut.ensureFunds(orderEntity)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'App wallet does not have enough tokens to satisfy the SELL order.')
      }
    })

    it('should handle BUY order', async () => {
      try {
        const orderEntity = {
          lokadId: 'SWP',
          messageType: 1,
          messageClass: 1,
          tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
          buyOrSell: 'buy',
          rateInSats: 1000,
          minSatsToExchange: 0,
          numTokens: 1
        }

        await uut.ensureFunds(orderEntity)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Buy orders are not supported yet')
      }
    })
  })

  // describe('#moveTokens', () => {
  //   it('should move tokens to the holding address', async () => {
  //     // Mock dependencies
  //     // sandbox
  //     //   .stub(uut.adapters.wallet.bchWallet, 'sendTokens')
  //     //   .resolves('fakeTxid')
  //
  //     const orderEntity = {
  //       lokadId: 'SWP',
  //       messageType: 1,
  //       messageClass: 1,
  //       tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
  //       buyOrSell: 'sell',
  //       rateInBaseUnit: 1000,
  //       minUnitsToExchange: 0,
  //       numTokens: 1
  //     }
  //
  //     const result = await uut.moveTokens(orderEntity)
  //     // console.log('result: ', result)
  //
  //     assert.property(result, 'txid')
  //     assert.property(result, 'vout')
  //
  //     assert.equal(result.txid, 'fakeTxid')
  //     assert.equal(result.vout, 1)
  //   })
  // })

  describe('#createOrder', () => {
    it('should create an order and return the hash', async () => {
      const entryObj = {
        lokadId: 'SWP',
        messageType: 1,
        messageClass: 1,
        tokenId: 'token-id',
        buyOrSell: 'sell',
        rateInBaseUnit: 1000,
        minUnitsToExchange: 1250,
        numTokens: 1,
        ticker: 'TEST'
      }

      // Mock dependencies and force expected code path
      sandbox.stub(uut.orderEntity, 'inputValidate').returns(entryObj)
      sandbox.stub(uut, 'ensureFunds').resolves()
      sandbox.stub(uut.UserModel, 'findById').resolves({ mnemonic: 'testMnemonic' })
      sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.Util, 'sleep').resolves()
      sandbox.stub(uut.adapters.wallet, 'moveTokensFromCustomWallet').resolves({ txid: 'fakeTxid', vout: 0, hdIndex: 1 })
      sandbox.stub(uut.adapters.wallet.bchWallet, 'initialize').resolves()
      sandbox.stub(uut.adapters.nostr, 'post').resolves('fakeEvenetId')

      const result = await uut.createOrder(entryObj)
      console.log('result: ', result)

      assert.property(result, 'eventId')
      assert.property(result, 'noteId')
    })
    it('should create an order with consumer-api', async () => {
      uut.config.useFullStackCash = false
      const entryObj = {
        lokadId: 'SWP',
        messageType: 1,
        messageClass: 1,
        tokenId: 'token-id',
        buyOrSell: 'sell',
        rateInBaseUnit: 1000,
        minUnitsToExchange: 1250,
        numTokens: 1,
        ticker: 'TEST'
      }

      // Mock dependencies and force expected code path
      sandbox.stub(uut.orderEntity, 'inputValidate').returns(entryObj)
      sandbox.stub(uut, 'ensureFunds').resolves()
      sandbox.stub(uut.UserModel, 'findById').resolves({ mnemonic: 'testMnemonic' })
      sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.Util, 'sleep').resolves()
      sandbox.stub(uut.adapters.wallet, 'moveTokensFromCustomWallet').resolves({ txid: 'fakeTxid', vout: 0, hdIndex: 1 })
      sandbox.stub(uut.adapters.wallet.bchWallet, 'initialize').resolves()
      sandbox.stub(uut.adapters.nostr, 'post').resolves('fakeEvenetId')

      const result = await uut.createOrder(entryObj)
      console.log('result: ', result)

      assert.property(result, 'eventId')
      assert.property(result, 'noteId')
    })
    it('should throw error if user is not found', async () => {
      try {
        const entryObj = {
          lokadId: 'SWP',
          messageType: 1,
          messageClass: 1,
          tokenId: 'token-id',
          buyOrSell: 'sell',
          rateInBaseUnit: 1000,
          minUnitsToExchange: 1250,
          numTokens: 1,
          ticker: 'TEST'
        }
        await uut.createOrder(entryObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'user not found')
      }
    })

    it('should catch and throw an error', async () => {
      try {
        await uut.createOrder({ a: 'b' })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'entry does not contain required properties')
      }
    })

    it('should exit quietly if the entry is empty', async () => {
      const result = await uut.createOrder()

      assert.equal(result, false)
    })
  })

  describe('#findOrderByEvent', () => {
    it('should throw an error if hash is not provided', async () => {
      try {
        await uut.findOrderByEvent()
      } catch (err) {
        assert.include(err.message, 'nostrEventId must be a string')
      }
    })
    it('should throw an error if order is not found!', async () => {
      try {
        sandbox.stub(uut.OrderModel, 'findOne').resolves(null)
        await uut.findOrderByEvent('hash')
      } catch (err) {
        assert.include(err.message, 'order not found')
      }
    })
    it('should return order by hash', async () => {
      sandbox.stub(uut.OrderModel, 'findOne').resolves({ toObject: () => { return { hash: 'hash' } } })
      const result = await uut.findOrderByEvent('hash')
      assert.isObject(result)
    })
  })

  describe('#removeStaleOrders', () => {
    it('should remove stale orders', async () => {
      const spy = sinon.spy() // Spy the function

      // Create 2 orders mock .
      const ordersMock = new Array(2)
      ordersMock.fill({ remove: () => { spy.call() } })

      sandbox.stub(uut.OrderModel, 'find').resolves(ordersMock)
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves(false)

      await uut.removeStaleOrders()

      assert.equal(spy.callCount, 2, 'Expected to be called twice.')
    })
    it('should handle wrong txid', async () => {
      const spy = sinon.spy() // Spy the function

      // Create 2 orders mock .
      const ordersMock = new Array(2)
      ordersMock.fill({ remove: () => { spy.call() } })

      sandbox.stub(uut.OrderModel, 'find').resolves(ordersMock)
      sandbox.stub(uut.retryQueue, 'addToQueue').throws(new Error('txid needs to be a proper transaction ID'))

      await uut.removeStaleOrders()

      assert.equal(spy.callCount, 2, 'Expected to be called twice.')
    })
    it('should skip order on axios error', async () => {
      const spy = sinon.spy() // Spy the function

      // Create 2 orders mock .
      const ordersMock = new Array(2)
      ordersMock.fill({ remove: () => { spy.call() } })

      const axiosError = new Error()
      axiosError.isAxiosError = true

      sandbox.stub(uut.OrderModel, 'find').resolves(ordersMock)
      sandbox.stub(uut.retryQueue, 'addToQueue').throws(axiosError)

      await uut.removeStaleOrders()

      assert.equal(spy.callCount, 0, 'Expected to no be called.')
    })
    it('should handle unknow error', async () => {
      try {
        // Create 2 orders mock .
        const ordersMock = new Array(2)
        ordersMock.fill({ remove: () => { } })

        sandbox.stub(uut.OrderModel, 'find').resolves(ordersMock)
        sandbox.stub(uut.retryQueue, 'addToQueue').throws(new Error('test error'))

        await uut.removeStaleOrders()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.include(error.message, 'test error')
      }
    })
  })

  describe('#listOrders', () => {
    it('should handle error', async () => {
      try {
        sandbox.stub(uut.OrderModel, 'find').throws(new Error('test error'))
        await uut.listOrders()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should list orders', async () => {
      const queryMock = {
        sort () {
          return this
        },
        skip () {
          return this
        },
        limit () { return [] }
      }

      sandbox.stub(uut.OrderModel, 'find').returns(queryMock)
      const result = await uut.listOrders()
      assert.isArray(result)
    })
  })

  describe('#deleteOrder', () => {
    it('should handle error', async () => {
      try {
        sandbox.stub(uut, 'findOrderByEvent').throws(new Error('test error'))
        await uut.deleteOrder()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should delete orders', async () => {
      sandbox.stub(uut, 'findOrderByEvent').resolves([])
      sandbox.stub(uut.adapters.wallet, 'reclaimTokens').resolves('txid')
      const result = await uut.deleteOrder()
      assert.isString(result)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/use-cases/usage.use-case.unit.js`:

```js
/*
  Unit tests for the use-cases/usage-use-cases.js business logic library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../mocks/adapters/index.js'

// Mock
import { context as mockContext } from '../mocks/ctx-mock.js'

// Unit under test (uut)
import { UsageUseCases, restCalls, usageMiddleware } from '../../../src/use-cases/usage-use-cases.js'

describe('#usage-use-case', () => {
  let uut
  let sandbox
  let ctx

  before(async () => {

  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    uut = new UsageUseCases({ adapters })

    // Set as empty array
    restCalls.splice(0, restCalls.length)

    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UsageUseCases()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating Usage Use Cases library.'
        )
      }
    })
  })

  describe('#cleanUsage', () => {
    it('should delete older data than 24 hours', () => {
      const now = new Date() // Mock date

      // set older mock data
      restCalls.push({
        timestamp: now.getTime() - (60000 * 60 * 48), // 48 hours ago
        ip: '127.0.0.1'
      })

      // Set recently mock data
      restCalls.push({
        timestamp: now.getTime(),
        ip: 'localhost'
      })

      const result = uut.cleanUsage()

      assert.isArray(result)
      assert.equal(result.length, 1)
      assert.equal(result[0].ip, 'localhost')
    })

    it('should handle error', () => {
      try {
        // Force an error
        sandbox.stub(restCalls, 'filter').throws(new Error('uut error'))

        uut.cleanUsage()

        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'uut error')
      }
    })
  })

  describe('#getRestSummary', () => {
    it('should get the number of rest calls', () => {
      // Set mock data
      restCalls.push({
        ip: 'localhost'
      })

      const result = uut.getRestSummary()

      assert.isNumber(result)
      assert.equal(result, 1)
    })

    it('should handle error', () => {
      try {
        // Force an error
        sandbox.stub(console, 'log').throws(new Error('uut error'))

        uut.getRestSummary()

        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'uut error')
      }
    })
  })

  describe('#getTopIps', () => {
    it('should get top IPs', () => {
      // Set mock data
      restCalls.push({
        ip: 'localhost'
      })

      // Set mock data
      restCalls.push({
        ip: 'localhost'
      })

      const result = uut.getTopIps()

      assert.isArray(result)

      assert.property(result[0], 'ip')
      assert.property(result[0], 'cnt')

      assert.equal(result[0].ip, 'localhost')
      assert.equal(result[0].cnt, '2')
    })

    it('should return a maximum of 20 values', () => {
      //  Fill Array with 21 values
      for (let i = 0; i < 21; i++) {
        restCalls.push({
          ip: `localhost-${i}`
        })
      }

      const result = uut.getTopIps()

      assert.isArray(result)

      assert.property(result[0], 'ip')
      assert.property(result[0], 'cnt')

      assert.equal(result.length, 20)
    })

    it('should handle error', () => {
      try {
        // Set mock data
        restCalls.push(null)

        uut.getTopIps()

        assert.fail('Unexpected code path')
      } catch (error) {
        assert.include(error.message, 'Cannot read properties')
      }
    })
  })

  describe('#getTopEndpoints', () => {
    it('should get top Endpoints', () => {
      // Set mock data
      restCalls.push({
        ip: 'localhost',
        url: '/api/v1/users',
        method: 'GET'
      })

      // Set mock data
      restCalls.push({
        ip: 'localhost',
        url: '/api/v1/users',
        method: 'GET'
      })

      const result = uut.getTopEndpoints()

      assert.isArray(result)

      assert.property(result[0], 'endpoint')
      assert.property(result[0], 'cnt')

      assert.equal(result[0].endpoint, 'GET /api/v1/users')
      assert.equal(result[0].cnt, '2')
    })

    it('should return a maximum of 20 values', () => {
      //  Fill Array with 21 values
      for (let i = 0; i < 21; i++) {
        restCalls.push({
          ip: 'localhost',
          url: `/api/v1/users-${i}`,
          method: 'GET'
        })
      }

      const result = uut.getTopEndpoints()

      assert.isArray(result)

      assert.property(result[0], 'endpoint')
      assert.property(result[0], 'cnt')

      assert.equal(result.length, 20)
    })

    it('should handle error', () => {
      try {
        // Set mock data
        restCalls.push(null)

        uut.getTopEndpoints()

        assert.fail('Unexpected code path')
      } catch (error) {
        assert.include(error.message, 'Cannot read properties')
      }
    })
  })

  describe('#usageMiddleware', () => {
    it('should update restCalls state', async () => {
      // Spy on next
      const next = sinon.spy(() => { })

      await usageMiddleware()(ctx, next)

      assert.equal(restCalls.length, 1)
      assert.isTrue(next.called)
    })

    it('should handle error', async () => {
      try {
        const next = () => { throw new Error('uut error') }

        await usageMiddleware()(ctx, next)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'uut error')
        assert.equal(ctx.status, 500)
        assert.equal(restCalls.length, 0)
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/use-cases/entry.use-case.unit.js`:

```js
// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import adapters from '../mocks/adapters/index.js'

// Unit under test (uut)
import EntryLib from '../../../src/use-cases/entry.js'

describe('#entry-use-case', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new EntryLib({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new EntryLib()

        assert.fail('Unexpected code path')
        console.log(uut)
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating User Use Cases library.'
        )
      }
    })
  })

  // describe('#createEntry', () => {
  //   it('should throw an error if entry is not provided', async () => {
  //     try {
  //       await uut.createEntry({})
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'entry' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if description is not provided', async () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry'
  //       }
  //       await uut.createEntry(inputData)
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'description' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if slpAddress is not provided', async () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test'
  //       }
  //       await uut.createEntry(inputData)
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'slpAddress' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if signature is not provided', async () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg'
  //       }
  //       await uut.createEntry(inputData)
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'signature' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if category is not provided', async () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature:
  //           'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw='
  //       }
  //       await uut.createEntry(inputData)
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'category' must be a string!")
  //     }
  //   })
  //
  //   it('should catch and throw DB errors', async () => {
  //     try {
  //       // Force an error with the database.
  //       sandbox.stub(uut, 'EntryModel').throws(new Error('test error'))
  //
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature:
  //           'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //         category: 'test'
  //       }
  //
  //       await uut.createEntry(inputData)
  //
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, 'test error')
  //     }
  //   })
  //
  //   it('should throw error if signature is invalid', async () => {
  //     try {
  //       // Mocking bchjs functions
  //       sandbox.stub(uut.bch, '_verifySignature').callsFake(() => {
  //         return false
  //       })
  //
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature:
  //           'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //         category: 'test'
  //       }
  //
  //       await uut.createEntry(inputData)
  //
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, 'Invalid signature')
  //     }
  //   })
  //   it('should throw error for insufficient psf balance', async () => {
  //     try {
  //       // Mocking bchjs functions
  //       sandbox.stub(uut.bch, 'getPSFTokenBalance').resolves(0)
  //
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature:
  //           'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //         category: 'test'
  //       }
  //
  //       await uut.createEntry(inputData)
  //
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, 'Insufficient psf balance')
  //     }
  //   })
  //
  //   it('should create a new entry in the DB', async () => {
  //     // Mocking bchjs functions
  //     // sandbox.stub(uut.bchjs, '_verifySignature').resolves(true)
  //     // sandbox.stub(uut.bchjs, 'getPSFTokenBalance').resolves(100)
  //     // sandbox.stub(uut.bchjs, 'getMerit').resolves(100)
  //
  //     const inputData = {
  //       entry: 'entry',
  //       description: 'test',
  //       slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //       signature:
  //         'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //       category: 'test'
  //     }
  //
  //     const result = await uut.createEntry(inputData)
  //
  //     assert.property(result, 'entry')
  //     assert.isString(result.entry)
  //
  //     assert.property(result, 'slpAddress')
  //     assert.isString(result.slpAddress)
  //
  //     assert.property(result, 'description')
  //     assert.isString(result.description)
  //
  //     assert.property(result, 'signature')
  //     assert.isString(result.signature)
  //
  //     assert.property(result, 'category')
  //     assert.isString(result.category)
  //
  //     assert.property(result, 'balance')
  //     assert.isNumber(result.balance)
  //
  //     assert.property(result, 'merit')
  //     assert.isNumber(result.merit)
  //   })
  // })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/use-cases/index.use-case.unit.js`:

```js
/*
  Unit tests for the index.js file that aggregates all use-cases.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import adapters from '../mocks/adapters/index.js'

// Unit under test (uut)
import UseCases from '../../../src/use-cases/index.js'

describe('#use-cases', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new UseCases({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UseCases()

        assert.fail('Unexpected code path')

        // This is here to prevent the linter from complaining.
        assert.isOk(uut)
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating Use Cases library.'
        )
      }
    })
  })

  describe('#start', () => {
    it('should initialize async use cases', async () => {
      const result = await uut.start()

      assert.equal(result, true)
    })

    // it('should catch and throw errors', async () => {
    //   // Force an error
    //   sandbox.stub()
    // })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/entities/order.entity.unit.js`:

```js
/*
  Unit tests for the User entity library.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import Order from '../../../src/entities/order.js'

let sandbox
let uut

describe('#Order-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new Order()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#inputValidate', () => {
    it('should throw an error if data is not provided', () => {
      try {
        uut.inputValidate()
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })

    it('should throw an error if messageType is not included', () => {
      try {
        const data = {}
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'messageType' must be an integer number"
        )
      }
    })

    it('should throw an error if messageClass is not included', () => {
      try {
        const data = { messageType: 1 }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'messageClass' must be an integer number"
        )
      }
    })

    it('should throw an error if tokenId is not included', () => {
      try {
        const data = { messageType: 1, messageClass: 1 }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'tokenId' must be a string.")
      }
    })

    it('should throw an error if buyOrSell is not included', () => {
      try {
        const data = { messageType: 1, messageClass: 1, tokenId: 'fakeId' }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'buyOrSell' must be a string.")
      }
    })

    it('should throw an error if rateInBaseUnit is not included', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy'
        }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'rateInBaseUnit' must be an integer number."
        )
      }
    })

    it('should throw an error if minUnitsToExchange is not included', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInBaseUnit: 1000
        }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'minUnitsToExchange' must be an integer number."
        )
      }
    })

    it('should throw an error if numTokens is not included', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInBaseUnit: 1000,
          minUnitsToExchange: 350
        }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'numTokens' must be a number.")
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/entities/entry.entity.unit.js`:

```js
/*
  Unit tests for the User entity library.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import Entry from '../../../src/entities/entry.js'

let sandbox
let uut

describe('#User-Entity', () => {
  before(async () => { })

  beforeEach(() => {
    uut = new Entry()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if entry is not provided', () => {
      try {
        uut.validate()
      } catch (err) {
        assert.include(err.message, "Property 'entry' must be a string!")
      }
    })

    it('should throw an error if description is not provided', () => {
      try {
        const inputData = {
          entry: 'entry'
        }
        uut.validate(inputData)
      } catch (err) {
        assert.include(err.message, "Property 'description' must be a string!")
      }
    })

    it('should throw an error if slpAddress is not provided', () => {
      try {
        const inputData = {
          entry: 'entry',
          description: 'test'
        }
        uut.validate(inputData)
      } catch (err) {
        assert.include(err.message, "Property 'slpAddress' must be a string!")
      }
    })

    it('should throw an error if signature is not provided', () => {
      try {
        const inputData = {
          entry: 'entry',
          description: 'test',
          slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg'
        }
        uut.validate(inputData)
      } catch (err) {
        assert.include(err.message, "Property 'signature' must be a string!")
      }
    })
    it('should throw an error if category is not provided', () => {
      try {
        const inputData = {
          entry: 'entry',
          description: 'test',
          slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
          signature: 'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw='
        }
        uut.validate(inputData)
      } catch (err) {
        assert.include(err.message, "Property 'category' must be a string!")
      }
    })

    it('should return a Entry object', () => {
      const inputData = {
        entry: 'entry',
        description: 'test',
        slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
        signature: 'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
        category: 'test'
      }

      const entry = uut.validate(inputData)
      // console.log('entry: ', entry)

      assert.property(entry, 'entry')
      assert.equal(entry.entry, inputData.entry)

      assert.property(entry, 'description')
      assert.equal(entry.description, inputData.description)

      assert.property(entry, 'slpAddress')
      assert.equal(entry.slpAddress, inputData.slpAddress)

      assert.property(entry, 'signature')
      assert.equal(entry.signature, inputData.signature)

      assert.property(entry, 'slpAddress')
      assert.equal(entry.category, inputData.category)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/entities/user.entity.unit.js`:

```js
/*
  Unit tests for the User entity library.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import User from '../../../src/entities/user.js'

let sandbox
let uut

describe('#User-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new User()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if email is not provided', () => {
      try {
        uut.validate()
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw an error if password is not provided', () => {
      try {
        uut.validate({ email: 'test@test.com' })
      } catch (err) {
        assert.include(err.message, "Property 'password' must be a string!")
      }
    })

    it('should throw an error if name is not provided', () => {
      try {
        uut.validate({ email: 'test@test.com', password: 'test' })
      } catch (err) {
        assert.include(err.message, "Property 'name' must be a string!")
      }
    })

    it('should return a User object', () => {
      const inputData = {
        email: 'test@test.com',
        password: 'test',
        name: 'test'
      }

      const entry = uut.validate(inputData)
      // console.log('entry: ', entry)

      assert.property(entry, 'email')
      assert.equal(entry.email, inputData.email)

      assert.property(entry, 'password')
      assert.equal(entry.password, inputData.password)

      assert.property(entry, 'name')
      assert.equal(entry.name, inputData.name)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/entities/offer.entity.unit.js`:

```js
/*
  Unit tests for the Offer entity library.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import Offer from '../../../src/entities/offer.js'

let sandbox
let uut

describe('#Offer-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new Offer()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if data is not provided', () => {
      try {
        uut.validate()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          'Input to offer.validate() must be an object with a data property.'
        )
      }
    })

    it('should throw an error if messageType is not included', () => {
      try {
        const offerData = { data: {} }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'messageType' must be an integer number"
        )
      }
    })

    it('should throw an error if messageClass is not included', () => {
      try {
        const offerData = { data: { messageType: 1 } }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'messageClass' must be an integer number"
        )
      }
    })

    it('should throw an error if tokenId is not included', () => {
      try {
        const offerData = { data: { messageType: 1, messageClass: 1 } }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'tokenId' must be a string.")
      }
    })

    it('should throw an error if buyOrSell is not included', () => {
      try {
        const offerData = {
          data: { messageType: 1, messageClass: 1, tokenId: 'fakeId' }
        }

        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'buyOrSell' must be a string.")
      }
    })

    it('should throw an error if rateInBaseUnit is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy'
          }
        }

        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'rateInBaseUnit' must be an integer number."
        )
      }
    })

    it('should throw an error if minUnitsToExchange is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000
          }
        }

        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'minUnitsToExchange' must be an integer number."
        )
      }
    })

    it('should throw an error if numTokens is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'numTokens' must be a number.")
      }
    })

    it('should throw an error if utxoTxid is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350,
            numTokens: 1
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'utxoTxid' must be a string.")
      }
    })

    it('should throw an error if utxoVout is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350,
            numTokens: 1,
            utxoTxid: 'fakeTxid'
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'utxoVout' must be an integer number."
        )
      }
    })

    it('should throw an error if proper status is not applied', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350,
            numTokens: 1,
            utxoTxid: 'fakeTxid',
            utxoVout: 0,
            offerStatus: 'badStatus'
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'offerStatus' must be posted, taken, or dead"
        )
      }
    })

    it('should throw an error if nostrEventId is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350,
            numTokens: 1,
            utxoTxid: 'fakeTxid',
            utxoVout: 0,
            offerStatus: 'posted',
            makerAddr: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
            tokenType: 1
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'nostrEventId' must be a string."
        )
      }
    })

    it('should validate a new offer', () => {
      const offerObj = {
        appId: 'swapTest555',
        data: {
          messageType: 1,
          messageClass: 1,
          tokenId:
            '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
          buyOrSell: 'sell',
          rateInBaseUnit: 1000,
          minUnitsToExchange: 10,
          numTokens: 0.02,
          utxoTxid:
            '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
          utxoVout: 0,
          offerStatus: 'posted',
          makerAddr: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
          ticker: 'TROUT',
          tokenType: 1,
          nostrEventId: 'test'
        },
        timestamp: '2021-09-20T17:54:26.395Z',
        localTimeStamp: '9/20/2021, 10:54:26 AM',
        txid: '46f50f2a0cf44e3ed70dfb0618ef3ebfee57aabcf229b5d2d17c07322b54a8d7',
        hash: 'zdpuB2X25AZCKo3wpr4sSbw44vqPWJRqcxWQRHZccK5BdtoGD'

      }

      const result = uut.validate(offerObj)
      // console.log('result: ', result)

      assert.property(result, 'messageType')
      assert.property(result, 'messageClass')
      assert.property(result, 'tokenId')
      assert.property(result, 'buyOrSell')
      assert.property(result, 'rateInBaseUnit')
      assert.property(result, 'minUnitsToExchange')
      assert.property(result, 'numTokens')
      assert.property(result, 'utxoTxid')
      assert.property(result, 'utxoVout')
      assert.property(result, 'timestamp')
      assert.property(result, 'localTimestamp')
      assert.property(result, 'txid')
      assert.property(result, 'p2wdbHash')
      assert.property(result, 'tokenType')
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/ipfs-mock.js`:

```js
/*
  Mocks for the js-ipfs
*/

// class IPFS {
//   constructor () {
//     this.ipfs = {}
//   }
//
//   static create () {
//     const mockIpfs = new MockIpfsInstance()
//
//     return mockIpfs
//   }
//
//   async start () {}
// }

function create () {
  const mockIpfs = new MockIpfsInstance()

  return mockIpfs
}

class MockIpfsInstance {
  constructor () {
    this.config = {
      profiles: {
        apply: () => {}
      }
    }
  }

  stop () {}
}

export default create;

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/adapters/index.js`:

```js
/*
  Mocks for the Adapter library.
*/
import BCHJS from '@psf/bch-js';

const bchjs = new BCHJS()

class IpfsAdapter {
  constructor () {
    this.ipfs = {
      files: {
        stat: () => {}
      }
    }
  }
}

class IpfsCoordAdapter {
  constructor () {
    this.ipfsCoord = {
      adapters: {
        ipfs: {
          connectToPeer: async () => {}
        }
      },
      useCases: {
        peer: {
          sendPrivateMessage: () => {
          }
        }
      },
      thisNode: {}
    }
  }
}

const ipfs = {
  ipfsAdapter: new IpfsAdapter(),
  ipfsCoordAdapter: new IpfsCoordAdapter(),
  getStatus: async () => {},
  getPeers: async () => {},
  getRelays: async () => {}
}
ipfs.ipfs = ipfs.ipfsAdapter.ipfs

const localdb = {
  Users: class Users {
    static findById () {}
    static find () {}
    static findOne () {
      return {
        validatePassword: localdb.validatePassword
      }
    }

    async save () {
      return {}
    }

    generateToken () {
      return '123'
    }

    toJSON () {
      return {}
    }

    async remove () {
      return true
    }

    async validatePassword () {
      return true
    }
  },

  validatePassword: () => {
    return true
  },

  Entry: class Entry {
    constructor (obj) {
      ;(this._id = 'id'), (this.entry = obj.entry)
      this.slpAddress = obj.slpAddress
      this.description = obj.description
      this.signature = obj.signature
      this.category = obj.category
      this.balance = obj.balance
      this.merit = obj.merit
    }

    static findById () {}
    static find () {}
    static findOne () {}

    async save () {
      return {}
    }
  },

  Order: class Order {
    constructor (obj) {}

    static findById () {}
    static find () {}
    static findOne () {}

    async save () {
      return {}
    }
  },

  Offer: class Offer {
    constructor (obj) {}

    static findById () {}
    static find () {}
    static findOne () {}

    async save () {
      return {}
    }
  }
}

const bch = {
  getMerit: async () => {
    return 100
  },
  getPSFTokenBalance: async () => {
    return 100
  },
  _verifySignature: () => {
    return true
  }
}

// const wallet = {
//   burnPsf: async () => {},
//   generateSignature: async () => {}
// }
import { MockBchWallet } from './wallet.js';

const wallet = {
  burnPsf: async () => {
  },
  generateSignature: async () => {
  },
  getKeyPair: async () => {
    return { cashAddress: 'fakeAddr', wif: 'fakeWif', hdIndex: 1 }
  },
  bchWallet: new MockBchWallet(),
  BchWallet: MockBchWallet,
  moveTokens: async () => {},
  moveTokensFromCustomWallet: async () => {},
  moveBch: async () => {},
  reclaimTokens: async ()=>{},
  generatePartialTx: async ()=>{},
  deseralizeTx:async ()=>{},
  completeTx:async ()=>{ return ''},
}

const p2wdb = {
  write: async () => {
  },
  checkForSufficientFunds: async () => true
}

const nostr = {
  post: async () => {return true },
  read: async () => { return true },
  eventId2note: () => { return 'testNoteId' }
}

export default { ipfs, localdb, bch, wallet, p2wdb, bchjs, nostr}

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/adapters/fake-log`:

```
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.907Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.909Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.910Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.912Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.915Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.979Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.980Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.981Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.982Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.983Z"}
{"level":"error","message":"Error in lib/nodemailer.js/validateEmailArray()","timestamp":"2022-06-27T17:36:59.002Z"}
{"level":"error","message":"Error in lib/nodemailer.js/validateEmailArray()","timestamp":"2022-06-27T17:36:59.003Z"}
{"level":"error","message":"Error in lib/nodemailer.js/getHtmlFromObject()","timestamp":"2022-06-27T17:36:59.005Z"}
{"level":"error","message":"Error in lib/nodemailer.js/getHtmlFromObject()","timestamp":"2022-06-27T17:36:59.006Z"}
{"level":"error","message":"Error in lib/nodemailer.js/getHtmlFromObject()","timestamp":"2022-06-27T17:36:59.008Z"}
{"level":"info","message":"Warning: Can not send JSON RPC response. Can not determine which peer this message came from.","timestamp":"2022-06-27T17:36:59.353Z"}
{"level":"info","message":"Rejecting invalid JSON RPC command.","timestamp":"2022-06-27T17:36:59.354Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: ea442e78-2297-466a-823b-9cbb12c8ddd9, type: request, method: unknownMethod","timestamp":"2022-06-27T17:36:59.355Z"}
{"level":"error","message":"Error in rpc router():  test error","stack":"Error: test error\n    at Context.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/test/unit/controllers/json-rpc/a10-rpc.unit.js:110:49)\n    at callFn (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:366:21)\n    at Test.Runnable.run (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:354:5)\n    at Runner.runTest (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:666:10)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:789:12\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:581:14)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:591:7\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:474:14)\n    at Immediate._onImmediate (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:559:5)\n    at processImmediate (node:internal/timers:466:21)","timestamp":"2022-06-27T17:36:59.357Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: 9ef6ad90-7fc3-4cb3-8769-4498e5512b3d, type: request, method: users","timestamp":"2022-06-27T17:36:59.358Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: bd57a1cf-7f2f-4ff2-93d4-6727eec4d778, type: request, method: auth","timestamp":"2022-06-27T17:36:59.359Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: 8fd9edc8-6a45-4042-ac06-9ace60567cbf, type: request, method: about","timestamp":"2022-06-27T17:36:59.361Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: 1b27624a-e698-4bbe-9183-b860a1a0d78d, type: request, method: unknownMethod","timestamp":"2022-06-27T17:36:59.363Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: 40fabddf-59c6-4910-a22c-63da7387f99a, type: request, method: unknownMethod","timestamp":"2022-06-27T17:36:59.365Z"}
{"level":"error","message":"Error in authUser():  Login credential do not match","stack":"Error: Login credential do not match\n    at Context.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/test/unit/controllers/json-rpc/auth.json-rpc.controller.unit.js:144:18)\n    at callFn (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:366:21)\n    at Test.Runnable.run (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:354:5)\n    at Runner.runTest (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:666:10)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:789:12\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:581:14)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:591:7\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:474:14)\n    at Immediate.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:559:5)\n    at processImmediate (node:internal/timers:466:21)","timestamp":"2022-06-27T17:37:04.421Z"}
{"level":"error","message":"Error in authUser():  login must be specified","stack":"Error: login must be specified\n    at AuthRPC.authUser (/home/trout/work/psf/code/ipfs-service-provider/src/controllers/json-rpc/auth/index.js:78:93)\n    at Context.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/test/unit/controllers/json-rpc/auth.json-rpc.controller.unit.js:165:34)\n    at callFn (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:366:21)\n    at Test.Runnable.run (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:354:5)\n    at Runner.runTest (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:666:10)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:789:12\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:581:14)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:591:7\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:474:14)\n    at Immediate._onImmediate (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:559:5)\n    at processImmediate (node:internal/timers:466:21)","timestamp":"2022-06-27T17:37:04.423Z"}
{"level":"error","message":"Error in authUser():  password must be specified","stack":"Error: password must be specified\n    at AuthRPC.authUser (/home/trout/work/psf/code/ipfs-service-provider/src/controllers/json-rpc/auth/index.js:78:284)\n    at Context.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/test/unit/controllers/json-rpc/auth.json-rpc.controller.unit.js:185:34)\n    at callFn (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:366:21)\n    at Test.Runnable.run (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:354:5)\n    at Runner.runTest (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:666:10)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:789:12\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:581:14)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:591:7\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:474:14)\n    at Immediate._onImmediate (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:559:5)\n    at processImmediate (node:internal/timers:466:21)","timestamp":"2022-06-27T17:37:04.425Z"}
{"level":"error","timestamp":"2022-06-27T17:37:04.466Z"}
{"level":"info","message":"Running server in environment: dev","timestamp":"2022-06-27T17:37:04.487Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.495Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.495Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.496Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.497Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.497Z"}
{"level":"error","message":"Error in lib/users.js/getAllUsers()","timestamp":"2022-06-27T17:37:04.499Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.502Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.503Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.503Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.504Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.505Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.506Z"}
{"level":"error","message":"Error in lib/users.js/deleteUser()","timestamp":"2022-06-27T17:37:04.508Z"}
{"level":"info","message":"Running server in environment: test","timestamp":"2022-06-27T17:37:04.514Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.638Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:05.273Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:05.277Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:05.280Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:05.286Z"}
{"level":"error","timestamp":"2022-06-27T17:37:05.412Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d27f, Target user: 1","timestamp":"2022-06-27T17:37:05.441Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.448Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d27f, Target user: 62b9eac1b4f08950b955d27d","timestamp":"2022-06-27T17:37:05.452Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.457Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.463Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.467Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.473Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac0b4f08950b955d274, Target user: 62b9eac1b4f08950b955d27d","timestamp":"2022-06-27T17:37:05.478Z"}
{"level":"verbose","message":"It's ok. The user is an admin.","timestamp":"2022-06-27T17:37:05.478Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d27f, Target user: 1","timestamp":"2022-06-27T17:37:05.600Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d27f, Target user: 62b9eac1b4f08950b955d27d","timestamp":"2022-06-27T17:37:05.603Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac0b4f08950b955d274, Target user: 62b9eac1b4f08950b955d27d","timestamp":"2022-06-27T17:37:05.615Z"}
{"level":"verbose","message":"It's ok. The user is an admin.","timestamp":"2022-06-27T17:37:05.615Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:37:05.619Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:37:05.622Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:37:05.624Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:37:05.627Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d2a6, Target user: Target Id","timestamp":"2022-06-27T17:37:05.754Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac0b4f08950b955d274, Target user: 62b9eac1b4f08950b955d2a6","timestamp":"2022-06-27T17:37:05.756Z"}
{"level":"verbose","message":"It's ok. The user is an admin.","timestamp":"2022-06-27T17:37:05.756Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:06.060Z"}

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/adapters/wallet.js`:

```js
import BCHJS from "@psf/bch-js";

const mockWallet = {
    mnemonic: 'course abstract aerobic deer try switch turtle diet fence affair butter top',
    privateKey: 'L5D2UAam8tvo3uii5kpgaGyjvVMimdrXu8nWGQSQjuuAix6ji1YQ',
    publicKey: '0379433ffc401483ade310469953c1cba77c71af904f07c15bde330d7198b4d6dc',
    cashAddress: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
    address: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
    slpAddress: 'simpleledger:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acq9zm7d33',
    legacyAddress: '1JQj1KcQL7GPKzc1D2PvdUSgw3MbDtrHzi',
    hdPath: "m/44'/245'/0'/0/0",
    nextAddress: 1
};

class MockBchWallet {
    constructor() {
        this.walletInfoPromise = true;
        this.walletInfo = mockWallet;
        this.initialize = async () => {}
        this.bchjs = new BCHJS();
        this.burnTokens = async () => {
            return { success: true, txid: 'txid' };
        };
        this.sendTokens = async () => {
            return 'fakeTxid';
        };
        this.utxoIsValid =async ()=>{}
        this.getUtxos = async () => { };
        this.getBalance = async () => { };
        this.listTokens = async () => { };
        this.getTxData = async () => {
            return [{
                    tokenTicker: 'TROUT'
                }];
        };
        this.optimize = async () => { };
        // Environment variable is used by wallet-balance.unit.js to force an error.
        if (process.env.NO_UTXO) {
            this.utxos = {};
        }
        else {
            this.utxos = {
                utxoStore: {
                    address: 'bitcoincash:qqetvdnlt0p8g27dr44cx7h057kpzly9xse9huc97z',
                    bchUtxos: [
                        {
                            height: 700685,
                            tx_hash: '1fc577caaff5626a8477162581e57bae1b19dc6aa6c10638013c2b1ba14dc654',
                            tx_pos: 0,
                            value: 1000,
                            txid: '1fc577caaff5626a8477162581e57bae1b19dc6aa6c10638013c2b1ba14dc654',
                            vout: 0,
                            isValid: false
                        },
                        {
                            height: 700685,
                            tx_hash: '1fc577caaff5626a8477162581e57bae1b19dc6aa6c10638013c2b1ba14dc654',
                            tx_pos: 2,
                            value: 19406,
                            txid: '1fc577caaff5626a8477162581e57bae1b19dc6aa6c10638013c2b1ba14dc654',
                            vout: 2,
                            isValid: false
                        }
                    ],
                    nullUtxos: [],
                    slpUtxos: {
                        type1: {
                            mintBatons: [],
                            tokens: [
                                {
                                    'height': 717331,
                                    'tx_hash': '74889580bb1a5f8c026aa2f55118ac9917df3332f7abae72a70343daa1c29621',
                                    'tx_pos': 1,
                                    'value': 546,
                                    'txid': '74889580bb1a5f8c026aa2f55118ac9917df3332f7abae72a70343daa1c29621',
                                    'vout': 1,
                                    'isSlp': true,
                                    'type': 'token',
                                    'qty': '10',
                                    'tokenId': '600ee24d0f208aebc2bdd2c4ee1b9acb6d57343561442e8676b5bbea311d5a0f',
                                    'address': 'bitcoincash:qqraj35x6l2qyqhjm5l7qlt7z2245ez8l5z3dwkeq5',
                                    'ticker': 'FLIPS',
                                    'name': 'FLIPS',
                                    'documentUri': '',
                                    'documentHash': '',
                                    'decimals': 1,
                                    'qtyStr': '1'
                                },
                                {
                                    'height': 730597,
                                    'tx_hash': '52520faddfafc46b8f8c9548b097f3a3b82a5bf363b5095047b9c5f83247fe36',
                                    'tx_pos': 1,
                                    'value': 546,
                                    'txid': '52520faddfafc46b8f8c9548b097f3a3b82a5bf363b5095047b9c5f83247fe36',
                                    'vout': 1,
                                    'isSlp': true,
                                    'type': 'token',
                                    'qty': '34999991',
                                    'tokenId': '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
                                    'address': 'bitcoincash:qqraj35x6l2qyqhjm5l7qlt7z2245ez8l5z3dwkeq5',
                                    'ticker': 'PSF',
                                    'name': 'Permissionless Software Foundation',
                                    'documentUri': 'psfoundation.cash',
                                    'documentHash': '',
                                    'decimals': 8,
                                    'qtyStr': '0.34999991'
                                },
                                {
                                    'height': 730597,
                                    'tx_hash': '5dc7e7c91382aed1666a51212dfb74050261e12c3c4f62b6b1e57f42d6c51ee1',
                                    'tx_pos': 2,
                                    'value': 546,
                                    'txid': '5dc7e7c91382aed1666a51212dfb74050261e12c3c4f62b6b1e57f42d6c51ee1',
                                    'vout': 2,
                                    'isSlp': true,
                                    'type': 'token',
                                    'qty': '18898',
                                    'tokenId': 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
                                    'address': 'bitcoincash:qqraj35x6l2qyqhjm5l7qlt7z2245ez8l5z3dwkeq5',
                                    'ticker': 'TROUT',
                                    'name': "Trout's test token",
                                    'documentUri': 'troutsblog.com',
                                    'documentHash': '',
                                    'decimals': 2,
                                    'qtyStr': '188.98'
                                }
                            ]
                        },
                        nft: {
                            tokens: []
                        },
                        group: {
                            tokens: [],
                            mintBatons: []
                        }
                    }
                }
            };
        }
    }
}

export { MockBchWallet };

export { mockWallet };

export default {
    MockBchWallet,
    mockWallet
};

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/ctx-mock.js`:

```js
// Ripped from https://github.com/koajs/koa/blob/master/test/helpers/context.js
// Solution courtesy of user @fl0w. See: https://github.com/koajs/koa/issues/999#issuecomment-309270599
// Take from this gist: https://gist.github.com/emmanuelnk/f1254eed8f947a81e8d715476d9cc92c

// if you want more comprehensive Koa Context object to test stuff like Cookies etc
// then use https://www.npmjs.com/package/@shopify/jest-koa-mocks (requires Jest)

// INSTRUCTIONS:
// Import in test file as below:
//
// const mockContext = require('./mocks/ctx-mock').context
// const ctx = mockContext()
// ...

import Stream from 'stream';

import Koa from 'koa';

const context = (req, res, app) => {
  const socket = new Stream.Duplex()

  req = Object.assign(
    { headers: {}, socket },
    Stream.Readable.prototype,
    req || {}
  )
  res = Object.assign(
    { _headers: {}, socket },
    Stream.Writable.prototype,
    res || {}
  )
  req.socket.remoteAddress = req.socket.remoteAddress || '127.0.0.1'
  app = app || new Koa()
  res.getHeader = k => res._headers[k.toLowerCase()]
  res.setHeader = (k, v) => (res._headers[k.toLowerCase()] = v)
  res.removeHeader = (k, v) => delete res._headers[k.toLowerCase()]

  const retApp = app.createContext(req, res)

  return retApp
}

const request = (req, res, app) => context(req, res, app).request

const response = (req, res, app) => context(req, res, app).response

export {
  context,
  request,
  response
};

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/log-api-mock.js`:

```js
// Mocks representing an array of logs for the
// Unit tests of logapi

const data = [
  {
    message: 'Error in lib/nodemailer.js/validateEmailArray()',
    level: 'error',
    timestamp: '2020-11-14T12:15:55.230Z'
  },
  {
    message: 'Error in lib/nodemailer.js/validateEmailArray()',
    level: 'error',
    timestamp: '2020-11-14T12:15:55.231Z'
  },
  {
    message: 'Error in lib/nodemailer.js/validateEmailArray()',
    level: 'error',
    timestamp: '2020-11-14T12:15:55.230Z'
  },
  {
    message: 'Error in lib/nodemailer.js/validateEmailArray()',
    level: 'error',
    timestamp: '2020-11-14T12:15:55.231Z'
  }
]

export default {
  data
};

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/helia-mock.js`:

```js
/*
  Mocking library for helia.
  This is used to replace the helia library when running unit tests.
*/

const ipfs = {
  libp2p: {
    getMultiaddrs: () => [],
    peerId: 'fake-id'
  }
}

export default ipfs

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/use-cases/index.js`:

```js
/*
  Mocks for the use cases.
*/
/* eslint-disable */

class UserUseCaseMock {
  async createUser(userObj) {
    return {}
  }

  async getAllUsers() {
    return true
  }

  async getUser(params) {
    return true
  }

  async updateUser(existingUser, newData) {
    return true
  }

  async deleteUser(user) {
    return true
  }

  async authUser(login, passwd) {
    return {
      generateToken: () => {}
    }
  }
}

class EntryUseCaseMock {
  async createEntry(userObj) {
    return {}
  }
}

class Offer {
  async createOffer() {
    return {}
  }
  async removeStaleOffers(){

  }
  async removeDuplicateOffers(){

  }
  async loadOffers(){

  }
}

class Order {
  async createOrder() {
    return {}
  }
  async removeStaleOrders(){
    return {}
  }
}

class UsageUseCaseMock {
  async cleanUsage() {
    return {}
  }

  async getRestSummary() {
    return true
  }

  async getTopIps(params) {
    return true
  }

  async getTopEndpoints(existingUser, newData) {
    return true
  }
}

class UseCasesMock {
  constuctor(localConfig = {}) {
    // this.user = new UserUseCaseMock(localConfig)
  }

  user = new UserUseCaseMock()
  entry = new EntryUseCaseMock()
  offer = new Offer()
  order = new Order()
  usage = new UsageUseCaseMock()
}

export default UseCasesMock;

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/use-cases/offer-mock-data.js`:

```js
/*
  Mocking data for Offer Use Case unit tests.
*/

const nftOffer01 = {
  "messageType": 1,
  "messageClass": 1,
  "tokenId": "eb93f05553ff088bffb0ec687519e83c59e5108c160f7c25a4b6c45109d7e40b",
  "buyOrSell": "sell",
  "rateInBaseUnit": 7672536,
  "minUnitsToExchange": 7672536,
  "numTokens": 1,
  "utxoTxid": "c736d73e274df20e9b069b4990d1a264fb80aa98d67cc6c7a39e42bff48e7c04",
  "utxoVout": 1,
  "timestamp": 1662930309998,
  "globaltimestamp": "2022-09-11T21:05:09.998Z",
  "localTimestamp": "9/11/2022, 9:05:09 PM",
  "txid": "4266862b8358664996038d8c29d49dc0f3d3058fd1ef3d567b084e6b16ceb5b2",
  "p2wdbHash": "zdpuArq7rCuVCGPyTnWpLjy9AYsh8yrbwjGdKwg2GDDALkM8t",
  "offerStatus": "posted",
  "makerAddr": "bitcoincash:qrqlz63cwmu0hcmsrfnd8jemn3atkpaqds6tf4ksrr",
  "ticker": "TV001",
  "tokenType": 65
}

const nftTokenData01 = {
  "genesisData": {
    "type": 65,
    "ticker": "TV001",
    "name": "Introduction to NFTs on BCH",
    "tokenId": "eb93f05553ff088bffb0ec687519e83c59e5108c160f7c25a4b6c45109d7e40b",
    "documentUri": "ipfs://bafybeibmgilu4lk3uivwyzhtm7jorl5zbsluewqmcsxs6otzrphh33okk4",
    "documentHash": "c1731268f4873f1928438abdaf6ffc546d86a1817dc6f3c6bc73fbdfb4664f10",
    "decimals": 0,
    "mintBatonIsActive": false,
    "tokensInCirculationBN": "1",
    "tokensInCirculationStr": "1",
    "blockCreated": 740395,
    "totalBurned": "0",
    "totalMinted": "1",
    "parentGroupId": "030563ddd65772d8e9b79b825529ed53c7d27037507b57c528788612b4911107"
  },
  "immutableData": "ipfs://bafybeibmgilu4lk3uivwyzhtm7jorl5zbsluewqmcsxs6otzrphh33okk4",
  "mutableData": "ipfs://bafybeifzhunfpodsztsj5x4ypopngkxuapbxwaxaxkahaybdktk6joqtlq"
}

const simpleNftOffer01 = {
  "messageType": 1,
  "messageClass": 1,
  "tokenId": "a80c89d2f9f7ad7584743587c4950a0f28514ba8054e8cec4e871747cf9c162c",
  "buyOrSell": "sell",
  "rateInBaseUnit": 76725,
  "minUnitsToExchange": 76725,
  "numTokens": 1,
  "utxoTxid": "dd51a8bf96c8ab16a2935b09e51650e1769a1fa75cce9f0455abdbf72071d3c2",
  "utxoVout": 1,
  "timestamp": 1662930102814,
  "globaltimestamp": "2022-09-11T21:01:42.814Z",
  "localTimestamp": "9/11/2022, 9:01:42 PM",
  "txid": "4013177602ee75bbc5c4a67ea8d6d80e4f3d12b9c46ae2a6643911f48257b578",
  "p2wdbHash": "zdpuAzyLPFBwFWbNi8XQuxgAx9aBNGWZEGqib7KE6Hp3AEEhq",
  "offerStatus": "posted",
  "makerAddr": "bitcoincash:qrqlz63cwmu0hcmsrfnd8jemn3atkpaqds6tf4ksrr",
  "ticker": "BAA",
  "tokenType": 1
}

const simpleNftTokenData01 = {
  "genesisData": {
    "type": 1,
    "ticker": "BAA",
    "name": "Bitcoin AI Art 001",
    "tokenId": "a80c89d2f9f7ad7584743587c4950a0f28514ba8054e8cec4e871747cf9c162c",
    "documentUri": "ipfs://bafybeifevvtnap3m3fsjbwnvpknvzhqihl2ouuypio33f2vtwqejipgpkq",
    "documentHash": "d6213e5629d01fd2cd714cde709e11b888c0ba441e05bb1cc649f8b784df5a6c",
    "decimals": 0,
    "mintBatonIsActive": false,
    "tokensInCirculationBN": "1",
    "tokensInCirculationStr": "1",
    "blockCreated": 757238,
    "totalBurned": "0",
    "totalMinted": "1"
  },
  "immutableData": "ipfs://bafybeifevvtnap3m3fsjbwnvpknvzhqihl2ouuypio33f2vtwqejipgpkq",
  "mutableData": "ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm"
}

const fungibleOffer01 = {
  "messageType": 1,
  "messageClass": 1,
  "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
  "buyOrSell": "sell",
  "rateInBaseUnit": 7672,
  "minUnitsToExchange": 7672,
  "numTokens": 1,
  "utxoTxid": "822dc4c765cc68314479c7707bba28028eacab6013bb683b1680dbcc9c95b286",
  "utxoVout": 1,
  "timestamp": 1662930501091,
  "globaltimestamp": "2022-09-11T21:08:21.091Z",
  "localTimestamp": "9/11/2022, 9:08:21 PM",
  "txid": "7ee0ec32e116b068ff43c5516fa500058d14f53037ba5cc729e78eb51d1f1ffd",
  "p2wdbHash": "zdpuB2gHDvmByfvPFLJgEAaRyUi1cwnD45Qt66y4f5tnMXFo7",
  "offerStatus": "posted",
  "makerAddr": "bitcoincash:qrqlz63cwmu0hcmsrfnd8jemn3atkpaqds6tf4ksrr",
  "ticker": "TROUT",
  "tokenType": 1
}

const fungibleTokenData01 = {
  "genesisData": {
    "type": 1,
    "ticker": "TROUT",
    "name": "Trout's test token",
    "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
    "documentUri": "troutsblog.com",
    "documentHash": "",
    "decimals": 2,
    "mintBatonIsActive": true,
    "tokensInCirculationBN": "100097954686",
    "tokensInCirculationStr": "100097954686",
    "blockCreated": 622414,
    "totalBurned": "2045314",
    "totalMinted": "100100000000"
  },
  "immutableData": "troutsblog.com",
  "mutableData": ""
}

const offerMockData = {
  data: {
    messageType: 1,
    messageClass: 1,
    tokenId:
      '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
    buyOrSell: 'sell',
    rateInBaseUnit: 1000,
    minUnitsToExchange: 10,
    numTokens: 0.02,
    utxoTxid:
      '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
    utxoVout: 0,
    makerAddr: 'address',
    tokenType: 1,
    nostrEventId: 'test'
  }
}

const deserealizeTxMock = {
  //...
  vout: [
    {
      value: 0,
      scriptPubKey: {
        addresses: ['bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7478']
      }
    },
    {
      value: 0,
      scriptPubKey: {
        addresses: ['bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7478']
      }
    },
    {
      value: 0,
      scriptPubKey: {
        addresses: ['bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7478']
      }
    },
    //...
  ]
}

export default {
  nftOffer01,
  nftTokenData01,
  simpleNftOffer01,
  simpleNftTokenData01,
  fungibleOffer01,
  fungibleTokenData01,
  offerMockData,
  deserealizeTxMock
};

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/bchjs-mock.js`:

```js
// Mocks for bch unit test

// Tokens array containing some psf tokens
const psfBalances = [
    {
      tokenId:
              '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
      balance: 1,
      slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
      decimalCount: 9
    },
    {
      tokenId:
              'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
      balance: 617,
      slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
      decimalCount: 8
    },
    {
      tokenId:
              '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
      balance: 1,
      slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
      decimalCount: 0
    },
    {
      tokenId:
              'a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37',
      balance: 776,
      slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
      decimalCount: 7
    }
  ]

// Token array without psf tokens
const noPsfBalances = [
  {
    tokenId:
            'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    balance: 617,
    slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    decimalCount: 8
  },
  {
    tokenId:
            'a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37',
    balance: 776,
    slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    decimalCount: 7
  },
  {
    tokenId:
            'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
    balance: 617,
    slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
    decimalCount: 8
  }
]

export default {
  psfBalances,
  noPsfBalances
};
```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/nostr-mock.js`:

```js
class RelayPoolClassMock {
  constructor() {
    this.relay = { close: () => { } , subscribe: () => { } }
    this.event = { content: 'content' }
  }
  on(ev, callback) {
    callback(this.relay, null, this.event)
  }
}

const RelayPoolMock =()=>{
  return new RelayPoolClassMock()
}

export default {  RelayPoolMock }
```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/app-mock.js`:

```js
/*
  Mocks for Koa 'app' object.
*/

const app = {
  use: () => {}
}

export default app;

```

`/home/trout/work/psf/code/bch-dex/test/unit/mocks/ipfs-coord-mock.js`:

```js
/*
  Mocks for the ipfs-coord library
*/

class IPFSCoord {
  async isReady () {
    return true
  }

  async start () {}

  async subscribeToChat() {}
}

export default IPFSCoord;

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/a10-offer.rest-e2e.js`:

```js
/*
  Automated E2E tests for the /offer endpoint.
*/

// const config = require('../../../config')
// const assert = require('chai').assert

// const axios = require('axios').default
import sinon from 'sinon'

// const LOCALHOST = `http://localhost:${config.port}`

// const OfferController = require('../../../src/controllers/rest-api/offer/controller')
// const mockContext = require('../../unit/mocks/ctx-mock').context

let sandbox
// let uut
describe('OfferApi', () => {
  beforeEach(() => {
    // uut = new OfferController()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('POST /offer', () => {
    // it('should pass data to the handlers', async () => {
    //   try {
    //     const mockOffer = {
    //       lokadId: 'SWP',
    //       messageType: 1,
    //       messageClass: 1,
    //       tokenId: 'token-id',
    //       buyOrSell: 'sell',
    //       rateInSats: 1000,
    //       minSatsToExchange: 1250,
    //       signature:
    //         'H4cRPaAtyNyzG+4Qz+Tp2O7TtFZ7QRsWKKxG71dUZG5xfX0EWRMrBmqM6rH7jToOAT2s9Dm759HMxwP/WTMPzyA=',
    //       sigMsg: 'test',
    //       utxoTxid: 'txid-goes-here',
    //       utxoVout: 1,
    //       offerIpfsId: 'Qmblah',
    //       offerBchAddr:
    //         'bitcoincash:qzxj37k35z6whp4mj4hrdw2vprx4klcydc6ete5xft',
    //       offerPubKey: 'pubkeyInHex'
    //     }
    //
    //     const options = {
    //       method: 'post',
    //       url: `${LOCALHOST}/offer`,
    //       data: { offer: mockOffer }
    //     }
    //
    //     const result = await axios(options)
    //     console.log('result.data: ', result.data)
    //
    //     // assert.isFalse(result.data.success)
    //   } catch (err) {
    //     assert(false, 'Unexpected result')
    //   }
    // })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/a01-auth.rest-e2e.js`:

```js
/*
  End-to-end tests for /auth endpoints.

  This test sets up the environment for other e2e tests.
*/

// Public npm libraries
import { assert } from 'chai'

import axios from 'axios'

// const sinon = require('sinon')

// Local support libraries
import config from '../../../config/index.js'
import Server from '../../../bin/server.js'
import testUtils from '../../utils/test-utils.js'
import AdminLib from '../../../src/adapters/admin.js'
const adminLib = new AdminLib()

// const request = supertest.agent(app.listen())
const context = {}

const LOCALHOST = `http://localhost:${config.port}`

if (!config.noMongo) {
  describe('Auth', () => {
    before(async () => {
      const app = new Server()

      // This should be the first instruction. It starts the REST API server.
      await app.startServer()

      // Stop the IPFS node for the rest of the e2e tests.
      // await app.controllers.adapters.ipfs.stop()

      // Delete all previous users in the database.
      await testUtils.deleteAllUsers()

      // Create a new admin user.
      await adminLib.createSystemUser()

      const userObj = {
        email: 'test@test.com',
        password: 'pass',
        name: 'test'
      }
      const testUser = await testUtils.createUser(userObj)
      // console.log('TestUser: ', testUser)

      context.user = testUser.user
      context.token = testUser.token
    })

    describe('POST /auth', () => {
      it('should throw 401 if credentials are incorrect', async () => {
        try {
          const options = {
            method: 'post',
            url: `${LOCALHOST}/auth`,
            data: {
              email: 'test@test.com',
              password: 'wrongpassword'
            }
          }

          const result = await axios(options)

          // console.log(`result: ${JSON.stringify(result, null, 2)}`)

          console.log(
            `result stringified: ${JSON.stringify(result.data, null, 2)}`
          )
          assert(false, 'Unexpected result')
        } catch (err) {
          assert(err.response.status === 401, 'Error code 401 expected.')
        }
      })

      it('should throw 401 if email is wrong format', async () => {
        try {
          const options = {
            method: 'post',
            url: `${LOCALHOST}/auth`,
            data: {
              email: 'wrongEmail',
              password: 'wrongpassword'
            }
          }

          await axios(options)
          assert(false, 'Unexpected result')
        } catch (err) {
          assert(err.response.status === 401, 'Error code 401 expected.')
        }
      })

      it('should auth user', async () => {
        try {
          const options = {
            method: 'post',
            url: `${LOCALHOST}/auth`,
            data: {
              email: 'test@test.com',
              password: 'pass'
            }
          }
          const result = await axios(options)
          // console.log(`result: ${JSON.stringify(result.data, null, 2)}`)

          assert(result.status === 200, 'Status Code 200 expected.')
          assert(
            result.data.user.email === 'test@test.com',
            'Email of test expected'
          )
          assert(
            result.data.user.password === undefined,
            'Password expected to be omited'
          )
        } catch (err) {
          console.log(
            'Error authenticating test user: ' + JSON.stringify(err, null, 2)
          )
          throw err
        }
      })
    })
  })
}

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/a08-validators.rest-e2e.js`:

```js
/*
import { assert } from 'chai';
import testUtils from '../../utils/test-utils.js';
import Validators from '../../../src/controllers/rest-api/middleware/validators.js';
import sinon from 'sinon';
import { context as mockContext } from '../../unit/mocks/ctx-mock.js';
import util from 'util';
util.inspect.defaultOptions = { depth: 1 }

const context = {}

let sandbox
let uut
describe('Validators', () => {
  before(async () => {
    // console.log(`config: ${JSON.stringify(config, null, 2)}`)

    // Create a second test user.
    const userObj = {
      email: 'testvalidator@test.com',
      password: 'pass2',
      name: 'testvalidator'
    }
    const testUser = await testUtils.createUser(userObj)
    // console.log(`testUser2: ${JSON.stringify(testUser, null, 2)}`)

    context.user = testUser.user
    context.token = testUser.token
    context.id = testUser.user._id

    // Get the JWT used to log in as the admin 'system' user.
    const adminJWT = await testUtils.getAdminJWT()
    // console.log(`adminJWT: ${adminJWT}`)
    context.adminJWT = adminJWT

    // const admin = await testUtils.loginAdminUser()
    // context.adminJWT = admin.token

    // const admin = await adminLib.loginAdmin()
    // console.log(`admin: ${JSON.stringify(admin, null, 2)}`)
  })
  beforeEach(() => {
    uut = new Validators()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('ensureUser()', () => {
    it('should throw 401 if user cant be found', async () => {
      try {
        // Force an error
        sandbox.stub(uut.User, 'findById').resolves(false)

        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }

        await uut.ensureUser(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if token not found', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()

        await uut.ensureUser(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if token is invalid', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: 'Bearer 1'
          }
        }
        await uut.ensureUser(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should return true if user is admin', async () => {
      // Mock the context object.
      const ctx = mockContext()
      ctx.params = { id: context.id }

      ctx.request = {
        header: {
          authorization: `Bearer ${context.adminJWT}`
        }
      }

      const result = await uut.ensureUser(ctx)

      assert.equal(result, true)
    })
  })

  describe('ensureAdmin()', () => {
    it('should throw 401 if token not found', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()

        await uut.ensureAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if token is invalid', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: 'Bearer 1'
          }
        }
        await uut.ensureAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if user cant be found', async () => {
      try {
        // Force an error
        sandbox.stub(uut.User, 'findById').resolves(false)

        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }
        await uut.ensureAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if user is not admin type', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }
        await uut.ensureAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'not admin')
      }
    })

    it('should return true if user is admin', async () => {
      // Mock the context object.
      const ctx = mockContext()
      ctx.request = {
        header: {
          authorization: `Bearer ${context.adminJWT}`
        }
      }

      const result = await uut.ensureAdmin(ctx)

      assert.equal(result, true)
    })
  })

  describe('ensureTargetUserOrAdmin()', () => {
    it('should throw 401 if token not found', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: context.id }
        await uut.ensureTargetUserOrAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if token is invalid', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: context.id }

        ctx.request = {
          header: {
            authorization: 'Bearer 1'
          }
        }
        await uut.ensureTargetUserOrAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if user cant be found', async () => {
      try {
        // Force an error
        sandbox.stub(uut.User, 'findById').resolves(false)

        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: context.id }

        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }
        await uut.ensureTargetUserOrAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if user is not admin type', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: 'Target Id' }

        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }
        await uut.ensureTargetUserOrAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'not admin')
      }
    })

    it('should return true if user is admin', async () => {
      // Mock the context object.
      const ctx = mockContext()
      ctx.params = { id: context.id }

      ctx.request = {
        header: {
          authorization: `Bearer ${context.adminJWT}`
        }
      }

      const result = await uut.ensureTargetUserOrAdmin(ctx)

      assert.equal(result, true)
    })
  })
})
*/

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/a10-usage.rest-e2e.js`:

```js
/*
End-to-end tests for /usage endpoints.
*/

import config from '../../../config/index.js'
import { assert } from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import util from 'util'

util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = `http://localhost:${config.port}`

let sandbox

describe('Usage', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('GET /usage', () => {
    it('should return usage status', async () => {
      try {
        const options = {
          method: 'get',
          url: `${LOCALHOST}/usage`
        }

        const result = await axios(options)

        assert.property(result.data, 'status')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('GET /usage/ips', () => {
    it('should return ips', async () => {
      try {
        const options = {
          method: 'get',
          url: `${LOCALHOST}/usage/ips`
        }

        const result = await axios(options)

        assert.property(result.data, 'ips')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('GET /usage/endpoints', () => {
    it('should return ips', async () => {
      try {
        const options = {
          method: 'get',
          url: `${LOCALHOST}/usage/endpoints`
        }

        const result = await axios(options)

        assert.property(result.data, 'endpoints')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/README.md`:

```md
# Automated End-to-end Tests

This contains the original boilerplate tests, which are end-to-end tests. These tests are fully automated and test the system directly by making REST API calls with axios.

These tests function exactly the same as a normal user would, by making real REST API calls to the software. As a result, they are fine for testing internal system components like authorization and user handling. However, they are inappropriate for testing sophisticated endpoints that involve complex operations. For example, interacting with a blockchain, pinging other network systems, or writing data to a secondary database.

There is some redundancy between these tests and the unit tests. The focus is on *how* the tests are executed. The unit tests call the libraries directly (internally). These e2e tests use the REST API (externally).

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/a09-admin.rest-e2e.js`:

```js
import { assert } from 'chai'
import Admin from '../../../src/adapters/admin.js'
import sinon from 'sinon'
import util from 'util'
import config from '../../../config/index.js'

util.inspect.defaultOptions = { depth: 1 }

let sandbox
let uut
describe('Admin', () => {
  beforeEach(() => {
    uut = new Admin()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  if (!config.noMongo) {
    describe('loginAdmin()', () => {
      it('should logind admin', async () => {
        try {
          const error = new Error('test error')
          error.response = {
            status: 422
          }
          // sandbox.stub(uut.axios, 'request').onFirstCall().throws(error)

          const result = await uut.loginAdmin()
          const user = result.data.user

          assert.property(user, '_id')
          assert.property(user, 'email')
          assert.property(user, 'type')

          assert.isString(user._id)
          assert.isString(user.email)
          assert.isString(user.type)

          assert.equal(user.type, 'admin')
        } catch (err) {
          assert(false, 'Unexpected result')
        }
      })

      it('should handle axios error', async () => {
        try {
          // Returns an erroneous password to force
          // an auth error
          sandbox.stub(uut.jsonFiles, 'readJSON').resolves({ password: 'wrong' })

          await uut.loginAdmin()
          assert(false, 'Unexpected result')
        } catch (err) {
          assert.equal(err.response.status, 401)
          assert.include(err.response.data, 'Unauthorized')
        }
      })
    })

    describe('createSystemUser()', () => {
      it('should create admin', async () => {
        try {
          await uut.deleteExistingSystemUser()
          const result = await uut.createSystemUser()

          assert.property(result, 'email')
          assert.property(result, 'password')
          assert.property(result, 'id')
          assert.property(result, 'token')
        } catch (err) {
          assert(false, 'Unexpected result')
        }
      })
      it('should update admin password', async () => {
        try {
          uut.config.adminPassword = 'newpassword'

          const fakeUser = {
            password: 'oldpassword',
            save: () => { return 'token' },
            generateToken: () => { return 'token' }
          }

          sandbox.stub(uut.User, 'findOne').resolves(fakeUser)
          const result = await uut.createSystemUser()

          assert.property(result, 'email')
          assert.property(result, 'password')
          assert.property(result, 'id')
          assert.property(result, 'token')

          assert.equal(fakeUser.password, 'newpassword', 'password should be updated')
        } catch (err) {
          console.log(err)
          assert(false, 'Unexpected result')
        }
      })

      it('should handle error', async () => {
        try {
          sandbox.stub(uut.User, 'findOne').throws(new Error('test error'))
          await uut.createSystemUser()
          assert.fail('Unexpected result')
        } catch (err) {
          assert.include(err.message, 'test error')
        }
      })
    })

    describe('deleteExistingSystemUser()', () => {
      it('should delete admin', async () => {
        try {
          sandbox.stub(uut.User, 'deleteOne').resolves(true)
          const result = await uut.deleteExistingSystemUser()
          assert.isTrue(result)
        } catch (err) {
          assert(false, 'Unexpected result')
        }
      })

      it('should handle error when deleting admin', async () => {
        try {
          sandbox.stub(uut.User, 'deleteOne').throws(new Error('test error'))
          await uut.deleteExistingSystemUser()
          assert.fail('Unexpected result')
        } catch (err) {
          assert.include(err.message, 'test error')
        }
      })
    })
  }
})

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/a06-logapi.rest-e2e.js`:

```js
import config from '../../../config/index.js'
import { assert } from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import util from 'util'

import LogsController from '../../../src/controllers/rest-api/logs/controller.js'
import { context as mockContext } from '../../unit/mocks/ctx-mock.js'
util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = `http://localhost:${config.port}`

let sandbox
let uut
describe('LogsApi', () => {
  beforeEach(() => {
    uut = new LogsController()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('POST /logs', () => {
    it('should return false if password is not provided', async () => {
      try {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/logs`,
          data: {}
        }

        const result = await axios(options)
        assert.isFalse(result.data.success)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should return log', async () => {
      try {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/logs`,
          data: {
            password: 'test'
          }
        }

        const result = await axios(options)

        assert.isTrue(result.data.success)
        assert.isArray(result.data.data)
        assert.property(result.data.data[0], 'message')
        assert.property(result.data.data[0], 'level')
        assert.property(result.data.data[0], 'timestamp')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should return false if files are not found!', async () => {
      try {
        sandbox.stub(uut.logsApiLib, 'getLogs').resolves({
          success: false,
          data: 'file does not exist'
        })

        const ctx = mockContext()
        ctx.request = {
          body: {
            password: 'test'
          }
        }
        await uut.getLogs(ctx)

        assert.isFalse(ctx.body.success)
        assert.include(ctx.body.data, 'file does not exist')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })

    it('should catch and handle errors', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.logsApiLib.fs, 'existsSync')
          .throws(new Error('test error'))

        // Mock the context object.
        const ctx = mockContext()

        ctx.request = {
          body: {
            password: 'test'
          }
        }

        await uut.getLogs(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw unhandled error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.logsApiLib.fs, 'existsSync').throws(new Error())

        // Mock the context object.
        const ctx = mockContext()

        ctx.request = {
          body: {
            password: 'test'
          }
        }

        await uut.getLogs(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Unhandled error')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/a04-contact.rest-e2e.js`:

```js
import config from '../../../config/index.js'
import axios from 'axios'
import { assert } from 'chai'
import sinon from 'sinon'

import { context as mockContext } from '../../unit/mocks/ctx-mock.js'
import ContactController from '../../../src/controllers/rest-api/contact/controller.js'

// Mock data
// const mockData = require('./mocks/contact-mocks')

const LOCALHOST = `http://localhost:${config.port}`
let uut
let sandbox

describe('Contact', () => {
  beforeEach(() => {
    uut = new ContactController()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('POST /contact/email', () => {
    it('should throw error if email property is not provided', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/contact/email`,
          data: {
            obj: {
              formMessage: 'message'
            }
          }
        }

        await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(err.response.data, "Property 'email' must be a string!")
      }
    })

    it('should throw error if formMessage property is not provided', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/contact/email`,
          data: {
            obj: {
              email: 'email@email.com'
            }
          }
        }

        await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'formMessage' must be a string!"
        )
      }
    })

    it('should throw error if email list provided is not a array', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/contact/email`,
          data: {
            obj: {
              email: 'email@email.com',
              formMessage: 'test message',
              emailList: 1
            }
          }
        }

        await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'emailList' must be a array of emails!"
        )
      }
    })

    it('should throw error if email list provided is a empty array', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/contact/email`,
          data: {
            obj: {
              email: 'email@email.com',
              formMessage: 'test message',
              emailList: []
            }
          }
        }

        await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'emailList' must be a array of emails!"
        )
      }
    })

    it('should send email with minimun input', async () => {
      try {
        // Mock live network calls.
        sandbox.stub(uut.contactLib, 'sendEmail').resolves(true)

        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          body: {
            obj: {
              email: 'email@email.com',
              formMessage: 'test message'
            }
          }
        }
        await uut.email(ctx)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should send email with all inputs', async () => {
      try {
        // Mock live network calls.
        sandbox.stub(uut.contactLib, 'sendEmail').resolves(true)

        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          body: {
            obj: {
              email: 'email@email.com',
              formMessage: 'test message',
              emailList: ['email@email.com']
            }
          }
        }
        await uut.email(ctx)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/e2e/automated/a02-users.rest-e2e.js`:

```js
import testUtils from '../../utils/test-utils.js'
import { assert } from 'chai'
import config from '../../../config/index.js'
import axios from 'axios'
import sinon from 'sinon'
import util from 'util'

// import UserController from '../../../src/controllers/rest-api/users/controller.js'
// import Adapters from '../../../src/adapters/index.js'
// import UseCases from '../../../src/use-cases/index.js'
util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = `http://localhost:${config.port}`

const context = {}
// const adapters = new Adapters()
// let uut
let sandbox

// const mockContext = require('../../unit/mocks/ctx-mock').context

if (!config.noMongo) {
  describe('Users', () => {
    before(async () => {
      // console.log(`config: ${JSON.stringify(config, null, 2)}`)

      // Create a second test user.
      const userObj = {
        email: 'test2@test.com',
        password: 'pass2',
        name: 'test2'
      }
      const testUser = await testUtils.createUser(userObj)
      // console.log(`testUser2: ${JSON.stringify(testUser, null, 2)}`)

      context.user2 = testUser.user
      context.token2 = testUser.token
      context.id2 = testUser.user._id

      // Get the JWT used to log in as the admin 'system' user.
      const adminJWT = await testUtils.getAdminJWT()
      console.log(`adminJWT: ${adminJWT}`)
      context.adminJWT = adminJWT

      // const admin = await testUtils.loginAdminUser()
      // context.adminJWT = admin.token

      // const admin = await adminLib.loginAdmin()
      // console.log(`admin: ${JSON.stringify(admin, null, 2)}`)
    })

    beforeEach(() => {
      // const useCases = new UseCases({ adapters })
      // uut = new UserController({ adapters, useCases })

      sandbox = sinon.createSandbox()
    })

    afterEach(() => sandbox.restore())

    describe('POST /users - Create User', () => {
      it('should reject signup when data is incomplete', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/users`,
            data: {
              email: 'test2@test.com'
            }
          }

          await axios(options)

          assert(false, 'Unexpected result')
        } catch (err) {
          assert(err.response.status === 422, 'Error code 422 expected.')
        }
      })

      it('should reject signup if no email property is provided', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/users`,
            data: {
              user: {
                password: 'pass2'
              }
            }
          }
          await axios(options)

          assert(false, 'Unexpected result')
        } catch (err) {
          // console.log('err', err)
          assert.equal(err.response.status, 422)
          assert.include(err.response.data, "Property 'email' must be a string")
        }
      })

      it('should reject signup if no password property is provided', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/users`,
            data: {
              user: {
                email: 'test2@test.com'
              }
            }
          }
          await axios(options)

          assert(false, 'Unexpected result')
        } catch (err) {
          assert.equal(err.response.status, 422)
          assert.include(
            err.response.data,
            "Property 'password' must be a string"
          )
        }
      })

      it('should reject if name property property is not string', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/users`,
            data: {
              user: {
                email: 'test322@test.com',
                password: 'supersecretpassword',
                name: 1234
              }
            }
          }
          await axios(options)

          assert.fail('Unexpected result')
        } catch (err) {
          // console.log(err)
          assert.equal(err.response.status, 422)
          assert.include(err.response.data, "Property 'name' must be a string")
        }
      })

      it("should signup of type 'user' by default", async () => {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/users`,
          data: {
            user: {
              email: 'test3@test.com',
              password: 'supersecretpassword',
              name: 'test3'
            }
          }
        }
        const result = await axios(options)
        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        context.user = result.data.user
        context.token = result.data.token

        assert(result.status === 200, 'Status Code 200 expected.')
        assert(
          result.data.user.email === 'test3@test.com',
          'Email of test expected'
        )
        assert(
          result.data.user.password === undefined,
          'Password expected to be omited'
        )
        assert.property(result.data, 'token', 'Token property exists.')
        assert.equal(result.data.user.type, 'user')
        assert.property(result.data.user, 'mnemonic')
      })
      it('should reject signup when DISABLE_NEW_ACCOUNTS is true', async () => {
        try {
          process.env.DISABLE_NEW_ACCOUNTS = true
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/users`,
            data: {
              email: 'test2@test.com',
              password: 'supersecretpassword',
              name: 'test3'
            }
          }

          await axios(options)

          assert(false, 'Unexpected result')
        } catch (err) {
          assert(err.response.status === 401, 'Error code 401 expected.')
        }
      })
      it('admin can create a user when DISABLE_NEW_ACCOUNTS is true', async () => {
        process.env.DISABLE_NEW_ACCOUNTS = true
        const options = {
          method: 'post',
          url: `${LOCALHOST}/users`,
          headers: {
            Authorization: `Bearer ${context.adminJWT}`
          },
          data: {
            user: {
              email: 'fromAdmin@test.com',
              password: 'supersecretpassword',
              name: 'test3'
            }
          }
        }
        const result = await axios(options)

        context.user = result.data.user
        context.token = result.data.token

        assert(result.status === 200, 'Status Code 200 expected.')
        assert(
          result.data.user.email === 'fromAdmin@test.com',
          'Email of test expected'
        )
        assert(
          result.data.user.password === undefined,
          'Password expected to be omited'
        )
        assert.property(result.data, 'token', 'Token property exists.')
        assert.equal(result.data.user.type, 'user')
      })
    })

    describe('GET /users', () => {
      it('should not fetch users if the authorization header is missing', async () => {
        try {
          const options = {
            method: 'GET',
            url: `${LOCALHOST}/users`,
            headers: {
              Accept: 'application/json'
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should not fetch users if the authorization header is missing the scheme', async () => {
        try {
          const options = {
            method: 'GET',
            url: `${LOCALHOST}/users`,
            headers: {
              Accept: 'application/json',
              Authorization: '1'
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should not fetch users if the authorization header has invalid scheme', async () => {
        const { token } = context
        try {
          const options = {
            method: 'GET',
            url: `${LOCALHOST}/users`,
            headers: {
              Accept: 'application/json',
              Authorization: `Unknown ${token}`
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should not fetch users if token is invalid', async () => {
        try {
          const options = {
            method: 'GET',
            url: `${LOCALHOST}/users`,
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer 1'
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      // it('should fetch all users', async () => {
      //   const { token } = context

      //   const options = {
      //     method: 'GET',
      //     url: `${LOCALHOST}/users`,
      //     headers: {
      //       Accept: 'application/json',
      //       Authorization: `Bearer ${token}`
      //     }
      //   }
      //   const result = await axios(options)

      //   const users = result.data.users
      //   // console.log(`users: ${util.inspect(users)}`)

      //   assert.hasAnyKeys(users[0], ['type', '_id', 'email', 'mnemonic'])
      //   assert.isNumber(users.length)
      // })

      // it('should return a 422 http status if biz-logic throws an error', async () => {
      //   try {
      //     const { token } = context

      //     // Force an error
      //     sandbox
      //       .stub(uut.useCases.user, 'getAllUsers')
      //       .rejects(new Error('test error'))

      //     const options = {
      //       method: 'GET',
      //       url: `${LOCALHOST}/users`,
      //       headers: {
      //         Accept: 'application/json',
      //         Authorization: `Bearer ${token}`
      //       }
      //     }
      //     await axios(options)

      //     assert.fail('Unexpected code path!')
      //   } catch (err) {
      //     // console.log(err)
      //     assert.equal(err.response.status, 422)
      //     assert.equal(err.response.data, 'test error')
      //   }
      // })
    })

    describe('GET /users/:id', () => {
      it('should not fetch user if token is invalid', async () => {
        try {
          const options = {
            method: 'GET',
            url: `${LOCALHOST}/users/1`,
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer 1'
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      // it("should throw 404 if user doesn't exist", async () => {
      //   const { token } = context

      //   try {
      //     const options = {
      //       method: 'GET',
      //       url: `${LOCALHOST}/users/5fa4bd7ee1828f5f4d8ed004`,
      //       headers: {
      //         Accept: 'application/json',
      //         Authorization: `Bearer ${token}`
      //       }
      //     }
      //     await axios(options)

      //     assert.equal(true, false, 'Unexpected behavior')
      //   } catch (err) {
      //     assert.equal(err.response.status, 404)
      //   }
      // })

      // it('should throw 422 for invalid input', async () => {
      //   const { token } = context

      //   try {
      //     const options = {
      //       method: 'GET',
      //       url: `${LOCALHOST}/users/1`,
      //       headers: {
      //         Accept: 'application/json',
      //         Authorization: `Bearer ${token}`
      //       }
      //     }
      //     await axios(options)

      //     assert.equal(true, false, 'Unexpected behavior')
      //   } catch (err) {
      //     assert.equal(err.response.status, 422)
      //   }
      // })

      it('should fetch own user', async () => {
        const _id = context.user._id
        const token = context.token

        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users/${_id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        const result = await axios(options)

        const user = result.data.user
        // console.log(`user: ${util.inspect(user)}`)

        assert.property(user, 'type')
        assert.property(user, 'email')
        assert.property(user, 'mnemonic')

        assert.property(user, '_id')
        assert.equal(user._id, _id)

        assert.notProperty(
          user,
          'password',
          'Password property should not be returned'
        )
      })
    })

    describe('PUT /users/:id', () => {
      it('should not update user if token is invalid', async () => {
        try {
          const options = {
            method: 'PUT',
            url: `${LOCALHOST}/users/1`,
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer 1'
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should throw 401 if non-admin updating other user', async () => {
        const { token } = context

        try {
          const options = {
            method: 'PUT',
            url: `${LOCALHOST}/users/1`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should not be able to update user type', async () => {
        try {
          const options = {
            method: 'PUT',
            url: `${LOCALHOST}/users/${context.user._id.toString()}`,
            headers: {
              Authorization: `Bearer ${context.token}`
            },
            data: {
              user: {
                email: 'test@test.com',
                password: 'password',
                name: 'new name',
                type: 'test'
              }
            }
          }
          await axios(options)

          // console.log(`Users: ${JSON.stringify(result.data, null, 2)}`)

          // assert(result.status === 200, 'Status Code 200 expected.')
          // assert(result.data.user.type === 'user', 'Type should be unchanged.')
          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 422)
          assert.include(
            err.response.data,
            "Property 'type' can only be changed by Admin user"
          )
        }
      })

      it('should not be able to update other user when not admin', async () => {
        try {
          const options = {
            method: 'PUT',
            url: `${LOCALHOST}/users/${context.user2._id.toString()}`,
            headers: {
              Authorization: `Bearer ${context.token}`
            },
            data: {
              user: {
                name: 'This should not work'
              }
            }
          }
          await axios(options)

          // console.log(`result: ${JSON.stringify(result.data, null, 2)}`)

          assert(false, 'Unexpected result')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should not be able to update if name property is wrong', async () => {
        try {
          const _id = context.user._id
          const token = context.token

          const options = {
            method: 'PUT',
            url: `${LOCALHOST}/users/${_id}`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`
            },
            data: {
              user: {
                email: 'testToUpdate@test.com',
                name: {},
                password: 'password'
              }
            }
          }
          await axios(options)
        } catch (error) {
          assert.equal(error.response.status, 422)
          assert.include(error.response.data, "Property 'name' must be a string!")
        }
      })

      it('should not be able to update if password property is not string', async () => {
        const { token } = context
        const _id = context.user._id
        try {
          const options = {
            method: 'PUT',
            url: `${LOCALHOST}/users/${_id}`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`
            },
            data: {
              user: {
                password: 1234,
                email: 'test@test.com',
                name: 'test'
              }
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 422)
          assert.include(
            err.response.data,
            "Property 'password' must be a string!"
          )
        }
      })

      it('should not be able to update if email is not string', async () => {
        const { token } = context
        const _id = context.user._id
        try {
          const options = {
            method: 'PUT',
            url: `${LOCALHOST}/users/${_id}`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`
            },
            data: {
              user: {
                email: 1234
              }
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 422)
          assert.include(err.response.data, "Property 'email' must be a string!")
        }
      })

      it('should not be able to update type property if is not string', async () => {
        try {
          const _id = context.user._id
          const token = context.token

          const options = {
            method: 'PUT',
            url: `${LOCALHOST}/users/${_id}`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`
            },
            data: {
              user: {
                type: 1,
                email: 'test@test.com',
                name: 'test',
                password: 'password'
              }
            }
          }
          await axios(options)
        } catch (err) {
          assert.equal(err.response.status, 422)
          assert.include(err.response.data, "Property 'type' must be a string!")
        }
      })

      it('should be able to update other user when admin', async () => {
        const adminJWT = context.adminJWT

        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${context.user2._id.toString()}`,
          headers: {
            Authorization: `Bearer ${adminJWT}`
          },
          data: {
            user: {
              name: 'This should work',
              email: 'test4@test.com',
              password: 'password'
            }
          }
        }

        const result = await axios(options)
        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)

        const userName = result.data.user.name
        assert.equal(userName, 'This should work')
      })

      it('should update user with minimum inputs', async () => {
        const _id = context.user._id
        const token = context.token

        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${_id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          data: {
            user: { email: 'testToUpdate@test.com' }
          }
        }

        const result = await axios(options)
        const user = result.data.user
        // console.log(`user: ${util.inspect(user)}`)

        assert.property(user, 'type')
        assert.property(user, 'email')

        assert.property(user, '_id')
        assert.equal(user._id, _id)

        assert.notProperty(
          user,
          'password',
          'Password property should not be returned'
        )
        assert.equal(user.email, 'testToUpdate@test.com')
      })

      it('should update user with all inputs', async () => {
        const _id = context.user._id
        const token = context.token

        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${_id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          data: {
            user: {
              email: 'testToUpdate@test.com',
              name: 'my name',
              username: 'myUsername'
            }
          }
        }
        const result = await axios(options)

        const user = result.data.user
        // console.log(`user: ${util.inspect(user)}`)

        assert.property(user, 'type')
        assert.property(user, 'email')
        assert.property(user, 'name')

        assert.property(user, '_id')
        assert.equal(user._id, _id)
        assert.notProperty(
          user,
          'password',
          'Password property should not be returned'
        )
        assert.equal(user.name, 'my name')
        assert.equal(user.email, 'testToUpdate@test.com')
        assert.equal(user.username, 'myUsername')
      })
    })

    describe('DELETE /users/:id', () => {
      it('should not delete user if token is invalid', async () => {
        try {
          const options = {
            method: 'DELETE',
            url: `${LOCALHOST}/users/1`,
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer 1'
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should throw 401 if deleting invalid user', async () => {
        const { token } = context

        try {
          const options = {
            method: 'DELETE',
            url: `${LOCALHOST}/users/1`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should not be able to delete other users unless admin', async () => {
        try {
          const options = {
            method: 'DELETE',
            url: `${LOCALHOST}/users/${context.user2._id.toString()}`,
            headers: {
              Authorization: `Bearer ${context.token}`
            }
          }
          await axios(options)
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should delete own user', async () => {
        const _id = context.user._id
        const token = context.token

        const options = {
          method: 'DELETE',
          url: `${LOCALHOST}/users/${_id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        const result = await axios(options)
        // console.log(`result: ${util.inspect(result.data.success)}`)

        assert.equal(result.data.success, true)
      })

      it('should be able to delete other users when admin', async () => {
        const id = context.id2
        const adminJWT = context.adminJWT

        const options = {
          method: 'DELETE',
          url: `${LOCALHOST}/users/${id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${adminJWT}`
          }
        }
        const result = await axios(options)
        // console.log(`result: ${util.inspect(result.data)}`)

        assert.equal(result.data.success, true)
      })
    })
  })
}

```

`/home/trout/work/psf/code/bch-dex/test/e2e/manual/02-take-offer.js`:

```js
/*
  Part 2 of 3: Take an offer by submiting a counter-offer.
*/

import axios from 'axios'

const LOCALHOST = 'http://localhost:5700'

async function start () {
  try {
    const options = {
      method: 'post',
      url: `${LOCALHOST}/offer/take`,
      data: {
        offerCid: 'zdpuAkv76xbgqFEdFvcz28yNvtVjoZS7wsMo5wvuxWstycLRg'
      }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()

```

`/home/trout/work/psf/code/bch-dex/test/e2e/manual/01-create-order.js`:

```js
/*
  A manual e2e test for creating an Order, which then generates an Offer through
  the P2WDB webhook.

  Ensure the REST API is up an running before running this test.
*/

import axios from 'axios'

const LOCALHOST = 'http://localhost:5700'

async function start () {
  try {
    const mockOrder = {
      lokadId: 'SWP',
      messageType: 1,
      messageClass: 1,
      tokenId:
        'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      buyOrSell: 'sell',
      rateInBaseUnit: 5000,
      minUnitsToExchange: 5000,
      numTokens: 1
    }

    const options = {
      method: 'post',
      url: `${LOCALHOST}/order`,
      data: { order: mockOrder }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()

```

`/home/trout/work/psf/code/bch-dex/test/integration/adapters/bch-adapter-integration.js`:

```js
/*
  Integration tests for the bch.js adapter.
*/

// Local libraries.
// const BchAdapter = require('../../../src/adapters/bch')
//
// describe('#wallet', () => {
//   let uut
//
//   beforeEach(() => {
//     uut = new BchAdapter()
//   })
//
//   // describe('#getPSFTokenBalance', () => {
//   //   it('should get the PSF balance for the root address of the wallet', async () => {
//   //     await uut.wallet.walletInfoPromise
//   //     console.log('bch.wallet.walletInfo: ', uut.wallet.walletInfo)
//   //   })
//   // })
// })

```

`/home/trout/work/psf/code/bch-dex/test/integration/adapters/p2wdb-adapter-integration.js`:

```js
/*
  Integration tests for hte p2wdb-adapter.js library

  These integration tests may not necessarily pass. They require a WIF set
  as an environment variable, and loaded with enough BCH and PSF to make
  a write to the P2WDB.

  If these tests fail, it does not necessarily mean there is a problem with the
  code. Check that the WIF envrionment variable meets the requirements.
*/

// Public npm libraries
import BCHJS from '@psf/bch-js'

// Local libraries
import P2wdbAdapter from '../../../src/adapters/p2wdb-adapter'

const wif = process.env.WIF
if (!wif) {
  throw new Error('You must provide a BCH WIF private key as an environment variable to run this test.')
}

describe('#p2wdb-adapter.js', () => {
  let uut

  beforeEach(() => {
    const bchjs = new BCHJS()

    uut = new P2wdbAdapter({ bchjs })
  })

  describe('#checkForSufficientFunds', () => {
    it('should check for sufficient funds', async () => {
      const result = await uut.checkForSufficientFunds(wif)

      console.log('Provided WIF has funds for making a write: ', result)
    })
  })

  describe('#write', () => {
    it('should write data to the P2WDB', async () => {
      const inObj = {
        appId: 'test234',
        data: {
          key: 'value'
        },
        wif
      }

      const result = await uut.write(inObj)
      console.log('result: ', result)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/integration/adapters/wallet-adapter-integration.js`:

```js
/*
  Integration tests for the wallet.js adapter library.
*/

// Public npm libraries.
// const assert = require('chai').assert

// Local libraries.
import WalletAdapter from '../../../src/adapters/wallet'

describe('#wallet', () => {
  let uut

  beforeEach(() => {
    uut = new WalletAdapter()
  })

  // describe('#instanceWallet', () => {
  //   it('should instance the wallet using the web 3 infra by default', async () => {
  //     const walletData = await uut.openWallet()
  //     // console.log('walletData: ', walletData)
  //
  //     const walletInstance = await uut.instanceWallet(walletData)
  //     // console.log('walletInstance: ', walletInstance)
  //
  //     assert.equal(walletInstance.ar.interface, 'consumer-api')
  //   })
  //
  //   it('should instance using web 2 FullStack.cash infra', async () => {
  //     const walletData = await uut.openWallet()
  //
  //     // Force usage of FullStack.cash
  //     uut.config.useFullStackCash = true
  //
  //     const walletInstance = await uut.instanceWallet(walletData)
  //     // console.log('walletInstance: ', walletInstance)
  //
  //     assert.equal(walletInstance.ar.interface, 'rest-api')
  //   })
  // })
  //
  // describe('#moveTokens', () => {
  //   it('should move tokens to a new address in the HD wallet', async () => {
  //     const walletData = await uut.openWallet()
  //
  //     // Force usage of FullStack.cash
  //     uut.config.useFullStackCash = true
  //
  //     await uut.instanceWallet(walletData)
  //
  //     const inObj = {
  //       tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
  //       qty: 1
  //     }
  //
  //     const result = await uut.moveTokens(inObj)
  //     // console.log('result: ', result)
  //
  //     assert.property(result, 'txid')
  //     assert.property(result, 'vout')
  //     assert.property(result, 'hdIndex')
  //   })
  // })
  //
  // describe('#moveBch', () => {
  //   it('should move BCH to a new address in the HD wallet', async () => {
  //     const walletData = await uut.openWallet()
  //
  //     // Force usage of FullStack.cash
  //     uut.config.useFullStackCash = true
  //
  //     await uut.instanceWallet(walletData)
  //
  //     const amountSat = 1000
  //
  //     const result = await uut.moveBch(amountSat)
  //     console.log('result: ', result)
  //   })
  // })

  describe('#completeTx', () => {
    it('should complete the transaction with bchjs.TransactionBuilder', async () => {
      const walletData = await uut.openWallet()

      // Force usage of FullStack.cash
      uut.config.useFullStackCash = true

      await uut.instanceWallet(walletData)

      const hex = '0200000002cf24c6f6e55fc84e7699223f7dac568aae991f1a49747758a797d06a516f718c0100000000ffffffff0c7a53c39a7f215c9fa0f409710cf5cb8926e40c104efcedb43d69d5e113fd9d000000006a47304402204d5d1ce837594a151ef8ccecf95b5c7ebb2e71560c6d2597fa559b92f9f032bc02206ef67cd2ef4b4df7207225c26c9982df184959ac389c3f49f1ff5dce641a72ee412103fdc2366a32184220e77fd50e7fff30e7c76b2b7246dea6d56b8177f9fca6fec7ffffffff030000000000000000376a04534c500001010453454e4420a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b208000000000000006422020000000000001976a914d46461bf6a5f3a8e0e0e92b85465ad79696ccb7688ac88130000000000001976a914d46461bf6a5f3a8e0e0e92b85465ad79696ccb7688ac00000000'

      const result = await uut.completeTx(hex, 10)
      console.log('result: ', result)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/integration/use-cases/offer-use-case-integration.js`:

```js
/*
  Integration tests for the offer-use-case.js library

  For these tests to pass, the app wallet must have Trout test tokens with
  a token ID of a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2
*/

// Public npm libraries
import { assert } from 'chai'

// Local npm libraries
import Adapters from '../../../src/adapters'

import Offer from '../../../src/use-cases/offer'

describe('#offer-use-case.js', () => {
  let uut

  before(async () => {
    const adapters = new Adapters()
    adapters.config.getJwtAtStartup = false
    await adapters.start()

    uut = new Offer({ adapters })
  })

  describe('#ensureFunds', () => {
    it('should return true if wallet has enough funds', async () => {
      const offerEntity = {
        lokadId: 'SWP',
        messageType: 1,
        messageClass: 1,
        tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
        buyOrSell: 'sell',
        rateInBaseUnit: 1000,
        minUnitsToExchange: 1250,
        numTokens: 1
      }

      const result = await uut.ensureFunds(offerEntity)

      assert.equal(result, true)
    })
  })
})

```

`/home/trout/work/psf/code/bch-dex/test/utils/test-utils.js`:

```js
/*
  Utility functions used to prepare the environment for tests.
*/

// Public NPM libraries
import mongoose from 'mongoose'
import axios from 'axios'

// Local libraries
import config from '../../config/index.js'
import User from '../../src/adapters/localdb/models/users.js'
import JsonFiles from '../../src/adapters/json-files.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'

const jsonFiles = new JsonFiles()

const LOCALHOST = `http://localhost:${config.port}`
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// Remove all collections from the DB.
async function cleanDb () {
  for (const collection in mongoose.connection.collections) {
    const collections = mongoose.connection.collections
    if (collections.collection) {
      // const thisCollection = mongoose.connection.collections[collection]
      // console.log(`thisCollection: ${JSON.stringify(thisCollection, null, 2)}`)

      await collection.deleteMany()
    }
  }
}

// Delete all users in the database. This ensures there is no previous state
// to confuse tests.
async function deleteAllUsers () {
  try {
    // Get all the users in the DB.
    const users = await User.find({}, '-password')
    // console.log(`users: ${JSON.stringify(users, null, 2)}`)

    // Delete each user.
    for (let i = 0; i < users.length; i++) {
      const thisUser = users[i]
      await thisUser.remove()
    }
  } catch (err) {
    console.error('Error in test-utils.js/deleteAllUsers()')
  }
}

// This function is used to create new users.
// userObj = {
//   username,
//   password
// }
async function createUser (userObj) {
  try {
    const options = {
      method: 'POST',
      url: `${LOCALHOST}/users`,
      data: {
        user: {
          email: userObj.email,
          password: userObj.password,
          name: userObj.name
        }
      }
    }

    const result = await axios(options)

    const retObj = {
      user: result.data.user,
      token: result.data.token
    }

    return retObj
  } catch (err) {
    console.log(
      'Error in utils.js/createUser(): ' + JSON.stringify(err, null, 2)
    )
    throw err
  }
}

async function loginTestUser () {
  try {
    const options = {
      method: 'POST',
      url: `${LOCALHOST}/auth`,
      data: {
        email: 'test@test.com',
        password: 'pass'
      }
    }

    const result = await axios(options)

    // console.log(`result: ${JSON.stringify(result.data, null, 2)}`)

    const retObj = {
      token: result.data.token,
      user: result.data.user.username,
      id: result.data.user._id.toString()
    }

    return retObj
  } catch (err) {
    console.log(
      'Error authenticating test user: ' + JSON.stringify(err, null, 2)
    )
    throw err
  }
}

async function loginAdminUser () {
  try {
    const FILENAME = `${__dirname.toString()}../../config/system-user-${config.env}.json`
    // console.log('FILENAME: ', FILENAME)

    const adminUserData = await jsonFiles.readJSON(FILENAME)
    // console.log(`adminUserData: ${JSON.stringify(adminUserData, null, 2)}`)

    const options = {
      method: 'POST',
      url: `${LOCALHOST}/auth`,
      data: {
        email: adminUserData.email,
        password: adminUserData.password,
        name: 'admin'
      }
    }

    const result = await axios(options)

    // console.log(`result: ${JSON.stringify(result.data, null, 2)}`)

    const retObj = {
      token: result.data.token,
      user: result.data.user.username,
      id: result.data.user._id.toString()
    }

    return retObj
  } catch (err) {
    console.log(
      'Error authenticating test admin user: ' + JSON.stringify(err, null, 2)
    )
    throw err
  }
}

// Retrieve the admin user JWT token from the JSON file it's saved at.
async function getAdminJWT () {
  try {
    // process.env.KOA_ENV = process.env.KOA_ENV || 'dev'
    // console.log(`env: ${process.env.KOA_ENV}`)

    const FILENAME = `${__dirname.toString()}../../config/system-user-${config.env}.json`
    // console.log('FILENAME: ', FILENAME)
    const adminUserData = await jsonFiles.readJSON(FILENAME)
    // console.log(`adminUserData: ${JSON.stringify(adminUserData, null, 2)}`)

    return adminUserData.token
  } catch (err) {
    console.error('Error in test/utils.js/getAdminJWT()')
    throw err
  }
}

export default {
  cleanDb,
  createUser,
  loginTestUser,
  loginAdminUser,
  getAdminJWT,
  deleteAllUsers
}

```

`/home/trout/work/psf/code/bch-dex/bin/server.js`:

```js
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
import { usageMiddleware } from '../src/use-cases/usage-use-cases.js'
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

      if (!this.config.noMongo) {
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
      }

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
      app.use(usageMiddleware())

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

      if (!this.config.noMongo) {
        // Create the system admin user.
        const success = await this.adminLib.createSystemUser()
        if (success) console.log('System admin user created.')
      }

      // Attach the other IPFS controllers.
      // Skip if this is a test environment.
      if (this.config.env !== 'test') {
        await this.controllers.attachControllers(app)
      }

      // Display configuration settings
      console.log('\nConfiguration:')
      console.log(`Circuit Relay: ${this.config.isCircuitRelay}`)
      console.log(`IPFS TCP port: ${this.config.ipfsTcpPort}`)
      console.log(`IPFS WS port: ${this.config.ipfsWsPort}`)
      console.log(`IPFS WebRTC port: ${this.config.ipfsWebRtcPort}`)
      console.log(`Connection preference: ${this.config.connectPref}\n`)

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

```

`/home/trout/work/psf/code/bch-dex/README.md`:

```md
# bch-dex

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

`bch-dex` is a decentralized exchange *protocol* for permissionless trading of [SLP tokens](https://github.com/simpleledger/slp-specifications/blob/master/slp-token-type-1.md) and [NFTs](https://github.com/simpleledger/slp-specifications/blob/master/slp-nft-1.md). Trading fees are incredibly small, compared to other DEX platforms. The software is based entirely on open protocols and open source software. `bch-dex` software is maintained by the [Permissionless Software Foundation](https://psfoundation.info).

- [High-level Overview of bch-dex](https://youtu.be/LVX8CLi4sHw) (Video)

This is a prototype web service that monitors one or more [Nostr relays](https://nostr.com) for trading signals, to trade BCH and SLP tokens. It's inspired by the [SWaP Protocol](https://github.com/vinarmani/swap-protocol/blob/master/swap-protocol-spec.md).

This repository contains the back end code. The user interface is contained in the [bch-dex-ui-v3](https://github.com/Permissionless-Software-Foundation/bch-dex-ui-v3) repository.

**Warning**: This repository is under active development. Things will be constantly changing and breaking.

## Media
- [High-level Overview of bch-dex](https://youtu.be/LVX8CLi4sHw) (Video)
- [Developer walk-through for installing and hacking on bch-dex](https://youtu.be/T5XI43-SWJo) (Video)
  - This video is out of date. Follow the instructions below.

## Participate
This is an open source project, and we encourage other JavaScript developers to participate in its creation and maintenance. We have two chat rooms for the community:
- [Telegram Channel](https://t.me/bch_js_toolkit)

## Installation
Running the DEX requires composition of these different software packages:
- bch-dex - This repository is the back end software that tracks trade data on the network, generates [Offers and Counter Offers](https://github.com/Permissionless-Software-Foundation/bch-dex/tree/ct-unstable/dev-docs#definitions), and finalizes trades by accepting Counter Offers.
- [bch-dex-ui-v3](https://github.com/Permissionless-Software-Foundation/bch-dex-ui-v3) web app and user interface (UI) for bch-dex focused on Sellers of tokens.
- [MongoDB](https://www.mongodb.com/) is a database used by bch-dex to store and manage local data, user accounts, etc.

The above software is orchestrated using [Docker](https://www.docker.com/) and Docker Compose. The target operating system is Ubuntu 20+, and the target hardware is amd64 (normal desktop PCs). Trying to operate this software on other operating systems or hardware is possible, but not supported.

Setup instructions:

1. Follow the direction in [this Gist](https://gist.github.com/christroutner/a39f656850dc022b60f25c9663dd1cdd) to install Node.js, Docker, and Docker Compose.
1. Clone the repository with `git clone https://github.com/Permissionless-Software-Foundation/bch-dex` and enter it with `cd bch-dex`.
1. Install dependencies by running `npm install`
1. Create a wallet:
  - `cd production/scripts`
  - `node create-wallet.js`
1. Change directory to the `production/docker` folder.
1. Pull the Docker images down from Docker Hub: `docker-compose pull`
1. Build the core software: `docker-compose build --no-cache`
1. Start the Docker containers with `docker-compose up -d`
1. Open a web browser and navigate the `http://localhost:4500`. You'll be able to see new Offers as they come in and are detected by bch-dex.
1. To take the other side of the trade, click the `Take` button in the UI.
1. You can add the 12-word mnemonic from the `wallet.json` file to the the web wallet, which will mirror your wallet in the UI, and allow you to perform basic wallet functions (send and receive BCH and tokens).

## Blockchain Infrastructure

bch-dex requires a [Cash Stack](https://cashstack.info) back end in order to connect to the blockchain. By default, the Docker containers connect to [free-bch.fullstack.cash](https://free-bch.fullstack.cash/). Several community-provided servers are provided and can be [viewed here](https://consumers.psfoundation.info/consumers.json). The back end can be changed by setting the `CONSUMER_URL` environment variable in the `docker-compose.yml` file.

## License

[MIT](./LICENSE.md)

```

`/home/trout/work/psf/code/bch-dex/shell-scripts/ipfs-service-provider-generic.sh`:

```sh
#!/bin/bash

# This script is an example for running a generic ipfs-service-provider instance.

# Ports
export PORT=5001 # REST API port
export IPFS_TCP_PORT=5268
export IPFS_WS_PORT=5269

# The human-readible name that is used when displaying data about this node.
export COORD_NAME=ipfs-service-provider-generic

# This is used for end-to-end encryption (e2ee).
export MNEMONIC="churn aisle shield silver ladder swear hunt slim pen demand spoil veteran"

# 0 = less verbose. 3 = most verbose
export DEBUG_LEVEL=1

# MongoDB connection string.
#export DBURL=mongodb://localhost:27017/bch-service-dev

npm start

```

`/home/trout/work/psf/code/bch-dex/shell-scripts/ipfs-service-provider-relay.sh`:

```sh
#!/bin/bash

# This script is an example for running a ipfs-service-provider as a Circuit Relay.
# Circuit Relays are help other nodes on the network communicate. They are
# critical for reliable functioning of the network, and for circumventing
# censorship.

# Ports
export PORT=5001 # REST API port
export IPFS_TCP_PORT=5268
export IPFS_WS_PORT=5269

# The human-readible name that is used when displaying data about this node.
export COORD_NAME=ipfs-service-provider-generic

# This is used for end-to-end encryption (e2ee).
export MNEMONIC="churn aisle shield silver ladder swear hunt slim pen demand spoil veteran"

# 0 = less verbose. 3 = most verbose
export DEBUG_LEVEL=1

# MongoDB connection string.
#export DBURL=mongodb://localhost:27017/bch-service-dev

# Comment to disable circuit relay functionality. Or set to 1 to enable.
export ENABLE_CIRCUIT_RELAY=1
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

npm start

```

`/home/trout/work/psf/code/bch-dex/shell-scripts/local-external-ipfs-node.sh`:

```sh
#!/bin/bash

# This script is an example for running a production environment, which is
# defined by running an external go-ipfs node.

# Ports
export PORT=5010 # REST API port

# The human-readible name that is used when displaying data about this node.
export COORD_NAME=ipfs-service-provider-generic

# This is used for end-to-end encryption (e2ee).
export MNEMONIC="churn aisle shield silver ladder swear hunt slim pen demand spoil veteran"

# 0 = less verbose. 3 = most verbose
export DEBUG_LEVEL=0

# Production settings that use external IPFS node.
# https://github.com/christroutner/docker-ipfs
export SVC_ENV=production
export IPFS_HOST=localhost
export IPFS_API_PORT=5001

# Configure IPFS ports
export IPFS_TCP_PORT=4001
#export IPFS_WS_PORT=5269

# MongoDB connection string.
export DBURL=mongodb://localhost:27017/ipfs-service-dev

npm start

```

`/home/trout/work/psf/code/bch-dex/production/rpi-docker/cleanup-images.sh`:

```sh
#!/bin/bash

# Remove all untagged docker images.
docker rmi $(docker images | grep "^<none>" | awk '{print $3}')


```

`/home/trout/work/psf/code/bch-dex/production/rpi-docker/bch-dex-ui/Dockerfile`:

```
# Create a Dockerized API server
#

#IMAGE BUILD COMMANDS
# ct-base-ubuntu = ubuntu 18.04 + nodejs v10 LTS
#FROM christroutner/ct-base-ubuntu
FROM ubuntu:20.04 as builder
MAINTAINER Chris Troutner <chris.troutner@gmail.com>

#Update the OS and install any OS packages needed.
RUN apt-get update
RUN apt-get install -y sudo git curl nano gnupg wget

#Install Node and NPM
RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs build-essential

#Create the user 'safeuser' and add them to the sudo group.
#RUN useradd -ms /bin/bash safeuser
#RUN adduser safeuser sudo

#Set password to 'password' change value below if you want a different password
#RUN echo safeuser:password | chpasswd

#Set the working directory to be the home directory
WORKDIR /home/safeuser

#Setup NPM for non-root global install
#RUN mkdir /home/safeuser/.npm-global
#RUN chown -R safeuser .npm-global
#RUN echo "export PATH=~/.npm-global/bin:$PATH" >> /home/safeuser/.profile
#RUN runuser -l safeuser -c "npm config set prefix '~/.npm-global'"

# Update to the latest version of npm.
#RUN npm install -g npm@7.23.0
RUN npm install -g npm

# npm mirror to prevent direct dependency on npm.
RUN npm set registry http://94.130.170.209:4873/

# Switch to user account.
#USER safeuser
# Prep 'sudo' commands.
#RUN echo 'abcd8765' | sudo -S pwd

# Clone the rest.bitcoin.com repository
WORKDIR /home/safeuser
RUN git clone https://github.com/Permissionless-Software-Foundation/bch-dex-ui-v2

# Switch to the desired branch. `master` is usually stable,
# and `stage` has the most up-to-date changes.
WORKDIR /home/safeuser/bch-dex-ui-v2

# For development: switch to unstable branch
RUN git checkout ct-unstable

# Install dependencies
#RUN mkdir .ipfsdata
#RUN npm install -g @mapbox/node-pre-gyp
RUN npm install

# Build the site
RUN CI=true npm run build

# Load the NGINX image.
FROM nginx
EXPOSE 80

# Copy the files built in the first container to the new NGINX container.
COPY --from=builder /home/safeuser/bch-dex-ui-v2/build /usr/share/nginx/html

#USER safeuser

```

`/home/trout/work/psf/code/bch-dex/production/rpi-docker/bch-dex/start-production.sh`:

```sh
#!/bin/bash

# BEGIN: Optional configuration settings

# The human readable name this IPFS node identifies as.
export COORD_NAME=bch-dex-generic

# Allow this node to function as a circuit relay. It must not be behind a firewall.
#export ENABLE_CIRCUIT_RELAY=true
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

# Debug level. 0 = minimal info. 2 = max info.
export DEBUG_LEVEL=1

# END: Optional configuration settings


# Production database connection string.
export DBURL=mongodb://172.17.0.1:5666/bch-swap-service-prod

# Configure REST API port
export PORT=5700

# bch-dex specific env vars
export BCH_DEX=prod
export WEBHOOKSERVICE=http://172.17.0.1:5667/webhook
export WEBHOOKTARGET=http://172.17.0.1:5700/p2wdb
export APP_ID=bch-dex-001

npm start

```

`/home/trout/work/psf/code/bch-dex/production/rpi-docker/bch-dex/Dockerfile`:

```
# Create a Dockerized API server
#

#IMAGE BUILD COMMANDS
# ct-base-ubuntu = ubuntu 18.04 + nodejs v10 LTS
#FROM christroutner/ct-base-ubuntu
FROM ubuntu:20.04
MAINTAINER Chris Troutner <chris.troutner@gmail.com>

#Update the OS and install any OS packages needed.
RUN apt-get update
RUN apt-get install -y sudo git curl nano gnupg wget

#Install Node and NPM
RUN sudo apt-get install -y ca-certificates curl gnupg
RUN sudo mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
RUN sudo apt-get update
RUN sudo apt-get install -y nodejs build-essential

#Create the user 'safeuser' and add them to the sudo group.
#RUN useradd -ms /bin/bash safeuser
#RUN adduser safeuser sudo

#Set password to 'password' change value below if you want a different password
#RUN echo safeuser:password | chpasswd

#Set the working directory to be the home directory
WORKDIR /home/safeuser

#Setup NPM for non-root global install
#RUN mkdir /home/safeuser/.npm-global
#RUN chown -R safeuser .npm-global
#RUN echo "export PATH=~/.npm-global/bin:$PATH" >> /home/safeuser/.profile
#RUN runuser -l safeuser -c "npm config set prefix '~/.npm-global'"

# Update to the latest version of npm.
#RUN npm install -g npm@7.23.0
#RUN npm install -g npm

# npm mirror to prevent direct dependency on npm.
RUN npm set registry http://94.130.170.209:4873/

# Switch to user account.
#USER safeuser
# Prep 'sudo' commands.
#RUN echo 'abcd8765' | sudo -S pwd

# Clone the rest.bitcoin.com repository
WORKDIR /home/safeuser
RUN git clone https://github.com/Permissionless-Software-Foundation/bch-dex

# Switch to the desired branch. `master` is usually stable,
# and `stage` has the most up-to-date changes.
WORKDIR /home/safeuser/bch-dex

# For development: switch to unstable branch
RUN git checkout master

# Install dependencies
#RUN mkdir .ipfsdata
#RUN npm install -g @mapbox/node-pre-gyp
RUN npm install

# Generate the API docs
RUN npm run docs

# Start the application.
#COPY start-production.sh start-production.sh
CMD ["./start-production.sh"]

#CMD ["npm", "start"]

```

`/home/trout/work/psf/code/bch-dex/production/rpi-docker/docker-compose.yml`:

```yml
# Start the service with the command 'docker-compose up -d'

version: '3.9'

services:
  mongo-bch-dex:
    image: mongo:4.2.0
    container_name: mongo-bch-dex
    ports:
      - '5666:27017' # <host port>:<container port>
    volumes:
      - ../data/database:/data/db
    command: mongod --logpath=/dev/null # -- quiet
    restart: always

  ipfs:
    image: christroutner/trickle-ipfs-rpi:v1.0.1
    #image: odanado/go-ipfs:v0.11.0
    container_name: ipfs
    environment:
      IPFS_DAEMON_ARGUMENTS: '--enable-pubsub-experiment --migrate=true --agent-version-suffix=docker --routing=dhtclient'
      UPLOAD_KBPS: '25'
      DOWNLOAD_KBPS: '25'
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '10'
    mem_limit: 1000mb
    ports:
      - 4001:4001
      - 4003:4003
      - 172.17.0.1:5001:5001
      - 172.17.0.1:8080:8080
    volumes:
      - ./data/go-ipfs:/root/.ipfs
    command: [
      './start-ipfs.sh'
    ]
    restart: always

  p2wdb:
    #build:
    #  context: ./p2wdb/
    #  dockerfile: Dockerfile
    image: christroutner/p2wdb-rpi:v3.1.9
    container_name: p2wdb
    environment:
      CONSUMER_URL: 'https://wa-usa-bch-consumer.fullstackcash.nl'
      DEBUG_LEVEL: 1
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '10'
    mem_limit: 1gb
    links:
      - mongo-bch-dex
    ports:
      # <host port>:<container port>
      - 5667:5667 # REST API
      #- 5668:5668 # IPFS TCP port
      #- 5669:5669 # IPFS WS Port
    volumes:
      - ../data/ipfsdata/p2wdb:/home/safeuser/ipfs-p2wdb-service/.ipfsdata/p2wdb
      - ./p2wdb/start-production.sh:/home/safeuser/ipfs-p2wdb-service/start-production.sh
    restart: always

  bch-dex:
    #build:
    # context: ./bch-dex/
    # dockerfile: Dockerfile
    image: christroutner/bch-dex-rpi:v2.0.8
    container_name: bch-dex
    environment:
      #CONSUMER_URL: 'https://free-bch.fullstack.cash'
      CONSUMER_URL: 'https://wa-usa-bch-consumer.fullstackcash.nl'
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '10'
    mem_limit: 1000mb
    links:
      - mongo-bch-dex
      - p2wdb
    ports:
      - '5700:5700' # <host port>:<container port>
    volumes:
      - ../scripts/wallet.json:/home/safeuser/bch-dex/wallet.json
      - ./bch-dex/start-production.sh:/home/safeuser/bch-dex/start-production.sh
    restart: always

  dex-ui:
    #build:
    #  context: ./bch-dex-ui/
    #  dockerfile: Dockerfile
    image: christroutner/bch-dex-ui-rpi:v1.2.4
    container_name: dex-ui
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '10'
    mem_limit: 500mb
    links:
      - bch-dex
    ports:
      - '4500:80' # <host port>:<container port>
    # volumes:
    #   - ../data/ipfsdata:/home/safeuser/ipfs-service-provider/.ipfsdata
    restart: always

```

`/home/trout/work/psf/code/bch-dex/production/rpi-docker/p2wdb/start-production.sh`:

```sh
#!/bin/bash

# BEGIN: Optional configuration settings

# This mnemonic is used to set up persistent public key for e2ee
# Replace this with your own 12-word mnemonic.
export MNEMONIC="mass response fiscal world message exact series swallow forward confirm canoe festival"

# The human readable name this IPFS node identifies as.
export COORD_NAME=generic-p2wdb-production

# Allow this node to function as a circuit relay. It must not be behind a firewall.
#export ENABLE_CIRCUIT_RELAY=true
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

# Debug level. 0 = minimal info. 2 = max info.
# This value set by docker-compose.yml
#export DEBUG_LEVEL=1

# Log-in information for retrieving a JWT token from FullStack.cash.
export FULLSTACKLOGIN=demo@demo.com
export FULLSTACKPASS=demo

# END: Optional configuration settings


# Production database connection string.
export DBURL=mongodb://172.17.0.1:5666/p2wdb-service-dev

# Configure IPFS ports
export IPFS_TCP_PORT=5668
export IPFS_WS_PORT=5669

# Configure REST API port
export PORT=5667

export P2W_ENV=production
export IPFS_HOST=172.17.0.1
export IPFS_API_PORT=5001
export IPFS_TCP_PORT=4001
export IPFS_WS_PORT=4003
export IPFS_WEB_RTC_PORT=4005
# Set the debug level for helia-coord. 0-3.
# 0 = no debug logs. 3 = maximum debug logs.
export DEBUG_LEVEL=0

# Use this if the IPFS node has a publically accessible IP address.
#export CONNECT_PREF=direct
# Use this if the IPFS node is behind a NAT or Firewall and cannot be accessed directly.
export CONNECT_PREF=cr

npm start

```

`/home/trout/work/psf/code/bch-dex/production/rpi-docker/p2wdb/dummyapp.js`:

```js
setInterval(function () {
  const now = new Date()
  console.log(`ping ${now.toLocaleString()}`)
}, 10000)

```

`/home/trout/work/psf/code/bch-dex/production/rpi-docker/p2wdb/Dockerfile`:

```
# Create a Docker container for the P2WDB
#

#IMAGE BUILD COMMANDS
FROM ubuntu:20.04
MAINTAINER Chris Troutner <chris.troutner@gmail.com>

#Update the OS and install any OS packages needed.
RUN apt-get update
RUN apt-get install -y sudo git curl nano gnupg wget

#Install Node and NPM
RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs build-essential

#Create the user 'safeuser' and add them to the sudo group.
RUN useradd -ms /bin/bash safeuser
RUN adduser safeuser sudo

#Set password to 'abcd8765' change value below if you want a different password
RUN echo safeuser:abcd8765 | chpasswd

#Set the working directory to be the users home directory
WORKDIR /home/safeuser

#Setup NPM for non-root global install (like on a mac)
RUN mkdir /home/safeuser/.npm-global
RUN chown -R safeuser .npm-global
RUN echo "export PATH=~/.npm-global/bin:$PATH" >> /home/safeuser/.profile
RUN runuser -l safeuser -c "npm config set prefix '~/.npm-global'"

# Update to the latest version of npm.
#RUN npm install -g npm@7.23.0
RUN npm install -g npm

# npm mirror to prevent direct dependency on npm.
RUN npm set registry http://94.130.170.209:4873/

# Switch to user account.
#USER safeuser
# Prep 'sudo' commands.
#RUN echo 'abcd8765' | sudo -S pwd

# Clone the rest.bitcoin.com repository
RUN git clone https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service
WORKDIR /home/safeuser/ipfs-p2wdb-service
RUN mkdir .ipfsdata
RUN git checkout ct-unstable

#RUN npm install fsevents

# Install dependencies
#RUN mkdir .ipfsdata
RUN npm install

# Generate the API docs
RUN npm run docs

# Expose the port the API will be served on.
#EXPOSE 5010

# Start the application.
#COPY start-production.sh start-production.sh
CMD ["./start-production.sh"]

#CMD ["npm", "start"]

# Used for debugging
#COPY dummyapp.js dummyapp.js
#CMD ["node", "dummyapp.js"]

```

`/home/trout/work/psf/code/bch-dex/production/scripts/fullstack-sweep-wallet.js`:

```js
/*
  This script is the same as sweep-wallet.js, but it requires a FullStack.cash
  account, which makes the scanning much faster.
*/

// Public npm libraries
// const BCHJS = require('@psf/bch-js')
import BchTokenSweep from 'bch-token-sweep/index.js'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

// Constants
// const EMTPY_ADDR_CUTOFF = 10
const START_INDEX = 1
const LAST_ADDR_INDEX = 100

if (!process.env.BCHJSTOKEN) {
  console.log('You will need a JWT token from FullStack.cash to execute this script. Export it to the BCHJSTOKEN environment variable and try again.')
  process.exit(0)
}

async function sweepFunds () {
  try {
    // Configure the wallet library to use a FullStack.cash or a local Cash Stack
    const walletLib = new WalletAdapter()
    walletLib.config.useFullStackCash = true
    // walletLib.config.apiServer = 'http://192.168.2.129:3000/v5/'
    walletLib.config.apiServer = 'https://api.fullstack.cash/v5/'

    // Open the wallet files.
    const walletInfo = await openWallet(walletLib)
    const wallet = await walletLib.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = wallet.bchjs
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let emptyAddrCnt = 0
    let hdIndex = START_INDEX

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\nSweeping ${cashAddress} with private key ${wifToSweep}`)

      try {
        // Sweep tokens from address
        const sweeper = new BchTokenSweep(
          wifToSweep,
          rootWif,
          wallet,
          550,
          rootAddr
        )
        await sweeper.populateObjectFromNetwork()

        const hex = await sweeper.sweepTo(rootAddr)
        // console.log(`hex: ${hex}`)

        const txid = await sweeper.blockchain.broadcast(hex)

        // console.log('Transaction ID', txid)
        console.log(`Swept HD index ${hdIndex}. TXID: ${txid}`)

        emptyAddrCnt = 0

        // Wait between loop iterations.
        await bchjs.Util.sleep(3000)
      } catch (err) {
        console.log(`error message with index ${hdIndex}: ${err.message}`)
        // console.log(err)
        emptyAddrCnt++
      }

      hdIndex++
      // } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)
      // console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)
    } while (hdIndex < LAST_ADDR_INDEX)
    console.log(`Last index of ${LAST_ADDR_INDEX} reached. emptyAddrCnt: ${emptyAddrCnt}`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
sweepFunds()

// Open the wallet file, or create one if the file doesn't exist.
// Does not instance the wallet. The output of this function is expected to
// be passed to instanceWallet().
async function openWallet (walletLib) {
  try {
    // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
    const walletData = await walletLib.jsonFiles.readJSON('./wallet.json')

    return walletData
  } catch (err) {
    console.error('Error in openWallet()')
    throw err
  }
}

```

`/home/trout/work/psf/code/bch-dex/production/scripts/bulk-sweep-wallet.js`:

```js
/*
  This script is similar ot sweep-wallet.js, but it can do a much faster (bulk)
  scanning of addresses. However, this requires a subscription to a FullStack.cash
  or access to a web2 Cash Stack.

  This script will scan 20 addresses at a time. If a balance is found in any
  of the addresses, it will sweep the funds from that address.
*/
/*
// Public npm libraries
import BchTokenSweep from 'bch-token-sweep/index.js'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'
import BCHJS from '@psf/bch-js'
import JwtLib from 'jwt-bch-lib'

// Constants
// const EMTPY_ADDR_CUTOFF = 100
const LAST_ADDR_INDEX = 100

if (!process.env.BCHJSTOKEN) {
  console.log('You will need a JWT token from FullStack.cash to execute this script. Export it to the BCHJSTOKEN environment variable and try again.')
  exit(0)
}

async function sweepFunds () {
  try {
    // Configure the wallet library to use a FullStack.cash or a local Cash Stack
    const walletLib = new WalletAdapter()
    walletLib.config.useFullStackCash = true
    walletLib.config.apiServer = 'http://192.168.2.129:3000/v5/'

    // const walletInfo = await walletLib.openWallet()
    const walletInfo = await openWallet(walletLib)
    const wallet = await walletLib.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Instantiate bch-js, and use the JWT token saved to environment variable.

    // Generate an HD tree
    // const bchjs = wallet.bchjs
    const bchjs = new BCHJS()
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    const emptyAddrCnt = 0
    const hdIndex = 1

    // Divide all the addresses by 20, since that's how many will be checked at once.
    const numOfLoops = Math.ceil(LAST_ADDR_INDEX / 20)

    for (let i = 1; i < numOfLoops; i++) {
      const startIndex = i
      const stopIndex = i * 20
      console.log(`startIndex: ${startIndex}, stopIndex: ${stopIndex}`)

      // Generate the next block of 20 key pairs to scan.
      const addrsToScan = []
      const wifsToScan = []
      for (let j = startIndex; j < stopIndex; j++) {
        // Generate a keypair from the HD wallet.
        const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${j}`)
        const cashAddress = bchjs.HDNode.toCashAddress(childNode)
        const wifToSweep = bchjs.HDNode.toWIF(childNode)

        addrsToScan.push(cashAddress)
        wifsToScan.push(wifToSweep)
      }
      console.log(`Scanning these addresses for a balance: ${JSON.stringify(addrsToScan, null, 2)}`)

      // Scan a block of 20 addresses for a balance.
      const balances = await bchjs.Electrumx.balance(addrsToScan)
      console.log(`balances: ${JSON.stringify(balances, null, 2)}`)

      // Scan through the results and look for a balance.
      for (let j = 0; j < balances.balances.length; j++) {
        const thisBalance = balances.balances[j]

        // const combinedBal = thisBalance.balance.confirmed + thisBalance.balance.

        // if(thisBalance.)
      }
    }

    // do {
    //   // Generate a keypair from the HD wallet.
    //   const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
    //   const cashAddress = bchjs.HDNode.toCashAddress(childNode)
    //   const wifToSweep = bchjs.HDNode.toWIF(childNode)
    //
    //   console.log(`\nSweeping ${cashAddress} with private key ${wifToSweep}`)
    //
    //   try {
    //     // Sweep tokens from address
    //     const sweeper = new BchTokenSweep(
    //       wifToSweep,
    //       rootWif,
    //       wallet,
    //       550,
    //       rootAddr
    //     )
    //     await sweeper.populateObjectFromNetwork()
    //
    //     const hex = await sweeper.sweepTo(rootAddr)
    //     // console.log(`hex: ${hex}`)
    //
    //     const txid = await sweeper.blockchain.broadcast(hex)
    //
    //     // console.log('Transaction ID', txid)
    //     console.log(`Swept HD index ${hdIndex}. TXID: ${txid}`)
    //
    //     emptyAddrCnt = 0
    //
    //     // Wait between loop iterations.
    //     await bchjs.Util.sleep(3000)
    //   } catch (err) {
    //     console.log(`error message with index ${hdIndex}: ${err.message}`)
    //     // console.log(err)
    //     emptyAddrCnt++
    //   }
    //
    //   hdIndex++
    // } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)
    //
    // console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)
    //
    // console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
sweepFunds()

// Open the wallet file, or create one if the file doesn't exist.
// Does not instance the wallet. The output of this function is expected to
// be passed to instanceWallet().
async function openWallet (walletLib) {
  try {
    // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
    const walletData = await walletLib.jsonFiles.readJSON('./wallet.json')

    return walletData
  } catch (err) {
    console.error('Error in openWallet()')
    throw err
  }
}
*/

```

`/home/trout/work/psf/code/bch-dex/production/scripts/sweep-wallet.js`:

```js
/*
  This script will travers the HD wallet and sweep funds and tokens back
  into the root address (index 0). That root address needs to have funds
  to pay for the transactions.
*/

// Public npm libraries
// const BCHJS = require('@psf/bch-js')
import BchTokenSweep from 'bch-token-sweep/index.js'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

// Constants
const EMTPY_ADDR_CUTOFF = 10

async function sweepFunds () {
  try {
    // Open the wallet files.
    const walletLib = new WalletAdapter()
    // const walletInfo = await walletLib.openWallet()
    const walletInfo = await openWallet(walletLib)
    const wallet = await walletLib.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = wallet.bchjs
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let emptyAddrCnt = 0
    let hdIndex = 1

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\nSweeping ${cashAddress} with private key ${wifToSweep}`)

      try {
        // Sweep tokens from address
        const sweeper = new BchTokenSweep(
          wifToSweep,
          rootWif,
          wallet,
          550,
          rootAddr
        )
        await sweeper.populateObjectFromNetwork()

        const hex = await sweeper.sweepTo(rootAddr)
        // console.log(`hex: ${hex}`)

        const txid = await sweeper.blockchain.broadcast(hex)

        // console.log('Transaction ID', txid)
        console.log(`Swept HD index ${hdIndex}. TXID: ${txid}`)

        emptyAddrCnt = 0

        // Wait between loop iterations.
        await bchjs.Util.sleep(3000)
      } catch (err) {
        console.log(`error message with index ${hdIndex}: ${err.message}`)
        // console.log(err)
        emptyAddrCnt++
      }

      hdIndex++
    } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)

    console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
sweepFunds()

// Open the wallet file, or create one if the file doesn't exist.
// Does not instance the wallet. The output of this function is expected to
// be passed to instanceWallet().
async function openWallet (walletLib) {
  try {
    // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
    const walletData = await walletLib.jsonFiles.readJSON('./wallet.json')

    return walletData
  } catch (err) {
    console.error('Error in openWallet()')
    throw err
  }
}

```

`/home/trout/work/psf/code/bch-dex/production/scripts/sweep-nfts.js`:

```js
/*
  This script will sweep the HD wallet, looking for NFTs. When found, it will
  send the NFT to the root (index 0) address. It will pay transaction fees from
  the root address.
*/

// Global npm libraries
import BchWallet from 'minimal-slp-wallet'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

// Constants
const EMTPY_ADDR_CUTOFF = 10
const WEB3_SERVER = 'https://free-bch.fullstack.cash'

async function sweepNfts () {
  try {
    // Open the wallet files.
    const walletLib = new WalletAdapter()
    // const walletInfo = await walletLib.openWallet()
    const walletInfo = await openWallet(walletLib)
    // const walletRoot = await walletLib.instanceWallet(walletInfo)
    const walletRoot = new BchWallet(walletInfo.mnemonic, {
      interface: 'consumer-api',
      restURL: WEB3_SERVER
    })
    await walletRoot.walletInfoPromise
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    // const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = walletRoot.bchjs
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let emptyAddrCnt = 0
    let hdIndex = 1

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\n${hdIndex}: Sweeping ${cashAddress} with private key ${wifToSweep}`)

      const walletChild = new BchWallet(wifToSweep, { interface: 'consumer-api', restURL: WEB3_SERVER })
      await walletChild.walletInfoPromise

      try {
        const tokens = await walletChild.tokens.listTokensFromAddress(cashAddress)
        // console.log(`tokens: ${JSON.stringify(tokens, null, 2)}`)

        await walletChild.utxos.initUtxoStore(cashAddress)
        // console.log(`utxoStore: ${JSON.stringify(utxoStore, null, 2)}`)

        for (let i = 0; i < tokens.length; i++) {
          const thisToken = tokens[i]

          if (thisToken.tokenType === 65) {
            console.log(`NFT ${thisToken.ticker} (${thisToken.name}) found. Sweeping to ${rootAddr}`)

            await walletRoot.initialize()

            // Send BCH to the child address, to pay for transaction fees.
            const receiver1 = [{
              address: cashAddress,
              amountSat: 10000
            }]
            const txid1 = await walletRoot.send(receiver1)
            console.log(`10,000 sats sent to child address. TXID: ${txid1}`)

            // Wait for indexers to update.
            console.log('Waiting for indexers to update...')
            await bchjs.Util.sleep(120000)

            await walletChild.initialize()

            // Send NFT to root address.
            const receiver2 = [{
              address: rootAddr,
              tokenId: thisToken.tokenId,
              qty: thisToken.qty
            }]
            const txid2 = await walletChild.sendTokens(receiver2)
            console.log(`NFT sent from child address to root address. TXID: ${txid2}`)

            // Wait for indexers to update.
            console.log('Waiting for indexers to update...')
            await bchjs.Util.sleep(3000)

            // Refresh the UTXO store.
            await walletChild.utxos.initUtxoStore(cashAddress)

            // Send the rest of the BCH back to the root address.
            const txid3 = await walletChild.sendAll(rootAddr)
            console.log(`Leftover BCH in child address sent to root address. TXID: ${txid3}`)

            emptyAddrCnt = 0
          }
        }

        // Wait between loop iterations.
        await bchjs.Util.sleep(3000)

        // emptyAddrCnt++
      } catch (err) {
        console.log(`error message with index ${hdIndex}: ${err.message}`)
        console.log(err)
        // emptyAddrCnt++
      }

      emptyAddrCnt++
      hdIndex++
    } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)

    console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.log('Error while sweeping NFTs: ', err)
  }
}
sweepNfts()

// Open the wallet file, or create one if the file doesn't exist.
// Does not instance the wallet. The output of this function is expected to
// be passed to instanceWallet().
async function openWallet (walletLib) {
  try {
    // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
    const walletData = await walletLib.jsonFiles.readJSON('./wallet.json')

    return walletData
  } catch (err) {
    console.error('Error in openWallet()')
    throw err
  }
}

```

`/home/trout/work/psf/code/bch-dex/production/scripts/create-wallet.js`:

```js
/*
  Generate a wallet.json file for use with the DEX.
*/

// Public NPM libraries
import BchWallet from 'minimal-slp-wallet'

import { promises as fs } from 'fs'

async function createWallet () {
  try {
    // Configure the minimal-slp-wallet library to use the JSON RPC over IPFS.
    const advancedConfig = {
      interface: 'consumer-api',
      noUpdate: true
    }

    // Wait for the wallet to be created.
    const bchWallet = new BchWallet(undefined, advancedConfig)
    await bchWallet.walletInfoPromise
    const walletData = bchWallet.walletInfo
    walletData.nextAddress = 1

    // Save the wallet file to disk.
    await fs.writeFile('wallet.json', JSON.stringify(walletData, null, 2))

    console.log('Generated wallet.json. Copy this file to the docker/bch-dex folder to be used inside the Docker container.')
    console.log(`${JSON.stringify(walletData, null, 2)}`)
  } catch (err) {
    console.error('Error: ', err)
  }
}
createWallet()

```

`/home/trout/work/psf/code/bch-dex/production/scripts/create-order.js`:

```js
/*
  This script can be used to generate new Orders and Offers, until the UI for
  that is built.

  Customize the settings below to add your own Order. The token must exist in
  the DEX app wallet in order to be acceped.
*/

import axios from 'axios'

const LOCALHOST = 'http://localhost:5700'
// const LOCALHOST = 'http://172.17.0.1:5700'

async function start () {
  try {
    const mockOrder = {
      lokadId: 'SWP',
      messageType: 1,
      messageClass: 1,
      tokenId:
        'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      buyOrSell: 'sell',
      rateInBaseUnit: 5000,
      minUnitsToExchange: 5000,
      numTokens: 2
    }

    const options = {
      method: 'post',
      url: `${LOCALHOST}/order`,
      data: { order: mockOrder }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()

```

`/home/trout/work/psf/code/bch-dex/production/scripts/list-addrs.js`:

```js
/*
  This script is the same as sweep-wallet.js, but instead of sweeping the keys,
  it simply lists out the addresses in the HD keychain. This is hany when trying
  to figure out which address a token was sent to.
*/

// Public npm libraries

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

// Constants
const START_INDEX = 1
const LAST_ADDR_INDEX = 100

async function listAddrs () {
  try {
    // Configure the wallet library to use a FullStack.cash or a local Cash Stack
    const walletLib = new WalletAdapter()

    // Open the wallet files.
    const walletInfo = await openWallet(walletLib)
    const wallet = await walletLib.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    // const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = wallet.bchjs
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let hdIndex = START_INDEX

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      // const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`HD Index ${hdIndex}: ${cashAddress}`)

      hdIndex++
    } while (hdIndex < LAST_ADDR_INDEX)
    console.log(`Last index of ${LAST_ADDR_INDEX} reached.`)
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
listAddrs()

// Open the wallet file, or create one if the file doesn't exist.
// Does not instance the wallet. The output of this function is expected to
// be passed to instanceWallet().
async function openWallet (walletLib) {
  try {
    // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
    const walletData = await walletLib.jsonFiles.readJSON('./wallet.json')

    return walletData
  } catch (err) {
    console.error('Error in openWallet()')
    throw err
  }
}

```

`/home/trout/work/psf/code/bch-dex/production/docker/cleanup-images.sh`:

```sh
#!/bin/bash

# Remove all untagged docker images.
docker rmi $(docker images | grep "^<none>" | awk '{print $3}')


```

`/home/trout/work/psf/code/bch-dex/production/docker/bch-dex-ui/Dockerfile`:

```
# Create a Dockerized API server
#

#IMAGE BUILD COMMANDS
# ct-base-ubuntu = ubuntu 18.04 + nodejs v10 LTS
#FROM christroutner/ct-base-ubuntu
FROM ubuntu:20.04 as builder
MAINTAINER Chris Troutner <chris.troutner@gmail.com>

#Update the OS and install any OS packages needed.
RUN apt-get update
RUN apt-get install -y sudo git curl nano gnupg wget

#Install Node and NPM
RUN curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs build-essential

#Create the user 'safeuser' and add them to the sudo group.
#RUN useradd -ms /bin/bash safeuser
#RUN adduser safeuser sudo

#Set password to 'password' change value below if you want a different password
#RUN echo safeuser:password | chpasswd

#Set the working directory to be the home directory
WORKDIR /home/safeuser

#Setup NPM for non-root global install
#RUN mkdir /home/safeuser/.npm-global
#RUN chown -R safeuser .npm-global
#RUN echo "export PATH=~/.npm-global/bin:$PATH" >> /home/safeuser/.profile
#RUN runuser -l safeuser -c "npm config set prefix '~/.npm-global'"

# Update to the latest version of npm.
#RUN npm install -g npm@7.23.0
#RUN npm install -g npm

# npm mirror to prevent direct dependency on npm.
#RUN npm set registry http://94.130.170.209:4873/

# Switch to user account.
#USER safeuser
# Prep 'sudo' commands.
#RUN echo 'abcd8765' | sudo -S pwd

# Clone the rest.bitcoin.com repository
WORKDIR /home/safeuser
RUN git clone https://github.com/Permissionless-Software-Foundation/bch-dex-ui-v3

# Switch to the desired branch. `master` is usually stable,
# and `stage` has the most up-to-date changes.
WORKDIR /home/safeuser/bch-dex-ui-v3

# For development: switch to unstable branch
RUN git checkout ct-unstable

# Install dependencies
#RUN mkdir .ipfsdata
#RUN npm install -g @mapbox/node-pre-gyp
RUN npm install

# Build the site
RUN npm run build

# Load the NGINX image.
FROM nginx
EXPOSE 80

# Copy the files built in the first container to the new NGINX container.
COPY --from=builder /home/safeuser/bch-dex-ui-v3/build /usr/share/nginx/html

#USER safeuser

```

`/home/trout/work/psf/code/bch-dex/production/docker/bch-dex/start-production.sh`:

```sh
#!/bin/bash

# BEGIN: Optional configuration settings

# The human readable name this IPFS node identifies as.
export COORD_NAME=bch-dex-generic

# Allow this node to function as a circuit relay. It must not be behind a firewall.
#export ENABLE_CIRCUIT_RELAY=true
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

# Debug level. 0 = minimal info. 2 = max info.
export DEBUG_LEVEL=1

# END: Optional configuration settings


# Production database connection string.
export DBURL=mongodb://172.17.0.1:5666/bch-swap-service-prod

# Configure REST API port
export PORT=5700

# bch-dex specific env vars
export BCH_DEX=prod
export WEBHOOKSERVICE=http://172.17.0.1:5667/webhook
export WEBHOOKTARGET=http://172.17.0.1:5700/p2wdb
export APP_ID=bch-dex-001

#export P2WDB_URL=http://172.17.0.1:5667

npm start

```

`/home/trout/work/psf/code/bch-dex/production/docker/bch-dex/dummy-app.js`:

```js
setInterval(function () {
  const now = new Date()
  console.log(`timestamp: ${now.toLocaleString()}`)
}, 5000)

```

`/home/trout/work/psf/code/bch-dex/production/docker/bch-dex/Dockerfile`:

```
# Create a Dockerized API server
#

#IMAGE BUILD COMMANDS
# ct-base-ubuntu = ubuntu 18.04 + nodejs v10 LTS
#FROM christroutner/ct-base-ubuntu
FROM ubuntu:20.04
MAINTAINER Chris Troutner <chris.troutner@gmail.com>

#Update the OS and install any OS packages needed.
RUN apt-get update
RUN apt-get install -y sudo git curl nano gnupg wget

#Install Node and NPM
RUN curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs build-essential

#Create the user 'safeuser' and add them to the sudo group.
#RUN useradd -ms /bin/bash safeuser
#RUN adduser safeuser sudo

#Set password to 'password' change value below if you want a different password
#RUN echo safeuser:password | chpasswd

#Set the working directory to be the home directory
WORKDIR /home/safeuser

#Setup NPM for non-root global install
#RUN mkdir /home/safeuser/.npm-global
#RUN chown -R safeuser .npm-global
#RUN echo "export PATH=~/.npm-global/bin:$PATH" >> /home/safeuser/.profile
#RUN runuser -l safeuser -c "npm config set prefix '~/.npm-global'"

# Update to the latest version of npm.
#RUN npm install -g npm@7.23.0
#RUN npm install -g npm

# npm mirror to prevent direct dependency on npm.
RUN npm set registry http://94.130.170.209:4873/

# Switch to user account.
#USER safeuser
# Prep 'sudo' commands.
#RUN echo 'abcd8765' | sudo -S pwd

# Clone the rest.bitcoin.com repository
WORKDIR /home/safeuser
RUN git clone https://github.com/Permissionless-Software-Foundation/bch-dex

# Switch to the desired branch. `master` is usually stable,
# and `stage` has the most up-to-date changes.
WORKDIR /home/safeuser/bch-dex

# For development: switch to unstable branch
RUN git checkout ct-unstable

# Install dependencies
#RUN mkdir .ipfsdata
#RUN npm install -g @mapbox/node-pre-gyp
RUN npm install

# Generate the API docs
RUN npm run docs

# Copy the wallet files
#COPY wallet.json wallet.json

#VOLUME /home/safeuser/keys

# Expose the port the API will be served on.
#EXPOSE 5010

# Start the application.
CMD ["./start-production.sh"]

#CMD ["npm", "start"]

# Used for debugging
#COPY dummy-app.js dummy-app.js
#CMD ["node", "dummy-app.js"]

```

`/home/trout/work/psf/code/bch-dex/production/docker/docker-compose.yml`:

```yml
# Start the service with the command 'docker-compose up -d'

version: '3.9'

services:
  mongo-dex:
    image: mongo:4.2.0
    container_name: mongo-dex
    ports:
      - '5666:27017' # <host port>:<container port>
    volumes:
      - ../data/database:/data/db
    command: mongod --logpath=/dev/null # -- quiet
    restart: always

  bch-dex:
    build:
      context: ./bch-dex/
      dockerfile: Dockerfile
    #image: christroutner/bch-dex:v2.2.4
    container_name: bch-dex
    environment:
      CONSUMER_URL: 'https://free-bch.fullstack.cash'
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '10'
    mem_limit: 1000mb
    links:
      - mongo-dex
      #- p2wdb
    ports:
      # <host port>:<container port>
      - '5700:5700' # REST API
      - '4001:4001' # TCP
      - '4003:4003' # Websockets
      - '4005:4005' # WebRTC

    volumes:
      - ../scripts/wallet.json:/home/safeuser/bch-dex/wallet.json
      - ./bch-dex/start-production.sh:/home/safeuser/bch-dex/start-production.sh
    restart: always

  dex-ui:
    build:
      context: ./bch-dex-ui/
      dockerfile: Dockerfile
    #image: christroutner/bch-dex-ui:v1.2.4
    container_name: dex-ui
    environment:
      SERVER: 'http://172.17.0.1'
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '10'
    mem_limit: 1000mb
    links:
      - bch-dex
    ports:
      - '4500:80' # <host port>:<container port>
    # volumes:
    #   - ../data/ipfsdata:/home/safeuser/ipfs-service-provider/.ipfsdata
    restart: always

```

`/home/trout/work/psf/code/bch-dex/util/orders/deleteOrders.js`:

```js
import mongoose from 'mongoose'

// Force test environment
// make sure environment variable is set before this file gets called.
// see test script in package.json.
// process.env.KOA_ENV = 'test'
import config from '../../config'

import User from '../../src/models/users'

async function deleteUsers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  // Get all the users in the DB.
  const users = await User.find({}, '-password')
  // console.log(`users: ${JSON.stringify(users, null, 2)}`)

  // Delete each user.
  for (let i = 0; i < users.length; i++) {
    const thisUser = users[i]
    await thisUser.remove()
  }

  mongoose.connection.close()
}

deleteUsers()

```

`/home/trout/work/psf/code/bch-dex/util/orders/getOrders.js`:

```js
import mongoose from 'mongoose'
import config from '../../config/index.js'
import Order from '../../src/adapters/localdb/models/order.js'

async function getOrder () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const orders = await Order.find({})
  console.log(`orders: ${JSON.stringify(orders, null, 2)}`)

  mongoose.connection.close()
}
getOrder()

```

`/home/trout/work/psf/code/bch-dex/util/users/delete-all-test-users.js`:

```js
import mongoose from 'mongoose'

// Force test environment
// make sure environment variable is set before this file gets called.
// see test script in package.json.
// process.env.KOA_ENV = 'test'
import config from '../../config/index.js'

import User from '../../src/models/users/js'

async function deleteUsers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  // Get all the users in the DB.
  const users = await User.find({}, '-password')
  // console.log(`users: ${JSON.stringify(users, null, 2)}`)

  // Delete each user.
  for (let i = 0; i < users.length; i++) {
    const thisUser = users[i]
    await thisUser.remove()
  }

  mongoose.connection.close()
}

deleteUsers()

```

`/home/trout/work/psf/code/bch-dex/util/users/production/createUser.js`:

```js
/*
  Log in as an admin user to create a new user.
*/

// Global npm libraries
import axios from 'axios'
// import fs from 'fs'

// Local libraries
// import config from '../../../config/index.js'
// import User from '../../../src/adapters/localdb/models/users.js'

// Customize these variables
const EMAIL = 'someone@somewhere.com'
const NAME = 'Someone'
const PASSWORD = 'test'

const ADMIN_EMAIL = 'system@system.com'
const ADMIN_PASSWORD = 'admin'

async function createUser () {
  try {
    // Open the system-user-prod.json file
    // const systemUser = JSON.parse(fs.readFileSync('../../../config/system-user-prod.json', 'utf8'))

    // Log in as the admin user
    const adminLogin = {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    }
    const response = await axios.post('http://localhost:5700/auth', adminLogin)
    console.log(`response: ${JSON.stringify(response.data, null, 2)}`)

    const jwt = response.data.token

    // Create a new user, using the admin credentials
    const options = {
      method: 'post',
      url: 'http://localhost:5700/users/',
      headers: {
        Authorization: `Bearer ${jwt}`
      },
      data: {
        user: {
          email: EMAIL,
          name: NAME,
          password: PASSWORD
        }
      }
    }
    const result = await axios(options)
    console.log(`result: ${JSON.stringify(result.data, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
createUser()

```

`/home/trout/work/psf/code/bch-dex/util/users/production/getUsers.js`:

```js
import mongoose from 'mongoose'
// import config from '../../config/index.js'
import User from '../../../src/adapters/localdb/models/users.js'

const mongooseConnectStr = 'mongodb://172.17.0.1:5666/bch-swap-service-prod'

async function getUsers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(
    mongooseConnectStr,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  const users = await User.find({}, '-password')
  console.log(`users: ${JSON.stringify(users, null, 2)}`)

  mongoose.connection.close()
}
getUsers()

```

`/home/trout/work/psf/code/bch-dex/util/users/createUsers.js`:

```js
import mongoose from 'mongoose'
import config from '../../config/index.js'
import User from '../../src/adapters/localdb/models/users.js'

const EMAIL = process.env.EMAIL || 'test@test3.com'
const PASSWORD = process.env.PASSWORD || 'pass'

async function addUser () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(
    config.database,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  const userData = {
    email: EMAIL,
    password: PASSWORD
  }

  const user = new User(userData)

  // Enforce default value of 'user'
  user.type = 'user'

  await user.save()

  await mongoose.connection.close()

  console.log(`User ${EMAIL} created.`)
}
addUser()

export default {
  addUser
}

```

`/home/trout/work/psf/code/bch-dex/util/users/dev/createUser.js`:

```js
/*
  Use the system-user-dev.json file to log in as the admin user
  and create a new user.
*/

// Global npm libraries
import axios from 'axios'
import fs from 'fs'

// Local libraries
// import config from '../../../config/index.js'
// import User from '../../../src/adapters/localdb/models/users.js'

// Customize these variables
const EMAIL = 'test@test.com'
const NAME = 'tester'
const PASSWORD = 'test'

async function createUser () {
  try {
    // Open the system-user-dev.json file
    const systemUser = JSON.parse(fs.readFileSync('../../../config/system-user-dev.json', 'utf8'))

    // Log in as the admin user
    const adminLogin = {
      email: systemUser.email,
      password: systemUser.password
    }
    const response = await axios.post('http://localhost:5700/auth', adminLogin)
    console.log(`response: ${JSON.stringify(response.data, null, 2)}`)

    const jwt = response.data.token

    // Create a new user, using the admin credentials
    const options = {
      method: 'post',
      url: 'http://localhost:5700/users/',
      headers: {
        Authorization: `Bearer ${jwt}`
      },
      data: {
        user: {
          email: EMAIL,
          name: NAME,
          password: PASSWORD
        }
      }
    }
    const result = await axios(options)
    console.log(`result: ${JSON.stringify(result.data, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
createUser()

```

`/home/trout/work/psf/code/bch-dex/util/users/dev/getUsers.js`:

```js
import mongoose from 'mongoose'
import config from '../../../config/index.js'
import User from '../../../src/adapters/localdb/models/users.js'

async function getUsers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(
    config.database,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  const users = await User.find({}, '-password')
  console.log(`users: ${JSON.stringify(users, null, 2)}`)

  mongoose.connection.close()
}
getUsers()

```

`/home/trout/work/psf/code/bch-dex/util/README.md`:

```md
This directory contains utility functions for managing the database.

```

`/home/trout/work/psf/code/bch-dex/util/wipe-test-db.js`:

```js
/*
  Utility app to wipe the test database.
*/

'use strict'

import mongoose from 'mongoose'
import config from '../config/index.js'

// Force test environment
process.env.KOA_ENV = 'test'

async function cleanDb () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, { useNewUrlParser: true })

  console.log(`mongoose.connection.collections: ${JSON.stringify(mongoose.connection.collections, null, 2)}`)

  for (const collection in mongoose.connection.collections) {
    const collections = mongoose.connection.collections
    if (collections.collection) {
      // const thisCollection = mongoose.connection.collections[collection]
      // console.log(`thisCollection: ${JSON.stringify(thisCollection, null, 2)}`)

      await collection.deleteMany()
    }
  }

  mongoose.connection.close()
}
cleanDb()

```

`/home/trout/work/psf/code/bch-dex/util/wallet/sweep-funds2.js`:

```js
/*
  This script will travers the HD wallet and sweep funds and tokens back
  into the root address (index 0). That root address needs to have funds
  to pay for the transactions.

  This version will traverse the HD index of the wallet until it reaches
  the value in the nextAddress property. This ensures that all UTXOs
  that could be used by the wallet have been swept.
*/

// Public npm libraries
import BCHJS from '@psf/bch-js'

import BchTokenSweep from 'bch-token-sweep'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

async function sweepFunds () {
  try {
    // Open the wallet files.
    const wallet = new WalletAdapter()
    const walletInfo = await wallet.openWallet()
    const bchWallet = await wallet.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const lastIndex = walletInfo.nextAddress

    const rootAddr = walletInfo.cashAddress
    const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = new BCHJS()
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let hdIndex = 1

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\nSweeping HD Index ${hdIndex} with address ${cashAddress}`)

      try {
        // Sweep tokens from address
        const sweeper = new BchTokenSweep(
          wifToSweep,
          rootWif,
          bchWallet,
          550,
          rootAddr
        )
        await sweeper.populateObjectFromNetwork()

        const hex = await sweeper.sweepTo(rootAddr)
        // console.log(`hex: ${hex}`)

        const txid = await sweeper.blockchain.broadcast(hex)

        // console.log('Transaction ID', txid)
        console.log(`Swept HD index ${hdIndex}. TXID: ${txid}`)

        // Wait between loop iterations.
        await bchjs.Util.sleep(3000)
      } catch (err) {
        console.log(`error message with index ${hdIndex}: ${err}`)
      }

      hdIndex++
    } while (hdIndex <= lastIndex)

    console.log(`${lastIndex} empty addresses detected. Exiting.`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
sweepFunds()

```

`/home/trout/work/psf/code/bch-dex/util/wallet/sweep-funds.js`:

```js
/*
  This script will travers the HD wallet and sweep funds and tokens back
  into the root address (index 0). That root address needs to have funds
  to pay for the transactions.

  The root address will make a final transaction to consolidate all tokens.
*/

// Public npm libraries
import BCHJS from '@psf/bch-js'

import BchTokenSweep from 'bch-token-sweep'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

// Constants
const EMTPY_ADDR_CUTOFF = 15

async function sweepFunds () {
  try {
    // Open the wallet files.
    const wallet = new WalletAdapter()
    const walletInfo = await wallet.openWallet()
    const bchWallet = await wallet.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = new BCHJS()
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let emptyAddrCnt = 0
    let hdIndex = 1

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\nSweeping ${cashAddress}`)

      try {
        // Sweep tokens from address
        const sweeper = new BchTokenSweep(
          wifToSweep,
          rootWif,
          bchWallet,
          550,
          rootAddr
        )
        await sweeper.populateObjectFromNetwork()

        const hex = await sweeper.sweepTo(rootAddr)
        // console.log(`hex: ${hex}`)

        const txid = await sweeper.blockchain.broadcast(hex)

        // console.log('Transaction ID', txid)
        console.log(`Swept HD index ${hdIndex}. TXID: ${txid}`)

        emptyAddrCnt = 0

        // Wait between loop iterations.
        await bchjs.Util.sleep(3000)
      } catch (err) {
        console.log(`error message with index ${hdIndex}: ${err}`)
        emptyAddrCnt++
      }

      hdIndex++
    } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)

    console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
sweepFunds()

```

`/home/trout/work/psf/code/bch-dex/util/offers/getOffers.js`:

```js
/*
  Get all Offers in the database.
*/

import mongoose from 'mongoose'

import config from '../../config/index.js'
import Offer from '../../src/adapters/localdb/models/offer.js'

async function getOffers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const offers = await Offer.find({})
  console.log(`offers: ${JSON.stringify(offers, null, 2)}`)

  mongoose.connection.close()
}
getOffers()

```

`/home/trout/work/psf/code/bch-dex/util/offers/deleteOffers.js`:

```js
/*
  This script has not been customized for offers yet.
*/

import mongoose from 'mongoose'

// Force test environment
// make sure environment variable is set before this file gets called.
// see test script in package.json.
// process.env.KOA_ENV = 'test'
import config from '../../config'

import User from '../../src/models/users'

async function deleteUsers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  // Get all the users in the DB.
  const users = await User.find({}, '-password')
  // console.log(`users: ${JSON.stringify(users, null, 2)}`)

  // Delete each user.
  for (let i = 0; i < users.length; i++) {
    const thisUser = users[i]
    await thisUser.remove()
  }

  mongoose.connection.close()
}

deleteUsers()

```

`/home/trout/work/psf/code/bch-dex/util/wipe-db.md`:

```md

Here's how to wipe the db:
1. mongo
2. use koa-server-dev
3. db.dropDatabase()
4. exit

```

`/home/trout/work/psf/code/bch-dex/CONTRIBUTING.md`:

```md
# Permissionless Software Foundation Community Contributing Guide 1.0

This document describes a very simple process suitable for most projects under
the PSF umbrella. It is based on [this Medium article](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951) and the [Node.js Community Contribution Guide](https://github.com/nodejs/TSC/blob/master/BasePolicies/CONTRIBUTING.md).
Projects are encouraged to adopt this whether they
are hosted under the PSF or not.

The goal of this document is to create a contribution process that:

* Encourages new contributions.
* Encourages contributors to remain involved.
* Avoids unnecessary processes and bureaucracy whenever possible.
* Creates a transparent decision making process which makes it clear how
contributors can be involved in decision making.

This document is based on much prior art in the Node.js community, io.js,
and the Node.js project.

Additional guidance can be found at the [Permissionless Software Foundation Telegram Channel](https://t.me/permissionless_software).

## Vocabulary

* A **Contributor** is any individual creating or commenting on an issue or pull request.
* A **Committer** is a subset of contributors who have been given write access to the repository.
* A **TC (Technical Committee)** is a group of committers representing the required technical
expertise to resolve rare disputes.

# Logging Issues

Log an issue for any question or problem you might have. When in doubt, log an issue,
any additional policies about what to include will be provided in the responses. The only
exception is security disclosures which should be sent privately.

Committers may direct you to another repository, ask for additional clarifications, and
add appropriate metadata before the issue is addressed.

Please be courteous, respectful, and every participant is expected to follow the
project's Code of Conduct.

# Contributions

Any change to resources in this repository must be through pull requests. This applies to all changes
to documentation, code, binary files, etc. Even long term committers and TC members must use
pull requests.

No pull request can be merged without being reviewed.

For non-trivial contributions, pull requests should sit for at least 36 hours to ensure that
contributors in other timezones have time to review. Consideration should also be given to
weekends and other holiday periods to ensure active committers all have reasonable time to
become involved in the discussion and review process if they wish.

The default for each contribution is that it is accepted once no committer has an objection.
During review committers may also request that a specific contributor who is most versed in a
particular area gives a "LGTM" before the PR can be merged. There is no additional "sign off"
process for contributions to land. Once all issues brought by committers are addressed it can
be landed by any committer.

In the case of an objection being raised in a pull request by another committer, all involved
committers should seek to arrive at a consensus by way of addressing concerns being expressed
by discussion, compromise on the proposed change, or withdrawal of the proposed change.

If a contribution is controversial and committers cannot agree about how to get it to land
or if it should land then it should be escalated to the TC. TC members should regularly
discuss pending contributions in order to find a resolution. It is expected that only a
small minority of issues be brought to the TC for resolution and that discussion and
compromise among committers be the default resolution mechanism.

# Becoming a Committer

All contributors who land a non-trivial contribution should be on-boarded in a timely manner,
and added as a committer, and be given write access to the repository.

Committers are expected to follow this policy and continue to send pull requests, go through
proper review, and have other committers merge their pull requests.

# TC Process

The TC uses a "consensus seeking" process for issues that are escalated to the TC.
The group tries to find a resolution that has no open objections among TC members.
If a consensus cannot be reached that has no objections then a majority wins vote
is called. It is also expected that the majority of decisions made by the TC are via
a consensus seeking process and that voting is only used as a last-resort.

Resolution may involve returning the issue to committers with suggestions on how to
move forward towards a consensus. It is not expected that a meeting of the TC
will resolve all issues on its agenda during that meeting and may prefer to continue
the discussion happening among the committers.

Members can be added to the TC at any time. Any committer can nominate another committer
to the TC and the TC uses its standard consensus seeking process to evaluate whether or
not to add this new member. Members who do not participate consistently at the level of
a majority of the other members are expected to resign.

```

`/home/trout/work/psf/code/bch-dex/LICENSE.md`:

```md
The MIT License (MIT)
Copyright (c) 2021-2024 Permissionless Software Foundation

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```

`/home/trout/work/psf/code/bch-dex/install-mongo.sh`:

```sh
#!/bin/bash
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
sudo systemctl enable mongod

```

`/home/trout/work/psf/code/bch-dex/dev-docs/README.md`:

```md
# Developer Documentation

This is living documentation that will be updated, edited, and changed over time, using the same version control as the rest of the code. The purpose of this documentation is to capture and explain how the `bch-dex` interacts with the [P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service), to create a permissionless, censorship-resistant database for storing trading orders. A web client will be built in the future that will interact with the REST API of this app.

- [Specification](./specification.md)

# Overview

There are three major pieces of software behind the bch-dex concept. They work together to form a censorship-resistant application for exchanging transaction data for building trades.

![bch-dex major subcomponents](./diagrams/software-interaction.png)

- _Client_ could be a web browser like [wallet.fullstack.cash](https://bchn-wallet.fullstack.cash), or a command-line client like [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet) or [psf-avax-wallet](https://github.com/Permissionless-Software-Foundation/psf-avax-wallet).
- [bch-dex](https://github.com/Permissionless-Software-Foundation/bch-dex) is the back end REST API that maintains a local database of information that the client reads from.
- [P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) is the pay-to-write global database with a REST API for interfacing with the other two pieces of software.

The arrows in the image represent the information flow between the three pieces of software:

- The _Client_ is essentially a 'dummy terminal' with a bidirectional interface to bch-dex. bch-dex does the heavy lifting, and the _Client_ is a 'thin' UI wrapper.
- `bch-dex` imports data from the global P2WDB database into its local database, using a [webhook](https://en.wikipedia.org/wiki/Webhook) (dashed line). It can also custody funds, pay transaction fees, and create an _Offer_ by creating an _Order_ and submitting the data to the P2WDB (solid line).

This architecture keeps the global database highly censorship resistant, while allowing local installations to maintain tight control over the user experience. The goal is to have many redundant copies of `bch-dex` on the network, and to empower individual traders to run their own, private copy, while maintaining a single source of truth via the P2WDB.

# Definitions

The workflow of a token trade has three parts:
1. **Make** - An *Offer* to buy or sell tokens is generated by a user, known as the *Maker*.
2. **Take** - A second user, known as a *Taker*, will *take* the *Offer* by issuing a *Counter Offer*
3. **Accept** - The original *Maker* checks the *Counter Offer* and *Accepts* it by signing and then broadcasting the transaction.

Trades done in this way are both *trustless* and *atomic*:
- **Trustless** - This means that neither party needs to trust the other. The *Maker* gets to review the *Counter Offer* before broadcasting it. The *Maker* can not alter the *Counter Offer* after the *Taker* has signed it.
- **Atomic** - The trade happens in a single transaction. There is no middle-state where the trade can get stuck. It either happens or doesn't, it's state is binary and atomic.

Specific *Entities* are defined in the [specification](./specification.md), but here is a brief summary:
- **Order** represents the *Maker* side of the trade. This entity is internal to `bch-dex`. It is used to track tokens set aside for sale and managed by the wallet controlled by `bch-dex`.
- **Offer** contains most of the same information as an **Order**, but is external to `bch-dex`. This is data submitted to the P2WDB and visible to all users on the network.
- **Counter Offer** is generated by a *Taker*, in order to take the other side of the trade. It contains a partially-signed transaction, ready for review by the *Maker*.

# Back End

This section provides additional information on `bch-dex` and P2WDB back end software.

## P2WDB

The heart of the censorship resistance is the pay-to-write database ([P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service)). This is an [OrbitDB](https://orbitdb.org/) peer-to-peer (p2p) database. The write-access rules have been customized to allow anyone to write to the database, so long as they prove that a sufficient quantity of [PSF tokens](https://psfoundation.cash) have been burned, to pay for the write.

Because OrbitDB is a p2p database, no one party holds the 'official' copy of the database. Instead, like a blockchain, the database is replicated among several peers, and they coordinate updates to the database using consensus rules. Peers are free to leave or enter the network. Each peer independently verifies the database entries have sufficient proof-of-burn.

## `bch-dex`

The `bch-dex` replicates a copy of the global P2WDB, but has the ability to apply localized filters to the data before passing it on to the _Client_, to be displayed.

`bch-dex` is based on this [ipfs-service-provider boilerplate](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider). It's a production-ready template for a web server, providing interfaces via REST API over HTTP, as well as JSON RPC over IPFS. It includes many features for building a web app. This includes user management and authentication, REST API and JSON RPC scaffolding, API documentation, Docker container generation, and extensive test coverage. It's intended to be customized for the needs of the website administrator.

- [Specification](./specification.md)

# Workflows

This section describes the protocols for the database interactions between the three main software components.

These are just a brief, high-level overview. Review the [Specifications](./specification.md) for more details.

## Reading from the Local Database

The *Client* reads data from the local database stored by `bch-dex`, and does not read the P2WDB global database directly. This gives `bch-dex` the opportunity to filter and modify the data locally, for a more controlled user experience.

## Making an Offer

Adding data to the global P2WDB is triggered by the _Client_ calling a REST API endpoint on `bch-dex`. The [p2wdb npm library](https://www.npmjs.com/package/p2wdb) can be leveraged for easy reading and writing to the P2WDB.

Writing data follows these steps:

- Tokens and BCH are held by a wallet which is under the controlled of `bch-dex`.
- The _Client_ submits data to the POST `/order` REST API endpoint to create a new Order.
- `bch-dex` will move the funds into a segregated UTXO, and will use that UTXO to create an Order. The Order data is written to the P2WDB. The Order data is also saved to the local MongoDB.
- After submitting the data to the P2WDB, `bch-dex` will receive a webhook call to its POST `/p2wdb` endpoint by the P2WDB. This event will trigger the import of the new data into the apps local Mongo database, and generate a new Offer model.
- This webhook event is mirrored by every instance of `bch-dex` on the network. Each P2WDB peer on the network will independently validate the new database entry and create a new Offer model.

## Taking an Offer

Users can browse the Offers tracked by a local `bch-dex` by using a *Client*. When they find an Offer they want to to take, they'll use some UI element that will send data to the POST `/offer/take` REST API endpoint. These series of steps happen:

- The `bch-dex` checks to see if the wallet it controls has enough BCH to take the other side of the Offer. If it does, the funds for the offer are moved to a segregated UTXO.
- The new UTXO is used to generate a *Counter Offer*, which contains a partially signed transaction saved as a hex string.
- The *Counter Offer* is uploaded to the P2WDB. This triggers a webhook event in every running instance of `bch-dex` on the network.
- When the webhook is triggered, `bch-dex` will check to see if the *Counter Offer* matches an *Order* under its control. If a match is found, it will trigger an *Accept* event.

## Accepting a Counter Offer

This part of the process is automated and does not require input from the user.

- When a *Counter Offer* is received that matches an *Order* tracked by the local copy of `bch-dex`, it will trigger the *Acceptance* phase.
- In the *Acceptance* phase, the transaction will be checked to see if it matches the conditions in the original *Order*. If all checks pass, `bch-dex` will sign the transaction and broadcast it, completing the trade.
- A 'garbage collection' function that runs periodically will delete Orders and Offers in bch-dex that have had their UTXO spent, automatically cleaning up stale trade data that is no longer valid.

## Maintenance

Occasional maintenance functions will be called by an interval timer. The primary purpose of these functions is to check the UTXOs in the Order, Offer, and Counter Offer entities. If any of these UTXOs are spent, the entity is deleted from the local Mongo database.

```

`/home/trout/work/psf/code/bch-dex/dev-docs/specification.md`:

```md
# bch-dex Specification

This document contains a high-level, human-readable specification for the four major architectural areas of the bch-dex:

- Entities
- Use Cases
- Controllers (inputs)
- Adapters (outputs)

This reflects the [Clean Architecture](https://bafybeiajggd4zju7oen627bcy5l32hrxqomoqzvwqfir6phzgducozksv4.ipfs.dweb.link/blog/clean-architecture) design pattern.

## Entities

Entities make up the core business concepts. If these entities change, they fundamentally change the entire app.

### Order

An Order Entity is nearly the same as an Offer. The Order is generated first, but is always internal to the bch-dex system. Most of the data in an Order is submitted to the P2WDB, which generates an Offer (external) Entity.

The Order tracks the [HD index address](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc#hd-wallets-bip-32bip-44) used to hold tokens or BCH for sale. This is the part of the app concerned with the custody of the funds. It creates a segregated [UTXO](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch06.asciidoc#transaction-outputs-and-inputs) to hold the offered asset. The Order is automatically destroyed if the UTXO is spent.

Order entities have the following properties:

- Token Data:
  - _tokenId_ - The unique ID that identifies the class of token being offered for sale.
  - _utxoTxid_ - The TXID of the UTXO representing the token or BCH being offered for sale.
  - _utxoVout_ - The vout of the UTXO representing the token or BCH being offered for sale.

- Trade Data:
  - _buyOrSell_ - A string with a value `buy` or `sell` indicating which type of offer this is.
  - _numTokens_ - The maximum number of tokens offered for sale.
  - _rateInBaseUnit_ - The rate in terms of currency-unit-per-token. Ex: 1000 = 1000 sats per token
    - For Bitcoin, the min currency is sats.
    - For AVAX, the min currency is nano-Avax.
    - for eCash, the min currency is bits.
  - _minUnitsToExchange_ - The minimum order size accepted.
  - _makerAddr_ - The address for the taker to send money to.
  - _p2wdbTxid_ - The TXID proof-of-burn used to add the order to the P2WDB.
  - _p2wdbHash_ - The CID used to identify the order entry in the P2WDB.

- Authentication Data:
  - _signature_ - A message signed by the address which created the order.
  - _sigMsg_ - The clear-text message used to generate the signature.
  - _offerBchAddr_ - The BCH address controlling the offer.
  - _offerPubKey_ - The public key used to generate the BCH address, used for encryption.

- Wallet Data:
  - _hdIndex_ - The HD index of the wallet used to generate the keypair to store the UTXO being offered for sale.

- SWaP Protocol properties:
  - _lokadId_ - Not used. Provided for future functionality.
  - _messageType_ - Not used. Provided for future functionality.
  - _messageClass_ - Not used. Provided for future functionality.


### Offer

An offer is created from data passed to the app by the P2WDB webhook.
It is destroyed when the UTXO described in the Signal has been detected as spent.

Offer entities have the following properties:

- Token Data:
  - _tokenId_ - The unique ID that identifies the class of token being offered for sale.
  - _utxoTxid_ - The TXID of the UTXO representing the token or BCH being offered for sale.
  - _utxoVout_ - The vout of the UTXO representing the token or BCH being offered for sale.

- Trade Data:
  - _buyOrSell_ - A string with a value `buy` or `sell` indicating which type of offer this is.
  - _numTokens_ - The maximum number of tokens offered for sale.
  - _rateInBaseUnit_ - The rate in terms of currency-unit-per-token. Ex: 1000 = 1000 sats per token
    - For Bitcoin, the min currency is sats.
    - For AVAX, the min currency is nano-Avax.
    - for eCash, the min currency is bits.
  - _minUnitsToExchange_ - The minimum order size accepted.
  - _makerAddr_ - The address for the taker to send money to.
  - _p2wdbTxid_ - The TXID proof-of-burn used to add the order to the P2WDB.
  - _p2wdbHash_ - The CID used to identify the order entry in the P2WDB.
  - _offerStatus_ - The state of the offer. When the data is added to the P2WDB, it gets a value of 'posted', but the database model internal to bch-dex can have the following properties:
    - *posted* - The offer is posted and can be countered by a taker.
    - *taken* - The offer was countered and accepted.
    - *dead* - The UTXO was spent outside the trade, which automatically makes the offer dead.

- Authentication Data:
  - _signature_ - A message signed by the address which created the order.
  - _sigMsg_ - The clear-text message used to generate the signature.
  - _offerBchAddr_ - The BCH address controlling the offer.
  - _offerPubKey_ - The public key used to generate the BCH address, used for encryption.

- Utility Data:
  - _timestamp_ - The ISO time when the order was created.
  - _localTimestamp_ - The localized time when the order was created.

- SWaP Protocol properties:
  - _lokadId_ - Not used. Provided for future functionality.
  - _messageType_ - Not used. Provided for future functionality.
  - _messageClass_ - Not used. Provided for future functionality.

When an Offer is uploaded to the P2WDB, the following properties are added to the data:

- Added properties to P2WDB data:
  - *dataType* - Has a value of 'offer'. This is used to route the data correctly when the P2WDB webhook passes the data to `bch-dex`.

### Counter Offer

A Counter Offer is the other side of the trade, a mirror image to an Offer. It contains a partially signed transaction, created by the Taker. The Maker will review the Counter Offer before accepting and finalizing the trade.

Counter Offers are not tracked via database models like Offers and Orders are. They are processed by `bch-dex` as soon as they are received. A garbage collection function will be called periodically, to sweep the segregated UTXOs used to generate a Counter Offer back into the root address of the wallet, if it is not accepted after a period of time.

To generate a Counter Offer, a segregated UTXO is created that matches the requirements in the Offer. A partially signed transaction is created that includes the Offer UTXO and the Counter Offer UTXO. The Taker signs the input consuming the Counter Offer UTXO. The partially signed transaction and other trade data is uploaded to P2WDB.

When the Counter Offer data is uploaded to the P2WDB, the data must have the following properties:

- *partialTxHex* - A hexidecimal representation of the partially-signed transaction, which includes the UTXO in the Offer and a second UTXO for that matches the conditions in the Offer.
- *dataType* - Must have a value of `counter-offer`


## Use Cases

Use cases are verbs or actions that is done _to_ an Entity or _between_ Entities.

### Order

- **`createOrder()`** - A macro command that leverages the other functions in this library to create a new Order and submit it to the P2WDB.
- **`ensureFunds()`** - Ensure that the wallet has enough BCH and tokens to complete the requested trade.
- **`findOrderByHash()`** - Given a P2WDB CID 'hash', this function will return the corresponding Order model associated with that CID.

### Offer

- **`createOffer()`** - This method is triggered by a webhook from the P2WDB. It will take the data provided by the P2WDB and create a new Offer entity in the local database.
- **`listOffers()`** - Returns a list of all the active Offers tracked by `bch-dex`.
- **`takeOffer()`** - Generate a segregated UTXO and partially signed transaction, then upload the Counter Offer data to the P2WDB.
- **`ensureFunds()`** - Ensure the wallet has enough BCH and tokens to make a Counter Offer.
- **`findOfferByHash()`** - Given a P2WDB CID 'hash', this function will return the corresponding Offer model associated with that CID.
- **`acceptCounterOffer()`** - This function is triggered by the P2WDB webhook REST API handler. When a Counter Offer is passed to `bch-dex` by the P2WDB, the data is then passed to this function. It does due diligence on the Counter Offer, then signs and broadcasts the transaction to accept the Counter Offer.

## Controllers

Controllers are inputs to the system. When a controller is activated, it causes the system to react in some way.

### Orders

- **POST /order** - This POST REST API endpoint can be triggered by the Client or a simple curl call. It passes in the data needed for `bch-dex` to generate and track a new Order, then submits the data to the P2WDB to generate an Offer that is tracked by all other instances of `bch-dex` on the network.

### Offers

- **GET /offer/list** - Returns an array of objects, where each object represents an active Offer.

- **POST /offer/take** - Given the P2WDB CID of an Offer, calling this endpoint will attempt to generate a Counter Offer and upload it to the P2WDB.

### P2WDB

- **POST /p2wdb** - This POST REST API endpoint will be called by a webhook generated from the P2WDB. This will notify the `bch-dex` that a new entry has been added to the P2WDB that matches the `appId` of `swap-<chain>`, where `<chain>` has a value of `avax`, `bch`, or `ecash`. It's a new entry that should be evaluated for inclusion in the `bch-dex` local database. Based on the `dataType` property, the data is routed to either create a new Offer or to process a new Counter Offer.

## Adapters

Adapters are outputs. These libraries exist so that the business logic doesn't need to know any specific information about the I/O. They handle the low-level mechanics of the various subsystems.

- **localdb** - An adapter for the local database (MongoDB).
- **ipfs** - An adapter for IPFS and the ipfs-coord library. It allows the app to use the JSON-RPC over IPFS.
- **wallet** - Handles low-level wallet tasks.
  - **`moveTokens()`** - Move the tokens indicated in the order to a temporary holding address. This will generate the segregated UTXOs used in the trade. This function moves the funds and returns the UTXO information.
  - **`moveBCH()`** - Same idea as `moveTokens()`, but creates a non-SLP segregated UTXO, used when generating a Counter Offer.
  - **`openWallet()`** - Opens the JSON file containing the wallet data for the app.
  - **`instanceWallet()`** - Given the wallet data returned by `openWallet()`, it generates an instance of the [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) for generating UTXOs and interacting with the blockchain.
  - **`incrementNextAddress()`** - Increments the index of the [HD wallet](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc#hd_wallets) used to generate keypairs for storing segregated UTXOs.
  - **`getKeyPair()`** - Generates a keypair from the HD wallet.
  - **`generateSignature()`** - Generate a cryptographic signature.
  - **`generatePartialTx()`** - Create a partial transaction as part of a Counter Offer.
  - **`deseralizeTx()`** - Used only for debugging purposes. Expands a hex transaction into a JSON object.
  - **`completeTx()`** - Complete the partially signed transaction by signing the first input, then broadcasting the transaction to the network.

```

`/home/trout/work/psf/code/bch-dex/examples/README.md`:

```md
# Examples

Below are a series of JSON RPC calls that can be manually entered at chat.fullstack.cash to interact with the JSON RPC of this IPFS Service Provider.

- `{"jsonrpc":"2.0","id":"555","method":"users","params":{ "endpoint": "createUser", "email": "test555@test.com", "name": "testy tester", "password": "password"}}`<br />

- `{"jsonrpc":"2.0","id":"556","method":"auth","params":{ "endpoint": "authUser", "login": "test555@test.com", "password": "password"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "getAllUsers", "apiToken": "<JWT>"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "updateUser", "apiToken": "<JWT>", "userId": "<_id>", "name": "test999"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "getUser", "apiToken": "<JWT>", "userId": "<_id>"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "deleteUser", "userId": "<_id>", "apiToken": "<JWT>"}}`

```

`/home/trout/work/psf/code/bch-dex/apidoc.json`:

```json
{
    "sampleUrl": null

  }
```

`/home/trout/work/psf/code/bch-dex/config/index.js`:

```js
import common from './env/common.js'

import development from './env/development.js'
import production from './env/production.js'
import test from './env/test.js'

const env = process.env.BCH_DEX || 'development'
console.log(`Loading config for this environment: ${env}`)

let config = development
if (env === 'test') {
  config = test
} else if (env === 'prod') {
  config = production
}

export default Object.assign({}, common, config)

```

`/home/trout/work/psf/code/bch-dex/config/logs/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Logs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link href="/vendor/bootstrap.min.css" rel="stylesheet" media="screen" />
    <link href="/vendor/prettify.css" rel="stylesheet" media="screen" />
    <link href="/css/style.css" rel="stylesheet" media="screen, print" />
    <!-- <link href="img/favicon.ico" rel="icon" type="image/x-icon"> -->
    <script src="/vendor/polyfill.js"></script>
  </head>

  <body>
    <div class="container">
      <div class="row">
        <br />
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <p id="outMsg"><p>
        </div>
        <div class="col-sm-4"></div>
      </div>

      <!-- Password for accessing logs -->
      <div class="row loginForm">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputLogPass" class="col-sm-2 control-label"
              >Password</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputLogPass"
                placeholder=""
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button
                type="button"
                class="btn btn-default"
                onclick="viewLogs()"
              >
                View Logs
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="row logTable" style="visibility: hidden;">
        <div class="table-responsive">
          <table class="table">
            <tr>
              <th>Time</th>
              <th>Level</th>
              <th>Message</th>
            </tr>
            <tr class="tableTemplate">
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <script src="/vendor/jquery.min.js"></script>
    <script src="/vendor/bootstrap.min.js"></script>

    <script>
      async function viewLogs() {
        try {
          const pass = $('#inputLogPass').val()

          // if (pass === 'test') {


          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              password: pass
            })
          }
          const data = await fetch(`/logapi`, options)
          // console.log(`data.status: `, data.status)

          if (data.status > 399) {
            $('#outMsg').text('Could not communicate with log server.')
            throw new Error(`Could not get log data`)
          }

          const data2 = await data.json()
          // console.log(`data2: ${JSON.stringify(data2, null, 2)}`)

          if (!data2.success) {
            $('#outMsg').text('Incorrect password')
            throw new Error(`Incorrect password`)
          } else {
            $('#outMsg').text('')
          }

          $('.loginForm').css('visibility', 'hidden')
          $('.logTable').css('visibility', 'visible')

          const logData = data2.data
          // console.log(`logData: ${JSON.stringify(logData, null, 2)}`)

          // Clone the template row.
          const template = $('.tableTemplate')
          // debugger

          // Loop through the array of log data.
          for (let i = 0; i < logData.length; i++) {
            const thisRow = template.clone()
            const cols = thisRow.find('td')

            const time = new Date(logData[i].timestamp)
            // debugger

            cols.first().text(time.toLocaleString())
            cols.next().text(logData[i].level)
            cols.next().next().text(logData[i].message)
            // debugger

            $('.table').append(thisRow)
          }


          // } else {
          //   console.log(`password fail`)
          // }
        } catch (err) {
          console.error(`Error in viewLogs: `, err)
        }
      }
    </script>
  </body>
</html>

```

`/home/trout/work/psf/code/bch-dex/config/passport.js`:

```js
// import passport from 'koa-passport';
import User from '../src/adapters/localdb/models/users.js'
import Strategy from 'passport-local'

async function passportCallback (email, password, done) {
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return done(null, false)
    }

    try {
      const isMatch = await user.validatePassword(password)

      if (!isMatch) {
        return done(null, false)
      }

      done(null, user)
    } catch (err) {
      done(err)
    }
  } catch (err) {
    return done(err)
  }
}

function applyPassportMods (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id, '-password')
      done(null, user)
    } catch (err) {
      done(err)
    }
  })

  passport.use(
    'local',
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      passportCallback
    )
  )

  return true
}

export { applyPassportMods, passportCallback }

```

`/home/trout/work/psf/code/bch-dex/config/env/common.js`:

```js
/*
  This file is used to store unsecure, application-specific data common to all
  environments.

  Additional Environent Variables:
  - CONNECT_PREF: should have a value of 'cr' (default), or 'direct'. This is
    used by helia-coord to select a connection preference between peers. Servers
    with an ip4 or ip6 address should use 'direct'.
*/

/* eslint  no-unneeded-ternary:0 */

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'

// Get the version from the package.json file.
import { readFileSync } from 'fs'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const pkgInfo = JSON.parse(readFileSync(`${__dirname.toString()}/../../package.json`))

const version = pkgInfo.version

const ipfsCoordName = process.env.COORD_NAME
  ? process.env.COORD_NAME
  : 'ipfs-torlist-service-generic'

export default {
  // Configure TCP port.
  port: process.env.PORT || 5700,

  // Password for HTML UI that displays logs.
  logPass: 'test',

  // Email server settings if nodemailer email notifications are used.
  emailServer: process.env.EMAILSERVER
    ? process.env.EMAILSERVER
    : 'mail.someserver.com',
  emailUser: process.env.EMAILUSER
    ? process.env.EMAILUSER
    : 'noreply@someserver.com',
  emailPassword: process.env.EMAILPASS
    ? process.env.EMAILPASS
    : 'emailpassword',

  // PSF Web 3 community infrastructure
  useFullStackCash: process.env.USE_FULLSTACKCASH ? true : false,
  consumerUrl: process.env.CONSUMER_URL
    ? process.env.CONSUMER_URL
    : 'https://free-bch.fullstack.cash',
  // : 'https://wa-usa-bch-consumer.fullstackcash.nl',

  // P2WDB URL that will accept API calls from the p2wdb npm library.
  p2wdbUrl: process.env.P2WDB_URL ? process.env.P2WDB_URL : 'https://p2wdb.fullstack.cash',
  // p2wdbUrl: process.env.P2WDB_URL ? process.env.P2WDB_URL : 'http://localhost:5010',

  // Enable or Disable the usage of Mongo DB.
  noMongo: process.env.NO_MONGO ? true : false,

  // BEGIN WALLET CONFIGURATION

  // BCH Mnemonic for generating encryption keys and payment address
  mnemonic: process.env.MNEMONIC ? process.env.MNEMONIC : '',

  // (Optional) use a wallet file generated by psf-bch-wallet.
  walletFile: process.env.WALLET_FILE
    ? process.env.WALLET_FILE
    : `${__dirname.toString()}/../../wallet.json`,

  // Wallet Configuration
  // Default value: web3 - connect to bch-api through web 3 JSON RPC over IPFS.
  // Alternate value: web2 - connect to bch-api through a web 2 REST API over HTTP.
  walletInterface: process.env.WALLET_INTERFACE ? process.env.WALLET_INTERFACE : 'web3',

  // Wallet API Server
  // Default web2 server: https://api.fullstack.cash/v5/
  // Default web3 server: https://free-bch.fullstack.cash/
  apiServer: process.env.WALLET_INTERFACE === 'web2'
    ? (
        process.env.APISERVER
          ? process.env.APISERVER
          : 'https://api.fullstack.cash/v5/'
      )
    : 'https://free-bch.fullstack.cash/',

  // Basic Authentication Password for connecting to bch-api through a web 2
  // REST API over HTTP.
  authPass: process.env.WALLET_AUTH_PASS
    ? process.env.WALLET_AUTH_PASS
    : '',

  // FullStack.cash account information, used for automatic JWT handling.
  getJwtAtStartup: process.env.GET_JWT_AT_STARTUP ? true : false,
  authServer: process.env.AUTHSERVER
    ? process.env.AUTHSERVER
    : 'https://auth.fullstack.cash',
  fullstackLogin: process.env.FULLSTACKLOGIN
    ? process.env.FULLSTACKLOGIN
    : 'demo@demo.com',
  fullstackPassword: process.env.FULLSTACKPASS
    ? process.env.FULLSTACKPASS
    : 'demo',
  // authPass: process.env.FULLSTACK_AUTH_PASS
  //   ? process.env.FULLSTACK_AUTH_PASS
  //   : '',

  // END WALLET CONFIGURATION

  // BEGIN IPFS CONFIGURATION

  // Debug verbosity level of helia-coord.
  // 0 = no debug logs. 3 = maximum logs.
  debugLevel: process.env.DEBUG_LEVEL ? parseInt(process.env.DEBUG_LEVEL) : 2,

  // Enable/Disable the IPFS node at startup. Enabled by default.
  // useIpfs: process.env.DISABLE_IPFS ? false : true,
  useIpfs: false,

  isCircuitRelay: process.env.ENABLE_CIRCUIT_RELAY ? true : false,
  // SSL domain used for websocket connection via browsers.
  crDomain: process.env.CR_DOMAIN ? process.env.CR_DOMAIN : '',

  // Information passed to other IPFS peers about this node.
  apiInfo: 'https://ipfs-service-provider.fullstack.cash/',

  // JSON-LD and Schema.org schema with info about this app.
  announceJsonLd: {
    '@context': 'https://schema.org/',
    '@type': 'WebAPI',
    name: ipfsCoordName,
    version,
    protocol: 'generic-service',
    description: 'This is a generic IPFS Serivice Provider that uses JSON RPC over IPFS to communicate with it. This instance has not been customized. Source code: https://github.com/Permissionless-Software-Foundation/ipfs-service-provider',
    documentation: 'https://ipfs-service-provider.fullstack.cash/',
    provider: {
      '@type': 'Organization',
      name: 'Permissionless Software Foundation',
      url: 'https://PSFoundation.cash'
    },

    // If this node has an IP4 address or domain name used to provide a REST API.
    web2Api: process.env.WEB2_API ? process.env.WEB2_API : null
  },

  // P2WDB webhook endpoint
  p2wdbPort: process.env.P2WDB_PORT ? process.env.P2WDB_PORT : 5010,
  webhookService: process.env.WEBHOOKSERVICE
    ? process.env.WEBHOOKSERVICE
    : 'http://localhost:5010/webhook', // P2WDB.
  p2wdbAppId: process.env.APP_ID ? process.env.APP_ID : 'bch-dex-001',
  webhookTarget: process.env.WEBHOOKTARGET
    ? process.env.WEBHOOKTARGET
    : 'http://localhost:5700/p2wdb',

  // IPFS Ports
  ipfsTcpPort: process.env.IPFS_TCP_PORT ? process.env.IPFS_TCP_PORT : 4001,
  ipfsWsPort: process.env.IPFS_WS_PORT ? process.env.IPFS_WS_PORT : 4003,
  ipfsWebRtcPort: process.env.IPFS_WEB_RTC_PORT ? process.env.IPFS_WEB_RTC_PORT : 4005,
  connectPref: process.env.CONNECT_PREF, // Used in helia-coord to select connection preference.

  // Settings for production, using external go-ipfs node.
  isProduction: process.env.SVC_ENV === 'prod' ? true : false,
  ipfsHost: process.env.IPFS_HOST ? process.env.IPFS_HOST : 'localhost',
  ipfsApiPort: process.env.IPFS_API_PORT
    ? parseInt(process.env.IPFS_API_PORT)
    : 5001,

  chatPubSubChan: 'psf-ipfs-chat-001',

  // IPFS gateway
  ipfsGateway: process.env.IPFS_GATEWAY ? process.env.IPFS_GATEWAY : 'https://pin.fullstack.cash/ipfs/download/',

  // This can add specific Circuit Relay v2 servers to connect to.
  bootstrapRelays: [
    // v2 Circuit Relay (Token Tiger)
    // '/ip4/137.184.93.145/tcp/8001/p2p/12D3KooWGMEKkdJfyZbwdH9EafZbRTtMn7FnhWPrE4MhRty2763g',

    // v2 Circuit Relay server (FullStack.cash)
    // '/ip4/78.46.129.7/tcp/4001/p2p/12D3KooWFQ11GQ5NubsJGhYZ4X3wrAGimLevxfm6HPExCrMYhpSL'
  ],

  // END IPFS CONFIGURATION

  // Nostr
  nostrRelay: process.env.NOSTR_RELAY ? process.env.NOSTR_RELAY : 'wss://nostr-relay.psfoundation.info',
  nostrTopic: process.env.NOSTR_TOPIC ? process.env.NOSTR_TOPIC : 'bch-dex-test-topic-02',

  // Account Configuration
  disableNewAccounts: process.env.DISABLE_NEW_ACCOUNTS ? true : false,

  // Admin password
  adminPassword: process.env.ADMIN_PASSWORD
}

```

`/home/trout/work/psf/code/bch-dex/config/env/production.js`:

```js
/*
  These are the environment settings for the PRODUCTION environment.
  This is the environment run with `npm start` if KOA_ENV=production.
  This is the environment run inside the Docker container.

  It is assumed the MonogDB Docker container is accessed by port 5555
  so as not to conflict with the default host port of 27017 for MongoDB.
*/

export default {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  // database: 'mongodb://172.17.0.1:5555/ipfs-service-prod',
  database: process.env.DBURL
    ? process.env.DBURL
    : 'mongodb://172.17.0.1:5555/bch-swap-service-prod',
  env: 'prod'
}

```

`/home/trout/work/psf/code/bch-dex/config/env/development.js`:

```js
/*
  These are the environment settings for the DEVELOPMENT environment.
  This is the environment run by default with `npm start` if KOA_ENV is not
  specified.
*/

export default {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  database: 'mongodb://localhost:27017/bch-swap-service-dev',
  env: 'dev'
}

```

`/home/trout/work/psf/code/bch-dex/config/env/test.js`:

```js
/*
  These are the environment settings for the TEST environment.
  This is the environment run with `npm start` if KOA_ENV=test.
  This is the environment run by the test suite.
*/

export default {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  database: 'mongodb://localhost:27017/bch-swap-service-test',
  env: 'test',
  nostrRelay: 'wss://'
}

```

`/home/trout/work/psf/code/bch-dex/package.json`:

```json
{
  "name": "bch-dex",
  "version": "3.0.0",
  "description": "A DEX on BCH for trading SLP tokens.",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "test": "npm run test:all",
    "test:all": "export BCH_DEX=test && c8 --reporter=text mocha --exit --timeout 15000 --recursive test/unit test/e2e/automated/",
    "test:unit": "export BCH_DEX=test && mocha --exit --timeout 15000 --recursive test/unit/",
    "test:e2e:auto": "export BCH_DEX=test && mocha --exit --timeout 30000 test/e2e/automated/",
    "test:integration": "export BCH_DEX=test && mocha --exit --timeout 45000 --recursive test/integration",
    "test:temp": "export BCH_DEX=test && mocha --exit --timeout 15000 -g '#rate-limit' test/unit/json-rpc/",
    "lint": "standard --env mocha --fix",
    "docs": "./node_modules/.bin/apidoc -i src/ -o docs",
    "coverage": "c8 report --reporter=text-lcov | coveralls",
    "coverage:report": "export BCH_DEX=test && c8 --reporter=html mocha --exit --timeout 15000 --recursive test/unit/ test/e2e/automated/"
  },
  "author": "Chris Troutner <chris.troutner@gmail.com>",
  "contributors": [
    "Gary Nadir"
  ],
  "license": "MIT",
  "apidoc": {
    "title": "bch-dex",
    "url": "localhost:5000"
  },
  "repository": "Permissionless-Software-Foundation/bch-dex",
  "dependencies": {
    "@chainsafe/libp2p-gossipsub": "14.1.0",
    "@chainsafe/libp2p-noise": "16.0.1",
    "@chainsafe/libp2p-yamux": "7.0.1",
    "@chris.troutner/retry-queue": "1.0.8",
    "@helia/unixfs": "4.0.2",
    "@libp2p/bootstrap": "11.0.26",
    "@libp2p/circuit-relay-v2": "3.2.2",
    "@libp2p/config": "1.1.0",
    "@libp2p/identify": "3.0.22",
    "@libp2p/keychain": "5.0.14",
    "@libp2p/logger": "5.1.8",
    "@libp2p/ping": "2.0.22",
    "@libp2p/tcp": "10.1.2",
    "@libp2p/webrtc": "5.2.2",
    "@libp2p/websockets": "9.2.2",
    "@multiformats/multiaddr": "12.3.5",
    "axios": "0.27.2",
    "bch-message-lib": "2.2.1",
    "bch-nostr": "1.3.3",
    "bch-token-sweep": "2.2.1",
    "bcryptjs": "2.4.3",
    "bitcoincashjs-lib": "3.3.3",
    "blockstore-fs": "2.0.2",
    "datastore-fs": "10.0.2",
    "glob": "7.1.6",
    "helia": "5.2.1",
    "helia-coord": "1.7.2",
    "ipfs-coord-esm": "9.1.7",
    "ipfs-http-client": "58.0.0",
    "jsonrpc-lite": "2.2.0",
    "jsonwebtoken": "8.5.1",
    "jwt-bch-lib": "1.3.0",
    "kcors": "2.2.2",
    "koa": "2.13.1",
    "koa-bodyparser": "4.3.0",
    "koa-convert": "2.0.0",
    "koa-generic-session": "2.1.1",
    "koa-logger": "3.2.1",
    "koa-mount": "4.0.0",
    "koa-passport": "4.1.3",
    "koa-router": "10.0.0",
    "koa-static": "5.0.0",
    "koa2-ratelimit": "0.9.1",
    "libp2p": "2.7.2",
    "line-reader": "0.4.0",
    "minimal-slp-wallet": "5.13.2",
    "mongoose": "5.13.14",
    "node-fetch": "npm:@achingbrain/node-fetch@2.6.7",
    "nodemailer": "6.7.5",
    "nostr-tools": "2.10.4",
    "p2wdb-esm": "2.2.9",
    "passport-local": "1.0.0",
    "public-ip": "6.0.1",
    "winston": "3.3.3",
    "winston-daily-rotate-file": "4.5.0"
  },
  "devDependencies": {
    "apidoc": "0.51.1",
    "c8": "7.12.0",
    "chai": "4.3.0",
    "coveralls": "2.11.4",
    "husky": "4.3.8",
    "lodash.clonedeep": "4.5.0",
    "mocha": "10.0.0",
    "semantic-release": "19.0.3",
    "sinon": "9.2.4",
    "standard": "17.0.0",
    "uuid": "8.3.2"
  },
  "release": {
    "publish": [
      {
        "path": "@semantic-release/npm",
        "npmPublish": false
      }
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  },
  "standard": {
    "ignore": [
      "/test/unit/mocks/**/*.js"
    ]
  }
}

```

`/home/trout/work/psf/code/bch-dex/tools/burn-and-write.js`:

```js
/*
  This example burns a token and writes an Object as clear-text JSON string to
  the P2WDB. The data is crafted to trigger a webhook and add an entry to
  Torlist.

  For reference, this curl will delete the webhook in P2WDB:
  curl -H "Content-Type: application/json" -X DELETE -d '{ "url": "http://localhost:5002/entry", "appId": "torlist" }' localhost:5001/webhook/
*/

const axios = require('axios')

// CUSTOMIZE THESE VALUES FOR YOUR USE
// Private key holding the tokens and some BCH.
const WIF = process.env.WIF
if (!WIF) throw new Error('Add WIF to environment variable.')

// The BCH address corresponding to the WIF.
const BCHADDR = 'bitcoincash:qqp2fu2y8wra8afkefcx04yach8lhuaqvq3dxs5ddv'
const TOKENID =
  '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'
const TOKENQTY = 0.01
const MESSAGE = 'test'
const SIGNATURE =
  'H7Io3txwhjqOYFrAE/xBUzYGow510HL0U+G0LqelbHcDfqH/vQig/xcGfvTTBZpVoZtCoqOdvpPrsAFuL8VHWws='

const SERVER = 'http://localhost:5001/entry/write'
// const SERVER = 'http://192.168.0.76:5001/entry/write'
// const SERVER = 'https://p2wdb.fullstackcash.nl/entry/write'

const now = new Date()

const dataObj = {
  appId: 'torlist',
  title: Math.floor(Math.random() * 100000).toString(),
  sourceUrl: Math.floor(Math.random() * 100000).toString(),
  ipfsUrl: Math.floor(Math.random() * 100000).toString(),
  timestamp: now.toISOString(),
  localTimestamp: now.toLocaleString()
}
console.log(
  `Adding this object to the P2WDB: ${JSON.stringify(dataObj, null, 2)}`
)

// REST API servers.
const BCHN_MAINNET = 'https://bchn.fullstack.cash/v5/'
// bch-js-examples require code from the main bch-js repo
const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS({ restURL: BCHN_MAINNET })

async function burnAndWrite () {
  try {
    const keyPair = bchjs.ECPair.fromWIF(WIF)

    // Get UTXOs held by this address.
    const data = await bchjs.Electrumx.utxo(BCHADDR)
    const utxos = data.utxos
    // console.log(`utxos: ${JSON.stringify(utxos, null, 2)}`)

    if (utxos.length === 0) throw new Error('No UTXOs to spend! Exiting.')

    // Identify the SLP token UTXOs.
    let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos)
    // console.log(`tokenUtxos: ${JSON.stringify(tokenUtxos, null, 2)}`)

    // Filter out the non-SLP token UTXOs.
    const bchUtxos = utxos.filter((utxo, index) => {
      const tokenUtxo = tokenUtxos[index]

      if (!tokenUtxo.isValid) return true

      return false
    })
    // console.log(`bchUTXOs: ${JSON.stringify(bchUtxos, null, 2)}`)

    if (bchUtxos.length === 0) {
      throw new Error('Wallet does not have a BCH UTXO to pay miner fees.')
    }

    // Filter out the token UTXOs that match the user-provided token ID.
    tokenUtxos = tokenUtxos.filter((utxo, index) => {
      if (
        utxo && // UTXO is associated with a token.
        utxo.tokenId === TOKENID && // UTXO matches the token ID.
        utxo.utxoType === 'token' // UTXO is not a minting baton.
      ) {
        return true
      }

      return false
    })
    // console.log(`tokenUtxos: ${JSON.stringify(tokenUtxos, null, 2)}`);

    if (tokenUtxos.length === 0) {
      throw new Error('No token UTXOs for the specified token could be found.')
    }

    // Choose a UTXO to pay for the transaction.
    const bchUtxo = bchjs.Utxo.findBiggestUtxo(bchUtxos)
    console.log(`bchUtxo: ${JSON.stringify(bchUtxo, null, 2)}`)

    // Generate the SLP OP_RETURN.
    const slpData = bchjs.SLP.TokenType1.generateBurnOpReturn(
      tokenUtxos,
      TOKENQTY
    )

    // BEGIN transaction construction.

    // instance of transaction builder
    const transactionBuilder = new bchjs.TransactionBuilder()

    // Add the BCH UTXO as input to pay for the transaction.
    const originalAmount = bchUtxo.value
    transactionBuilder.addInput(bchUtxo.tx_hash, bchUtxo.tx_pos)

    // add each token UTXO as an input.
    for (let i = 0; i < tokenUtxos.length; i++) {
      transactionBuilder.addInput(tokenUtxos[i].tx_hash, tokenUtxos[i].tx_pos)
    }

    // get byte count to calculate fee. paying 1 sat
    // Note: This may not be totally accurate. Just guessing on the byteCount size.
    // const byteCount = this.BITBOX.BitcoinCash.getByteCount(
    //   { P2PKH: 3 },
    //   { P2PKH: 5 }
    // )
    // //console.log(`byteCount: ${byteCount}`)
    // const satoshisPerByte = 1.1
    // const txFee = Math.floor(satoshisPerByte * byteCount)
    // console.log(`txFee: ${txFee} satoshis\n`)
    const txFee = 250

    // amount to send back to the sending address. It's the original amount - 1 sat/byte for tx size
    const remainder = originalAmount - txFee - 546
    if (remainder < 1) {
      throw new Error('Selected UTXO does not have enough satoshis')
    }
    // console.log(`remainder: ${remainder}`)

    // Add OP_RETURN as first output.
    transactionBuilder.addOutput(slpData, 0)

    // Send the token back to the same wallet if the user hasn't specified a
    // different address.
    // if (TO_SLPADDR === "") TO_SLPADDR = walletInfo.slpAddress;

    // Send dust transaction representing tokens being sent.
    transactionBuilder.addOutput(
      bchjs.SLP.Address.toLegacyAddress(BCHADDR),
      546
    )

    // Last output: send the BCH change back to the wallet.
    transactionBuilder.addOutput(
      bchjs.Address.toLegacyAddress(BCHADDR),
      remainder
    )

    // Sign the transaction with the private key for the BCH UTXO paying the fees.
    let redeemScript
    transactionBuilder.sign(
      0,
      keyPair,
      redeemScript,
      transactionBuilder.hashTypes.SIGHASH_ALL,
      originalAmount
    )

    // Sign each token UTXO being consumed.
    for (let i = 0; i < tokenUtxos.length; i++) {
      const thisUtxo = tokenUtxos[i]

      transactionBuilder.sign(
        1 + i,
        keyPair,
        redeemScript,
        transactionBuilder.hashTypes.SIGHASH_ALL,
        thisUtxo.value
      )
    }

    // build tx
    const tx = transactionBuilder.build()

    // output rawhex
    const hex = tx.toHex()
    // console.log(`Transaction raw hex: `, hex)

    // END transaction construction.

    // Broadcast transation to the network
    const txidStr = await bchjs.RawTransactions.sendRawTransaction([hex])
    console.log(`Transaction ID: ${txidStr}`)

    console.log('Check the status of your transaction on this block explorer:')
    console.log(`https://explorer.bitcoin.com/bch/tx/${txidStr}`)
    console.log(' ')

    // Sleep for 5 seconds.
    await bchjs.Util.sleep(5000)

    const bodyData = {
      // const result = await axios.post('https://p2wdb.fullstackcash.nl/p2wdb', {
      txid: txidStr[0],
      message: MESSAGE,
      signature: SIGNATURE,
      data: JSON.stringify(dataObj)
    }
    console.log(`bodyData: ${JSON.stringify(bodyData, null, 2)}`)

    // Submit the txid as proof-of-burn to write data to the database.
    const result = await axios.post(SERVER, bodyData)
    console.log(`Response from API: ${JSON.stringify(result.data, null, 2)}`)
  } catch (err) {
    console.error('Error in burnTokens: ', err)
    console.log(`Error message: ${err.message}`)
  }
}
burnAndWrite()

```
