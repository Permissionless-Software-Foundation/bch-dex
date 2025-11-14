/*
  Unit tests for the Nostr Adapter library.
*/

// Public npm libraries.
import { assert } from 'chai'
import sinon from 'sinon'
import NostrAdapter from '../../../src/adapters/nostr.js'
import NostrMock from '../mocks/nostr-mock.js'

describe('#nostr.js', () => {
  let uut
  let sandbox

  before(() => {})

  beforeEach(() => {
    uut = new NostrAdapter({
      nostrRelay: 'wss://nostr',
      nostrTopic: 'uut-topic'
    })
    uut.RelayPool = NostrMock.RelayPoolMock

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  after(() => {})

  describe('#contructor', () => {
    it('should throw an error if nostr relay is not provided', async () => {
      try {
        const _uut = new NostrAdapter()
        // Eslint
        console.log(_uut)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(
          err.message,
          '"nostrRelay" must be passed when instantiate NostrAdapter'
        )
      }
    })
    it('should throw an error if nostr topic is not provided', async () => {
      try {
        const _uut = new NostrAdapter({ nostrRelay: 'wss://' })
        // Eslint
        console.log(_uut)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(
          err.message,
          '"nostrTopic" must be passed when instantiate NostrAdapter'
        )
      }
    })
  })
  describe('#start', () => {
    it('should throw an error if WIF is not provided', async () => {
      try {
        await uut.start()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'WIF must be a string!')
      }
    })
    it('should start adapter', async () => {
      // Stub bchNostr
      sandbox
        .stub(uut.bchNostr.keys, 'createNostrPubKeyFromWif')
        .returns({ privKeyBuf: 'privKeyBuf', nostrPubKey: 'nostrPubKey' })

      const result = await uut.start('WIF')
      assert.isTrue(result)
    })
  })

  describe('#post', () => {
    it('should throw an error if msg is not provided', async () => {
      try {
        await uut.post()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'msg must be a string!')
      }
    })
    it('should post message', async () => {
      const evId = 'uut-eventId' // Mock

      sandbox.stub(uut.bchNostr.post, 'uploadToNostr').resolves(evId)

      const result = await uut.post('uut-message')
      assert.isString(result)
      assert.equal(result, evId)
    })
  })

  describe('#read', () => {
    it('should throw an error if provided limit is wrong', async () => {
      try {
        await uut.read(-5)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Limit must be greater than 0')
      }
    })

    it('should read message', async () => {
      const result = await uut.read()
      assert.isArray(result)
      assert.equal(result.length, 1)
    })

    it('should read message with custom limit', async () => {
      const result = await uut.read(1)
      assert.isArray(result)
      assert.equal(result.length, 1)
    })
  })
  describe('#eventId2note', () => {
    it('should handle encode error', async () => {
      try {
        await uut.eventId2note('invalid format')

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Invalid byte sequence')
      }
    })

    it('should handle valid eventId', async () => {
      const result = await uut.eventId2note('b1e4a3d5e40b6d0b3f1e2c234b6c9dbf4d6a80e9b3e8a2d765c7f9ed84c9a5ef')
      assert.isString(result)
      assert.include(result, 'note')
    })
  })
  describe('#pubkey2npub', () => {
    it('should handle encode error', async () => {
      try {
        await uut.pubkey2npub('invalid format')

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Invalid byte sequence')
      }
    })

    it('should handle valid pubkey', async () => {
      const result = await uut.pubkey2npub('f5a1b39d2cfae8e10e93b9b4d7ec8248eaf45fbe4a73409d8d4c67015e9729a3')
      assert.isString(result)
      assert.include(result, 'npub')
    })
  })
  describe('#npub2pubkey', () => {
    it('should handle decode error', async () => {
      try {
        await uut.npub2pubkey('npub17ksm88fvlt5wzr5nhx6d0myzfr40g')

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Invalid checksum')
      }
    })

    it('should handle valid pubkey', async () => {
      const result = await uut.npub2pubkey('npub17ksm88fvlt5wzr5nhx6d0myzfr40gha7ffe5p8vdf3nszh5h9x3sdwl7u2')
      assert.isObject(result)
      assert.property(result, 'type')
      assert.property(result, 'data')
      assert.equal(result.type, 'npub')
      assert.equal(result.data.length, 64)
    })
  })
  describe('#readGlobalFeed', () => {
    it('should throw an error if provided limit is wrong', async () => {
      try {
        await uut.readGlobalFeed({ limit: -5 })

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Limit must be greater than 0')
      }
    })

    it('should read message', async () => {
      const result = await uut.readGlobalFeed()
      assert.isArray(result)
    })

    it('should read message with custom limit', async () => {
      const result = await uut.readGlobalFeed({ limit: 1 })
      assert.isArray(result)
    })
  })
  describe('#getFollowers', () => {
    it('should throw an error if no pubkey is provided', async () => {
      try {
        await uut.getFollowers()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'pubkey must be a string!')
      }
    })

    it('should get followers', async () => {
      const result = await uut.getFollowers({ pubkey: 'f5a1b39d2cfae8e10e93b9b4d7ec8248eaf45fbe4a73409d8d4c67015e9729a3' })
      assert.isArray(result)
    })
  })
  describe('#privKeyToNpub', () => {
    it('should handle  error if providedprivKey is not a string', async () => {
      try {
        uut.privKeyToNpub()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'privKey must be a string!')
      }
    })

    it('should return npub if privKey is valid', async () => {
      const result = uut.privKeyToNpub('L2kh34VinQNRq1ad8nnXnGoFrb9pT7j8GJXiT6Scsg18KMxsUVDr')
      // console.log('result: ', result)
      assert.isString(result)
      assert.include(result, 'npub')
    })
    it('should handle unexpected error', async () => {
      try {
        uut.privKeyToNpub('invalid format')

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Invalid base58 character')
      }
    })
  })
})
