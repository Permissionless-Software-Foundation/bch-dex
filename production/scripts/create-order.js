/*
  This script can be used to generate new Orders and Offers, until the UI for
  that is built.

  Customize the settings below to add your own Order. The token must exist in
  the DEX app wallet in order to be acceped.
*/

import axios from 'axios'

const LOCALHOST = 'http://localhost:5700'
// const LOCALHOST = 'http://172.17.0.1:5700'

async function start () {
  try {
    const mockOrder = {
      lokadId: 'SWP',
      messageType: 1,
      messageClass: 1,
      tokenId:
        'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      buyOrSell: 'sell',
      rateInBaseUnit: 5000,
      minUnitsToExchange: 5000,
      numTokens: 2
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
