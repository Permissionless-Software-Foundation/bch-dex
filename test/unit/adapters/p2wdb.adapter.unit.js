/*
  Unit tests for the p2wdb adapter library.
*/

// Public npm libraries.
const assert = require('chai').assert
const sinon = require('sinon')
// const BCHJS = require('@psf/bch-js')
const BchWallet = require('minimal-slp-wallet/index.js')

// Local libraries.
const P2wdbAdapter = require('../../../src/adapters/p2wdb-adapter')

describe('#P2wdbAdapter', () => {
  let uut, sandbox, bchWallet

  beforeEach(async () => {
    // const bchjs = new BCHJS()
    bchWallet = new BchWallet()
    await bchWallet.walletInfoPromise

    uut = new P2wdbAdapter({ bchWallet })
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if bchWallet is not passed in', () => {
      try {
        uut = new P2wdbAdapter()

        assert.fail('Unexpected coded path')
      } catch (err) {
        assert.include(err.message, 'Must pass an instance of minimal-slp-wallet as bchWallet when instantiating p2wdb.js adapter.')
      }
    })
  })

  describe('#instantiateWriteLib', () => {
    it('should instantiate Write library using web 3 interface', async () => {
      // Force code path
      uut.config.useFullStackCash = false

      // Mock dependencies
      uut.Write =
        class Write {
          constructor () {
            this.interface = 'web3'
          }
        }

      const wif = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'

      const result = uut.instantiateWriteLib(wif)
      // console.log('result: ', result)

      assert.equal(result.interface, 'web3')
    })

    it('should instantiate Write library using web 2 interface', async () => {
      // Force code path
      uut.config.useFullStackCash = true

      // Mock dependencies
      uut.Write =
        class Write {
          constructor () {
            this.interface = 'fullstack'
          }
        }

      const wif = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'

      const result = uut.instantiateWriteLib(wif)
      // console.log('result: ', result)

      assert.equal(result.interface, 'fullstack')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.instantiateWriteLib()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'WIF input required when calling instantiateWriteLib()')
      }
    })
  })

  describe('#checkForSufficientFunds', () => {
    it('should throw error if WIF is not provided', async () => {
      try {
        await uut.checkForSufficientFunds()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'invalid wif to check for funds')
      }
    })

    it('should return status of funds', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'instantiateWriteLib').returns({
        checkForSufficientFunds: () => true
      })

      const wif = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'

      const result = await uut.checkForSufficientFunds(wif)

      assert.equal(result, true)
    })
  })

  describe('#write', async () => {
    it('should throw error if WIF is not provided', async () => {
      try {
        await uut.write()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'wif input must be a private key starting with the letter L or K')
      }
    })

    it('should write data to the P2WDB', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'instantiateWriteLib').returns({
        postEntry: async () => {
          return { hash: 'fake-hash' }
        }
      })

      const wif = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'
      const inObj = { wif }

      const result = await uut.write(inObj)
      // console.log('result: ', result)

      assert.equal(result, 'fake-hash')
    })
  })
})
