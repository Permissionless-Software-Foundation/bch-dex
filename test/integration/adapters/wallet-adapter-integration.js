/*
  Integration tests for the wallet.js adapter library.
*/

// Public npm libraries.
// const assert = require('chai').assert

// Local libraries.
import WalletAdapter from '../../../src/adapters/wallet'

describe('#wallet', () => {
  let uut

  beforeEach(() => {
    uut = new WalletAdapter()
  })

  // describe('#instanceWallet', () => {
  //   it('should instance the wallet using the web 3 infra by default', async () => {
  //     const walletData = await uut.openWallet()
  //     // console.log('walletData: ', walletData)
  //
  //     const walletInstance = await uut.instanceWallet(walletData)
  //     // console.log('walletInstance: ', walletInstance)
  //
  //     assert.equal(walletInstance.ar.interface, 'consumer-api')
  //   })
  //
  //   it('should instance using web 2 FullStack.cash infra', async () => {
  //     const walletData = await uut.openWallet()
  //
  //     // Force usage of FullStack.cash
  //     uut.config.useFullStackCash = true
  //
  //     const walletInstance = await uut.instanceWallet(walletData)
  //     // console.log('walletInstance: ', walletInstance)
  //
  //     assert.equal(walletInstance.ar.interface, 'rest-api')
  //   })
  // })
  //
  // describe('#moveTokens', () => {
  //   it('should move tokens to a new address in the HD wallet', async () => {
  //     const walletData = await uut.openWallet()
  //
  //     // Force usage of FullStack.cash
  //     uut.config.useFullStackCash = true
  //
  //     await uut.instanceWallet(walletData)
  //
  //     const inObj = {
  //       tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
  //       qty: 1
  //     }
  //
  //     const result = await uut.moveTokens(inObj)
  //     // console.log('result: ', result)
  //
  //     assert.property(result, 'txid')
  //     assert.property(result, 'vout')
  //     assert.property(result, 'hdIndex')
  //   })
  // })
  //
  // describe('#moveBch', () => {
  //   it('should move BCH to a new address in the HD wallet', async () => {
  //     const walletData = await uut.openWallet()
  //
  //     // Force usage of FullStack.cash
  //     uut.config.useFullStackCash = true
  //
  //     await uut.instanceWallet(walletData)
  //
  //     const amountSat = 1000
  //
  //     const result = await uut.moveBch(amountSat)
  //     console.log('result: ', result)
  //   })
  // })

  describe('#completeTx', () => {
    it('should complete the transaction with bchjs.TransactionBuilder', async () => {
      const walletData = await uut.openWallet()

      // Force usage of FullStack.cash
      uut.config.useFullStackCash = true

      await uut.instanceWallet(walletData)

      const hex = '0200000002cf24c6f6e55fc84e7699223f7dac568aae991f1a49747758a797d06a516f718c0100000000ffffffff0c7a53c39a7f215c9fa0f409710cf5cb8926e40c104efcedb43d69d5e113fd9d000000006a47304402204d5d1ce837594a151ef8ccecf95b5c7ebb2e71560c6d2597fa559b92f9f032bc02206ef67cd2ef4b4df7207225c26c9982df184959ac389c3f49f1ff5dce641a72ee412103fdc2366a32184220e77fd50e7fff30e7c76b2b7246dea6d56b8177f9fca6fec7ffffffff030000000000000000376a04534c500001010453454e4420a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b208000000000000006422020000000000001976a914d46461bf6a5f3a8e0e0e92b85465ad79696ccb7688ac88130000000000001976a914d46461bf6a5f3a8e0e0e92b85465ad79696ccb7688ac00000000'

      const result = await uut.completeTx(hex, 10)
      console.log('result: ', result)
    })
  })
})
