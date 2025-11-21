/*
  Unit tests for the CounterOffer entity library.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import CounterOfferEntity from '../../../src/entities/counterOffer.js'

let sandbox
let uut

describe('#CounterOffer-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new CounterOfferEntity()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if data is not provided', () => {
      try {
        uut.validate({ })
      } catch (err) {
        assert.include(err.message, 'Input to counterOffer.validate() must be an object with a data property.')
      }
    })
    it('should throw an error if nostrEventId is not provided', () => {
      try {
        uut.validate({ data: {} })
      } catch (err) {
        assert.include(err.message, "Property 'nostrEventId' must be a string")
      }
    })
    it('should throw an error if provided takerAddr is not string', () => {
      try {
        const inObj = {
          nostrEventId: 'nostr event id',
          takerAddr: 1234
        }
        uut.validate({ data: inObj })
      } catch (err) {
        assert.include(err.message, "Property 'takerAddr' must be a string")
      }
    })
    it('should throw an error if provided takerNpub is not string', () => {
      try {
        const inObj = {
          nostrEventId: 'nostr event id',
          takerAddr: 'taker address',
          takerNpub: 1234
        }
        uut.validate({ data: inObj })
      } catch (err) {
        assert.include(err.message, "Property 'takerNpub' must be a string")
      }
    })
    it('should throw an error if provided counterOfferAddr is not string', () => {
      try {
        const inObj = {
          nostrEventId: 'nostr event id',
          takerAddr: 'taker address',
          takerNpub: 'npub',
          counterOfferAddr: 1234
        }
        uut.validate({ data: inObj })
      } catch (err) {
        assert.include(err.message, "Property 'counterOfferAddr' must be a string")
      }
    })
    it('should throw an error if provided counterOfferUtxo is not string', () => {
      try {
        const inObj = {
          nostrEventId: 'nostr event id',
          takerAddr: 'taker address',
          takerNpub: 'npub',
          counterOfferAddr: 'counter offer address',
          counterOfferUtxo: 1234
        }
        uut.validate({ data: inObj })
      } catch (err) {
        assert.include(err.message, "Property 'counterOfferUtxo' must be a string")
      }
    })
    it('should return a counter offer object', () => {
      const inObj = {
        nostrEventId: 'nostr event id',
        takerAddr: 'taker address',
        takerNpub: 'npub',
        counterOfferAddr: 'counter offer address',
        counterOfferUtxo: 'utxo txid'
      }

      const counterOfferEntity = uut.validate({ data: inObj })

      assert.property(counterOfferEntity, 'nostrEventId')
      assert.equal(counterOfferEntity.nostrEventId, inObj.nostrEventId)

      assert.property(counterOfferEntity, 'takerAddr')
      assert.equal(counterOfferEntity.takerAddr, inObj.takerAddr)

      assert.property(counterOfferEntity, 'takerNpub')
      assert.equal(counterOfferEntity.takerNpub, inObj.takerNpub)

      assert.property(counterOfferEntity, 'counterOfferAddr')
      assert.equal(counterOfferEntity.counterOfferAddr, inObj.counterOfferAddr)

      assert.property(counterOfferEntity, 'counterOfferUtxo')
      assert.equal(counterOfferEntity.counterOfferUtxo, inObj.counterOfferUtxo)
    })
  })
})
