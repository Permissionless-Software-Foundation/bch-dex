/*
  Unit tests for the DeletedChat entity library.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import DeletedChat from '../../../src/entities/deletedChat.js'

let sandbox
let uut

describe('#DeletedChat-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new DeletedChat()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if eventId is not provided', () => {
      try {
        uut.validate()
      } catch (err) {
        assert.include(err.message, "Property 'eventId' must be a string!")
      }
    })

    it('should return a DeletedChat object', () => {
      const inputData = {
        eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q',
        npub: 'npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8',
        bchAddr: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
        pubkey: '6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1'
      }

      const deletedChat = uut.validate(inputData)
      // console.log('entry: ', entry)

      assert.property(deletedChat, 'eventId')
      assert.equal(deletedChat.eventId, inputData.eventId)

      assert.property(deletedChat, 'npub')
      assert.equal(deletedChat.npub, inputData.npub)

      assert.property(deletedChat, 'bchAddr')
      assert.equal(deletedChat.bchAddr, inputData.bchAddr)

      assert.property(deletedChat, 'pubkey')
      assert.equal(deletedChat.pubkey, inputData.pubkey)
    })
  })
})
