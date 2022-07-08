#!/bin/bash

# BEGIN: Optional configuration settings

# The human readable name this IPFS node identifies as.
export COORD_NAME=bch-dex-generic

# Allow this node to function as a circuit relay. It must not be behind a firewall.
#export ENABLE_CIRCUIT_RELAY=true
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

# Debug level. 0 = minimal info. 2 = max info.
export DEBUG_LEVEL=1

# END: Optional configuration settings


# Production database connection string.
export DBURL=mongodb://172.17.0.1:5666/bch-swap-service-prod

# Configure REST API port
export PORT=5700

# bch-dex specific env vars
export BCH_DEX=production
export WEBHOOKSERVICE=http://172.17.0.1:5667/webhook
export WEBHOOKTARGET=http://172.17.0.1:5700/p2wdb
export APP_ID=bch-dex-001

npm start
