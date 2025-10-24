/*
  Unit tests for the Offer Use Case library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import RetryQueue from '@chris.troutner/retry-queue'

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
    uut.retryQueue = new RetryQueue({ retryPeriod: 1000, attempts: 1 })
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

    it('should return false if offer already processed', async () => {
      const offerObj = mockData.offerMockData
      uut.seenOffers.push(offerObj.data.nostrEventId)
      // Mock dependencies

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

    it('should create offer with mutable data', async () => {
      const tokenDataMock = mockData.nftTokenData01
      const offerObj = mockData.offerMockData
      const mutableDataMock = mockData.mutableDataMock

      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').throws(new Error('offer not found'))
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves({}) // Utxo Status call
        .onCall(1).resolves(tokenDataMock) // Token Data call
        .onCall(2).resolves(mutableDataMock)

      const result = await uut.createOffer(offerObj)
      assert.isTrue(result)
    })

    it('should skip userData stringify error', async () => {
      const tokenDataMock = mockData.nftTokenData01
      const offerObj = mockData.offerMockData
      const mutableDataMock = mockData.mutableDataMock
      mutableDataMock.userData = { n: 10n }
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').throws(new Error('offer not found'))
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves({}) // Utxo Status call
        .onCall(1).resolves(tokenDataMock) // Token Data call
        .onCall(2).resolves(mutableDataMock)

      const result = await uut.createOffer(offerObj)
      assert.isTrue(result)
    })

    it('should handle error getting token data', async () => {
      // const tokenDataMock = mockData.nftTokenData01
      const offerObj = mockData.offerMockData
      const mutableDataMock = mockData.mutableDataMock
      mutableDataMock.userData = { n: 10n }
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').throws(new Error('offer not found'))
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves({}) // Utxo Status call
        .onCall(1).throws(new Error('test error'))

      const result = await uut.createOffer(offerObj)
      assert.isTrue(result)
    })

    it('should handle error getting mutable data', async () => {
      const tokenDataMock = mockData.nftTokenData01
      const offerObj = mockData.offerMockData
      const mutableDataMock = mockData.mutableDataMock
      mutableDataMock.userData = { n: 10n }
      // Mock dependencies
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)
      sandbox.stub(uut, 'findOfferByTxid').throws(new Error('offer not found'))
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves({}) // Utxo Status call
        .onCall(1).resolves(tokenDataMock) // Token Data call
        .onCall(2).throws(new Error('test error')) // cid2json call

      const result = await uut.createOffer(offerObj)
      assert.isTrue(result)
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

    it('should handle error', async () => {
      try {
        // Mock dependencies and force desired code path.
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))
        // sandbox.stub(uut.OfferModel, 'remove').resolves()

        await uut.removeDuplicateOffers()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'test error')
      }
    })
  })

  describe('#removeStaleOffers', () => {
    it('remove offer with wrong utxoState', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([{ remove: async () => { } }])
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves(false)

      await uut.removeStaleOffers()
    })

    it('remove offer with wrong txid', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([{ remove: async () => { } }])
      sandbox.stub(uut.retryQueue, 'addToQueue').throws(new Error('txid needs to be a proper transaction ID'))

      await uut.removeStaleOffers()
    })

    it('remove expired offer ', async () => {
      const tsMock = new Date()
      tsMock.setMonth(tsMock.getMonth() - 3)

      const timestamp = tsMock.getTime()
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([{ timestamp, remove: async () => { } }])
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves(true)

      await uut.removeStaleOffers()
    })

    it('should handle axios error ', async () => {
      const testErr = new Error()
      testErr.isAxiosError = true

      // Mock dependencies and force desired code path.
      sandbox.stub(uut.OfferModel, 'find').resolves([{ remove: async () => { } }])
      sandbox.stub(uut.retryQueue, 'addToQueue').throws(testErr)

      await uut.removeStaleOffers()
    })

    it('should handle error ', async () => {
      try {
        const testErr = new Error('unknow error')

        // Mock dependencies and force desired code path.
        sandbox.stub(uut.OfferModel, 'find').resolves([{ remove: async () => { } }])
        sandbox.stub(uut.retryQueue, 'addToQueue').throws(testErr)

        await uut.removeStaleOffers()
        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'unknow error')
      }
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
    it('should fetch alternative url', async () => {
      // Mock dependencies and force desired code path.
      sandbox.stub(uut.axios, 'get').onCall(0).throws(new Error())
        .onCall(1).resolves({ data: { nsfw: true } })

      const result = await uut.detectNsfw({ mutableData: 'ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm' })
      assert.isTrue(result)
    })
  })

  describe('#listOffers', () => {
    it('should handle error', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))

        await uut.listOffers()

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should list orders', async () => {
      const queryMock = {
        sort () {
          return this
        },
        skip () {
          return this
        },
        limit () { return [] }
      }
      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'find').returns(queryMock)

      const result = await uut.listOffers()
      assert.isArray(result)
    })
  })

  describe('#listNftOffers', () => {
    it('should handle error', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))

        await uut.listNftOffers()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should list offers', async () => {
      const queryMock = {
        sort () {
          return this
        },
        skip () {
          return this
        },
        limit () { return [] }
      }
      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'find').returns(queryMock)

      const result = await uut.listNftOffers(1, true)
      assert.isObject(result)
      assert.property(result, 'data')
      assert.property(result, 'pagination')
      assert.isArray(result.data)
      assert.isObject(result.pagination)
    })
  })

  describe('#listFungibleOffers', () => {
    it('should handle error', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))

        await uut.listFungibleOffers()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should list orders', async () => {
      const queryMock = {
        sort () {
          return this
        },
        skip () {
          return this
        },
        limit () { return [] }
      }

      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'find').returns(queryMock)

      const result = await uut.listFungibleOffers()
      assert.isArray(result)
    })
  })

  describe('#takeOffer', () => {
    it('should handle error if input is not provided', async () => {
      try {
        await uut.takeOffer()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'eventId must be a string')
      }
    })

    it('should handle error for wrong offer status', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'completed' })

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'offer status is not "posted", so offer is dead and can not be countered.')
      }
    })

    it('should handle error for invalid utxo', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'posted' })
        sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(false)

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'UTXO does not exist. Aborting.')
      }
    })

    it('should handle insufficient funds', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'posted' })
        sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(true)
        sandbox.stub(uut, 'ensureFunds').throws(new Error('test error'))

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should handle error if counter offer cant be calculated', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'posted' })
        sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(true)
        sandbox.stub(uut, 'ensureFunds').resolves(true)

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not calculate the amount of BCH to generate counter offer')
      }
    })

    it('should handle error if counter offer cant be calculated', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').returns({ offerStatus: 'posted' })
        sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(true)
        sandbox.stub(uut, 'ensureFunds').resolves(true)

        await uut.takeOffer('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not calculate the amount of BCH to generate counter offer')
      }
    })

    it('should take offer', async () => {
      // Mock data
      const offerMock = Object.assign({}, mockData.offerMockData.data)
      offerMock.remove = async () => { }
      offerMock.offerStatus = 'posted'

      // Mock dependencies
      sandbox.stub(uut, 'findOfferByEvent').returns(offerMock)
      sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').returns(true)
      sandbox.stub(uut, 'ensureFunds').resolves(true)
      sandbox.stub(uut.adapters.wallet, 'moveBch').resolves({ sats: 1 })

      await uut.takeOffer('eventId')
    })
  })

  describe('#ensureFunds', () => {
    // it('should handle insufficient funds to use p2wdb', async () => {
    //   try {
    //     // Mock dependencies
    //     sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(false)
    //
    //     await uut.ensureFunds(mockData.offerMockData.data)
    //
    //     assert.fail('Unexpected code path')
    //   } catch (err) {
    //     assert.include(err.message, 'App wallet does not have funds for writing to the P2WDB')
    //   }
    // })

    it('should throw error if sats needed could no be able to calculated', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(true)

        // Mock Input
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.rateInBaseUnit = null

        await uut.ensureFunds(mock)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not calculate sats needed!')
      }
    })

    it('should throw error if app wallet does not have enough bch', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(true)
        sandbox.stub(uut.adapters.wallet.bchWallet, 'getBalance').resolves(0)

        await uut.ensureFunds(mockData.offerMockData.data)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'App wallet does not control enough BCH to purchase the tokens.')
      }
    })

    it('should handle BUY offer', async () => {
      try {
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.buyOrSell = 'buy'

        await uut.ensureFunds(mock)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Buy offers are not supported yet.')
      }
    })

    it('should return true', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.p2wdb, 'checkForSufficientFunds').resolves(true)
      sandbox.stub(uut.adapters.wallet.bchWallet, 'getBalance').resolves(10 * 10 ** 6)

      const result = await uut.ensureFunds(mockData.offerMockData.data)
      assert.isTrue(result)
    })
  })

  describe('#findOfferByEvent', () => {
    it('should throw an error if hash is not provided', async () => {
      try {
        await uut.findOfferByEvent()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'nostrEventId must be a string')
      }
    })

    it('should throw an error if order is not found!', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'findOne').resolves(null)

        await uut.findOfferByEvent('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'offer not found')
      }
    })

    it('should return offer by eventId', async () => {
      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'findOne').resolves({ toObject: () => { return { hash: 'hash' } } })

      const result = await uut.findOfferByEvent('eventId')
      assert.isObject(result)
    })
  })

  describe('#listOffersByAddress', () => {
    it('should throw an error if order is not found!', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'find').throws(new Error('test error'))

        await uut.listOffersByAddress('eventId')

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should return offer by eventId', async () => {
      // Mock dependencies
      sandbox.stub(uut.OfferModel, 'find').resolves([])

      const result = await uut.listOffersByAddress()
      assert.isArray(result)
    })
  })

  describe('#flagOffer', () => {
    it('should throw an error if input is not provided', async () => {
      try {
        await uut.flagOffer()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, '"data" property is required')
      }
    })

    it('should throw an error if offer is not found!', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'findOfferByEvent').resolves(null)

        const input = {
          data:
          {
            nostrEventId: 'eventId'
          }
        }
        await uut.flagOffer(input)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'not found in the database')
      }
    })

    it('should flag offer', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'findOfferByEvent').resolves({ flags: ['a', 'b', 'c'], save: () => { } })

      const input = {
        data:
        {
          nostrEventId: 'eventId'
        }
      }
      const result = await uut.flagOffer(input)
      assert.isTrue(result)
    })
  })

  describe('#loadOffers', () => {
    it('should handle nostr error', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.adapters.nostr, 'read').throws(new Error('test error'))

        await uut.loadOffers()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should skip internal function errors ', async () => {
      // Mock dependencies
      const nostrReadMock = [{ content: JSON.stringify(mockData.offerMockData) }]
      sandbox.stub(uut.adapters.nostr, 'read').resolves(nostrReadMock)

      await uut.loadOffers()
    })
    it('should createOffer ', async () => {
      mockData.offerMockData.data.dataType = 'offer'
      // Mock dependencies
      const nostrReadMock = [{ content: JSON.stringify(mockData.offerMockData) }]
      sandbox.stub(uut.adapters.nostr, 'read').resolves(nostrReadMock)
      const spy = sandbox.stub(uut, 'createOffer').resolves(true)

      await uut.loadOffers()
      assert.isTrue(spy.calledOnce)
    })
    it('should accept counter Offer ', async () => {
      mockData.offerMockData.data.dataType = 'counter-offer'
      // Mock dependencies
      const nostrReadMock = [{ content: JSON.stringify(mockData.offerMockData) }]
      sandbox.stub(uut.adapters.nostr, 'read').resolves(nostrReadMock)
      const spy = sandbox.stub(uut, 'acceptCounterOffer').resolves(true)

      await uut.loadOffers()
      assert.isTrue(spy.calledOnce)
    })

    it('should skip error inside loop', async () => {
      // Mock dependencies
      const nostrReadMock = [{ content: '' }]
      sandbox.stub(uut.adapters.nostr, 'read').resolves(nostrReadMock)
      await uut.loadOffers()
    })
  })

  describe('#acceptCounterOffer', () => {
    it('should return false if order already processed', async () => {
      const offerObj = mockData.offerMockData
      uut.seenOffers.push(offerObj.data.nostrEventId)
      // Mock dependencies

      const result = await uut.acceptCounterOffer(offerObj)
      assert.isFalse(result)
    })

    it('should return if order is not found!', async () => {
      // Mock dependencies
      sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').throws(new Error('test error'))

      const result = await uut.acceptCounterOffer({ data: { /** .... */ } })
      assert.equal(result, 'N/A')
    })

    it('should return N/A on axios error', async () => {
      // Mock dependencies
      const mock = Object.assign({}, mockData.offerMockData.data)
      sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').throws(new Error('test error'))
      const axiosErr = new Error('axios err')
      axiosErr.isAxiosError = true
      sandbox.stub(uut.retryQueue, 'addToQueue').throws(axiosErr)

      const result = await uut.acceptCounterOffer({ data: { /** .... */ } })
      assert.equal(result, 'N/A')
    })
    it('should return if utxo can not be validated', async () => {
      // Mock dependencies
      const mock = Object.assign({}, mockData.offerMockData.data)
      sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
      // sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').throws(new Error('test error'))
      sandbox.stub(uut.retryQueue, 'addToQueue').throws(new Error('test error'))

      const result = await uut.acceptCounterOffer({ data: { /** .... */ } })
      assert.equal(result, 'N/A')
    })

    it('should return if utxo is invalid', async () => {
      // Mock dependencies
      const mock = Object.assign({}, mockData.offerMockData.data)
      sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
      sandbox.stub(uut.adapters.wallet.bchWallet, 'utxoIsValid').resolves(false)

      const result = await uut.acceptCounterOffer({ data: { /** .... */ } })
      assert.equal(result, 'N/A')
    })

    it('should handle error if counter offer cant be calculated', async () => {
      try {
        // Mock Data
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.rateInBaseUnit = null

        // Mock dependencies
        sandbox.stub(uut.orderUseCase, 'findOrderByEvent').resolves(mock)
        sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)

        const result = await uut.acceptCounterOffer({ data: {} })
        console.log('result: ', result)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not calculate the amount of BCH offered in the Counter Offer')
      }
    })

    it('should handle error for wrong transaction output', async () => {
      try {
        // Mock Data
        const mock = Object.assign({}, mockData.offerMockData.data)

        // Mock dependencies
        sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
        sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').returns(0)
        sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMock)

        await uut.acceptCounterOffer({ data: mock })
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'The Counter Offer has an output of ')
        assert.include(err.message, 'which does not match the required')
      }
    })

    it('should skip transactions that do not have an output for the operator', async () => {
      // Mock data
      const mock = Object.assign({}, mockData.offerMockData.data)
      mock.makerAddr = 'bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7477' // Unknow Adress
      mock.rateInBaseUnit = 0
      mock.numTokens = 0

      // Mock dependencies
      sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
      sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').returns(0)

      sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMockNoOperatorOut)

      const result = await uut.acceptCounterOffer({ data: { /** .... */ } })
      assert.equal(result, 'N/A')
    })
    it('should skip transactions if operator address does not match', async () => {
      try {
        // Mock data
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.makerAddr = mockData.deserealizeTxMockNoOperatorOut.vout[2].scriptPubKey.addresses[0]
        mock.operatorAddress = 'bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7477'
        mock.rateInBaseUnit = 0
        mock.numTokens = 0

        // Mock dependencies
        sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
        sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').returns(0)

        sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMock)

        await uut.acceptCounterOffer({ data: {} })
        assert.fail('unexpected code path')
      } catch (error) {
        assert.include(error.message, 'The Counter Offer has an output address of')
      }
    })

    it('should handle error for wrong transaction output address', async () => {
      try {
        // Mock data
        const mock = Object.assign({}, mockData.offerMockData.data)
        mock.makerAddr = 'bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7477' // Unknow Adress
        mock.rateInBaseUnit = 0
        mock.numTokens = 0

        // Mock dependencies
        sandbox.stub(uut.orderUseCase, 'findOrderByEvent').resolves(mock)
        sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
        sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').returns(0)

        sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMock)

        await uut.acceptCounterOffer({ data: {} })
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'The Counter Offer has an output address of')
        assert.include(err.message, 'which does not match the Maker address')
      }
    })

    it('should handle error if operator sats to receive cant be calculated', async () => {
      // Mock data
      const mock = Object.assign({}, mockData.offerMockData.data)
      mock.makerAddr = mockData.deserealizeTxMock.vout[2].scriptPubKey.addresses[0]
      mock.operatorAddress = mockData.deserealizeTxMock.vout[3].scriptPubKey.addresses[0]
      mock.rateInBaseUnit = 0
      mock.numTokens = 0

      // Mock dependencies
      sandbox.stub(uut.orderUseCase, 'findOrderByEvent').resolves(mock)
      sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
      sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').returns(0)

      sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMock)

      const result = await uut.acceptCounterOffer({ data: {} })
      assert.equal(result, 'N/A')
    })

    it('should return tx id', async () => {
      // Mock data
      const mock = Object.assign({}, mockData.offerMockData.data)
      mock.makerAddr = mockData.deserealizeTxMock.vout[2].scriptPubKey.addresses[0]
      mock.operatorAddress = mockData.deserealizeTxMock.vout[3].scriptPubKey.addresses[0]
      mock.rateInBaseUnit = 0
      mock.numTokens = 0

      // Mock dependencies
      sandbox.stub(uut.orderUseCase, 'findOrderByEvent').resolves(mock)
      sandbox.stub(uut.orderUseCase, 'findOrderByUtxo').resolves(mock)
      sandbox.stub(uut.adapters.wallet.bchWallet.bchjs.BitcoinCash, 'toSatoshi').onCall(0).returns(0).onCall(1).returns(1000)
      sandbox.stub(uut.adapters.localdb.Users, 'findById').resolves({ mnemonic: 'test' })
      sandbox.stub(uut.adapters.wallet, 'deseralizeTx').resolves(mockData.deserealizeTxMock)

      //
      const result = await uut.acceptCounterOffer({ data: {} })
      assert.isString(result)
      assert.notEqual('N/A')
    })
  })

  describe('#syncOfferMutableData', () => {
    it('should throw error if tokenId is not provided!', async () => {
      try {
        await uut.syncOfferMutableData()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'tokenId must be a string!')
      }
    })
    it('should throw error if tokenId is not found!', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut.OfferModel, 'findOne').resolves(null)

        await uut.syncOfferMutableData('tokenId')
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Associated offer not found!')
      }
    })

    it('should return current data if lastUpdatedTokenData is less than 5 minutes', async () => {
      // Mock dependencies
      const lastUpdatedTokenData = new Date().getTime()
      const offerMock = Object.assign({}, mockData.offerMockData)
      offerMock.lastUpdatedTokenData = lastUpdatedTokenData
      // stub
      sandbox.stub(uut.OfferModel, 'findOne').returns(offerMock)
      const spy = sandbox.stub(uut.retryQueue, 'addToQueue').resolves(true)

      const offer = await uut.syncOfferMutableData('tokenId')

      assert.isObject(offer)
      assert.isTrue(spy.notCalled, 'it should not call retryQueue functions.')
    })
    it('should sync offer', async () => {
      // create a timestamp 6 minutes in the past

      // Create offer mock
      const offerMock = Object.assign({}, mockData.offerMockData)
      offerMock.save = () => { }

      // Stub functions
      sandbox.stub(uut.OfferModel, 'findOne').returns(offerMock)
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves(mockData.simpleNftTokenData01) // Token Data call
        .onCall(1).resolves(mockData.mutableDataMock)

      const offer = await uut.syncOfferMutableData('tokenId')
      assert.isObject(offer)
      assert.isNumber(offer.lastUpdatedTokenData)
    })

    it('should skip userData stringify error', async () => {
      // create mutable data mock
      const mutableDataMock = mockData.mutableDataMock
      mutableDataMock.userData = { n: 10n }

      // create offer mock
      const offerMock = Object.assign({}, mockData.offerMockData)
      offerMock.save = () => { }

      // Stub functions
      sandbox.stub(uut.OfferModel, 'findOne').returns(offerMock)
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves(mockData.simpleNftTokenData01) // Token Data call
        .onCall(1).resolves(mutableDataMock)

      const offer = await uut.syncOfferMutableData('tokenId')

      assert.isObject(offer)
      assert.isNumber(offer.lastUpdatedTokenData)
    })

    it('should handle error getting token data', async () => {
      // create offer mock
      const offerMock = Object.assign({}, mockData.offerMockData)
      offerMock.save = () => { }

      // Stub functions
      sandbox.stub(uut.OfferModel, 'findOne').returns(offerMock)
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).throws(new Error('tokendata error')) // Token Data call
        .onCall(1).resolves(mockData.mutableDataMock)

      const offer = await uut.syncOfferMutableData('tokenId')
      assert.isObject(offer)
    })

    it('should handle error getting mutable data', async () => {
      // create offer mock
      const offerMock = Object.assign({}, mockData.offerMockData)
      offerMock.save = () => { }

      // Stub functions
      sandbox.stub(uut.OfferModel, 'findOne').returns(offerMock)
      sandbox.stub(uut.retryQueue, 'addToQueue')
        .onCall(0).resolves(mockData.simpleNftTokenData01) // Token Data call
        .onCall(1).throws(new Error('mutable data error'))

      const offer = await uut.syncOfferMutableData('tokenId')
      assert.isObject(offer)
      assert.isNumber(offer.lastUpdatedTokenData)
    })
  })
})
