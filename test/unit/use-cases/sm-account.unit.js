/*
  Unit tests for the SM Account Use Case library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Unit under test (uut)
import SMAccountLib from '../../../src/use-cases/smAccount-use-cases.js'
import SMMock from '../mocks/social-media-mocks.js'
// Local support libraries
import adapters from '../mocks/adapters/index.js'

describe('#sm-account-use-case', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new SMAccountLib({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new SMAccountLib()

        assert.fail('Unexpected code path')
        console.log(uut) // linter
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating SM Account Use Cases library.'
        )
      }
    })
  })

  describe('#checkForNewSmAccounts', () => {
    it('check for new SM accounts', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.nostr, 'readGlobalFeed').resolves(SMMock.messagesMock)

      const result = await uut.checkForNewSmAccounts()
      assert.isTrue(result)
    })
    it('should skip existing SM accounts', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'findOne').resolves({ npub: SMMock.messagesMock[0].npub })
      sandbox.stub(uut.adapters.nostr, 'readGlobalFeed').resolves(SMMock.messagesMock)

      const result = await uut.checkForNewSmAccounts()
      assert.isTrue(result)
    })
    it('should throw an error if the readGlobalFeed fails', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.nostr, 'readGlobalFeed').rejects(new Error('Failed to read global feed'))

      try {
        await uut.checkForNewSmAccounts()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Failed to read global feed')
      }
    })
  })
  describe('#listAccounts', () => {
    it('should return a list of SM accounts', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'find').callsFake(() => {
        return {
          skip: () => {
            return {
              limit: () => {
                return SMMock.messagesMock
              }
            }
          }
        }
      })

      const result = await uut.listAccounts()
      assert.isArray(result)
    })
    it('should throw an error if the find fails', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'find').throws(new Error('Failed to find SM accounts'))

      try {
        await uut.listAccounts()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Failed to find SM accounts')
      }
    })
  })
  describe('#getAccountByNpub', () => {
    it('should return a SM account by npub', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'findOne').resolves(SMMock.messagesMock[0])

      const result = await uut.getAccountByNpub(SMMock.messagesMock[0].npub)
      assert.isObject(result)
    })
    it('should catch error', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'findOne').throws(new Error('Failed to find SM account by npub'))

      try {
        await uut.getAccountByNpub(SMMock.messagesMock[0].npub)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Failed to find SM account by npub')
      }
    })
  })
  describe('#getAccountByBchAddr', () => {
    it('should return a SM account by bch addr', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'findOne').resolves(SMMock.messagesMock[0])

      const result = await uut.getAccountByBchAddr('bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7477')
      assert.isObject(result)
    })
    it('should catch error', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'findOne').throws(new Error('Failed to find SM account by bch addr'))

      try {
        await uut.getAccountByBchAddr('bitcoincash:qzy97glp47ut7tstm5g0tlrmkhk742795gkmyc7477')
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Failed to find SM account by bch addr')
      }
    })
  })
  describe('#updateSmAccounts', () => {
    it('should update the SM accounts', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'find').resolves(SMMock.smAccountsMock)

      const result = await uut.updateSmAccounts()
      assert.isTrue(result)
    })
    it('should catch error', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.localdb.SmAccount, 'find').throws(new Error('Failed to find SM accounts'))

      try {
        await uut.updateSmAccounts()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Failed to find SM accounts')
      }
    })
  })
})
