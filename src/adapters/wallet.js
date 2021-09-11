/*
  Adapter library for working with a wallet.
*/

// Public npm libraries
const BchWallet = require('minimal-slp-wallet/index')

// Local libraries
const JsonFiles = require('./json-files')

const WALLET_FILE = `${__dirname.toString()}/../../wallet.json`

class WalletAdapter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.jsonFiles = new JsonFiles()
    this.WALLET_FILE = WALLET_FILE
    this.BchWallet = BchWallet
  }

  // Open the wallet file, or create one if the file doesn't exist.
  async openWallet () {
    try {
      let walletData

      // Try to open the wallet.json file.
      try {
        // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
        walletData = await this.jsonFiles.readJSON(this.WALLET_FILE)
      } catch (err) {
        // Create a new wallet file if one does not already exist.
        // console.log('caught: ', err)
        console.warn('Wallet file not found. Creating new wallet.json file.')

        // Create a new wallet.
        const walletInstance = new this.BchWallet()

        // Wait for wallet to initialize.
        await walletInstance.walletInfoPromise

        walletData = walletInstance.walletInfo

        // Write the wallet data to the JSON file.
        await this.jsonFiles.writeJSON(walletData, this.WALLET_FILE)
      }

      // console.log('walletData: ', walletData)

      return walletData
    } catch (err) {
      console.error('Error in openWallet()')
      throw err
    }
  }
}

module.exports = WalletAdapter
