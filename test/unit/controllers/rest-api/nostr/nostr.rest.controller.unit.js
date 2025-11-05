/*
  Unit tests for the REST API handler for the /nostr endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import NostrController from '../../../../../src/controllers/rest-api/nostr/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx

describe('#Nostr-REST-Controller', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new NostrController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new NostrController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /nostr REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new NostrController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /nostr REST Controller.'
        )
      }
    })
  })

  describe('#POST /nostr/deletedChat', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        sandbox.stub(uut.useCases.nostr, 'createDeletedChat').rejects(new Error('test error'))
        await uut.createDeletedChat(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      ctx.request.body = {
        eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q',
        npub: 'npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8',
        bchAddr: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
        pubkey: '6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1'
      }

      await uut.createDeletedChat(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      assert.isObject(ctx.response.body)
    })
  })

  describe('#GET /nostr/deletedChat', () => {
    it('should return 422 status on arbitrary biz logic error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.useCases.nostr, 'getDeletedChats')
          .rejects(new Error('test error'))

        await uut.getDeletedChats(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      await uut.getDeletedChats(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.isObject(ctx.response.body)
      assert.property(ctx.response.body, 'deletedChats')
      assert.isArray(ctx.response.body.deletedChats)
    })
  })
  describe('#POST /nostr/deletedPost', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        sandbox.stub(uut.useCases.nostr, 'createDeletedPost').rejects(new Error('test error'))
        await uut.createDeletedPost(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })
    it('should return 200 status on success', async () => {
      ctx.request.body = {
        eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q',
        npub: 'npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8',
        bchAddr: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
        pubkey: '6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1'
      }

      await uut.createDeletedPost(ctx)

      assert.equal(ctx.status, 200)

      assert.isObject(ctx.response.body)
      assert.property(ctx.response.body, 'deletedPost')
      assert.isObject(ctx.response.body.deletedPost)
    })
  })
  describe('#GET /nostr/deletedPost', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        sandbox.stub(uut.useCases.nostr, 'getDeletedPosts').rejects(new Error('test error'))
        await uut.getDeletedPosts(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })
    it('should return 200 status on success', async () => {
      await uut.getDeletedPosts(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      assert.isObject(ctx.response.body)
      assert.property(ctx.response.body, 'deletedPosts')
      assert.isArray(ctx.response.body.deletedPosts)
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

    it('should throw error with message', () => {
      try {
        const err = {
          status: 422,
          message: 'test error'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })
})
