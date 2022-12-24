/*
  This script is similar ot sweep-wallet.js, but it can do a much faster (bulk)
  scanning of addresses. However, this requires a subscription to a FullStack.cash
  or access to a web2 Cash Stack.

  This script will scan 20 addresses at a time. If a balance is found in any
  of the addresses, it will sweep the funds from that address.
*/
/*
// Public npm libraries
import BchTokenSweep from 'bch-token-sweep/index.js'

// Local libraries
import WalletAdapter from '../../src/adapters/wallet.js'
import BCHJS from '@psf/bch-js'
import JwtLib from 'jwt-bch-lib'

// Constants
// const EMTPY_ADDR_CUTOFF = 100
const LAST_ADDR_INDEX = 100

if (!process.env.BCHJSTOKEN) {
  console.log('You will need a JWT token from FullStack.cash to execute this script. Export it to the BCHJSTOKEN environment variable and try again.')
  exit(0)
}

async function sweepFunds () {
  try {
    // Configure the wallet library to use a FullStack.cash or a local Cash Stack
    const walletLib = new WalletAdapter()
    walletLib.config.useFullStackCash = true
    walletLib.config.apiServer = 'http://192.168.2.129:3000/v5/'

    // const walletInfo = await walletLib.openWallet()
    const walletInfo = await openWallet(walletLib)
    const wallet = await walletLib.instanceWallet(walletInfo)
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Instantiate bch-js, and use the JWT token saved to environment variable.

    // Generate an HD tree
    // const bchjs = wallet.bchjs
    const bchjs = new BCHJS()
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    const emptyAddrCnt = 0
    const hdIndex = 1

    // Divide all the addresses by 20, since that's how many will be checked at once.
    const numOfLoops = Math.ceil(LAST_ADDR_INDEX / 20)

    for (let i = 1; i < numOfLoops; i++) {
      const startIndex = i
      const stopIndex = i * 20
      console.log(`startIndex: ${startIndex}, stopIndex: ${stopIndex}`)

      // Generate the next block of 20 key pairs to scan.
      const addrsToScan = []
      const wifsToScan = []
      for (let j = startIndex; j < stopIndex; j++) {
        // Generate a keypair from the HD wallet.
        const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${j}`)
        const cashAddress = bchjs.HDNode.toCashAddress(childNode)
        const wifToSweep = bchjs.HDNode.toWIF(childNode)

        addrsToScan.push(cashAddress)
        wifsToScan.push(wifToSweep)
      }
      console.log(`Scanning these addresses for a balance: ${JSON.stringify(addrsToScan, null, 2)}`)

      // Scan a block of 20 addresses for a balance.
      const balances = await bchjs.Electrumx.balance(addrsToScan)
      console.log(`balances: ${JSON.stringify(balances, null, 2)}`)

      // Scan through the results and look for a balance.
      for (let j = 0; j < balances.balances.length; j++) {
        const thisBalance = balances.balances[j]

        // const combinedBal = thisBalance.balance.confirmed + thisBalance.balance.

        // if(thisBalance.)
      }
    }

    // do {
    //   // Generate a keypair from the HD wallet.
    //   const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
    //   const cashAddress = bchjs.HDNode.toCashAddress(childNode)
    //   const wifToSweep = bchjs.HDNode.toWIF(childNode)
    //
    //   console.log(`\nSweeping ${cashAddress} with private key ${wifToSweep}`)
    //
    //   try {
    //     // Sweep tokens from address
    //     const sweeper = new BchTokenSweep(
    //       wifToSweep,
    //       rootWif,
    //       wallet,
    //       550,
    //       rootAddr
    //     )
    //     await sweeper.populateObjectFromNetwork()
    //
    //     const hex = await sweeper.sweepTo(rootAddr)
    //     // console.log(`hex: ${hex}`)
    //
    //     const txid = await sweeper.blockchain.broadcast(hex)
    //
    //     // console.log('Transaction ID', txid)
    //     console.log(`Swept HD index ${hdIndex}. TXID: ${txid}`)
    //
    //     emptyAddrCnt = 0
    //
    //     // Wait between loop iterations.
    //     await bchjs.Util.sleep(3000)
    //   } catch (err) {
    //     console.log(`error message with index ${hdIndex}: ${err.message}`)
    //     // console.log(err)
    //     emptyAddrCnt++
    //   }
    //
    //   hdIndex++
    // } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)
    //
    // console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)
    //
    // console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
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
*/
