/*
  Part 2 of 3: Take an order
*/

const axios = require('axios')

const LOCALHOST = 'http://localhost:5700'

async function start () {
  try {
    const options = {
      method: 'post',
      url: `${LOCALHOST}/order/take`,
      data: {
        orderCid: 'zdpuAkp98gTuivaNzGP31jTQi3ADXrFA6uANrceQcrQkTXy2j'
      }
    }

    const result = await axios(options)
    console.log('result.data: ', result.data)
  } catch (err) {
    console.log(err)
  }
}
start()
