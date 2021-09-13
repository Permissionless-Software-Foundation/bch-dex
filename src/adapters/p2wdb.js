/*
  Adapter library for interacting with the P2WDB
*/

// Public npm libraries.
const axios = require('axios')

// Global constants
const P2WDB_SERVER = 'http://localhost:5001/entry/write'
// const P2WDB_SERVER = 'https://p2wdb.fullstack.cash/entry/write'

class P2wdbAdapter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.axios = axios
  }

  async write (inputObj) {
    try {
      const { txid, signature, message, appId, data } = inputObj

      // TODO: Input validation

      const now = new Date()

      const dataObj = {
        appId,
        offer: data,
        timestamp: now.toISOString(),
        localTimeStamp: now.toLocaleString()
      }

      const bodyData = {
        txid,
        message,
        signature,
        data: JSON.stringify(dataObj)
      }

      const result = await this.axios.post(P2WDB_SERVER, bodyData)
      // console.log(`Response from API: ${JSON.stringify(result.data, null, 2)}`)

      return result.data.hash
    } catch (err) {
      console.error('Error in p2wdb.js/write()')
      throw err
    }
  }
}

module.exports = P2wdbAdapter
