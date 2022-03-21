/*
  A manual e2e test for creating an Order, which then generates an Offer through
  the P2WDB webhook.

  Ensure the REST API is up an running before running this test.
*/

const axios = require('axios')

const LOCALHOST = 'http://localhost:5700'

async function start () {
  try {
    const mockOrder = {
      lokadId: 'SWP',
      messageType: 1,
      messageClass: 1,
      tokenId:
        'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      buyOrSell: 'sell',
      rateInBaseUnit: 1000,
      minUnitsToExchange: 1000,
      numTokens: 1
    }

    const options = {
      method: 'post',
      url: `${LOCALHOST}/order`,
      data: { order: mockOrder }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()
