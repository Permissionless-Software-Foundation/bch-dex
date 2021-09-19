/*
  Mocks for the Adapter library.
*/
const ipfs = {
  ipfsAdapter: {
    ipfs: {}
  },
  ipfsCoordAdapter: {
    ipfsCoord: {}
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
  }
}

const bchjs = {
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
const wallet = new MockBchWallet()

const p2wdb = {
  write: async () => {}
}

module.exports = { ipfs, localdb, bchjs, wallet, p2wdb }
