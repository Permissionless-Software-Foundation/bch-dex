/*
  Unit tests for the REST API handler for the /nostr endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import NostrRouter from '../../../../../src/controllers/rest-api/nostr/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Nostr-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new NostrRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new NostrRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating NostrRouter REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new NostrRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating NostrRouter REST Controller.'
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

  describe('#createDeletedChat', () => {
    it('should route to the createDeletedChat function', async () => {
      // Stub functions
      const validationSpy = sandbox.stub(uut.validators, 'ensureAdmin').resolves(true)
      sandbox.stub(uut.nostrRESTController, 'createDeletedChat').resolves(true)

      // Call function
      const res = await uut.createDeletedChat()
      assert.isTrue(validationSpy.calledOnce, 'Admin validator should be called')
      assert.isTrue(res)
    })
  })

  describe('#createDeletedPost', () => {
    it('should route to the createDeletedPost function', async () => {
      // Stub functions
      const validationSpy = sandbox.stub(uut.validators, 'ensureAdmin').resolves(true)
      sandbox.stub(uut.nostrRESTController, 'createDeletedPost').resolves(true)

      // Call function
      const res = await uut.createDeletedPost()
      assert.isTrue(validationSpy.calledOnce, 'Admin validator should be called')
      assert.isTrue(res)
    })
  })
})
