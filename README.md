# avax-dex

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This is a prototype web service that monitors the [P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) for trading signals, to trade AVAX and Avalanche Native Tokens (ANTs) on the AVAX X-Chain. It's inspired by the [SWaP Prototype](https://github.com/vinarmani/swap-protocol/blob/master/swap-protocol-spec.md).

## Development Notes

**Warning**: This repository is under active development. Things will be constantly changing and breaking.

### Road Map:

- Phase 1: MVP (single user)
  - Move tokens or AVAX for sale to temporary address.
  - Accept input from user:
    - Submit Signal message to P2WDB for new buy/sell order.
    - Check UTXO status before submitting Payment message.
  - React to webhook when new Offers come in.
    - Add and track new Offers in MongoDB.
    - Process Payment signals:
      - Checking transaction for compatibility
      - Broadcast/close trades managed by this app.
- Phase 2: Build single-user web app
  - _Make_ buy or sell orders.
  - Browse Offers on the market.
  - _Take_ buy or sell orders.
- Phase 3: Multi-user
  - Configure REST API as an IPFS Service that can offer services to multiple users.
  - Update web app to display and select available SWaP services over IPFS.

## License

[MIT](./LICENSE.md)
