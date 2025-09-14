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
  describe('#listOrders', () => {
    it('should list orders', async () => {
      ctx.params = { page: 0 }
      sandbox.stub(uut.useCases.order, 'listOrders').resolves([])
      await uut.listOrders(ctx)
      assert.isArray(ctx.body)
    })
    it('should catch and throw an error', async () => {
      try {
        ctx.params = { page: 0 }
        sandbox.stub(uut.useCases.order, 'listOrders').throws(new Error('test error'))
        await uut.listOrders(ctx)
        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#deleteOrder', () => {
    it('should delete an order', async () => {
      ctx.request.body = {
        nostrEventId: 'testEventId'
      }
      sandbox.stub(uut.useCases.order, 'deleteOrder').resolves('testTxid')
      await uut.deleteOrder(ctx)
      assert.equal(ctx.body.txid, 'testTxid')
    })
    it('should catch and throw an error', async () => {
      try {
        ctx.request.body = {
          nostrEventId: 'testEventId'
        }
        sandbox.stub(uut.useCases.order, 'deleteOrder').throws(new Error('test error'))
        await uut.deleteOrder(ctx)
        assert.fail('Unexpected code path')
      } catch (err) {
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
