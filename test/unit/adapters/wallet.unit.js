
/*
  Unit tests for the adapter/wallet.js library.
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

import WalletAdapter from '../../../src/adapters/wallet.js'
import { MockBchWallet } from '../mocks/adapters/wallet.js'

describe('#wallet', () => {
  let uut
  let sandbox

  beforeEach(() => {
    uut = new WalletAdapter()
    uut.bchWallet = new MockBchWallet()
    uut.bitcoinJs = {
      Transaction: {
        fromHex: () => { return { } },
        SIGHASH_ALL: () => { return { } }
      },
      TransactionBuilder: {
        fromTransaction: () => { return { sign: () => { return { } }, build: () => { return { toHex: () => { return 'hex' } } } } }
      },
      ECPair: {
        fromWIF: () => { return { } }
      }
    }
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#moveTokensFromCustomWallet', () => {
    it('should move tokens from a custom wallet', async () => {
      sandbox.stub(uut, 'getKeyPair').resolves({
        cashAddress: 'cashAddress',
        wif: 'wif',
        hdIndex: 11
      })

      const customWallet = new MockBchWallet()
      customWallet.sendTokens = () => { return 'move token tx id result' }
      customWallet.utxos.utxoStore.slpUtxos.type1.tokens = [
        {
          tokenId: 'tokenId',
          tokenType: 1,
          qty: 1
        }
      ]
      const inObj = {
        qty: 1,
        wallet: customWallet,
        tokenId: 'tokenId'
      }
      const result = await uut.moveTokensFromCustomWallet(inObj)
      assert.equal(result.txid, 'move token tx id result')
      assert.equal(result.hdIndex, 11)
      assert.equal(result.tokenType, 1)
      assert.equal(result.vout, 1)
    })
    it('should throw an error if the wallet is not provided', async () => {
      try {
        const inObj = {
          qty: 1,
          tokenId: 'tokenId'
        }
        await uut.moveTokensFromCustomWallet(inObj)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'wallet is required!')
      }
    })
    it('should throw an error if the tokenId is not provided', async () => {
      try {
        const inObj = {
          qty: 1,
          wallet: new MockBchWallet()
        }
        await uut.moveTokensFromCustomWallet(inObj)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'tokenId must be a string!')
      }
    })
    it('should throw an error if the qty is not provided', async () => {
      try {
        const inObj = {
          tokenId: 'tokenId',
          wallet: new MockBchWallet()
        }
        await uut.moveTokensFromCustomWallet(inObj)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'qty must be a number!')
      }
    })
  })
  describe('#completeTx', () => {
    it('should complete a transaction', async () => {
      sandbox.stub(uut, 'getKeyPair').resolves({
        cashAddress: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
        wif: 'L5D2UAam8tvo3uii5kpgaGyjvVMimdrXu8nWGQSQjuuAix6ji1YQ',
        hdIndex: 11
      })
      sandbox.stub(uut, 'deseralizeTx').resolves({
        txid: 'complete tx id result'
      })
      sandbox.stub(uut.retryQueue, 'addToQueue').resolves('complete tx id result')

      const hex = 'hex'
      const hdIndex = 11
      const txid = await uut.completeTx(hex, hdIndex)
      assert.equal(txid, 'complete tx id result')
    })
    it('should throw an error if the hex is not provided', async () => {
      try {
        const hdIndex = 11
        await uut.completeTx(null, hdIndex)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'hex must be a string!')
      }
    })
    it('should throw an error if the hdIndex is not provided', async () => {
      try {
        const hex = 'hex'
        await uut.completeTx(hex, null)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'hdIndex must be a non-negative number!')
      }
    })
  })
})
