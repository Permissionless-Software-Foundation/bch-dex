/*
  Mocks for the Adapter library.
*/

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const ipfs = {
  ipfsAdapter: {
    ipfs: {}
  },
  ipfsCoordAdapter: {
    ipfsCoord: {
      useCases: {
        peer: {
          sendPrivateMessage: () => {
          }
        }
      }
    }
  }
}

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
const { MockBchWallet } = require('./wallet')
const wallet = {
  burnPsf: async () => {
  },
  generateSignature: async () => {
  },
  getKeyPair: async () => {
    return { cashAddress: 'fakeAddr', wif: 'fakeWif', hdIndex: 1 }
  },
  bchWallet: new MockBchWallet()
}

const p2wdb = {
  write: async () => {
  },
  checkForSufficientFunds: async () => true
}

module.exports = { ipfs, localdb, bch, wallet, p2wdb, bchjs}
