/*
  This script is the same as sweep-wallet.js, but it requires a FullStack.cash
  account, which makes the scanning much faster.
*/

// Public npm libraries
// const BCHJS = require('@psf/bch-js')
import BchTokenSweep from 'bch-token-sweep/index.js'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

// Constants
// const EMTPY_ADDR_CUTOFF = 10
const START_INDEX = 1
const LAST_ADDR_INDEX = 100

if (!process.env.BCHJSTOKEN) {
  console.log('You will need a JWT token from FullStack.cash to execute this script. Export it to the BCHJSTOKEN environment variable and try again.')
  process.exit(0)
}

async function sweepFunds () {
  try {
    // Configure the wallet library to use a FullStack.cash or a local Cash Stack
    const walletLib = new WalletAdapter()
    walletLib.config.useFullStackCash = true
    // walletLib.config.apiServer = 'http://192.168.2.129:3000/v5/'
    walletLib.config.apiServer = 'https://api.fullstack.cash/v5/'

    // Open the wallet files.
    const walletInfo = await openWallet(walletLib)
    const wallet = await walletLib.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = wallet.bchjs
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let emptyAddrCnt = 0
    let hdIndex = START_INDEX

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\nSweeping ${cashAddress} with private key ${wifToSweep}`)

      try {
        // Sweep tokens from address
        const sweeper = new BchTokenSweep(
          wifToSweep,
          rootWif,
          wallet,
          550,
          rootAddr
        )
        await sweeper.populateObjectFromNetwork()

        const hex = await sweeper.sweepTo(rootAddr)
        // console.log(`hex: ${hex}`)

        const txid = await sweeper.blockchain.broadcast(hex)

        // console.log('Transaction ID', txid)
        console.log(`Swept HD index ${hdIndex}. TXID: ${txid}`)

        emptyAddrCnt = 0

        // Wait between loop iterations.
        await bchjs.Util.sleep(3000)
      } catch (err) {
        console.log(`error message with index ${hdIndex}: ${err.message}`)
        // console.log(err)
        emptyAddrCnt++
      }

      hdIndex++
      // } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)
      // console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)
    } while (hdIndex < LAST_ADDR_INDEX)
    console.log(`Last index of ${LAST_ADDR_INDEX} reached. emptyAddrCnt: ${emptyAddrCnt}`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
sweepFunds()

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
