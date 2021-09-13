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

  // describe('#createEntry', () => {
  //   it('should throw an error if entry is not provided', async () => {
  //     try {
  //       await uut.createEntry({})
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'entry' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if description is not provided', async () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry'
  //       }
  //       await uut.createEntry(inputData)
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'description' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if slpAddress is not provided', async () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test'
  //       }
  //       await uut.createEntry(inputData)
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'slpAddress' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if signature is not provided', async () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg'
  //       }
  //       await uut.createEntry(inputData)
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'signature' must be a string!")
  //     }
  //   })
  //   it('should throw an error if category is not provided', async () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature:
  //           'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw='
  //       }
  //       await uut.createEntry(inputData)
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, "Property 'category' must be a string!")
  //     }
  //   })
  //   it('should catch and throw DB errors', async () => {
  //     try {
  //       // Force an error with the database.
  //       sandbox.stub(uut, 'EntryModel').throws(new Error('test error'))
  //
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature:
  //           'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //         category: 'test'
  //       }
  //
  //       await uut.createEntry(inputData)
  //
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, 'test error')
  //     }
  //   })
  //   it('should throw error if signature is invalid', async () => {
  //     try {
  //       // Mocking bchjs functions
  //       sandbox.stub(uut.bchjs, '_verifySignature').callsFake(() => {
  //         return false
  //       })
  //
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature:
  //           'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //         category: 'test'
  //       }
  //
  //       await uut.createEntry(inputData)
  //
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, 'Invalid signature')
  //     }
  //   })
  //   it('should throw error for insufficient psf balance', async () => {
  //     try {
  //       // Mocking bchjs functions
  //       sandbox.stub(uut.bchjs, 'getPSFTokenBalance').resolves(0)
  //
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature:
  //           'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //         category: 'test'
  //       }
  //
  //       await uut.createEntry(inputData)
  //
  //       assert.fail('Unexpected code path')
  //     } catch (err) {
  //       assert.include(err.message, 'Insufficient psf balance')
  //     }
  //   })
  //
  //   it('should create a new entry in the DB', async () => {
  //     // Mocking bchjs functions
  //     // sandbox.stub(uut.bchjs, '_verifySignature').resolves(true)
  //     // sandbox.stub(uut.bchjs, 'getPSFTokenBalance').resolves(100)
  //     // sandbox.stub(uut.bchjs, 'getMerit').resolves(100)
  //
  //     const inputData = {
  //       entry: 'entry',
  //       description: 'test',
  //       slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //       signature:
  //         'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //       category: 'test'
  //     }
  //
  //     const result = await uut.createEntry(inputData)
  //
  //     assert.property(result, 'entry')
  //     assert.isString(result.entry)
  //
  //     assert.property(result, 'slpAddress')
  //     assert.isString(result.slpAddress)
  //
  //     assert.property(result, 'description')
  //     assert.isString(result.description)
  //
  //     assert.property(result, 'signature')
  //     assert.isString(result.signature)
  //
  //     assert.property(result, 'category')
  //     assert.isString(result.category)
  //
  //     assert.property(result, 'balance')
  //     assert.isNumber(result.balance)
  //
  //     assert.property(result, 'merit')
  //     assert.isNumber(result.merit)
  //   })
  // })
})
