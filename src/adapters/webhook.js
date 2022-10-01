/*
  The (Clean Architecture) Adapter for manageing a webhook connection to P2WDB.
*/

import config from '../../config/index.js'

import axios from 'axios'

let _this

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
        appId: this.config.p2wdbAppId,
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
        appId: this.config.p2wdbAppId,
        url
      }

      const result = await axios.delete(endpoint, { data: obj })

      return result.data
    } catch (err) {
      console.log('Error in adapters/webhook/deleteWebHook()')
      throw err
    }
  }

  // Returns a promise that will not resolve until a webhook has been successfully
  // created with the P2WDB.
  // Dev Note: This was created because establishing a webhook between bch-dex
  // and the P2WDB at startup is critical. If it's not established, then bch-dex
  // can not 'see' new Offers and Counter Offers.
  async waitUntilSuccess (url) {
    try {
      let success = false

      do {
        try {
          // Delete an old webhook if it exists.
          await this.deleteWebhook(this.config.webhookTarget)
        } catch (err) {
          /* exit quietly */
          // console.log('err deleting webhook: ', err)
        }

        try {
          await this.createWebhook(this.config.webhookTarget)
          console.log('Webhook created')
          success = true
        } catch (err) {
          const now = new Date()
          console.log(`${now.toLocaleString()}: Error trying to create webhook with P2WDB. Trying again...`)
          await sleep(2000)
        }
      } while (!success)

      return true
    } catch (err) {
      console.error('Error in webhook.js/waitUntilSuccess()')
      throw err
    }
  }
}

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default WebHook
