/*
  Unit tests for the Wallet Adapter library.
*/

// Public npm libraries.
const assert = require('chai').assert
const sinon = require('sinon')
const fs = require('fs')

// Local libraries.
const WalletAdapter = require('../../../src/adapters/wallet')
const { MockBchWallet } = require('../mocks/adapters/wallet')

// Global constants
const testWalletFile = `${__dirname.toString()}/test-wallet.json`

describe('#wallet', () => {
  let uut
  let sandbox

  before(() => {
    // Delete the test file if it exists.
    try {
      deleteFile(testWalletFile)
    } catch (err) {}
  })

  beforeEach(() => {
    uut = new WalletAdapter()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  after(() => {
    // Delete the test file if it exists.
    try {
      deleteFile(testWalletFile)
    } catch (err) {}
  })

  describe('#openWallet', () => {
    it('should create a new wallet what wallet file does not exist', async () => {
      // Mock dependencies
      uut.BchWallet = MockBchWallet

      // Ensure we open the test file, not the production wallet file.
      uut.WALLET_FILE = testWalletFile

      const result = await uut.openWallet()
      // console.log('result: ', result)

      assert.property(result, 'mnemonic')
      assert.property(result, 'privateKey')
      assert.property(result, 'publicKey')
      assert.property(result, 'cashAddress')
      assert.property(result, 'address')
      assert.property(result, 'slpAddress')
      assert.property(result, 'legacyAddress')
      assert.property(result, 'hdPath')
    })

    it('should open existing wallet file', async () => {
      // This test case uses the file created in the previous test case.

      // Ensure we open the test file, not the production wallet file.
      uut.WALLET_FILE = testWalletFile

      const result = await uut.openWallet()
      // console.log('result: ', result)

      assert.property(result, 'mnemonic')
      assert.property(result, 'privateKey')
      assert.property(result, 'publicKey')
      assert.property(result, 'cashAddress')
      assert.property(result, 'address')
      assert.property(result, 'slpAddress')
      assert.property(result, 'legacyAddress')
      assert.property(result, 'hdPath')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        uut.WALLET_FILE = ''
        uut.BchWallet = () => {}

        await uut.openWallet()
        // console.log('result: ', result)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'this.BchWallet is not a constructor')
      }
    })
  })
})

const deleteFile = (filepath) => {
  try {
    // Delete state if exist
    fs.unlinkSync(filepath)
  } catch (err) {
    // console.error('Error trying to delete file: ', err)
  }
}
