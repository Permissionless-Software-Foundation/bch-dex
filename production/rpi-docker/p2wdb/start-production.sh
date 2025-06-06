#!/bin/bash

# BEGIN: Optional configuration settings

# This mnemonic is used to set up persistent public key for e2ee
# Replace this with your own 12-word mnemonic.
export MNEMONIC="mass response fiscal world message exact series swallow forward confirm canoe festival"

# The human readable name this IPFS node identifies as.
export COORD_NAME=generic-p2wdb-production

# Allow this node to function as a circuit relay. It must not be behind a firewall.
#export ENABLE_CIRCUIT_RELAY=true
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

# Debug level. 0 = minimal info. 2 = max info.
# This value set by docker-compose.yml
#export DEBUG_LEVEL=1

# Log-in information for retrieving a JWT token from FullStack.cash.
export FULLSTACKLOGIN=demo@demo.com
export FULLSTACKPASS=demo

# END: Optional configuration settings


# Production database connection string.
export DBURL=mongodb://172.17.0.1:5666/p2wdb-service-dev

# Configure IPFS ports
export IPFS_TCP_PORT=5668
export IPFS_WS_PORT=5669

# Configure REST API port
export PORT=5667

export P2W_ENV=production
export IPFS_HOST=172.17.0.1
export IPFS_API_PORT=5001
export IPFS_TCP_PORT=4001
export IPFS_WS_PORT=4003
export IPFS_WEB_RTC_PORT=4005
# Set the debug level for helia-coord. 0-3.
# 0 = no debug logs. 3 = maximum debug logs.
export DEBUG_LEVEL=0

# Use this if the IPFS node has a publically accessible IP address.
#export CONNECT_PREF=direct
# Use this if the IPFS node is behind a NAT or Firewall and cannot be accessed directly.
export CONNECT_PREF=cr

npm start
