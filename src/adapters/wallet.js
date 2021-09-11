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
        // No-Update flag creates wallet without making any network calls.
        const walletInstance = new this.BchWallet(undefined, { noUpdate: true })

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

  // Create an instance of minimal-slp-wallet. Use data in the wallet.json file,
  // and pass the bch-js information to the minimal-slp-wallet library.
  async instanceWallet (walletData, bchjs) {
    try {
      // TODO: Throw error if bch-js is not passed in.
      // TODO: throw error if wallet data is not passed in.

      const advancedConfig = {
        restURL: bchjs.restURL,
        apiToken: bchjs.apiToken
      }

      // Instantiate minimal-slp-wallet.
      this.bchWallet = new this.BchWallet(walletData.mnemonic, advancedConfig)

      // Wait for wallet to initialize.
      await this.bchWallet.walletInfoPromise

      return true
    } catch (err) {
      console.error('Error in instanceWallet()')
      throw err
    }
  }

  // Generate a cryptographic signature, required to write to the P2WDB.
  async generateSignature (message) {
    try {
      // TODO: Add input validation for message.

      const privKey = this.bchWallet.walletInfo.privateKey

      // console.log('privKey: ', privKey)
      // console.log('flags.data: ', flags.data)

      const signature = this.bchWallet.bchjs.BitcoinCash.signMessageWithPrivKey(
        privKey,
        message
      )

      return signature
    } catch (err) {
      console.error('Error in generateSignature()')
      throw err
    }
  }
}

module.exports = WalletAdapter
