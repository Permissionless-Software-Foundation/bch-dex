/*
  Unit tests for the REST API handler for the /order endpoints.
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')

// Local support libraries
const adapters = require('../../../mocks/adapters')
const UseCasesMock = require('../../../mocks/use-cases')
// const app = require('../../../mocks/app-mock')

const OrderRESTController = require('../../../../../src/controllers/rest-api/order/controller')
let uut
let sandbox
let ctx

const mockContext = require('../../../../unit/mocks/ctx-mock').context

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
        messageType: 1,
        messageClass: 1,
        tokenId:
          '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
        buyOrSell: 'sell',
        rateInSats: 1000,
        minSatsToExchange: 10,
        numTokens: 0.02,
        utxoTxid:
          '5b733e347adf79a05790ccb5a5ddaf28eaba983ccfa4507f075bb503943dbc4c',
        utxoVout: 0
      }

      // Mock dependencies
      // sandbox.stub(uut.useCases.order, 'createOrder').resolves('testHash')

      await uut.createOrder(ctx)

      // assert.equal(ctx.body.hash, 'testHash')
    })

    // it('should catch and throw an error', async () => {
    //   try {
    //     ctx.request.body = {
    //       order: {}
    //     }
    //
    //     // Force an error
    //     sandbox
    //       .stub(uut.useCases.order, 'createOrder')
    //       .rejects(new Error('test error'))
    //
    //     await uut.createOrder(ctx)
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
