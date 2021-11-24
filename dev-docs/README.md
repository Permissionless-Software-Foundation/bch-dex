# Developer Documentation

This is living documentation that will be updated, edited, and changed over time, using the same version control as the rest of the code. The purpose of this documentation is to capture and explain how this ipfs-swap-service interacts with the [P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service), to create a permissionless, censorship-resistant database for storing trading orders. A web client will be built in the future that will interact with the REST API of this app.

- [Specification](./specification.md)

# Overview

There are three major pieces of software behind the ipfs-swap-service concept. They work together to form a censorship-resistant application for exchanging transaction data for building trades.

![ipfs-swap-service major subcomponents](./diagrams/software-interaction.png)

- _Client_ could be a web browser, or a command-line client like [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet) or [psf-avax-wallet](https://github.com/Permissionless-Software-Foundation/psf-avax-wallet).
- [ipfs-swap-service](https://github.com/christroutner/ipfs-swap-service) is the back end REST API that maintains a local database of information that the client reads from.
- [P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) is the pay-to-write global database with a REST API for interfacing with the other two pieces of software.

The arrows in the image represent the information flow between the three pieces of software:

- The _Client_ displays information about orders. It _reads_ this information from ipfs-swap-service.
- The _Client_ is also a wallet. It can generate the needed transactions to _write_ information to the P2WDB.
- `ipfs-swap-service` imports data from the global P2WDB database into its local database, using a [webhook](https://en.wikipedia.org/wiki/Webhook) (dashed line). It can also custody funds by creating an _Offer_ and submitting the data to the P2WDB to generate an _Order_ (solid line).

This architecture keeps the global database highly censorship resistant, while allowing local installations to maintain tight control over the user experience. The goal is to have many redundant copies of `ipfs-swap-service` on the network, and to empower individual traders to run their own, private copy.

# Back End

This section provides additional information on `ipfs-swap-service` and P2WDB back end software.

## P2WDB

The heart of the censorship resistance is the pay-to-write database ([P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service)). This is an [OrbitDB](https://orbitdb.org/) peer-to-peer (p2p) database. The write-access rules have been customized to allow anyone to write to the database, so long as they prove that a sufficient quantity of [PSF tokens](https://psfoundation.cash) have been burned, to pay for the write.

Because OrbitDB is a p2p database, no one party holds the 'official' copy of the database. Instead, like a blockchain, the database is replicated among several peers, and they coordinate updates to the database using consensus rules. Peers are free to leave or enter the network. Each peer independently verifies the database entries have sufficient proof-of-burn.

## `ipfs-swap-service`

The [ipfs-swap-service](https://github.com/christroutner/ipfs-swap-service) replicates a copy of the global P2WDB, but has the ability to apply localized filters to the data before passing it on to the _Client_, to be displayed.

`ipfs-swap-service` is based on this [ipfs-service-provider boilerplate](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider). It's a production-ready template for a web server, providing interfaces via REST API over HTTP, as well as JSON RPC over IPFS. It includes many features for building a web app. This includes user management and authentication, REST API and JSON RPC scaffolding, API documentation, Docker container generation, and extensive test coverage. It's intended to be customized for the needs of the website administrator.

- [Specification](./specification.md)

# Workflows

This section describes the protocols for the database interactions between the three main software components.

These are just a brief, high-level overview. Review the [Specifications](./specification.md) for more details.

## Writing to the Global Database

Adding data to the global P2WDB is a result of the interaction between the _Client_ and the P2WDB. `ipfs-swap-service` is not involved. The [p2wdb npm library](https://www.npmjs.com/package/p2wdb) can be leveraged for easy reading and writing to the P2WDB.

Writing data follows these steps:

- To add an entry to the P2WDB, tor-list-frontend collects the data the user wants to add to the database, but it also collects several pieces of required information 'behind the scenes':
  - The users BCH address.
  - A cleartext message (The website URL)
  - A signature generated from the cleartext message and the BCH address.
  - It burns the required amount of PSF tokens, and generates a transaction ID (TXID) as proof of this burn.
- tor-list-frontend then communicates with P2WDB via its REST API to submit all the data.
- The P2WDB REST API will then evaluate the data and attempt to update the p2p database using the TXID.
- Each peer on the network will independently validate the new database entry.
- tor-list-api will receive a webhook call to its POST endpoint. This event will trigger the import of the new data into the apps local Mongo database.

## Reading from the Local Database

tor-list-frontend reads data from the local database stored by tor-list-api, and does not read the global database directly. This gives tor-list-api the opportunity to filter and modify the data locally for a more controlled user experience.

The most important filter that tor-list-api runs against the data is the blacklist filter. Entries in the OrbitDB are identified by a [CID](https://docs.ipfs.io/concepts/content-addressing/) or 'hash'. The blacklist filter is a collection of CIDs that have been 'blacklisted' for removal before being displayed on the front end. This allows the administrators of the website to prevent spam and abuse.

Entries on tor-list-frontend are organized relative to their [merit](https://github.com/Permissionless-Software-Foundation/bch-message-lib/blob/master/lib/merit.js). This merit value will change with time. Every 24 hours, the entries displayed at TorList.cash have their merit recalculated, and the merit value in the local database is updated.
