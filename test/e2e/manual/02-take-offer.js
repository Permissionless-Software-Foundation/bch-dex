/*
  Part 2 of 3: Take an offer by submiting a counter-offer.
*/

import axios from 'axios'

const LOCALHOST = 'http://localhost:5700'

async function start () {
  try {
    const options = {
      method: 'post',
      url: `${LOCALHOST}/offer/take`,
      data: {
        offerCid: 'zdpuAkv76xbgqFEdFvcz28yNvtVjoZS7wsMo5wvuxWstycLRg'
      }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()
