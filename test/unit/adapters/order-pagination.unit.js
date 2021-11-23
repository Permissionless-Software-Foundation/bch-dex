/*
  Unit tests for the order-pagination.js library.

  These unit tests will probably be rolled into a larger library in the
  the future.
*/

// Public npm libraries.
const assert = require('chai').assert
const sinon = require('sinon')

// Local libraries.
const OrderPagination = require('../../../src/adapters/localdb/order-pagination')

describe('#P2wdbAdapter', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new OrderPagination()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#readAll', () => {
    it('should get the first page of Order entries', async () => {
      const data = await uut.readAll()
      // console.log('data: ', data)

      assert.isArray(data)
    })

    // it('should catch and throw an error', async () => {
    //   try {
    //     // sandbox.stub(uut.orbit, 'readAll').throws(new Error('test error'))
    //
    //     // Force and error.
    //     sandbox.stub(uut.KeyValue, 'find').rejects(new Error('test error'))
    //
    //     await uut.readAll()
    //
    //     assert.fail('unexpected code path')
    //   } catch (err) {
    //     assert.include(err.message, 'is not a function')
    //   }
    // })
  })
})
