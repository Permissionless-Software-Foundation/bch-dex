/*
  This script will sweep the HD wallet, looking for NFTs. When found, it will
  send the NFT to the root (index 0) address. It will pay transaction fees from
  the root address.
*/

// Global npm libraries
const BchWallet = require('minimal-slp-wallet/index')

// Local libraries
const WalletAdapter = require('../../src/adapters/wallet')

// Constants
const EMTPY_ADDR_CUTOFF = 10
const WEB3_SERVER = 'https://free-bch.fullstack.cash'

async function sweepNfts () {
  try {
    // Open the wallet files.
    const walletLib = new WalletAdapter()
    // const walletInfo = await walletLib.openWallet()
    const walletInfo = await openWallet(walletLib)
    // const walletRoot = await walletLib.instanceWallet(walletInfo)
    const walletRoot = new BchWallet(walletInfo.mnemonic, {
      interface: 'consumer-api',
      restURL: WEB3_SERVER
    })
    await walletRoot.walletInfoPromise
    console.log('walletInfo: ', walletInfo)

    const rootAddr = walletInfo.cashAddress
    // const rootWif = walletInfo.privateKey
    console.log(`Sweeping all funds into root address ${rootAddr}...`)

    // Generate an HD tree
    const bchjs = walletRoot.bchjs
    const rootSeed = await bchjs.Mnemonic.toSeed(walletInfo.mnemonic)
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    let emptyAddrCnt = 0
    let hdIndex = 1

    do {
      // Generate a keypair from the HD wallet.
      const childNode = masterHDNode.derivePath(`m/44'/245'/0'/0/${hdIndex}`)
      const cashAddress = bchjs.HDNode.toCashAddress(childNode)
      const wifToSweep = bchjs.HDNode.toWIF(childNode)

      console.log(`\n${hdIndex}: Sweeping ${cashAddress} with private key ${wifToSweep}`)

      const walletChild = new BchWallet(wifToSweep, { interface: 'consumer-api', restURL: WEB3_SERVER })
      await walletChild.walletInfoPromise

      try {
        const tokens = await walletChild.tokens.listTokensFromAddress(cashAddress)
        // console.log(`tokens: ${JSON.stringify(tokens, null, 2)}`)

        await walletChild.utxos.initUtxoStore(cashAddress)
        // console.log(`utxoStore: ${JSON.stringify(utxoStore, null, 2)}`)

        for (let i = 0; i < tokens.length; i++) {
          const thisToken = tokens[i]

          if (thisToken.tokenType === 65) {
            console.log(`NFT ${thisToken.ticker} (${thisToken.name}) found. Sweeping to ${rootAddr}`)

            // Send BCH to the child address, to pay for transaction fees.
            const receiver1 = [{
              address: cashAddress,
              amountSat: 10000
            }]
            const txid1 = await walletRoot.send(receiver1)
            console.log(`10,000 sats sent to child address. TXID: ${txid1}`)

            // Wait for indexers to update.
            console.log('Waiting for indexers to update...')
            await bchjs.Util.sleep(120000)

            // Send NFT to root address.
            const receiver2 = [{
              address: rootAddr,
              tokenId: thisToken.tokenId,
              qty: thisToken.qty
            }]
            const txid2 = await walletChild.sendTokens(receiver2)
            console.log(`NFT sent from child address to root address. TXID: ${txid2}`)

            // Wait for indexers to update.
            console.log('Waiting for indexers to update...')
            await bchjs.Util.sleep(3000)

            // Refresh the UTXO store.
            await walletChild.utxos.initUtxoStore(cashAddress)

            // Send the rest of the BCH back to the root address.
            const txid3 = await walletChild.sendAll(rootAddr)
            console.log(`Leftover BCH in child address sent to root address. TXID: ${txid3}`)

            emptyAddrCnt = 0
          }
        }

        // Wait between loop iterations.
        await bchjs.Util.sleep(3000)

        // emptyAddrCnt++
      } catch (err) {
        console.log(`error message with index ${hdIndex}: ${err.message}`)
        console.log(err)
        // emptyAddrCnt++
      }

      emptyAddrCnt++
      hdIndex++
    } while (emptyAddrCnt < EMTPY_ADDR_CUTOFF)

    console.log(`${EMTPY_ADDR_CUTOFF} empty addresses detected. Exiting.`)

    console.log('\n\nDo not forget to reset the nextAddress property in the wallet.json file!\n\n')
  } catch (err) {
    console.log('Error while sweeping NFTs: ', err)
  }
}
sweepNfts()

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
