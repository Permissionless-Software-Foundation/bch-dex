/*
  Unit tests for the p2wdb adapter library.
*/

// Public npm libraries.
const assert = require('chai').assert
const sinon = require('sinon')

// Local libraries.
const P2wdbAdapter = require('../../../src/adapters/p2wdb')

describe('#P2wdbAdapter', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new P2wdbAdapter()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#write', () => {
    it('should write an offer to the P2WDB', async () => {
      const inputObj = {
        txid: 'testTxid',
        signature: 'testSignature',
        message: 'testMessage',
        appId: 'testAppId',
        data: { key: 'value' }
      }

      // Mock axios to prevent live network call
      sandbox.stub(uut.axios, 'post').resolves({ data: { hash: 'testhash' } })

      const result = await uut.write(inputObj)
      // console.log('result: ', result)

      assert.equal(result, 'testhash')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.write()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })
})
