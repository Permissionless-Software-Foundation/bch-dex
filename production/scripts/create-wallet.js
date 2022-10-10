/*
  Generate a wallet.json file for use with the DEX.
*/

// Public NPM libraries
import BchWallet from 'minimal-slp-wallet'

import { promises as fs } from 'fs'

async function createWallet () {
  try {
    // Configure the minimal-slp-wallet library to use the JSON RPC over IPFS.
    const advancedConfig = {
      interface: 'consumer-api',
      noUpdate: true
    }

    // Wait for the wallet to be created.
    const bchWallet = new BchWallet(undefined, advancedConfig)
    await bchWallet.walletInfoPromise
    const walletData = bchWallet.walletInfo
    walletData.nextAddress = 1

    // Save the wallet file to disk.
    await fs.writeFile('wallet.json', JSON.stringify(walletData, null, 2))

    console.log('Generated wallet.json. Copy this file to the docker/bch-dex folder to be used inside the Docker container.')
    console.log(`${JSON.stringify(walletData, null, 2)}`)
  } catch (err) {
    console.error('Error: ', err)
  }
}
createWallet()
