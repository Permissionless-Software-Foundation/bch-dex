/*
  Integration tests for the wallet.js adapter library.
*/

// Public npm libraries.
const assert = require('chai').assert

// Local libraries.
const WalletAdapter = require('../../../src/adapters/wallet')

describe('#wallet', () => {
  let uut

  beforeEach(() => {
    uut = new WalletAdapter()
  })

  describe('#instanceWallet', () => {
    it('should instance the wallet using the web 3 infra by default', async () => {
      const walletData = await uut.openWallet()
      // console.log('walletData: ', walletData)

      const walletInstance = await uut.instanceWallet(walletData)
      // console.log('walletInstance: ', walletInstance)

      assert.equal(walletInstance.ar.interface, 'consumer-api')
    })

    it('should instance using web 2 FullStack.cash infra', async () => {
      const walletData = await uut.openWallet()

      // Force usage of FullStack.cash
      uut.config.useFullStackCash = true

      const walletInstance = await uut.instanceWallet(walletData)
      // console.log('walletInstance: ', walletInstance)

      assert.equal(walletInstance.ar.interface, 'rest-api')
    })
  })
})