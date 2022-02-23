/*
  A manual e2e test for creating an swap offer.

  Ensure the REST API is up an running before running this test.
*/

const axios = require('axios')

const LOCALHOST = 'http://localhost:5700'

async function start () {
  try {
    const mockOffer = {
      lokadId: 'SWP',
      messageType: 1,
      messageClass: 1,
      tokenId:
        '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
      buyOrSell: 'sell',
      rateInSats: 1000,
      minSatsToExchange: 10,
      numTokens: 0.02
    }

    const options = {
      method: 'post',
      url: `${LOCALHOST}/offer`,
      data: { offer: mockOffer }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()
