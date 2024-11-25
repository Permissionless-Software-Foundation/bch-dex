/*
  Adapter library for working with Nostr.
*/

import BchNostr from 'bch-nostr'
import { RelayPool } from 'nostr'

class NostrAdapter {
  constructor (localConfig = { nostrRelay: '', nostrTopic: '' }) {
    this.relayWs = localConfig.nostrRelay //
    this.topic = localConfig.nostrTopic

    if (!this.relayWs) {
      throw new Error(
        '"nostrRelay" must be passed when instantiate NostrAdapter'
      )
    }

    if (!this.topic) {
      throw new Error(
        '"nostrTopic" must be passed when instantiate NostrAdapter'
      )
    }

    // Encapsulate dependencies
    this.bchNostr = new BchNostr()
    this.RelayPool = RelayPool

    // Bind the 'this' object
    this.start = this.start.bind(this)
    this.post = this.post.bind(this)
    this.read = this.read.bind(this)
  }

  // Create nostr keys.
  // NOTE:  WIF must be provided in this function instead the constructor function
  // we can provide it after app wallet creation.
  async start (WIF) {
    try {
      if (!WIF || typeof WIF !== 'string') {
        throw new Error('WIF must be a string!')
      }

      const { privKeyBuf, nostrPubKey } =
        this.bchNostr.keys.createNostrPubKeyFromWif({ wif: WIF })

      this.privKeyBuf = privKeyBuf
      this.nostrPubKey = nostrPubKey

      console.log(`Nostr Pub Key : ${nostrPubKey}`)

      return true
    } catch (error) {
      console.log(`Error in nostr.js/start() ${error.message} `)
      throw error
    }
  }

  // Post a message over the instance-topic.
  async post (msg = '') {
    try {
      if (!msg || typeof msg !== 'string') {
        throw new Error('msg must be a string!')
      }

      const inObj = {
        kind: 867,
        privKeyBuf: this.privKeyBuf,
        nostrPubKey: this.nostrPubKey,
        relayWs: this.relayWs,
        msg,
        tags: [['t', this.topic]]
      }
      const eventId = await this.bchNostr.post.uploadToNostr(inObj)
      return eventId
    } catch (error) {
      console.log(`Error in nostr.js/post() ${error.message} `)
      throw error
    }
  }

  // Read a message over the instance-topic.
  async read (limit = 10) {
    try {
      if (typeof limit !== 'number' || limit < 1) {
        throw new Error('Limit must be greater than 0')
      }

      const relays = [this.relayWs]
      const pool = this.RelayPool(relays)

      const nostrData = new Promise((resolve, reject) => {
        const messages = []

        pool.on('open', (relay) => {
          // relay.subscribe('REQ', { ids: [eventId] })
          relay.subscribe('REQ', { limit, kinds: [867], '#t': [this.topic] })
        })

        pool.on('eose', (relay) => {
          relay.close()
          resolve(messages)
        })

        pool.on('event', (relay, subId, ev) => {
          messages.push(ev.content)
        })
      })

      const messages = await nostrData

      return messages
    } catch (error) {
      console.log(`Error in nostr.js/read() ${error.message} `)
      throw error
    }
  }
}

export default NostrAdapter
