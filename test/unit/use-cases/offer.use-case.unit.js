/*
  Unit tests for the Offer Use Case library.
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')

// Local support libraries
// const testUtils = require('../../utils/test-utils')

// Unit under test (uut)
const OfferLib = require('../../../src/use-cases/offer')
const adapters = require('../mocks/adapters')

describe('#offer-use-case', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new OfferLib({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new OfferLib()

        assert.fail('Unexpected code path')
        console.log(uut) // linter
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating Offer Use Cases library.'
        )
      }
    })
  })

  describe('#createOffer', () => {
    it('should create an offer and return the hash', async () => {
      const entryObj = {
        lokadId: 'SWP',
        messageType: 1,
        messageClass: 1,
        tokenId: 'token-id',
        buyOrSell: 'sell',
        rateInSats: 1000,
        minSatsToExchange: 1250,
        utxoTxid: 'txid-goes-here',
        utxoVout: 1
      }

      // Mock dependencies
      sandbox.stub(uut.adapters.wallet, 'burnPsf').resolves('fakeTxid')
      sandbox.stub(uut.offerEntity, 'validate').returns(entryObj)
      sandbox
        .stub(uut.adapters.wallet, 'generateSignature')
        .resolves('fakeSignature')
      sandbox.stub(uut.adapters.p2wdb, 'write').resolves('fakeHash')

      const result = await uut.createOffer(entryObj)
      console.log('result: ', result)

      assert.isString(result)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.adapters.wallet, 'burnPsf')
          .rejects(new Error('test error'))

        await uut.createOffer()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })
})
