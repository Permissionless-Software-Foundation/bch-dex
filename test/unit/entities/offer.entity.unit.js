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

    it('should throw an error if utxoTxid is not included', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInSats: 1000,
          minSatsToExchange: 1000
        }
        uut.validate(data)
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'utxoTxid' must be a string.")
      }
    })

    it('should throw an error if utxoVout is not included', () => {
      try {
        const data = {
          messageType: 1,
          messageClass: 1,
          tokenId: 'fakeId',
          buyOrSell: 'buy',
          rateInSats: 1000,
          minSatsToExchange: 1000,
          utxoTxid: 'fakeId'
        }
        uut.validate(data)
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'utxoVout' must be an integer number."
        )
      }
    })
  })

  // describe('#validate', () => {
  //   it('should throw an error if entry is not provided', () => {
  //     try {
  //       uut.validate()
  //     } catch (err) {
  //       assert.include(err.message, "Property 'entry' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if description is not provided', () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry'
  //       }
  //       uut.validate(inputData)
  //     } catch (err) {
  //       assert.include(err.message, "Property 'description' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if slpAddress is not provided', () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test'
  //       }
  //       uut.validate(inputData)
  //     } catch (err) {
  //       assert.include(err.message, "Property 'slpAddress' must be a string!")
  //     }
  //   })
  //
  //   it('should throw an error if signature is not provided', () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg'
  //       }
  //       uut.validate(inputData)
  //     } catch (err) {
  //       assert.include(err.message, "Property 'signature' must be a string!")
  //     }
  //   })
  //   it('should throw an error if category is not provided', () => {
  //     try {
  //       const inputData = {
  //         entry: 'entry',
  //         description: 'test',
  //         slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //         signature: 'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw='
  //       }
  //       uut.validate(inputData)
  //     } catch (err) {
  //       assert.include(err.message, "Property 'category' must be a string!")
  //     }
  //   })
  //
  //   it('should return a Entry object', () => {
  //     const inputData = {
  //       entry: 'entry',
  //       description: 'test',
  //       slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
  //       signature: 'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
  //       category: 'test'
  //     }
  //
  //     const entry = uut.validate(inputData)
  //     // console.log('entry: ', entry)
  //
  //     assert.property(entry, 'entry')
  //     assert.equal(entry.entry, inputData.entry)
  //
  //     assert.property(entry, 'description')
  //     assert.equal(entry.description, inputData.description)
  //
  //     assert.property(entry, 'slpAddress')
  //     assert.equal(entry.slpAddress, inputData.slpAddress)
  //
  //     assert.property(entry, 'signature')
  //     assert.equal(entry.signature, inputData.signature)
  //
  //     assert.property(entry, 'slpAddress')
  //     assert.equal(entry.category, inputData.category)
  //   })
  // })
})
