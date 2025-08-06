import { assert } from 'chai'
import BCHJS from '../../../src/adapters/bch.js'
import sinon from 'sinon'
import util from 'util'
util.inspect.defaultOptions = { depth: 1 }

// const mockData = require('../mocks/bchjs-mock')

let sandbox
let uut
describe('bch', () => {
  beforeEach(() => {
    uut = new BCHJS()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#_verifySignature', () => {
    it('should return true for valid signature', () => {
      const offerBchAddr =
        'bitcoincash:qphjncqpnv444jq8acqk4dkm3296c50xhqggeatvn8'
      const signature =
        'Hz8bi9CsHaYkk5SGtHLU0aaxFspEXz7IdBNn6xV8ejE6OCuIRoZuVE9QJsGSlJ3Rt0ez2LWD0e292NZ84rRwnfk='
      const sigMsg = 'example.com'
      const verifyObj = { offerBchAddr, signature, sigMsg }

      const result = uut._verifySignature(verifyObj)

      assert.equal(result, true)
    })

    it('should return false for invalid signature', () => {
      const offerBchAddr =
        'bitcoincash:qphjncqpnv444jq8acqk4dkm3296c50xhqggeatvn8'
      const signature =
        'Hz8bi9CsHaYkk5SGtHLU0aaxFspEXz7IdBNn6xV8ejE6OCuIRoZuVE9QJsGSlJ3Rt0ez2LWD0e292NZ84rRwnfd='
      const sigMsg = 'example.com'
      const verifyObj = { offerBchAddr, signature, sigMsg }

      const result = uut._verifySignature(verifyObj)

      assert.equal(result, false)
    })

    it('should catch and throw errors', () => {
      try {
        // Force an error
        sandbox
          .stub(uut.bchjs.BitcoinCash, 'verifyMessage')
          .throws(new Error('test error'))

        const offerBchAddr =
          'bitcoincash:qphjncqpnv444jq8acqk4dkm3296c50xhqggeatvn8'
        const signature =
          'Hz8bi9CsHaYkk5SGtHLU0aaxFspEXz7IdBNn6xV8ejE6OCuIRoZuVE9QJsGSlJ3Rt0ez2LWD0e292NZ84rRwnfk='
        const sigMsg = 'example.com'
        const verifyObj = { offerBchAddr, signature, sigMsg }
        uut._verifySignature(verifyObj)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  // describe('#getPSFTokenBalance', () => {
  //   it('should throw error if slpAddress is not provided', async () => {
  //     try {
  //       await uut.getPSFTokenBalance()
  //       assert.fail('Unexpected result')
  //     } catch (err) {
  //       assert.include(err.message, 'slpAddress must be a string')
  //     }
  //   })
  //
  //   it('should return psf tokens balance', async () => {
  //     // Mock live network calls.
  //     sandbox
  //       .stub(uut.bchjs.SLP.Utils, 'balancesForAddress')
  //       .resolves(mockData.psfBalances)
  //
  //     const slpAddress =
  //       'simpleledger:qp49th03gvjn58d6fxzaga6u09w4z56smyuk43lzkd'
  //     const result = await uut.getPSFTokenBalance(slpAddress)
  //
  //     assert.isNumber(result)
  //     assert.equal(result, 2)
  //   })
  //
  //   it('should return 0 if the slp address does not has Psf tokens', async () => {
  //     // Mock live network calls.
  //     sandbox
  //       .stub(uut.bchjs.SLP.Utils, 'balancesForAddress')
  //       .resolves(mockData.noPsfBalances)
  //
  //     const slpAddress =
  //       'simpleledger:qp49th03gvjn58d6fxzaga6u09w4z56smyuk43lzkd'
  //     const result = await uut.getPSFTokenBalance(slpAddress)
  //
  //     assert.isNumber(result)
  //     assert.equal(result, 0)
  //   })
  //
  //   it('should return 0 for empty balances', async () => {
  //     // Mock live network calls.
  //     sandbox.stub(uut.bchjs.SLP.Utils, 'balancesForAddress').resolves([])
  //
  //     const slpAddress =
  //       'simpleledger:qp49th03gvjn58d6fxzaga6u09w4z56smyuk43lzkd'
  //     const result = await uut.getPSFTokenBalance(slpAddress)
  //
  //     assert.isNumber(result)
  //     assert.equal(result, 0)
  //   })
  // })

  describe('#getMerit', () => {
    it('should throw error if slpAddr is not provided', async () => {
      try {
        await uut.getMerit()
        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'slpAddr must be a string')
      }
    })
    it('should throw error if slpAddr provided is invalid type', async () => {
      try {
        await uut.getMerit(1)
        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'slpAddr must be a string')
      }
    })

    /*     it('should return the merit ', async () => {
      try {
        // Mock live network calls.
        sandbox.stub(uut.msgLib.merit, 'agMerit').resolves(100)

        const slpAddr =
          'simpleledger:qqgnksc6zr4nzxrye69fq625wu2myxey6uh9kzjy96'
        const merit = await uut.getMerit(slpAddr)
        assert.isNumber(merit)
      } catch (err) {
        console.log('err: ', err)
        assert.fail('Unexpected result')
      }
    }) */
  })
})
