/*
  Unit tests for the Nostr Use Case library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Unit under test (uut)
import NostrUseCases from '../../../src/use-cases/nostr-use-cases.js'
// Local support libraries
import adapters from '../mocks/adapters/index.js'

describe('#nostr-use-cases', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new NostrUseCases({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new NostrUseCases()

        assert.fail('Unexpected code path')
        console.log(uut) // linter
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating Nostr Use Cases library.'
        )
      }
    })
  })

  describe('#createDeletedChat', () => {
    it('should throw an error if no input is given', async () => {
      try {
        await uut.createDeletedChat()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        // assert.equal(err.status, 422)
        assert.include(err.message, "Property 'eventId' must be a string!")
      }
    })

    it('should throw an error if eventId is not provided', async () => {
      try {
        await uut.createDeletedChat({})

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'eventId' must be a string!")
      }
    })

    it('should catch and throw DB errors', async () => {
      try {
        // Force an error with the database.
        sandbox.stub(uut, 'DeletedChatModel').throws(new Error('test error'))

        const inObj = {
          eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q'
        }

        await uut.createDeletedChat(inObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should create a new deleted chat model with minimum inputs', async () => {
      const inObj = {
        eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q'
      }

      const res = await uut.createDeletedChat(inObj)

      assert.isObject(res)
    })
    it('should create a new deleted chat model with maximum inputs', async () => {
      const inObj = {
        eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q',
        npub: 'npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8',
        bchAddr: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
        pubkey: '6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1'
      }

      const res = await uut.createDeletedChat(inObj)

      assert.isObject(res)
    })
  })

  describe('#getDeletedChats', () => {
    it('should return all deleted chats from the database', async () => {
      sandbox.stub(uut.DeletedChatModel, 'find').resolves([])
      const res = await uut.getDeletedChats()

      assert.isArray(res)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error.
        sandbox.stub(uut.DeletedChatModel, 'find').rejects(new Error('test error'))

        await uut.getDeletedChats()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#createDeletedPost', () => {
    it('should throw an error if no input is given', async () => {
      try {
        await uut.createDeletedPost()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'eventId' must be a string!")
      }
    })

    it('should throw an error if eventId is not provided', async () => {
      try {
        await uut.createDeletedPost({})

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'eventId' must be a string!")
      }
    })

    it('should catch and throw DB errors', async () => {
      try {
        // Force an error with the database.
        sandbox.stub(uut, 'DeletedPostModel').throws(new Error('test error'))

        const inObj = {
          eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q'
        }

        await uut.createDeletedPost(inObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should create a new deleted post model with minimum inputs', async () => {
      const inObj = {
        eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q'
      }

      const res = await uut.createDeletedPost(inObj)

      assert.isObject(res)
    })
    it('should create a new deleted post model with maximum inputs', async () => {
      const inObj = {
        eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q',
        npub: 'npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8',
        bchAddr: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
        pubkey: '6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1'
      }

      const res = await uut.createDeletedPost(inObj)

      assert.isObject(res)
    })
  })

  describe('#getDeletedPosts', () => {
    it('should return all deleted posts from the database', async () => {
      sandbox.stub(uut.DeletedPostModel, 'find').resolves([])
      const res = await uut.getDeletedPosts()

      assert.isArray(res)
    })
  })

  it('should catch and throw an error', async () => {
    try {
      // Force an error.
      sandbox.stub(uut.DeletedPostModel, 'find').rejects(new Error('test error'))

      await uut.getDeletedPosts()

      assert.fail('Unexpected code path')
    } catch (err) {
      assert.include(err.message, 'test error')
    }
  })
})
