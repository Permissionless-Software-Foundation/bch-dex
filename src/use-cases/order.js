/*
  Order use-case library.
*/

// Global npm libraries
import RetryQueue from '@chris.troutner/retry-queue'

// Local libraries
import wlogger from '../adapters/wlogger.js'
import OrderEntity from '../entities/order.js'
import config from '../../config/index.js'

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
    this.bch = this.adapters.bch
    this.config = config
    this.retryQueue = new RetryQueue({ retryPeriod: 1000, attempts: 3 })

    // Bind subfunctions to the 'this' object.
    this.ensureFunds = this.ensureFunds.bind(this)
  }

  // Create a new order model and add it to the Mongo database.
  async createOrder (entryObj) {
    try {
      console.log('createOrder(entryObj): ', entryObj)
      if (!entryObj) return false

      if (!entryObj.tokenId) throw new Error('entry does not contain required properties')

      // Specify the address to send payment.
      entryObj.makerAddr = this.adapters.wallet.bchWallet.walletInfo.cashAddress
      console.log('entryObj.makerAddr: ', entryObj.makerAddr)

      // Input Validation
      const orderEntity = this.orderEntity.inputValidate(entryObj)
      console.log('orderEntity: ', orderEntity)

      // Ensure sufficient tokens exist to create the order.
      // await this.ensureFunds(orderEntity)
      await this.retryQueue.addToQueue(this.ensureFunds, orderEntity)

      // Get Ticker for token ID.
      // const tokenData = await this.adapters.wallet.bchWallet.getTxData([entryObj.tokenId])
      const tokenData = await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.getTxData, [entryObj.tokenId])
      // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)
      orderEntity.ticker = tokenData[0].tokenTicker

      // Move the tokens to holding address.
      const moveObj = {
        tokenId: orderEntity.tokenId,
        qty: orderEntity.numTokens
      }
      // const utxoInfo = await this.adapters.wallet.moveTokens(moveObj)
      const utxoInfo = await this.retryQueue.addToQueue(this.adapters.wallet.moveTokens, moveObj)
      console.log('utxoInfo: ', utxoInfo)

      // Update the UTXO store for the wallet.
      await this.adapters.wallet.bchWallet.bchjs.Util.sleep(3000)
      // await this.adapters.wallet.bchWallet.getUtxos()
      await this.retryQueue.addToQueue(this.adapters.wallet.bchWallet.initialize, {})

      // Update the order with the new UTXO information.
      orderEntity.utxoTxid = utxoInfo.txid
      orderEntity.utxoVout = utxoInfo.vout
      orderEntity.tokenType = utxoInfo.tokenType

      // Add P2WDB specific flag for signaling that this is a new offer.
      orderEntity.dataType = 'offer'

      // Add order to P2WDB.
      const p2wdbObj = {
        wif: this.adapters.wallet.bchWallet.walletInfo.privateKey,
        data: orderEntity,
        appId: this.config.p2wdbAppId
      }
      // const hash = await this.adapters.p2wdb.write(p2wdbObj)
      const hash = await this.retryQueue.addToQueue(this.adapters.p2wdb.write, p2wdbObj)
      // console.log('hash: ', hash)

      // Create a MongoDB model to hold the Order
      orderEntity.hdIndex = utxoInfo.hdIndex
      orderEntity.p2wdbHash = hash

      console.log(`creating new order model: ${JSON.stringify(orderEntity, null, 2)}`)
      const order = new this.OrderModel(orderEntity)
      await order.save()

      return hash
    } catch (err) {
      // console.log("Error in use-cases/entry.js/createEntry()", err.message)
      wlogger.error('Error in use-cases/order.js/createOrder())')
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
        console.log('tokenUtxos: ', tokenUtxos)

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

  // Retrieve an Order model from the database. Find it by its P2WDB CID.
  async findOrderByHash (p2wdbHash) {
    try {
      if (typeof p2wdbHash !== 'string' || !p2wdbHash) {
        throw new Error('p2wdbHash must be a string')
      }

      const order = await this.OrderModel.findOne({ p2wdbHash })

      if (!order) {
        throw new Error('order not found')
      }

      const orderObject = order.toObject()
      // return this.offerEntity.validateFromModel(offerObject)

      return orderObject
    } catch (err) {
      console.error('Error in findOrder()')
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
          console.log('utxoStatus: ', utxoStatus)
          console.log(`Spent UTXO detected. Deleting this Order: ${JSON.stringify(thisOrder, null, 2)}`)
          await thisOrder.remove()
        }
      }
    } catch (err) {
      console.error('Error in removeStaleOrders()')
      throw err
    }
  }
}

export default OrderLib
