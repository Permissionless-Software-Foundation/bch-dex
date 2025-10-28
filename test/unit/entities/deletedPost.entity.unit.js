/*
  Unit tests for the DeletedPost entity library.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import DeletedPost from '../../../src/entities/deletedPost.js'

let sandbox
let uut

describe('#DeletedPost-Entity', () => {
  before(async () => { })

  beforeEach(() => {
    uut = new DeletedPost()

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

    it('should return a DeletedPost object', () => {
      const inputData = {
        eventId: 'note19e93faw4ffqepsqsrwrnstd3ee00nmzakwwuyfjm43dankgummfqms4p6q',
        npub: 'npub1d4ed5x49d7p24xn63flj4985dc4gpfngdhtqcxpth0ywhm6czxcscfpcq8',
        bchAddr: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
        pubkey: '6d72da1aa56f82aa9a7a8a7f2a94f46e2a80a6686dd60c182bbbc8ebef5811b1'
      }

      const deletedPost = uut.validate(inputData)
      // console.log('entry: ', entry)

      assert.property(deletedPost, 'eventId')
      assert.equal(deletedPost.eventId, inputData.eventId)

      assert.property(deletedPost, 'npub')
      assert.equal(deletedPost.npub, inputData.npub)

      assert.property(deletedPost, 'bchAddr')
      assert.equal(deletedPost.bchAddr, inputData.bchAddr)

      assert.property(deletedPost, 'pubkey')
      assert.equal(deletedPost.pubkey, inputData.pubkey)
    })
  })
})
