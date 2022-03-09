/*
  Integration tests for the offer-use-case.js library

  For these tests to pass, the app wallet must have Trout test tokens with
  a token ID of a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2
*/

// Public npm libraries
const assert = require('chai').assert

// Local npm libraries
const Adapters = require('../../../src/adapters')
const Offer = require('../../../src/use-cases/offer')

describe('#offer-use-case.js', () => {
  let uut

  before(async () => {
    const adapters = new Adapters()
    adapters.config.getJwtAtStartup = false
    await adapters.start()

    uut = new Offer({ adapters })
  })

  describe('#ensureFunds', () => {
    it('should throw error if wallet does not have enough funds', async () => {
      try {
        const offerEntity = {
          lokadId: 'SWP',
          messageType: 1,
          messageClass: 1,
          tokenId: 'token-id',
          buyOrSell: 'sell',
          rateInSats: 1000,
          minSatsToExchange: 1250,
          numTokens: 1
        }

        await uut.ensureFunds(offerEntity)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'App wallet does not have enough tokens to satisfy the SELL offer.')
      }
    })

    it('should return true if wallet has enough funds', async () => {
      const offerEntity = {
        lokadId: 'SWP',
        messageType: 1,
        messageClass: 1,
        tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
        buyOrSell: 'sell',
        rateInSats: 1000,
        minSatsToExchange: 1250,
        numTokens: 1
      }

      const result = await uut.ensureFunds(offerEntity)

      assert.equal(result, true)
    })
  })
})
