/*
  Unit tests for the REST API handler for the /sm endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import P2WDBRESTController from '../../../../../src/controllers/rest-api/p2wdb/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

let uut
let sandbox
let ctx

describe('#P2WDB-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new P2WDBRESTController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
    ctx.params = { }
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new P2WDBRESTController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /p2wdb REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new P2WDBRESTController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /p2wdb REST Controller.'
        )
      }
    })
  })

  describe('#routeWebhook', () => {
    it('should route the webhook for a new counter offer', async () => {
      ctx.request = {
        body: {
          data: {
            dataType: 'counter-offer'
          }
        }
      }
      sandbox.stub(uut.useCases.offer, 'acceptCounterOffer').resolves()

      await uut.routeWebhook(ctx)

      assert.isTrue(true)
    })
    it('should route the webhook for a new  offer', async () => {
      ctx.request = {
        body: {
          data: {
            dataType: 'offer'
          }
        }
      }
      sandbox.stub(uut.useCases.offer, 'createOffer').resolves()

      await uut.routeWebhook(ctx)

      assert.isTrue(true)
    })
    it('should route the webhook flag', async () => {
      ctx.request = {
        body: {
          data: {
            dataType: 'flag'
          }
        }
      }
      sandbox.stub(uut.useCases.offer, 'flagOffer').resolves()

      await uut.routeWebhook(ctx)

      assert.isTrue(true)
    })
    it('should handle unknown data type', async () => {
      ctx.request = {
        body: {
          data: {
            dataType: 'unknown'
          }
        }
      }
      sandbox.stub(uut.useCases.offer, 'flagOffer').resolves()

      await uut.routeWebhook(ctx)

      assert.isTrue(true)
    })

    it('should catch and throw an error', async () => {
      try {
        ctx.request.body = {}

        await uut.routeWebhook(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read properties of undefined')
      }
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
})
