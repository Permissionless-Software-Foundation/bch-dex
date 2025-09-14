/*
  Mocks for the use cases.
*/
/* eslint-disable */

class UserUseCaseMock {
  async createUser(userObj) {
    return {}
  }

  async getAllUsers() {
    return true
  }

  async getUser(params) {
    return true
  }

  async updateUser(existingUser, newData) {
    return true
  }

  async deleteUser(user) {
    return true
  }

  async authUser(login, passwd) {
    return {
      generateToken: () => {}
    }
  }
}

class EntryUseCaseMock {
  async createEntry(userObj) {
    return {}
  }
}

class Offer {
  async createOffer() {
    return {}
  }
  async removeStaleOffers(){

  }
  async removeDuplicateOffers(){
    
  }
  async loadOffers(){
    
  }
  async listOffers() {
    return []
  }
  async listNftOffers() {
    return []
  }
  async listFungibleOffers() {
    return []
  }
  async takeOffer() {
    return []
  }
  async listOffersByAddress() {
    return []
  }
  async flagOffer() {
    return {}
  }
  async acceptCounterOffer() {
    return {}
  }
}

class Order {
  async createOrder() {
    return {}
  }
  async removeStaleOrders(){
    return {}
  }
  async listOrders() {
    return []
  }
  async deleteOrder() {
    return 'testTxid'
  }
}

class UsageUseCaseMock {
  async cleanUsage() {
    return {}
  }

  async getRestSummary() {
    return true
  }

  async getTopIps(params) {
    return true
  }

  async getTopEndpoints(existingUser, newData) {
    return true
  }

  async clearUsage() {
    return true
  }

  async saveUsage() {
    return true
  }
}

class SmAccountUseCaseMock {
  async listAccounts() {
    return []
  }
  async getAccountByNpub() {
    return {}
  }
  async getAccountByBchAddr() {
    return {}
  }
  async checkForNewSmAccounts() {
    return true
  }
  async updateSmAccounts() {
    return true
  }
}

class UseCasesMock {
  constuctor(localConfig = {}) {
    // this.user = new UserUseCaseMock(localConfig)
  }

  user = new UserUseCaseMock()
  entry = new EntryUseCaseMock()
  offer = new Offer()
  order = new Order()
  usage = new UsageUseCaseMock()
  smAccount = new SmAccountUseCaseMock()
}

export default UseCasesMock;
