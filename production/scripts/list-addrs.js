/*
  This script is the same as sweep-wallet.js, but instead of sweeping the keys,
  it simply lists out the addresses in the HD keychain. This is hany when trying
  to figure out which address a token was sent to.
*/

// Public npm libraries

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

// Constants
const START_INDEX = 1
const LAST_ADDR_INDEX = 100

async function listAddrs () {
  try {
    // Configure the wallet library to use a FullStack.cash or a local Cash Stack
    const walletLib = new WalletAdapter()

    // Open the wallet files.
    const walletInfo = await openWallet(walletLib)
    const wallet = await walletLib.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    // const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = wallet.bchjs
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let hdIndex = START_INDEX

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      // const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`HD Index ${hdIndex}: ${cashAddress}`)

      hdIndex++
    } while (hdIndex < LAST_ADDR_INDEX)
    console.log(`Last index of ${LAST_ADDR_INDEX} reached.`)
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
listAddrs()

// Open the wallet file, or create one if the file doesn't exist.
// Does not instance the wallet. The output of this function is expected to
// be passed to instanceWallet().
async function openWallet (walletLib) {
  try {
    // console.log('this.WALLET_FILE: ', this.WALLET_FILE)
    const walletData = await walletLib.jsonFiles.readJSON('./wallet.json')

    return walletData
  } catch (err) {
    console.error('Error in openWallet()')
    throw err
  }
}
