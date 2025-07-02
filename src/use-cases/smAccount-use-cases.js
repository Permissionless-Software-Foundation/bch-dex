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
}

export default smAccountUseCases
