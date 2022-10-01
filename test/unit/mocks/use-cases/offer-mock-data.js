/*
  Mocking data for Offer Use Case unit tests.
*/

const nftOffer01 = {
 "messageType": 1,
 "messageClass": 1,
 "tokenId": "eb93f05553ff088bffb0ec687519e83c59e5108c160f7c25a4b6c45109d7e40b",
 "buyOrSell": "sell",
 "rateInBaseUnit": 7672536,
 "minUnitsToExchange": 7672536,
 "numTokens": 1,
 "utxoTxid": "c736d73e274df20e9b069b4990d1a264fb80aa98d67cc6c7a39e42bff48e7c04",
 "utxoVout": 1,
 "timestamp": 1662930309998,
 "globaltimestamp": "2022-09-11T21:05:09.998Z",
 "localTimestamp": "9/11/2022, 9:05:09 PM",
 "txid": "4266862b8358664996038d8c29d49dc0f3d3058fd1ef3d567b084e6b16ceb5b2",
 "p2wdbHash": "zdpuArq7rCuVCGPyTnWpLjy9AYsh8yrbwjGdKwg2GDDALkM8t",
 "offerStatus": "posted",
 "makerAddr": "bitcoincash:qrqlz63cwmu0hcmsrfnd8jemn3atkpaqds6tf4ksrr",
 "ticker": "TV001",
 "tokenType": 65
}

const nftTokenData01 = {
 "genesisData": {
   "type": 65,
   "ticker": "TV001",
   "name": "Introduction to NFTs on BCH",
   "tokenId": "eb93f05553ff088bffb0ec687519e83c59e5108c160f7c25a4b6c45109d7e40b",
   "documentUri": "ipfs://bafybeibmgilu4lk3uivwyzhtm7jorl5zbsluewqmcsxs6otzrphh33okk4",
   "documentHash": "c1731268f4873f1928438abdaf6ffc546d86a1817dc6f3c6bc73fbdfb4664f10",
   "decimals": 0,
   "mintBatonIsActive": false,
   "tokensInCirculationBN": "1",
   "tokensInCirculationStr": "1",
   "blockCreated": 740395,
   "totalBurned": "0",
   "totalMinted": "1",
   "parentGroupId": "030563ddd65772d8e9b79b825529ed53c7d27037507b57c528788612b4911107"
 },
 "immutableData": "ipfs://bafybeibmgilu4lk3uivwyzhtm7jorl5zbsluewqmcsxs6otzrphh33okk4",
 "mutableData": "ipfs://bafybeifzhunfpodsztsj5x4ypopngkxuapbxwaxaxkahaybdktk6joqtlq"
}

const simpleNftOffer01 = {
  "messageType": 1,
  "messageClass": 1,
  "tokenId": "a80c89d2f9f7ad7584743587c4950a0f28514ba8054e8cec4e871747cf9c162c",
  "buyOrSell": "sell",
  "rateInBaseUnit": 76725,
  "minUnitsToExchange": 76725,
  "numTokens": 1,
  "utxoTxid": "dd51a8bf96c8ab16a2935b09e51650e1769a1fa75cce9f0455abdbf72071d3c2",
  "utxoVout": 1,
  "timestamp": 1662930102814,
  "globaltimestamp": "2022-09-11T21:01:42.814Z",
  "localTimestamp": "9/11/2022, 9:01:42 PM",
  "txid": "4013177602ee75bbc5c4a67ea8d6d80e4f3d12b9c46ae2a6643911f48257b578",
  "p2wdbHash": "zdpuAzyLPFBwFWbNi8XQuxgAx9aBNGWZEGqib7KE6Hp3AEEhq",
  "offerStatus": "posted",
  "makerAddr": "bitcoincash:qrqlz63cwmu0hcmsrfnd8jemn3atkpaqds6tf4ksrr",
  "ticker": "BAA",
  "tokenType": 1
}

const simpleNftTokenData01 = {
  "genesisData": {
    "type": 1,
    "ticker": "BAA",
    "name": "Bitcoin AI Art 001",
    "tokenId": "a80c89d2f9f7ad7584743587c4950a0f28514ba8054e8cec4e871747cf9c162c",
    "documentUri": "ipfs://bafybeifevvtnap3m3fsjbwnvpknvzhqihl2ouuypio33f2vtwqejipgpkq",
    "documentHash": "d6213e5629d01fd2cd714cde709e11b888c0ba441e05bb1cc649f8b784df5a6c",
    "decimals": 0,
    "mintBatonIsActive": false,
    "tokensInCirculationBN": "1",
    "tokensInCirculationStr": "1",
    "blockCreated": 757238,
    "totalBurned": "0",
    "totalMinted": "1"
  },
  "immutableData": "ipfs://bafybeifevvtnap3m3fsjbwnvpknvzhqihl2ouuypio33f2vtwqejipgpkq",
  "mutableData": "ipfs://bafybeibqnsmmh6bkf2wwextetki4tly65z4r4qkrrpl5xwgvzdzjley6wm"
}

const fungibleOffer01 = {
  "messageType": 1,
  "messageClass": 1,
  "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
  "buyOrSell": "sell",
  "rateInBaseUnit": 7672,
  "minUnitsToExchange": 7672,
  "numTokens": 1,
  "utxoTxid": "822dc4c765cc68314479c7707bba28028eacab6013bb683b1680dbcc9c95b286",
  "utxoVout": 1,
  "timestamp": 1662930501091,
  "globaltimestamp": "2022-09-11T21:08:21.091Z",
  "localTimestamp": "9/11/2022, 9:08:21 PM",
  "txid": "7ee0ec32e116b068ff43c5516fa500058d14f53037ba5cc729e78eb51d1f1ffd",
  "p2wdbHash": "zdpuB2gHDvmByfvPFLJgEAaRyUi1cwnD45Qt66y4f5tnMXFo7",
  "offerStatus": "posted",
  "makerAddr": "bitcoincash:qrqlz63cwmu0hcmsrfnd8jemn3atkpaqds6tf4ksrr",
  "ticker": "TROUT",
  "tokenType": 1
}

const fungibleTokenData01 = {
  "genesisData": {
    "type": 1,
    "ticker": "TROUT",
    "name": "Trout's test token",
    "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
    "documentUri": "troutsblog.com",
    "documentHash": "",
    "decimals": 2,
    "mintBatonIsActive": true,
    "tokensInCirculationBN": "100097954686",
    "tokensInCirculationStr": "100097954686",
    "blockCreated": 622414,
    "totalBurned": "2045314",
    "totalMinted": "100100000000"
  },
  "immutableData": "troutsblog.com",
  "mutableData": ""
}

export default {
  nftOffer01,
  nftTokenData01,
  simpleNftOffer01,
  simpleNftTokenData01,
  fungibleOffer01,
  fungibleTokenData01
};
