/*
  The (Clean Architecture) Adapter for manageing a webhook connection to P2WDB.
*/

const config = require('../../config')
const axios = require('axios')

let _this

const APPID = 'swapTest555'

class WebHook {
  constructor () {
    _this = this
    _this.config = config
    _this.axios = axios
  }

  // REST petition to create a webhook in p2wdb-service
  async createWebhook (url) {
    try {
      if (!url || typeof url !== 'string') {
        throw new Error('url must be a string')
      }

      const endpoint = _this.config.webhookService

      const obj = {
        appId: APPID,
        url
      }

      const result = await axios.post(endpoint, obj)

      return result.data
    } catch (err) {
      console.log('Error in adapters/webhook/createWebHook()')
      throw err
    }
  }

  // REST petition to delete a webhook in p2wdb-service
  async deleteWebhook (url) {
    try {
      if (!url || typeof url !== 'string') {
        throw new Error('url must be a string')
      }

      const endpoint = _this.config.webhookService

      const obj = {
        appId: APPID,
        url
      }

      const result = await axios.delete(endpoint, { data: obj })

      return result.data
    } catch (err) {
      console.log('Error in adapters/webhook/deleteWebHook()')
      throw err
    }
  }
}

module.exports = WebHook
