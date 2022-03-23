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
        offerCid: 'zdpuAwVTq7nF19VaDw6n49S2RvsVHNkYufZNP515Pqocyae9m'
      }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()
