/*
  Order Entity
  An order is created when a new Signal is detected via the P2WDB webhook.
  It's destroyed when the UTXO described in the Signal has been detected as spent.

  {
    lokadId: 'SWP', // Placeholder for now, use for backwards compatibility
    messageType: 1, // SLP Atomic Swap
    messageClass: 1,
    tokenId: '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
    buyOrSell: 'sell',
    rateInSats: 7972, // Price per token in sats
    minSatsToExchange: 8100, // Minum size of UTXO to use, e.g. 1 token + miner fees

    // Signature from the address holding the tokens, provides 'proof of reserves'
    signature: 'H2Sq0UPh0jgs1Zt3JERHtbzfPGXJk9DgJ0FVxVa6iUqiIh6XcvEUFBbvYIuODQs3hYSCkkjcuzbvzNEiv69kFKg=',
    sigMsg: 'test',
    address: 'bitcoincash:qphjncqpnv444jq8acqk4dkm3296c50xhqggeatvn8',

    // UTXO for sale
    utxoTxid: 'b9457808be70c39a9cc6c5857cbef856b35fdc91a59debfe06acfc45b11955e3',
    utxoVout: 2
  }
*/
