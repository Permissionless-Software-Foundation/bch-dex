/*
  Mock data for the wallet.adapter.unit.js test file.
*/

const BCHJS = require('@psf/bch-js')

const mockWallet = {
  mnemonic:
    'course abstract aerobic deer try switch turtle diet fence affair butter top',
  privateKey: 'L5D2UAam8tvo3uii5kpgaGyjvVMimdrXu8nWGQSQjuuAix6ji1YQ',
  publicKey:
    '0379433ffc401483ade310469953c1cba77c71af904f07c15bde330d7198b4d6dc',
  cashAddress: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
  address: 'bitcoincash:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acv7fqtd00',
  slpAddress: 'simpleledger:qzl0d3gcqeypv4cy7gh8rgdszxa9vvm2acq9zm7d33',
  legacyAddress: '1JQj1KcQL7GPKzc1D2PvdUSgw3MbDtrHzi',
  hdPath: "m/44'/245'/0'/0/0",
  nextAddress: 1
}

class MockBchWallet {
  constructor () {
    this.walletInfoPromise = true
    this.walletInfo = mockWallet
    this.bchjs = new BCHJS()
    this.burnTokens = async () => {
      return { success: true, txid: 'txid' }
    }

    // Environment variable is used by wallet-balance.unit.js to force an error.
    if (process.env.NO_UTXO) {
      this.utxos = {}
    } else {
      this.utxos = {
        utxoStore: {
          address: 'bitcoincash:qqetvdnlt0p8g27dr44cx7h057kpzly9xse9huc97z',
          bchUtxos: [
            {
              height: 700685,
              tx_hash:
                '1fc577caaff5626a8477162581e57bae1b19dc6aa6c10638013c2b1ba14dc654',
              tx_pos: 0,
              value: 1000,
              txid: '1fc577caaff5626a8477162581e57bae1b19dc6aa6c10638013c2b1ba14dc654',
              vout: 0,
              isValid: false
            },
            {
              height: 700685,
              tx_hash:
                '1fc577caaff5626a8477162581e57bae1b19dc6aa6c10638013c2b1ba14dc654',
              tx_pos: 2,
              value: 19406,
              txid: '1fc577caaff5626a8477162581e57bae1b19dc6aa6c10638013c2b1ba14dc654',
              vout: 2,
              isValid: false
            }
          ],
          nullUtxos: [],
          slpUtxos: {
            type1: {
              mintBatons: [],
              tokens: [
                {
                  height: 700522,
                  tx_hash:
                    'bb5691b50930816be78dad76d203a1c97ac94c03f6051b2fa0159c71c43aa3d0',
                  tx_pos: 1,
                  value: 546,
                  txid: 'bb5691b50930816be78dad76d203a1c97ac94c03f6051b2fa0159c71c43aa3d0',
                  vout: 1,
                  utxoType: 'token',
                  transactionType: 'send',
                  tokenId:
                    'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
                  tokenTicker: 'TROUT',
                  tokenName: "Trout's test token",
                  tokenDocumentUrl: 'troutsblog.com',
                  tokenDocumentHash: '',
                  decimals: 2,
                  tokenType: 1,
                  isValid: true,
                  tokenQty: '4.25'
                },
                {
                  height: 0,
                  tx_hash:
                    'c0ac066ce6efa1fa4763bf85a91c738e57c12b8765731bd07f0d8f5a55ce582f',
                  tx_pos: 1,
                  value: 546,
                  txid: 'c0ac066ce6efa1fa4763bf85a91c738e57c12b8765731bd07f0d8f5a55ce582f',
                  vout: 1,
                  utxoType: 'token',
                  transactionType: 'send',
                  tokenId:
                    '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
                  tokenTicker: 'PSF',
                  tokenName: 'Permissionless Software Foundation',
                  tokenDocumentUrl: 'psfoundation.cash',
                  tokenDocumentHash: '',
                  decimals: 8,
                  tokenType: 1,
                  isValid: true,
                  tokenQty: '1'
                }
              ]
            },
            nft: {
              groupMintBatons: [],
              groupTokens: [],
              tokens: []
            }
          }
        }
      }
    }
  }
}

module.exports = { MockBchWallet, mockWallet }
