/*
  Mocks for the Adapter library.
*/
import BCHJS from '@psf/bch-js';

const bchjs = new BCHJS()

class IpfsAdapter {
  constructor () {
    this.ipfs = {
      files: {
        stat: () => {}
      }
    }
  }
}

class IpfsCoordAdapter {
  constructor () {
    this.ipfsCoord = {
      adapters: {
        ipfs: {
          connectToPeer: async () => {}
        }
      },
      useCases: {
        peer: {
          sendPrivateMessage: () => {
          }
        }
      },
      thisNode: {}
    }
  }
}

const ipfs = {
  ipfsAdapter: new IpfsAdapter(),
  ipfsCoordAdapter: new IpfsCoordAdapter(),
  getStatus: async () => {},
  getPeers: async () => {},
  getRelays: async () => {}
}
ipfs.ipfs = ipfs.ipfsAdapter.ipfs

const localdb = {
  Users: class Users {
    static findById () {}
    static find () {}
    static findOne () {
      return {
        validatePassword: localdb.validatePassword
      }
    }

    async save () {
      return {}
    }

    generateToken () {
      return '123'
    }

    toJSON () {
      return {}
    }

    async remove () {
      return true
    }

    async validatePassword () {
      return true
    }
  },

  validatePassword: () => {
    return true
  },

  Entry: class Entry {
    constructor (obj) {
      ;(this._id = 'id'), (this.entry = obj.entry)
      this.slpAddress = obj.slpAddress
      this.description = obj.description
      this.signature = obj.signature
      this.category = obj.category
      this.balance = obj.balance
      this.merit = obj.merit
    }

    static findById () {}
    static find () {}
    static findOne () {}

    async save () {
      return {}
    }
  },

  Order: class Order {
    constructor (obj) {}

    static findById () {}
    static find () {}
    static findOne () {}

    async save () {
      return {}
    }
  },

  Offer: class Offer {
    constructor (obj) {}

    static findById () {}
    static find () {}
    static findOne () {}

    async save () {
      return {}
    }
  }
}

const bch = {
  getMerit: async () => {
    return 100
  },
  getPSFTokenBalance: async () => {
    return 100
  },
  _verifySignature: () => {
    return true
  }
}

// const wallet = {
//   burnPsf: async () => {},
//   generateSignature: async () => {}
// }
import { MockBchWallet } from './wallet.js';

const wallet = {
  burnPsf: async () => {
  },
  generateSignature: async () => {
  },
  getKeyPair: async () => {
    return { cashAddress: 'fakeAddr', wif: 'fakeWif', hdIndex: 1 }
  },
  bchWallet: new MockBchWallet(),
  moveTokens: async () => {},
  reclaimTokens: async ()=>{}
}

const p2wdb = {
  write: async () => {
  },
  checkForSufficientFunds: async () => true
}

const nostr = {
  post: async () => {return true },
  read: async () => { return true }
}

export default { ipfs, localdb, bch, wallet, p2wdb, bchjs, nostr}
