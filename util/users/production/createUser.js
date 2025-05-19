/*
  Log in as an admin user to create a new user.
*/

// Global npm libraries
import axios from 'axios'
// import fs from 'fs'

// Local libraries
// import config from '../../../config/index.js'
// import User from '../../../src/adapters/localdb/models/users.js'

// Customize these variables
const EMAIL = 'someone@somewhere.com'
const NAME = 'Someone'
const PASSWORD = 'test'

const ADMIN_EMAIL = 'system@system.com'
const ADMIN_PASSWORD = 'admin'

async function createUser () {
  try {
    // Open the system-user-prod.json file
    // const systemUser = JSON.parse(fs.readFileSync('../../../config/system-user-prod.json', 'utf8'))

    // Log in as the admin user
    const adminLogin = {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    }
    const response = await axios.post('http://localhost:5700/auth', adminLogin)
    console.log(`response: ${JSON.stringify(response.data, null, 2)}`)

    const jwt = response.data.token

    // Create a new user, using the admin credentials
    const options = {
      method: 'post',
      url: 'http://localhost:5700/users/',
      headers: {
        Authorization: `Bearer ${jwt}`
      },
      data: {
        user: {
          email: EMAIL,
          name: NAME,
          password: PASSWORD
        }
      }
    }
    const result = await axios(options)
    console.log(`result: ${JSON.stringify(result.data, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
createUser()
