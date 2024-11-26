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
})
