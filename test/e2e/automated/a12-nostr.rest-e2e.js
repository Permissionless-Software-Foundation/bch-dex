import testUtils from '../../utils/test-utils.js'
import { assert } from 'chai'
import config from '../../../config/index.js'
import axios from 'axios'
import sinon from 'sinon'
import util from 'util'

util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = `http://localhost:${config.port}`

const context = {}
let sandbox

// const mockContext = require('../../unit/mocks/ctx-mock').context

if (!config.noMongo) {
  describe('Nostr', () => {
    before(async () => {
      // console.log(`config: ${JSON.stringify(config, null, 2)}`)

      // Create a second test user.
      const userObj = {
        email: 'test2@test.com',
        password: 'pass2',
        name: 'test2'
      }
      const testUser = await testUtils.createUser(userObj)
      // console.log(`testUser2: ${JSON.stringify(testUser, null, 2)}`)

      context.user2 = testUser.user
      context.token2 = testUser.token
      context.id2 = testUser.user._id

      // Get the JWT used to log in as the admin 'system' user.
      const adminJWT = await testUtils.getAdminJWT()
      console.log(`adminJWT: ${adminJWT}`)
      context.adminJWT = adminJWT

      // const admin = await testUtils.loginAdminUser()
      // context.adminJWT = admin.token

      // const admin = await adminLib.loginAdmin()
      // console.log(`admin: ${JSON.stringify(admin, null, 2)}`)
    })

    beforeEach(() => {
      // const useCases = new UseCases({ adapters })
      // uut = new UserController({ adapters, useCases })

      sandbox = sinon.createSandbox()
    })

    afterEach(() => sandbox.restore())

    describe('POST /nostr/deletedChat - Create Deleted Chat', () => {
      it('should not create deleted chat if the authorization header is missing', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/nostr/deletedChat`
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })
      it('should not create deleted chat if the authorization header is invalid scheme', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/nostr/deletedChat`,
            headers: {
              Authorization: 'Bearer invalid'
            }
          }

          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })
      it('should not create deleted chat if the authorization header is invalid token', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/nostr/deletedChat`,
            headers: {
              Authorization: `Bearer ${context.token}`
            }
          }

          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })
      it('should not create deleted chat if token is not admin', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/nostr/deletedChat`,
            headers: {
              Authorization: `Bearer ${context.token}`
            }
          }

          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })
    })

    describe('POST /nostr/deletedPost - Create Deleted Post', () => {
      it('should not create deleted post if the authorization header is missing', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/nostr/deletedPost`
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })

      it('should not create deleted post if the authorization header is invalid scheme', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/nostr/deletedPost`,
            headers: {
              Authorization: 'Bearer invalid'
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })
      it('should not create deleted post if the authorization header is invalid token', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/nostr/deletedPost`,
            headers: {
              Authorization: `Bearer ${context.token}`
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })
      it('should not create deleted post if token is not admin', async () => {
        try {
          const options = {
            method: 'POST',
            url: `${LOCALHOST}/nostr/deletedPost`,
            headers: {
              Authorization: `Bearer ${context.token}`
            }
          }
          await axios(options)

          assert.equal(true, false, 'Unexpected behavior')
        } catch (err) {
          assert.equal(err.response.status, 401)
        }
      })
    })
  })
}
