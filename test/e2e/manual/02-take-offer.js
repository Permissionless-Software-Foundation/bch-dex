/*
  Part 2 of 3: Take an offer by submiting a counter-offer.
*/

const axios = require('axios')

const LOCALHOST = 'http://localhost:5700'

async function start () {
  try {
    const options = {
      method: 'post',
      url: `${LOCALHOST}/offer/take`,
      data: {
        offerCid: 'zdpuAs5Djp9VrnheYTSDVes6f4KJVds2u3juM3MxwFYbTV8m2'
      }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()
