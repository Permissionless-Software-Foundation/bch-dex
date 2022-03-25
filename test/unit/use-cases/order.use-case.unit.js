/*
  Unit tests for the Order Use Case library.
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')

// Local support libraries
// const testUtils = require('../../utils/test-utils')

// Unit under test (uut)
const OrderLib = require('../../../src/use-cases/order')
const adapters = require('../mocks/adapters')

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
        numTokens: 1
      }

      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet, 'burnPsf').resolves('fakeTxid')
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'getTxData').resolves({ tokenTicker: 'TROUT' })
      sandbox.stub(uut.orderEntity, 'validate').returns(entryObj)
      sandbox.stub(uut, 'ensureFunds').resolves()
      sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.Util, 'sleep').resolves()
      sandbox.stub(uut.adapters.wallet, 'moveTokens').resolves({ txid: 'fakeTxid', vout: 0, hdIndex: 1 })
      sandbox.stub(uut.adapters.wallet.bchWallet, 'getUtxos').resolves()
      sandbox.stub(uut.adapters.p2wdb, 'write').resolves('fakeHash')

      const result = await uut.createOrder(entryObj)
      console.log('result: ', result)

      assert.isString(result)
    })

    it('should catch and throw an error', async () => {
      try {
        await uut.createOrder()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Cannot set')
      }
    })
  })
})
