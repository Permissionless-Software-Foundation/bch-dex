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
      uut.config.useFullStackCash = true
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

  describe('#findOrderByUtxo', () => {
    it('should throw an error if data is not provided', async () => {
      try {
        await uut.findOrderByUtxo({})
      } catch (err) {
        assert.include(err.message, 'Cannot read properties of undefined')
      }
    })
    it('should throw an error if order is not found', async () => {
      try {
        sandbox.stub(uut.OrderModel, 'findOne').resolves(null)
        const offerData = {
          data: {
            utxoTxid: 'utxoTxid',
            utxoVout: 'utxoVout'
          }
        }
        await uut.findOrderByUtxo(offerData)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'order not found')
      }
    })
    it('should throw an error if order event id is not found', async () => {
      try {
        sandbox.stub(uut.OrderModel, 'findOne').resolves({ nostrEventId: null })
        const offerData = {
          data: {
            utxoTxid: 'utxoTxid',
            utxoVout: 'utxoVout'
          }
        }
        await uut.findOrderByUtxo(offerData)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'order not found')
      }
    })
    it('should return order by utxo', async () => {
      sandbox.stub(uut.OrderModel, 'findOne').resolves({ toObject: () => { return {} }, nostrEventId: 'nostrEventId' })
      const offerData = {
        data: {
          utxoTxid: 'utxoTxid',
          utxoVout: 'utxoVout'
        }
      }
      const result = await uut.findOrderByUtxo(offerData)
      assert.isObject(result)
    })
  })
})
