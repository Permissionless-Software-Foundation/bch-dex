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
const OrderUseCase = require('../../../src/use-cases/order')
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
  })

  describe('#createOffer', () => {
    it('should ignore an offer if utxo has been spent', async () => {
      const offerObj = {
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
      sandbox.stub(uut.adapters.bchjs.Blockchain, 'getTxOut').resolves(null)

      const result = await uut.createOffer(offerObj)
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should create an offer and return the hash', async () => {
      const offerObj = {
        appId: 'swapTest555',
        data: {
          messageType: 1,
          messageClass: 1,
          tokenId:
            '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
          buyOrSell: 'sell',
          rateInBaseUnit: 1000,
          minUnitsToExchange: 10,
          numTokens: 0.02,
          utxoTxid:
            '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
          utxoVout: 0,
          makerAddr: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
          ticker: 'TROUT',
          tokenType: 1
        },
        timestamp: '2021-09-20T17:54:26.395Z',
        localTimeStamp: '9/20/2021, 10:54:26 AM',
        txid: '46f50f2a0cf44e3ed70dfb0618ef3ebfee57aabcf229b5d2d17c07322b54a8d7',
        hash: 'zdpuB2X25AZCKo3wpr4sSbw44vqPWJRqcxWQRHZccK5BdtoGD'
      }

      // Mock dependencies
      sandbox.stub(uut.adapters.bchjs.Blockchain, 'getTxOut').resolves({
        bestblock:
          '000000000000000000d2060b83f90f8187b92fcccb4a42aaa19ce5a305fe0ae3',
        confirmations: 0,
        value: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1145980243 38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0 00000000001e8480 0000000009a7ec80',
          hex: '6a04534c500001010453454e442038e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b00800000000001e8480080000000009a7ec80',
          type: 'nulldata'
        },
        coinbase: false
      })

      const result = await uut.createOffer(offerObj)
      // console.log('result: ', result)

      assert.equal(result, true)
    })
  })
})
