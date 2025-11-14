/*
  Adapter library for working with Nostr.
*/

// Global npm libraries
import BchNostr from 'bch-nostr'
import { RelayPool } from 'nostr'
import RetryQueue from '@chris.troutner/retry-queue'
import * as nip19 from 'nostr-tools/nip19'
import { base58_to_binary as base58Tobinary } from 'base58-js'
import { getPublicKey } from 'nostr-tools/pure'

class NostrAdapter {
  constructor (localConfig = { nostrRelay: '', nostrTopic: '' }) {
    this.relayWs = localConfig.nostrRelay //
    this.topic = localConfig.nostrTopic
    this.globalFeed = localConfig.nostrGlobalFeed

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
    this.retryQueue = new RetryQueue({
      concurrency: 1,
      attempts: 5,
      retryPeriod: 1000
    })

    // Bind the 'this' object
    this.start = this.start.bind(this)
    this.post = this.post.bind(this)
    this.read = this.read.bind(this)
    this.eventId2note = this.eventId2note.bind(this)
    this.pubkey2npub = this.pubkey2npub.bind(this)
    this.npub2pubkey = this.npub2pubkey.bind(this)
    this.readGlobalFeed = this.readGlobalFeed.bind(this)
    this.getFollowers = this.getFollowers.bind(this)
    this.privKeyToNpub = this.privKeyToNpub.bind(this)
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
      const eventId = await this.retryQueue.addToQueue(this.bchNostr.post.uploadToNostr, inObj)
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
          // console.log('ev: ', ev)
          messages.push({ content: ev.content, eventId: ev.id })
        })
      })

      const messages = await nostrData

      return messages
    } catch (error) {
      console.log(`Error in nostr.js/read() ${error.message} `)
      throw error
    }
  }

  // Convert an Event ID into a `noteabc..` syntax that Astral expects.
  // This can be used to generate a link to Astral to display the post.
  eventId2note (eventId) {
    return nip19.noteEncode(eventId)
  }

  // Convert a pubkey into a `npubabc..` syntax that Astral expects.
  pubkey2npub (pubkey) {
    return nip19.npubEncode(pubkey)
  }

  npub2pubkey (npub) {
    return nip19.decode(npub)
  }

  // Read the global feed.
  async readGlobalFeed (inObj = {}) {
    try {
      const { limit = 10 } = inObj

      if (typeof limit !== 'number' || limit < 1) {
        throw new Error('Limit must be greater than 0')
      }

      const relays = [this.relayWs]
      const pool = this.RelayPool(relays)

      const nostrData = new Promise((resolve, reject) => {
        const messages = []

        pool.on('open', (relay) => {
          // relay.subscribe('REQ', { ids: [eventId] })
          relay.subscribe('REQ', { limit, kinds: [1], '#t': [this.globalFeed] })
        })

        pool.on('eose', (relay) => {
          relay.close()
          resolve(messages)
        })

        pool.on('event', (relay, subId, ev) => {
          // console.log('ev: ', ev)

          const { content, id, tags, pubkey } = ev

          const msg = {
            content,
            id,
            tags,
            npub: this.pubkey2npub(pubkey),
            pubkey
          }

          messages.push(msg)
        })
      })

      const messages = await nostrData

      return messages
    } catch (error) {
      console.log(`Error in nostr.js/readGlobalFeed() ${error.message} `)
      throw error
    }
  }

  async getFollowers (inObj = {}) {
    try {
      const { pubkey } = inObj

      if (!pubkey || typeof pubkey !== 'string') {
        throw new Error('pubkey must be a string!')
      }

      const relays = [this.relayWs]
      const pool = this.RelayPool(relays)

      const nostrData = new Promise((resolve, reject) => {
        const followers = []

        pool.on('open', (relay) => {
          // Query for kind 3 events where the target pubkey appears in tags
          // This finds all contact lists that include the target pubkey
          relay.subscribe('subid', {
            limit: 100,
            kinds: [3],
            '#p': [pubkey] // Filter by tag 'p' containing the target pubkey
          })
        })

        pool.on('eose', relay => {
          relay.close()
          resolve(followers)
        })

        pool.on('event', (relay, subId, ev) => {
          // Each event represents a contact list from someone who follows the target
          // The author of this event is a follower
          const follower = {
            pubkey: ev.pubkey,
            npub: this.pubkey2npub(ev.pubkey),
            contactList: ev.tags,
            createdAt: ev.created_at
          }

          followers.push(follower)
        })
      })

      const followers = await nostrData
      return followers
    } catch (error) {
      console.log(`Error in nostr.js/getFollowers() ${error.message} `)
      throw error
    }
  }

  // Convert a BCH private key (WIF) to a Nostr npub.
  privKeyToNpub (privKey) {
    try {
      if (!privKey || typeof privKey !== 'string') {
        throw new Error('privKey must be a string!')
      }
      // Extract the privaty key from the WIF, using this guide:
      // https://learnmeabitcoin.com/technical/keys/private-key/wif/
      const wifBuf = base58Tobinary(privKey)
      const privBuf = wifBuf.slice(1, 33)
      // console.log('privBuf: ', privBuf)

      const nostrPubKey = getPublicKey(privBuf)
      // console.log('nostrPubKey: ', nostrPubKey)
      // Convert pubkey to npub
      const nostrNpub = nip19.npubEncode(nostrPubKey)
      // console.log('nostrNpub: ', nostrNpub)

      return nostrNpub
    } catch (error) {
      console.log(`Error in nostr.js/privKeyToNpub() ${error.message} `)
      throw error
    }
  }
}

export default NostrAdapter
