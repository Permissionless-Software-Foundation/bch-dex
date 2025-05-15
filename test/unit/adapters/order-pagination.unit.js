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
