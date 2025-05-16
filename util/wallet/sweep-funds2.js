/*
  This script will travers the HD wallet and sweep funds and tokens back
  into the root address (index 0). That root address needs to have funds
  to pay for the transactions.

  This version will traverse the HD index of the wallet until it reaches
  the value in the nextAddress property. This ensures that all UTXOs
  that could be used by the wallet have been swept.
*/

// Public npm libraries
import BCHJS from '@psf/bch-js'

import BchTokenSweep from 'bch-token-sweep'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'

async function sweepFunds () {
  try {
    // Open the wallet files.
    const wallet = new WalletAdapter()
    const walletInfo = await wallet.openWallet()
    const bchWallet = await wallet.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const lastIndex = walletInfo.nextAddress

    const rootAddr = walletInfo.cashAddress
    const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = new BCHJS()
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let hdIndex = 1

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\nSweeping HD Index ${hdIndex} with address ${cashAddress}`)

      try {
        // Sweep tokens from address
        const sweeper = new BchTokenSweep(
          wifToSweep,
          rootWif,
          bchWallet,
          550,
          rootAddr
        )
        await sweeper.populateObjectFromNetwork()

        const hex = await sweeper.sweepTo(rootAddr)
        // console.log(`hex: ${hex}`)

        const txid = await sweeper.blockchain.broadcast(hex)

        // console.log('Transaction ID', txid)
        console.log(`Swept HD index ${hdIndex}. TXID: ${txid}`)

        // Wait between loop iterations.
        await bchjs.Util.sleep(3000)
      } catch (err) {
        console.log(`error message with index ${hdIndex}: ${err}`)
      }

      hdIndex++
    } while (hdIndex <= lastIndex)

    console.log(`${lastIndex} empty addresses detected. Exiting.`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.error('Error in sweepFunds(): ', err)
  }
}
sweepFunds()
