/*
  This script will travers the HD wallet and sweep funds and tokens back
  into the root address (index 0). That root address needs to have funds
  to pay for the transactions.
*/

// Public npm libraries
// const BCHJS = require('@psf/bch-js')
const BchTokenSweep = require('bch-token-sweep/index')

// Local libraries
const WalletAdapter = require('../../src/adapters/wallet')

// Constants
const EMTPY_ADDR_CUTOFF = 10

async function sweepFunds () {
  try {
    // Open the wallet files.
    const walletLib = new WalletAdapter()
    const walletInfo = await walletLib.openWallet()
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
    let hdIndex = 1

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\nSweeping ${cashAddress}`)

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
    } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)

    console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
sweepFunds()
