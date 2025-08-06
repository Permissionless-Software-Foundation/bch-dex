
/*
  Unit tests for the adapter/wallet.js library.
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

import WalletAdapter from '../../../src/adapters/wallet.js'
import { MockBchWallet } from '../mocks/adapters/wallet.js'
import { BchTokenSweepMock } from '../mocks/bch-token-sweep-mock.js'
import offerMockData from '../mocks/use-cases/offer-mock-data.js'
import fs from 'fs'
import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const testWalletFile = `${__dirname.toString()}/../../../test-wallet.json`

describe('#wallet', () => {
  let uut
  let sandbox
  let testWalletData

  before(() => {
    // try to remove the test wallet file
    try {
      fs.unlinkSync(testWalletFile)
    } catch (error) {
      console.log('error fsUnlinkSync: ', error)

      // silently fail
    }
  })
  after(() => {
    // try to remove the test wallet file
    try {
      fs.unlinkSync(testWalletFile)
    } catch (error) {
      console.log('error fsUnlinkSync: ', error)
      // silently fail
    }
  })

  beforeEach(() => {
    uut = new WalletAdapter()
    uut.BchWallet = MockBchWallet
    uut.bchWallet = new MockBchWallet()
    uut.BchTokenSweep = BchTokenSweepMock
    uut.WALLET_FILE = testWalletFile
    uut.bitcoinJs = {
      Transaction: {
        fromHex: () => { return {} },
        SIGHASH_ALL: () => { return {} }
      },
      TransactionBuilder: {
        fromTransaction: () => { return { sign: () => { return {} }, build: () => { return { toHex: () => { return 'hex' } } } } }
      },
      ECPair: {
        fromWIF: () => { return {} }
      }
    }
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#openWallet', () => {
    it('should create a new wallet when wallet file does not exist', async () => {
      // Ensure we open the test file, not the production wallet file.
      const result = await uut.openWallet()
      testWalletData = result
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
        uut.WALLET_FILE = ''
        // Force an error
        uut.BchWallet = () => {
        }
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
    it('should create an instance of BchWallet with rest-api', async () => {
      uut.config.useFullStackCash = true
      const result = await uut.instanceWallet(testWalletData)
      assert.equal(result.advancedOptions.interface, 'rest-api')
    })

    it('should create an instance of BchWallet with consumer-api', async () => {
      uut.config.useFullStackCash = false
      const result = await uut.instanceWallet(testWalletData)
      assert.equal(result.advancedOptions.interface, 'consumer-api')
    })
    it('should catch and throw an error if no mnemonic is provided', async () => {
      try {
        // Force an error
        await uut.instanceWallet({})
        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Wallet data is not formatted correctly. Can not read mnemonic in wallet file!')
      }
    })
  })
  describe('#incrementNextAddress', () => {
    it('should increment the nextAddress property', async () => {
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
      // uut.WALLET_FILE = testWalletFile
      uut.config.walletFile = testWalletFile

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
  describe('#generateSignature', () => {
    it('should sign message', async () => {
      const result = await uut.generateSignature('unit test message')
      // console.log('result: ', result)

      assert.isString(result)
    })

    it('should catch and throw an error', async () => {
      try {
        await uut.generateSignature()
      } catch (err) {
        assert.include(err.message, 'message is required!')
      }
    })
  })
  describe('#generatePartialTx', () => {
    it('should generate tx for fungible token', async () => {
      const utxoInfo = {
        txid: '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
        vout: 0,
        sats: 1000,
        wif: 'L2fzmF5hCeTZRVnr7Cyu66ucJAAKhkhkfinGVuUAKDtvAfwEx8a3'
      }

      sandbox.stub(uut.bchWallet, 'getTxData').resolves([offerMockData.fungibleTokenData01.genesisData])
      const result = await uut.generatePartialTx(offerMockData.fungibleOffer01, utxoInfo)

      assert.isString(result)
    })
    it('should generate tx for nft', async () => {
      const utxoInfo = {
        txid: '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
        vout: 0,
        sats: 1000,
        wif: 'L2fzmF5hCeTZRVnr7Cyu66ucJAAKhkhkfinGVuUAKDtvAfwEx8a3'
      }

      sandbox.stub(uut.bchWallet, 'getTxData').resolves([offerMockData.nftTokenData01.genesisData])
      const result = await uut.generatePartialTx(offerMockData.nftOffer01, utxoInfo)
      // console.log('result: ', result)

      assert.isString(result)
    })

    it('should handle unknown token type', async () => {
      try {
        const utxoInfo = {
          txid: '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
          vout: 0,
          sats: 1000,
          wif: 'L2fzmF5hCeTZRVnr7Cyu66ucJAAKhkhkfinGVuUAKDtvAfwEx8a3'
        }

        const offerMock = Object.assign({}, offerMockData.nftOffer01)
        offerMock.tokenType = 100
        await uut.generatePartialTx(offerMock, utxoInfo)
      } catch (err) {
        assert.include(err.message, 'Unknown token type')
      }
    })
    it('should handle multiple outputs', async () => {
      const utxoInfo = {
        txid: '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
        vout: 0,
        sats: 1000,
        wif: 'L2fzmF5hCeTZRVnr7Cyu66ucJAAKhkhkfinGVuUAKDtvAfwEx8a3'
      }

      sandbox.stub(uut.bchWallet, 'getTxData').resolves([offerMockData.nftTokenData01.genesisData])
      sandbox.stub(uut.bchWallet.bchjs.SLP.NFT1, 'generateNFTChildSendOpReturn').returns({ outputs: 5 })
      const res = await uut.generatePartialTx(offerMockData.nftOffer01, utxoInfo)
      assert.isUndefined(res)
    })
  })

  describe('#moveTokens', () => {
    it('should move tokens', async () => {
      sandbox.stub(uut, 'getKeyPair').resolves({
        cashAddress: 'cashAddress',
        wif: 'wif',
        hdIndex: 11
      })
      const input = {
        tokenId: uut.bchWallet.utxos.utxoStore.slpUtxos.type1.tokens[0].tokenId,
        qty: 1
      }
      const res = await uut.moveTokens(input)
      assert.isObject(res)
    })

    it('should throw an error if the tokenId is not found', async () => {
      try {
        sandbox.stub(uut, 'getKeyPair').resolves({
          cashAddress: 'cashAddress',
          wif: 'wif',
          hdIndex: 11
        })
        const input = {
          tokenId: '241c06bf61384b8623477e419bf4779edbcc7e3bc862f0f179a9ed2967069b87',
          qty: 1
        }
        await uut.moveTokens(input)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'tokenId not found!')
      }
    })

    it('should throw an error if the tokenId is not provided', async () => {
      try {
        await uut.moveTokens({
          qty: 1
        })
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'tokenId must be a string!')
      }
    })
    it('should throw an error if the qty is not provided', async () => {
      try {
        await uut.moveTokens({
          tokenId: 'tokenId'
        })
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'qty must be a number!')
      }
    })
  })

  describe('#moveBch', () => {
    it('should move bch', async () => {
      sandbox.stub(uut, 'getKeyPair').resolves({
        cashAddress: 'cashAddress',
        wif: 'wif',
        hdIndex: 11
      })

      const res = await uut.moveBch(100)
      assert.isObject(res)
    })

    it('should throw an error if the amountSat is not provided', async () => {
      try {
        sandbox.stub(uut, 'getKeyPair').resolves({
          cashAddress: 'cashAddress',
          wif: 'wif',
          hdIndex: 11
        })

        await uut.moveBch()
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'amountSat is required!')
      }
    })
  })
  describe('#moveTokensFromCustomWallet', () => {
    it('should move tokens from a custom wallet', async () => {
      sandbox.stub(uut, 'getKeyPair').resolves({
        cashAddress: 'cashAddress',
        wif: 'wif',
        hdIndex: 11
      })

      const customWallet = new MockBchWallet()
      customWallet.getKeyPair = () => { return { cashAddress: 'cashAddress', wif: 'wif', hdIndex: 11 } }
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
  describe('#deseralizeTx', () => {
    it('should throw an error if the hex is not provided', async () => {
      try {
        await uut.deseralizeTx()
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'hex must be a string!')
      }
    })
    it('should decode hex', async () => {
      try {
        sandbox.stub(uut.bchWallet.bchjs.RawTransactions, 'decodeRawTransaction').resolves({})
        const hex = '020000000286b2959cccdb80163b68bb1360abac8e0228ba7b70c779443168cc65c7c42d820100000000ffffffff879b066729eda979f1f062c83b7eccdb9e77f49b417e4723864b3861bf061c24000000006b483045022100b99c6161e18e4e34c1e438b6b03e808703695f217b30da42c3f787798a9f40cc02206d26b4f6799735779d4fac823bc60d276fbb3cea91c66dbfa136cf5b1bd0d8324121028dcd38a58c8295dbd105ef524014f77af4cddfa19b26c50926b4aaeebd95c7ceffffffff030000000000000000376a04534c500001010453454e4420a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b208000000000000006422020000000000001976a914bef6c5180648165704f22e71a1b011ba56336aee88acf81d0000000000001976a914c1f16a3876f8fbe3701a66d3cb3b9c7abb07a06c88ac00000000'
        const result = await uut.deseralizeTx(hex)
        assert.isObject(result)
      } catch (error) {
        assert.fail('Unexpected code path')
      }
    })
  })
  describe('#completeTx', () => {
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
        await uut.completeTx(hex)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'hdIndex must be a non-negative number!')
      }
    })
    it('should throw an error if the mnemonic is not provided', async () => {
      try {
        const hex = 'hex'
        const hdIndex = 11
        await uut.completeTx(hex, hdIndex)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'mnemonic must be a string!')
      }
    })
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
      const mnemonic = 'course abstract aerobic deer try switch turtle diet fence affair butter top'

      const txid = await uut.completeTx(hex, hdIndex, mnemonic)
      assert.equal(txid, 'complete tx id result')
    })
  })

  describe('#reClaimTokens', () => {
    it('should re-claim tokens', async () => {
      const orderData = {
        hdIndex: 11,
        tokenId: 'tokenId',
        numTokens: 1
      }
      const res = await uut.reclaimTokens(orderData)
      assert.equal(res, 'fakeTxid')
    })
    it('should handle error if order hd index is not provided', async () => {
      try {
        const orderData = {}
        await uut.reclaimTokens(orderData)
        assert.fail('Unexpected code path')
      } catch (error) {
        assert.equal(error.message, 'orderData.hdIndex is required!')
      }
    })
  })
})
