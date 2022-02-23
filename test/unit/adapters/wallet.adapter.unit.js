/*
  Unit tests for the Wallet Adapter library.
*/

// Public npm libraries.
const assert = require('chai').assert
const sinon = require('sinon')
const fs = require('fs')
// const BCHJS = require('@psf/bch-js')

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

  describe('#instanceWallet', () => {
    it('should create an instance of BchWallet', async () => {
      // Mock dependencies
      uut.BchWallet = MockBchWallet

      // Ensure we open the test file, not the production wallet file.
      uut.WALLET_FILE = testWalletFile

      const walletData = await uut.openWallet()

      const result = await uut.instanceWallet(walletData.mnemonic)
      console.log('result: ', result)

      assert.property(result, 'walletInfoPromise')
    })

    it('should catch and throw an error', async () => {
      try {
        await uut.instanceWallet()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read property')
      }
    })
  })

  describe('#generateSignature', () => {
    it('should return a signature', async () => {
      // mock instance of minimal-slp-wallet
      uut.bchWallet = new MockBchWallet()

      const result = await uut.generateSignature('test')
      // console.log('result: ', result)

      assert.isString(result)
    })

    it('should catch and throw errors', async () => {
      try {
        // mock instance of minimal-slp-wallet
        uut.bchWallet = new MockBchWallet()

        // force an error
        sandbox
          .stub(uut.bchWallet.bchjs.BitcoinCash, 'signMessageWithPrivKey')
          .throws(new Error('test error'))

        await uut.generateSignature('test')

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#burnPsf', () => {
    it('should burn PSF tokens and return the txid', async () => {
      // mock instance of minimal-slp-wallet
      uut.bchWallet = new MockBchWallet()

      const result = await uut.burnPsf()
      // console.log('result: ', result)

      assert.equal(result.success, true)
      assert.equal(result.txid, 'txid')
    })

    it('should throw error if no PSF tokens are found', async () => {
      try {
        // mock instance of minimal-slp-wallet
        uut.bchWallet = new MockBchWallet()

        // Remove the PSF token from the mock data.
        uut.bchWallet.utxos.utxoStore.slpUtxos.type1.tokens.pop()

        await uut.burnPsf()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Token UTXO of with ID of')
      }
    })

    it('should catch and throw an error', async () => {
      try {
        await uut.burnPsf()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Cannot read property')
      }
    })
  })

  describe('#incrementNextAddress', () => {
    it('should increment the nextAddress property', async () => {
      // Ensure we open the test file, not the production wallet file.
      uut.WALLET_FILE = testWalletFile

      // mock instance of minimal-slp-wallet
      uut.bchWallet = new MockBchWallet()

      const result = await uut.incrementNextAddress()

      assert.equal(result, 2)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'openWallet').rejects(new Error('test error'))

        await uut.incrementNextAddress()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getKeyPair', () => {
    it('should return an object with a key pair', async () => {
      // Ensure we open the test file, not the production wallet file.
      uut.WALLET_FILE = testWalletFile

      // mock instance of minimal-slp-wallet
      uut.bchWallet = new MockBchWallet()

      const result = await uut.getKeyPair()
      // console.log('result: ', result)

      assert.property(result, 'cashAddress')
      assert.property(result, 'wif')
      assert.property(result, 'hdIndex')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut, 'incrementNextAddress')
          .rejects(new Error('test error'))

        await uut.getKeyPair()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
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
