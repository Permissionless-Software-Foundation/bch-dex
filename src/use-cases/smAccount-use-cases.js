/*
  Social Media Account Use Cases.
*/

class smAccountUseCases {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)

    // Dependency injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Order Use Cases library.'
      )
    }

    // Bind 'this' object to all methods
    this.checkForNewSmAccounts = this.checkForNewSmAccounts.bind(this)
    this.listAccounts = this.listAccounts.bind(this)
    this.getAccountByNpub = this.getAccountByNpub.bind(this)
    this.getAccountByBchAddr = this.getAccountByBchAddr.bind(this)
  }

  // Check for new Social Media Accounts.
  async checkForNewSmAccounts () {
    try {
      console.log('Checking for new Social Media Accounts...')

      const messages = await this.adapters.nostr.readGlobalFeed()
      for (let i = 0; i < messages.length; i++) {
        const msg = messages[i]
        // const { content, id, tags, npub, pubkey } = msg
        const { tags, npub, pubkey } = msg
        let bchAddr = null
        // console.log('msg: ', JSON.stringify(msg, null, 2))

        // Find the 'u' tag if it exists
        const uTag = tags.find(tag => tag[0] === 'u')

        // If 'u' tag exists and contains a BCH address
        if (uTag && uTag[1].includes('bitcoincash:')) {
          bchAddr = uTag[1]
          // console.log('BCH address found:', bchAddr)
        }

        const SmAccount = await this.adapters.localdb.SmAccount

        if (bchAddr) {
          const smAccount = await SmAccount.findOne({ npub })
          if (!smAccount) {
            console.log(`Creating new Social Media Account with npub: ${npub} and bchAddr: ${bchAddr}`)
            const newSmAccount = new SmAccount({ npub, bchAddr, pubkey })
            await newSmAccount.save()
          } else {
            console.log(`Social Media Account with npub: ${npub} already exists`)
          }
        }
      }

      return true
    } catch (err) {
      console.error('Error in smAccount-use-cases.js/checkForNewSmAccounts(): ', err)
      throw err
    }
  }

  // List all Social Media Accounts.
  async listAccounts (page = 0) {
    try {
      const SmAccount = await this.adapters.localdb.SmAccount
      const accounts = await SmAccount.find({}).skip(page * 10).limit(10)
      return accounts
    } catch (err) {
      console.error('Error in smAccount-use-cases.js/listAccounts(): ', err)
      throw err
    }
  }

  // Get a Social Media Account by Npub.
  async getAccountByNpub (npub) {
    try {
      const SmAccount = await this.adapters.localdb.SmAccount
      const account = await SmAccount.findOne({ npub })
      return account
    } catch (err) {
      console.error('Error in smAccount-use-cases.js/getAccountByNpub(): ', err)
      throw err
    }
  }

  // Get a Social Media Account by BCH address.
  async getAccountByBchAddr (bchAddr) {
    try {
      const SmAccount = await this.adapters.localdb.SmAccount
      const account = await SmAccount.findOne({ bchAddr })
      console.log('Account found: ', account)

      return account
    } catch (err) {
      console.error('Error in smAccount-use-cases.js/getAccountByBchAddr(): ', err)
      throw err
    }
  }
}

export default smAccountUseCases
