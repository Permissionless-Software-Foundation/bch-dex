/*
  Unit tests for the User entity library.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import Order from '../../../src/entities/order.js'

let sandbox
let uut

describe('#Order-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new Order()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#inputValidate', () => {
    it('should throw an error if data is not provided', () => {
      try {
        uut.inputValidate()
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })

    it('should throw an error if messageType is not included', () => {
      try {
        const data = {}
        uut.inputValidate(data)
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
        uut.inputValidate(data)
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
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'tokenId' must be a string.")
      }
    })

    it('should throw an error if buyOrSell is not included', () => {
      try {
        const data = { messageType: 1, messageClass: 1, tokenId: 'fakeId' }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'buyOrSell' must be a string.")
      }
    })

    it('should throw an error if rateInBaseUnit is not included', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy'
        }
        uut.inputValidate(data)
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
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInBaseUnit: 1000
        }
        uut.inputValidate(data)
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
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInBaseUnit: 1000,
          minUnitsToExchange: 350
        }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'numTokens' must be a number.")
      }
    })
    it('should throw an error if numTokens is not a number', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInBaseUnit: 1000,
          minUnitsToExchange: 350,
          numTokens: 'notANumber'
        }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'numTokens' must be a number.")
      }
    })
    it('should throw an error if makerAddress is not included', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInBaseUnit: 1000,
          minUnitsToExchange: 350,
          numTokens: 1000
        }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'makerAddr' must be a string.")
      }
    })
    it('should throw an error if makerAddress is not a string', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInBaseUnit: 1000,
          minUnitsToExchange: 350,
          numTokens: 1000,
          makerAddr: 1234567890
        }
        uut.inputValidate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'makerAddr' must be a string.")
      }
    })
    it('should return the correct data', () => {
      const data = {
        messageType: 1,
        messageClass: 1,
        tokenId: 'fakeId',
        buyOrSell: 'buy',
        rateInBaseUnit: 1000,
        minUnitsToExchange: 350,
        numTokens: 1000,
        makerAddr: 'fakeAddr'
      }
      const result = uut.inputValidate(data)
      assert.deepEqual(result, data)
    })
  })
})
