/*
  Adapter library for working with a wallet.
*/

// Public npm libraries
const BchWallet = require('minimal-slp-wallet/index')

// Local libraries
const JsonFiles = require('./json-files')
const config = require('../../config')

const WALLET_FILE = `${__dirname.toString()}/../../wallet.json`
const PROOF_OF_BURN_QTY = 0.01
const P2WDB_TOKEN_ID =
  '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'

class WalletAdapter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.jsonFiles = new JsonFiles()
    this.WALLET_FILE = WALLET_FILE
    this.BchWallet = BchWallet
    this.config = config
  }

  // Open the wallet file, or create one if the file doesn't exist.
  // Does not instance the wallet. The output of this function is expected to
  // be passed to instanceWallet().
  async openWallet () {
    try {
      let walletData

      // Try to open the wallet.json file.
      try {
        // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
        walletData = await this.jsonFiles.readJSON(this.WALLET_FILE)
      } catch (err) {
        // Create a new wallet file if one does not already exist.
        console.warn('Wallet file not found. Creating new wallet.json file.')

        // Create a new wallet.
        // No-Update flag creates wallet without making any network calls.
        const walletInstance = new this.BchWallet(undefined, { noUpdate: true })

        // Wait for wallet to initialize.
        await walletInstance.walletInfoPromise

        walletData = walletInstance.walletInfo

        // Add the nextAddress property
        walletData.nextAddress = 1

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
  async instanceWallet (walletData) {
    try {
      // TODO: throw error if wallet data is not passed in.

      const advancedConfig = {}
      if (this.config.useFullStackCash) {
        advancedConfig.interface = 'rest-api'
        advancedConfig.restURL = this.config.apiServer
        advancedConfig.apiToken = this.config.apiToken
      } else {
        advancedConfig.interface = 'consumer-api'
        advancedConfig.restURL = this.config.consumerUrl
      }

      // Instantiate minimal-slp-wallet.
      this.bchWallet = new this.BchWallet(walletData.mnemonic, advancedConfig)

      // Wait for wallet to initialize.
      await this.bchWallet.walletInfoPromise

      return this.bchWallet
    } catch (err) {
      console.error('Error in instanceWallet()')
      throw err
    }
  }

  // Increments the 'nextAddress' property in the wallet file. This property
  // indicates the HD index that should be used to generate a key pair for
  // storing funds for Offers.
  // This function opens the wallet file, increments the nextAddress property,
  // then saves the change to the wallet file.
  async incrementNextAddress () {
    try {
      const walletData = await this.openWallet()
      // console.log('original walletdata: ', walletData)

      walletData.nextAddress++

      // console.log('walletData finish: ', walletData)
      await this.jsonFiles.writeJSON(walletData, this.WALLET_FILE)

      // Update the working instance of the wallet.
      this.bchWallet.walletInfo.nextAddress++
      // console.log('this.bchWallet.walletInfo: ', this.bchWallet.walletInfo)

      return walletData.nextAddress
    } catch (err) {
      console.error('Error in incrementNextAddress()')
      throw err
    }
  }

  // This method returns an object that contains a private key WIF, public address,
  // and the index of the HD wallet that the key pair was generated from.
  // TODO: Allow input integer. If input is used, use that as the index. If no
  // input is provided, then call incrementNextAddress().
  async getKeyPair () {
    try {
      const hdIndex = await this.incrementNextAddress()

      const mnemonic = this.bchWallet.walletInfo.mnemonic

      // root seed buffer
      const rootSeed = await this.bchWallet.bchjs.Mnemonic.toSeed(mnemonic)

      const masterHDNode = this.bchWallet.bchjs.HDNode.fromSeed(rootSeed)

      // HDNode of BIP44 account
      // const account = this.bchWallet.bchjs.HDNode.derivePath(masterHDNode, "m/44'/245'/0'")

      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)

      const cashAddress = this.bchWallet.bchjs.HDNode.toCashAddress(childNode)
      console.log('Generating a new key pair for cashAddress: ', cashAddress)

      const wif = this.bchWallet.bchjs.HDNode.toWIF(childNode)

      const outObj = {
        cashAddress,
        wif,
        hdIndex
      }

      return outObj
    } catch (err) {
      console.error('Error in getKeyPair()')
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

  // Burn enough PSF to generate a valide proof-of-burn for writing to the P2WDB.
  async burnPsf () {
    try {
      // TODO: Throw error if this.bchWallet has not been instantiated.

      // console.log('walletData: ', walletData)
      // console.log(
      //   `walletData.utxos.utxoStore.slpUtxos: ${JSON.stringify(
      //     walletData.utxos.utxoStore.slpUtxos,
      //     null,
      //     2,
      //   )}`,
      // )

      // Get token UTXOs held by the wallet.
      const tokenUtxos = this.bchWallet.utxos.utxoStore.slpUtxos.type1.tokens
      // console.log(`tokenUtxos: ${JSON.stringify(tokenUtxos, null, 2)}`)

      // Find a token UTXO that contains PSF with a quantity higher than needed
      // to generate a proof-of-burn.
      let tokenUtxo = {}
      for (let i = 0; i < tokenUtxos.length; i++) {
        const thisUtxo = tokenUtxos[i]

        // If token ID matches.
        if (thisUtxo.tokenId === P2WDB_TOKEN_ID) {
          if (parseFloat(thisUtxo.qtyStr) >= PROOF_OF_BURN_QTY) {
            tokenUtxo = thisUtxo
            break
          }
        }
      }

      if (tokenUtxo.tokenId !== P2WDB_TOKEN_ID) {
        throw new Error(
          `Token UTXO of with ID of ${P2WDB_TOKEN_ID} and quantity greater than ${PROOF_OF_BURN_QTY} could not be found in wallet.`
        )
      }

      console.log(`tokenUtxo: ${JSON.stringify(tokenUtxo, null, 2)}`)

      const result = await this.bchWallet.burnTokens(
        PROOF_OF_BURN_QTY,
        P2WDB_TOKEN_ID
      )
      // console.log('walletData.burnTokens() result: ', result)

      return result

      // return {
      //   success: true,
      //   txid: 'fakeTxid',
      // }
    } catch (err) {
      console.error('Error in burnPsf(): ', err)
      throw err
    }
  }
}

module.exports = WalletAdapter
