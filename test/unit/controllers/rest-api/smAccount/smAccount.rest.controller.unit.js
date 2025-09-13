/*
  Unit tests for the REST API handler for the /sm endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import SmAccountRESTController from '../../../../../src/controllers/rest-api/smAccount/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

let uut
let sandbox
let ctx

describe('#SmAccount-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new SmAccountRESTController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
    ctx.params = { }
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new SmAccountRESTController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /sm REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new SmAccountRESTController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /sm REST Controller.'
        )
      }
    })
  })

  describe('#listAccounts', () => {
    it('should list all social media accounts', async () => {
      ctx.params.page = 0

      // Mock dependencies
      sandbox.stub(uut.useCases.smAccount, 'listAccounts').resolves([])

      await uut.listAccounts(ctx)

      assert.isArray(ctx.body)
    })

    it('should catch and throw an error', async () => {
      try {
        ctx.params.page = 0

        // Force an error
        sandbox.stub(uut.useCases.smAccount, 'listAccounts')
          .throws(new Error('test error'))

        await uut.listAccounts(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getAccountByNpub', () => {
    it('should get a social media account by npub', async () => {
      sandbox.stub(uut.useCases.smAccount, 'getAccountByNpub').resolves({ npub: 'testNpub' })
      ctx.params.npub = 'testNpub'

      await uut.getAccountByNpub(ctx)
    })
    it('should throw 400 if npub is not provided', async () => {
      try {
        await uut.getAccountByNpub(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Npub is required')
      }
    })
    it('should throw 400 if npub is not found', async () => {
      try {
        sandbox.stub(uut.useCases.smAccount, 'getAccountByNpub').resolves(null)
        ctx.params.npub = 'testNpub'
        await uut.getAccountByNpub(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Account not found')
      }
    })
    it('should catch and throw an error', async () => {
      try {
        sandbox.stub(uut.useCases.smAccount, 'getAccountByNpub').throws(new Error('test error'))
        ctx.params.npub = 'testNpub'

        await uut.getAccountByNpub(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getAccountByBchAddr', () => {
    it('should get a social media account by npub', async () => {
      sandbox.stub(uut.useCases.smAccount, 'getAccountByBchAddr').resolves({ bchAddr: 'testBchAddr' })
      ctx.params.bchAddr = 'testBchAddr'

      await uut.getAccountByBchAddr(ctx)
    })

    it('should throw 400 if bchAddr is not provided', async () => {
      try {
        await uut.getAccountByBchAddr(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'BCH address is required')
      }
    })

    it('should throw 400 if bchAddr is not found', async () => {
      try {
        sandbox.stub(uut.useCases.smAccount, 'getAccountByBchAddr').resolves(null)
        ctx.params.bchAddr = 'testBchAddr'
        await uut.getAccountByBchAddr(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Account not found')
      }
    })
    it('should catch and throw an error', async () => {
      try {
        sandbox.stub(uut.useCases.smAccount, 'getAccountByBchAddr').throws(new Error('test error'))
        ctx.params.bchAddr = 'testBchAddr'

        await uut.getAccountByBchAddr(ctx)

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
