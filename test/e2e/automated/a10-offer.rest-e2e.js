/*
  Automated E2E tests for the /offer endpoint.
*/

// const config = require('../../../config')
// const assert = require('chai').assert

// const axios = require('axios').default
const sinon = require('sinon')

// const LOCALHOST = `http://localhost:${config.port}`

// const OfferController = require('../../../src/controllers/rest-api/offer/controller')
// const mockContext = require('../../unit/mocks/ctx-mock').context

let sandbox
// let uut
describe('OfferApi', () => {
  beforeEach(() => {
    // uut = new OfferController()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('POST /offer', () => {
    // it('should pass data to the handlers', async () => {
    //   try {
    //     const mockOffer = {
    //       lokadId: 'SWP',
    //       messageType: 1,
    //       messageClass: 1,
    //       tokenId: 'token-id',
    //       buyOrSell: 'sell',
    //       rateInSats: 1000,
    //       minSatsToExchange: 1250,
    //       signature:
    //         'H4cRPaAtyNyzG+4Qz+Tp2O7TtFZ7QRsWKKxG71dUZG5xfX0EWRMrBmqM6rH7jToOAT2s9Dm759HMxwP/WTMPzyA=',
    //       sigMsg: 'test',
    //       utxoTxid: 'txid-goes-here',
    //       utxoVout: 1,
    //       offerIpfsId: 'Qmblah',
    //       offerBchAddr:
    //         'bitcoincash:qzxj37k35z6whp4mj4hrdw2vprx4klcydc6ete5xft',
    //       offerPubKey: 'pubkeyInHex'
    //     }
    //
    //     const options = {
    //       method: 'post',
    //       url: `${LOCALHOST}/offer`,
    //       data: { offer: mockOffer }
    //     }
    //
    //     const result = await axios(options)
    //     console.log('result.data: ', result.data)
    //
    //     // assert.isFalse(result.data.success)
    //   } catch (err) {
    //     assert(false, 'Unexpected result')
    //   }
    // })
  })
})
