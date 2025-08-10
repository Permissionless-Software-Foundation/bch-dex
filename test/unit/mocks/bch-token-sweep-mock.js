class BchTokenSweepMock {
    constructor(wif, privateKey, bchWallet, fee, cashAddress) {
        this.wif = wif
        this.privateKey = privateKey
        this.bchWallet = bchWallet
        this.fee = fee
        this.cashAddress = cashAddress
    }
    populateObjectFromNetwork() {
        return {
            success: true,
            txid: 'txid'
        }
    }
    sweepTo() {
        return {
            success: true,
            txid: 'txid'
        }
    }
}

export { BchTokenSweepMock }

export default {
  BchTokenSweepMock
}