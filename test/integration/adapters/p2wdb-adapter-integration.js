/*
  Integration tests for hte p2wdb-adapter.js library

  These integration tests may not necessarily pass. They require a WIF set
  as an environment variable, and loaded with enough BCH and PSF to make
  a write to the P2WDB.

  If these tests fail, it does not necessarily mean there is a problem with the
  code. Check that the WIF envrionment variable meets the requirements.
*/

// Public npm libraries
const BCHJS = require('@psf/bch-js')

// Local libraries
const P2wdbAdapter = require('../../../src/adapters/p2wdb-adapter')

const wif = process.env.WIF
if (!wif) {
  throw new Error('You must provide a BCH WIF private key as an environment variable to run this test.')
}

describe('#p2wdb-adapter.js', () => {
  let uut

  beforeEach(() => {
    const bchjs = new BCHJS()

    uut = new P2wdbAdapter({ bchjs })
  })

  describe('#checkForSufficientFunds', () => {
    it('should check for sufficient funds', async () => {
      const result = await uut.checkForSufficientFunds(wif)

      console.log('Provided WIF has funds for making a write: ', result)
    })
  })

  describe('#write', () => {
    it('should write data to the P2WDB', async () => {
      const inObj = {
        appId: 'test234',
        data: {
          key: 'value'
        },
        wif
      }

      const result = await uut.write(inObj)
      console.log('result: ', result)
    })
  })
})
