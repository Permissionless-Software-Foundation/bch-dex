/*
  Unit tests for the Order entity library.
*/

const assert = require('chai').assert
const sinon = require('sinon')

const Order = require('../../../src/entities/order')

let sandbox
let uut

describe('#Order-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new Order()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if data is not provided', () => {
      try {
        uut.validate()
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          'Input to order.validate() must be an object with a data property.'
        )
      }
    })

    it('should throw an error if messageType is not included', () => {
      try {
        const orderData = { data: {} }
        uut.validate(orderData)
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
        const orderData = { data: { messageType: 1 } }
        uut.validate(orderData)
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
        const orderData = { data: { messageType: 1, messageClass: 1 } }
        uut.validate(orderData)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'tokenId' must be a string.")
      }
    })

    it('should throw an error if buyOrSell is not included', () => {
      try {
        const orderData = {
          data: { messageType: 1, messageClass: 1, tokenId: 'fakeId' }
        }

        uut.validate(orderData)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'buyOrSell' must be a string.")
      }
    })

    it('should throw an error if rateInSats is not included', () => {
      try {
        const orderData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy'
          }
        }

        uut.validate(orderData)
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'rateInSats' must be an integer number."
        )
      }
    })

    it('should throw an error if minSatsToExchange is not included', () => {
      try {
        const orderData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInSats: 1000
          }
        }

        uut.validate(orderData)
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'minSatsToExchange' must be an integer number."
        )
      }
    })

    it('should throw an error if numTokens is not included', () => {
      try {
        const orderData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInSats: 1000,
            minSatsToExchange: 350
          }
        }
        uut.validate(orderData)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'numTokens' must be a number.")
      }
    })

    it('should throw an error if utxoTxid is not included', () => {
      try {
        const orderData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInSats: 1000,
            minSatsToExchange: 350,
            numTokens: 1
          }
        }
        uut.validate(orderData)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'utxoTxid' must be a string.")
      }
    })

    it('should throw an error if utxoVout is not included', () => {
      try {
        const orderData = {
          data: {
            messageType: 1,
            messageClass: 1,
            tokenId: 'fakeId',
            buyOrSell: 'buy',
            rateInSats: 1000,
            minSatsToExchange: 350,
            numTokens: 1,
            utxoTxid: 'fakeTxid'
          }
        }
        uut.validate(orderData)
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'utxoVout' must be an integer number."
        )
      }
    })

    it('should validate a new order', () => {
      const orderObj = {
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

      const result = uut.validate(orderObj)
      // console.log('result: ', result)

      assert.property(result, 'messageType')
      assert.property(result, 'messageClass')
      assert.property(result, 'tokenId')
      assert.property(result, 'buyOrSell')
      assert.property(result, 'rateInSats')
      assert.property(result, 'minSatsToExchange')
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
