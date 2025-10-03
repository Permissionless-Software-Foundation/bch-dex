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
  describe('#createOrder', () => {
    it('should route to controller', async () => {
      sandbox.stub(uut.validators, 'ensureUser').resolves(true)
      const spy = sandbox.stub(uut.orderRESTController, 'createOrder').resolves(true)

      await uut.createOrder()
      assert.isTrue(spy.calledOnce)
    })
  })
  describe('#deleteOrder', () => {
    it('should route to controller', async () => {
      sandbox.stub(uut.validators, 'ensureUser').resolves(true)
      const spy = sandbox.stub(uut.orderRESTController, 'deleteOrder').resolves(true)

      await uut.deleteOrder()
      assert.isTrue(spy.calledOnce)
    })
  })
})
