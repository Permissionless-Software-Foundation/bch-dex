/*
  Unit tests for the User entity library.
*/

const assert = require('chai').assert
const sinon = require('sinon')

const Entry = require('../../../src/entities/entry')

let sandbox
let uut

describe('#User-Entity', () => {
  before(async () => { })

  beforeEach(() => {
    uut = new Entry()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if entry is not provided', () => {
      try {
        uut.validate()
      } catch (err) {
        assert.include(err.message, "Property 'entry' must be a string!")
      }
    })

    it('should throw an error if description is not provided', () => {
      try {
        const inputData = {
          entry: 'entry'
        }
        uut.validate(inputData)
      } catch (err) {
        assert.include(err.message, "Property 'description' must be a string!")
      }
    })

    it('should throw an error if slpAddress is not provided', () => {
      try {
        const inputData = {
          entry: 'entry',
          description: 'test'
        }
        uut.validate(inputData)
      } catch (err) {
        assert.include(err.message, "Property 'slpAddress' must be a string!")
      }
    })

    it('should throw an error if signature is not provided', () => {
      try {
        const inputData = {
          entry: 'entry',
          description: 'test',
          slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg'
        }
        uut.validate(inputData)
      } catch (err) {
        assert.include(err.message, "Property 'signature' must be a string!")
      }
    })
    it('should throw an error if category is not provided', () => {
      try {
        const inputData = {
          entry: 'entry',
          description: 'test',
          slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
          signature: 'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw='
        }
        uut.validate(inputData)
      } catch (err) {
        assert.include(err.message, "Property 'category' must be a string!")
      }
    })

    it('should return a Entry object', () => {
      const inputData = {
        entry: 'entry',
        description: 'test',
        slpAddress: 'simpleledger:qpnty9t0w93fez04h7yzevujpv8pun204qqp0jfafg',
        signature: 'IFytRg6KpvTHCzcW0ZwVhPqdKtRGpoRDcuEb958yIgJFUJlb1F5qPzt/JnlYE7r012BSFj+UT67DZVTU8oNB5vw=',
        category: 'test'
      }

      const entry = uut.validate(inputData)
      // console.log('entry: ', entry)

      assert.property(entry, 'entry')
      assert.equal(entry.entry, inputData.entry)

      assert.property(entry, 'description')
      assert.equal(entry.description, inputData.description)

      assert.property(entry, 'slpAddress')
      assert.equal(entry.slpAddress, inputData.slpAddress)

      assert.property(entry, 'signature')
      assert.equal(entry.signature, inputData.signature)

      assert.property(entry, 'slpAddress')
      assert.equal(entry.category, inputData.category)
    })
  })
})
