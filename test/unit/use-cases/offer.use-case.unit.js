/*
  Unit tests for the Offer Use Case library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
// const testUtils = require('../../utils/test-utils')

// Unit under test (uut)
import OfferLib from '../../../src/use-cases/offer/index.js'

import OrderUseCase from '../../../src/use-cases/order.js'
import adapters from '../mocks/adapters/index.js'
import mockData from '../mocks/use-cases/offer-mock-data.js'

describe('#offer-use-case', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const order = new OrderUseCase({ adapters })
    uut = new OfferLib({ adapters, order })
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
    it('should throw an error if order use cases are not passed in', () => {
      try {
        uut = new OfferLib({ adapters })

        assert.fail('Unexpected code path')
        console.log(uut) // linter
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Order Use Cases must be passed in when instantiating Offer Use Cases library.'
        )
      }
    })
  })

  describe('#createOffer', () => {
    it('should handle error', async () => {
      try {
        await uut.createOffer()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.include(error.message, 'Cannot read properties of undefined')
      }
    })
    it('should return false if offer already exist', async () => {
      const offerObj = mockData.offerMockData

      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').resolves({})

      const result = await uut.createOffer(offerObj)
      assert.isFalse(result)
    })
    it('should return false for invalid utxo', async () => {
      const offerObj = mockData.offerMockData

      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').throws(new Error('offer not found'))
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves(null)

      const result = await uut.createOffer(offerObj)
      assert.isFalse(result)
    })

    it('should create offer', async () => {
      const tokenDataMock = mockData.simpleNftTokenData01
      const offerObj = mockData.offerMockData

      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').throws(new Error('offer not found'))
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves({}) // Utxo Status call
        .onCall(1).resolves(tokenDataMock) // Token Data call
        .onCall(2).resolves(false) // detectNsfw  call

      const result = await uut.createOffer(offerObj)
      assert.isTrue(result)
    })
  })

  describe('#categorizeToken', () => {
    it('should categorize an NFT', async () => {
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'getTokenData').resolves(mockData.nftTokenData01)

      const offerData = mockData.nftOffer01
      const tokenData = mockData.nftTokenData01

      const result = await uut.categorizeToken(offerData, tokenData)

      assert.equal(result, 'nft')
    })

    it('should categorize a simple NFT', async () => {
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'getTokenData').resolves(mockData.simpleNftTokenData01)

      const offerData = mockData.simpleNftOffer01
      const tokenData = mockData.simpleNftTokenData01

      const result = await uut.categorizeToken(offerData, tokenData)

      assert.equal(result, 'simple-nft')
    })

    it('should categorize a fungible token', async () => {
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'getTokenData').resolves(mockData.fungibleTokenData01)

      const offerData = mockData.fungibleOffer01
      const tokenData = mockData.fungibleTokenData01

      const result = await uut.categorizeToken(offerData, tokenData)

      assert.equal(result, 'fungible')
    })
    it('should unknow type', async () => {
      try {
        // Mock dependencies
        const offerData = mockData.fungibleOffer01
        const tokenData = { genesisData: {} }

        await uut.categorizeToken(offerData, tokenData)

        assert.fail('unexpected code path')
      } catch (error) {
        assert.include(error.message, 'Unknown token type:')
      }
    })
  })

  describe('#removeDuplicateOffers', () => {
    it('should remove duplicate entries and return true', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([
        { p2wdbHash: 'a', remove: async () => { } },
        { p2wdbHash: 'a', remove: async () => { } },
        { p2wdbHash: 'b', remove: async () => { } }
      ])
      // sandbox.stub(uut.OfferModel, 'remove').resolves()

      const result = await uut.removeDuplicateOffers()
      console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return false if there are no duplicate entries', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([
        { p2wdbHash: 'a', remove: async () => { } },
        { p2wdbHash: 'b', remove: async () => { } }
      ])
      // sandbox.stub(uut.OfferModel, 'remove').resolves()

      const result = await uut.removeDuplicateOffers()
      console.log('result: ', result)

      assert.equal(result, false)
    })
  })
  describe('#findOfferByTxid', () => {
    it('should throw an error if input is not provided', async () => {
      try {
        await uut.findOfferByTxid()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'utxoTxid must be a string')
      }
    })
    it('should throw an error if offer is not found', async () => {
      try {
        // Mock dependencies and force desired code path.
        sandbox.stub(uut.OfferModel, 'findOne').resolves(null)

        await uut.findOfferByTxid('241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87')
        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'offer not found')
      }
    })

    it('should return offer', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'findOne').resolves(mockData.nftOffer01)

      const result = await uut.findOfferByTxid('241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87')
      assert.isObject(result)
    })
  })
  describe('#detectNsfw', () => {
    it('should return false for wrong cid format', async () => {
      const result = await uut.detectNsfw({ mutableData: '' })
      assert.isFalse(result)
    })

    it('should return true if nft boolean detected', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').resolves({ data: { nsfw: true } })

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isTrue(result)
    })
    it('should return true if nft string detected', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').resolves({ data: { nsfw: 'true' } })

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isTrue(result)
    })
    it('should return false if nfsw property does not exist', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').resolves({ data: {} })

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isFalse(result)
    })
    it('should return false on error', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').throws(new Error('test error'))

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isFalse(result)
    })
  })
})
