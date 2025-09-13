/*
  Unit tests for the REST API handler for the /offer endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import OfferRESTController from '../../../../../src/controllers/rest-api/offer/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

let uut
let sandbox
let ctx

describe('#Offer-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new OfferRESTController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new OfferRESTController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /offer REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new OfferRESTController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /offer REST Controller.'
        )
      }
    })
  })

  describe('#createOffer', () => {
    it('should create a new offer', async () => {
      ctx.request.body = {
        appId: 'swapTest555',
        data: {
          messageType: 1,
          messageClass: 1,
          tokenId:
            '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
          buyOrSell: 'sell',
          rateInSats: 1000,
          minSatsToExchange: 10,
          numTokens: 0.02,
          utxoTxid:
            '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
          utxoVout: 0
        },
        timestamp: '2021-09-20T17:54:26.395Z',
        localTimeStamp: '9/20/2021, 10:54:26 AM',
        txid: '46f50f2a0cf44e3ed70dfb0618ef3ebfee57aabcf229b5d2d17c07322b54a8d7',
        hash: 'zdpuB2X25AZCKo3wpr4sSbw44vqPWJRqcxWQRHZccK5BdtoGD'
      }

      // Mock dependencies
      // sandbox.stub(uut.useCases.offer, 'createOffer').resolves()

      await uut.createOffer(ctx)

      // assert.equal(ctx.body.hash, 'testHash')
    })

    it('should catch and throw an error', async () => {
      try {
        ctx.request.body = {
          offer: {}
        }

        // Force an error
        sandbox
          .stub(uut.useCases.offer, 'createOffer')
          .rejects(new Error('test error'))

        await uut.createOffer(ctx)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#listOffers', () => {
    it('should list offers', async () => {
      ctx.params = { page: 0 }
      sandbox.stub(uut.useCases.offer, 'listOffers').resolves([])
      await uut.listOffers(ctx)
      assert.isArray(ctx.body)
    })
    it('should catch and throw an error', async () => {
      try {
        ctx.params = { }
        sandbox
          .stub(uut.useCases.offer, 'listOffers')
          .throws(new Error('test error'))

        await uut.listOffers(ctx)
        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#listNftOffers', () => {
    it('should list nft offers', async () => {
      ctx.params = { page: 0 }
      sandbox.stub(uut.useCases.offer, 'listNftOffers').resolves([])
      await uut.listNftOffers(ctx)
      assert.isArray(ctx.body)
    })
    it('should catch and throw an error', async () => {
      try {
        ctx.params = { page: 0 }
        sandbox
          .stub(uut.useCases.offer, 'listNftOffers')
          .throws(new Error('test error'))

        await uut.listNftOffers(ctx)
        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#listFungibleOffers', () => {
    it('should list fungible offers', async () => {
      ctx.params = { page: 0 }
      sandbox.stub(uut.useCases.offer, 'listFungibleOffers').resolves([])
      await uut.listFungibleOffers(ctx)
      assert.isArray(ctx.body)
    })
    it('should catch and throw an error', async () => {
      try {
        ctx.params = { page: 0 }
        sandbox
          .stub(uut.useCases.offer, 'listFungibleOffers')
          .throws(new Error('test error'))

        await uut.listFungibleOffers(ctx)
        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#takeOffer', () => {
    it('should take an offer', async () => {
      ctx.request.body = {
        nostrEventId: 'testEventId'
      }

      sandbox.stub(uut.useCases.offer, 'takeOffer').resolves({ eventId: 'testEventId', noteId: 'testNoteId' })
      await uut.takeOffer(ctx)
      assert.isObject(ctx.body)
      assert.property(ctx.body, 'eventId')
      assert.property(ctx.body, 'noteId')
    })
    it('should catch and throw an error', async () => {
      try {
        ctx.request.body = {
          nostrEventId: 'testEventId'
        }

        sandbox
          .stub(uut.useCases.offer, 'takeOffer')
          .throws(new Error('test error'))

        await uut.takeOffer(ctx)
        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#listOffersByAddress', () => {
    it('should list offers by address', async () => {
      ctx.params = { addr: 'testAddress' }
      sandbox.stub(uut.useCases.offer, 'listOffersByAddress').resolves([])
      await uut.listOffersByAddress(ctx)
      assert.isArray(ctx.body)
    })
    it('should catch and throw an error', async () => {
      try {
        ctx.params = { addr: 'testAddress' }
        sandbox
          .stub(uut.useCases.offer, 'listOffersByAddress')
          .throws(new Error('test error'))

        await uut.listOffersByAddress(ctx)
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
