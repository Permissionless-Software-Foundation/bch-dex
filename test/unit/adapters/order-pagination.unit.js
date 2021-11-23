/*
  Unit tests for the order-pagination.js library.

  These unit tests will probably be rolled into a larger library in the
  the future.
*/

// Public npm libraries.
const assert = require('chai').assert
const sinon = require('sinon')
const mongoose = require('mongoose')

// Local libraries.
const OrderPagination = require('../../../src/adapters/localdb/order-pagination')
const Order = require('../../../src/adapters/localdb/models/order')
const config = require('../../../config')

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
      p2wdbHash: 'p2wdbHash'
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
