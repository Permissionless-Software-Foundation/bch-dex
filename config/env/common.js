/*
  This file is used to store unsecure, application-specific data common to all
  environments.
*/

/* eslint  no-unneeded-ternary:0 */

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'

// Get the version from the package.json file.
import { readFileSync } from 'fs'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const pkgInfo = JSON.parse(readFileSync(`${__dirname.toString()}/../../package.json`))

const version = pkgInfo.version

const ipfsCoordName = process.env.COORD_NAME
  ? process.env.COORD_NAME
  : 'ipfs-torlist-service-generic'

export default {
  // Configure TCP port.
  port: process.env.PORT || 5700,

  // Password for HTML UI that displays logs.
  logPass: 'test',

  // Email server settings if nodemailer email notifications are used.
  emailServer: process.env.EMAILSERVER
    ? process.env.EMAILSERVER
    : 'mail.someserver.com',
  emailUser: process.env.EMAILUSER
    ? process.env.EMAILUSER
    : 'noreply@someserver.com',
  emailPassword: process.env.EMAILPASS
    ? process.env.EMAILPASS
    : 'emailpassword',

  // PSF Web 3 community infrastructure
  useFullStackCash: process.env.USE_FULLSTACKCASH ? true : false,
  consumerUrl: process.env.CONSUMER_URL
    ? process.env.CONSUMER_URL
    : 'https://free-bch.fullstack.cash',
  // : 'https://wa-usa-bch-consumer.fullstackcash.nl',

  // P2WDB URL that will accept API calls from the p2wdb npm library.
  p2wdbUrl: process.env.P2WDB_URL ? process.env.P2WDB_URL : 'https://p2wdb.fullstack.cash',
  // p2wdbUrl: process.env.P2WDB_URL ? process.env.P2WDB_URL : 'http://localhost:5010',

  // FullStack.cash account information, used for automatic JWT handling.
  getJwtAtStartup: process.env.GET_JWT_AT_STARTUP ? true : false,
  authServer: process.env.AUTHSERVER
    ? process.env.AUTHSERVER
    : 'https://auth.fullstack.cash',
  apiServer: process.env.APISERVER
    ? process.env.APISERVER
    : 'https://api.fullstack.cash/v5/',
  fullstackLogin: process.env.FULLSTACKLOGIN
    ? process.env.FULLSTACKLOGIN
    : 'demo@demo.com',
  fullstackPassword: process.env.FULLSTACKPASS
    ? process.env.FULLSTACKPASS
    : 'demo',
  authPass: process.env.FULLSTACK_AUTH_PASS
    ? process.env.FULLSTACK_AUTH_PASS
    : '',

  // IPFS settings.
  isCircuitRelay: process.env.ENABLE_CIRCUIT_RELAY ? true : false,
  // SSL domain used for websocket connection via browsers.
  crDomain: process.env.CR_DOMAIN ? process.env.CR_DOMAIN : '',

  // Information passed to other IPFS peers about this node.
  apiInfo: 'https://ipfs-service-provider.fullstack.cash/',

  // JSON-LD and Schema.org schema with info about this app.
  announceJsonLd: {
    '@context': 'https://schema.org/',
    '@type': 'WebAPI',
    name: ipfsCoordName,
    version,
    protocol: 'generic-service',
    description: 'This is a generic IPFS Serivice Provider that uses JSON RPC over IPFS to communicate with it. This instance has not been customized. Source code: https://github.com/Permissionless-Software-Foundation/ipfs-service-provider',
    documentation: 'https://ipfs-service-provider.fullstack.cash/',
    provider: {
      '@type': 'Organization',
      name: 'Permissionless Software Foundation',
      url: 'https://PSFoundation.cash'
    }
  },

  // P2WDB webhook endpoint
  p2wdbPort: process.env.P2WDB_PORT ? process.env.P2WDB_PORT : 5010,
  webhookService: process.env.WEBHOOKSERVICE
    ? process.env.WEBHOOKSERVICE
    : 'http://localhost:5010/webhook', // P2WDB.
  p2wdbAppId: process.env.APP_ID ? process.env.APP_ID : 'bch-dex-001',
  webhookTarget: process.env.WEBHOOKTARGET
    ? process.env.WEBHOOKTARGET
    : 'http://localhost:5700/p2wdb',

  // IPFS Ports
  ipfsTcpPort: process.env.IPFS_TCP_PORT ? process.env.IPFS_TCP_PORT : 4001,
  ipfsWsPort: process.env.IPFS_WS_PORT ? process.env.IPFS_WS_PORT : 4003,

  // BCH Mnemonic for generating encryption keys and payment address
  mnemonic: process.env.MNEMONIC ? process.env.MNEMONIC : '',

  debugLevel: process.env.DEBUG_LEVEL ? parseInt(process.env.DEBUG_LEVEL) : 1,

  // Settings for production, using external go-ipfs node.
  isProduction: process.env.SVC_ENV === 'production' ? true : false,
  ipfsHost: process.env.IPFS_HOST ? process.env.IPFS_HOST : 'localhost',
  ipfsApiPort: process.env.IPFS_API_PORT
    ? parseInt(process.env.IPFS_API_PORT)
    : 5001,

  chatPubSubChan: 'psf-ipfs-chat-001',

  // IPFS gateway
  ipfsGateway: process.env.IPFS_GATEWAY ? process.env.IPFS_GATEWAY : 'https://p2wdb-gateway-678.fullstack.cash/ipfs/'
}
