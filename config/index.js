const common = require('./env/common')

const env = process.env.BCH_DEX || 'development'
const config = require(`./env/${env}`)

module.exports = Object.assign({}, common, config)
