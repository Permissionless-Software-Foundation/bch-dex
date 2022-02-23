/*
  Unit tests for the User entity library.
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
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })

    it('should throw an error if messageType is not included', () => {
      try {
        const data = {}
        uut.validate(data)
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
        const data = { messageType: 1 }
        uut.validate(data)
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
        const data = { messageType: 1, messageClass: 1 }
        uut.validate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'tokenId' must be a string.")
      }
    })

    it('should throw an error if buyOrSell is not included', () => {
      try {
        const data = { messageType: 1, messageClass: 1, tokenId: 'fakeId' }
        uut.validate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'buyOrSell' must be a string.")
      }
    })

    it('should throw an error if rateInSats is not included', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy'
        }
        uut.validate(data)
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
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInSats: 1000
        }
        uut.validate(data)
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
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInSats: 1000,
          minSatsToExchange: 350
        }
        uut.validate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'numTokens' must be a number.")
      }
    })
  })
})
