/*
  Unit tests for the webhook adapter.
*/

import { assert } from 'chai'
import sinon from 'sinon'

import WebHook from '../../../src/adapters/webhook.js'

// Set the environment variable to signal this is a test.
process.env.TORLIST_ENV = 'test'

describe('#Webhook-Adapter', () => {
  let uut
  let sandbox

  beforeEach(async () => {
    uut = new WebHook()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#createWebHook', () => {
    it('should throw error if input is not provided', async () => {
      try {
        await uut.createWebhook()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'url must be a string')
      }
    })

    it('should throw error if input is not string', async () => {
      try {
        await uut.createWebhook(1)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'url must be a string')
      }
    })

    it('should handle error', async () => {
      try {
        sandbox.stub(uut.axios, 'post').throws(new Error('test error'))
        await uut.createWebhook('https://test.com/my-webhook')
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should return response', async () => {
      sandbox
        .stub(uut.axios, 'post')
        .resolves({ data: { success: true, id: '61018c8c9a71973a596cdccb' } })

      const url = 'https://test.com/my-webhook'
      const result = await uut.createWebhook(url)

      assert.isObject(result)
      assert.property(result, 'success')
      assert.property(result, 'id')
      assert.isBoolean(result.success)
      assert.isString(result.id)
    })
  })
})
