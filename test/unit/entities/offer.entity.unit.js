/*
  Unit tests for the Offer entity library.
*/

const assert = require('chai').assert
const sinon = require('sinon')

const Offer = require('../../../src/entities/offer')

let sandbox
let uut

describe('#Offer-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new Offer()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if data is not provided', () => {
      try {
        uut.validate()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          'Input to offer.validate() must be an object with a data property.'
        )
      }
    })

    it('should throw an error if messageType is not included', () => {
      try {
        const offerData = { data: {} }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'messageType' must be an integer number"
        )
      }
    })

    it('should throw an error if messageClass is not included', () => {
      try {
        const offerData = { data: { messageType: 1 } }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'messageClass' must be an integer number"
        )
      }
    })

    it('should throw an error if tokenId is not included', () => {
      try {
        const offerData = { data: { messageType: 1, messageClass: 1 } }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'tokenId' must be a string.")
      }
    })

    it('should throw an error if buyOrSell is not included', () => {
      try {
        const offerData = {
          data: { messageType: 1, messageClass: 1, tokenId: 'fakeId' }
        }

        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'buyOrSell' must be a string.")
      }
    })

    it('should throw an error if rateInBaseUnit is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy'
          }
        }

        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'rateInBaseUnit' must be an integer number."
        )
      }
    })

    it('should throw an error if minUnitsToExchange is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000
          }
        }

        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'minUnitsToExchange' must be an integer number."
        )
      }
    })

    it('should throw an error if numTokens is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'numTokens' must be a number.")
      }
    })

    it('should throw an error if utxoTxid is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350,
            numTokens: 1
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'utxoTxid' must be a string.")
      }
    })

    it('should throw an error if utxoVout is not included', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350,
            numTokens: 1,
            utxoTxid: 'fakeTxid'
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'utxoVout' must be an integer number."
        )
      }
    })

    it('should throw an error if proper status is not applied', () => {
      try {
        const offerData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInBaseUnit: 1000,
            minUnitsToExchange: 350,
            numTokens: 1,
            utxoTxid: 'fakeTxid',
            utxoVout: 0,
            offerStatus: 'badStatus'
          }
        }
        uut.validate(offerData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'offerStatus' must be posted, taken, or dead"
        )
      }
    })

    it('should validate a new offer', () => {
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
          offerStatus: 'posted',
          makerAddr: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00'
        },
        timestamp: '2021-09-20T17:54:26.395Z',
        localTimeStamp: '9/20/2021, 10:54:26 AM',
        txid: '46f50f2a0cf44e3ed70dfb0618ef3ebfee57aabcf229b5d2d17c07322b54a8d7',
        hash: 'zdpuB2X25AZCKo3wpr4sSbw44vqPWJRqcxWQRHZccK5BdtoGD'
      }

      const result = uut.validate(offerObj)
      // console.log('result: ', result)

      assert.property(result, 'messageType')
      assert.property(result, 'messageClass')
      assert.property(result, 'tokenId')
      assert.property(result, 'buyOrSell')
      assert.property(result, 'rateInBaseUnit')
      assert.property(result, 'minUnitsToExchange')
      assert.property(result, 'numTokens')
      assert.property(result, 'utxoTxid')
      assert.property(result, 'utxoVout')
      assert.property(result, 'timestamp')
      assert.property(result, 'localTimestamp')
      assert.property(result, 'txid')
      assert.property(result, 'p2wdbHash')
    })
  })
})
