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
        numTokens: 1
      }

      // Mock dependencies
      sandbox.stub(uut.adapters.wallet, 'burnPsf').resolves('fakeTxid')
      sandbox.stub(uut.offerEntity, 'validate').returns(entryObj)
      sandbox.stub(uut, 'ensureFunds').resolves()
      sandbox.stub(uut, 'moveTokens').resolves({ txid: 'fakeTxid', vout: 0 })
      sandbox.stub(uut.adapters.wallet.bchWallet, 'getUtxos').resolves()
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
          .stub(uut.offerEntity, 'validate')
          .throws(new Error('test error'))

        await uut.createOffer()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#ensureFunds', () => {
    it('should return true if wallet has enough funds for a sell order', async () => {
      const offerEntity = {
        lokadId: 'SWP',
        messageType: 1,
        messageClass: 1,
        tokenId:
          'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
        buyOrSell: 'sell',
        rateInSats: 1000,
        minSatsToExchange: 0,
        numTokens: 1
      }

      const result = await uut.ensureFunds(offerEntity)

      assert.equal(result, true)
    })
  })

  describe('#moveTokens', () => {
    it('should move tokens to the holding address', async () => {
      // Mock dependencies
      // sandbox
      //   .stub(uut.adapters.wallet.bchWallet, 'sendTokens')
      //   .resolves('fakeTxid')

      const offerEntity = {
        lokadId: 'SWP',
        messageType: 1,
        messageClass: 1,
        tokenId:
          'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
        buyOrSell: 'sell',
        rateInSats: 1000,
        minSatsToExchange: 0,
        numTokens: 1
      }

      const result = await uut.moveTokens(offerEntity)
      // console.log('result: ', result)

      assert.property(result, 'txid')
      assert.property(result, 'vout')

      assert.equal(result.txid, 'fakeTxid')
      assert.equal(result.vout, 0)
    })
  })
})
