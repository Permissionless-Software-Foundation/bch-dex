class RelayPoolClassMock {
  constructor() {
    this.relay = { close: () => { } , subscribe: () => { } }
    this.event = { content: 'content' }
  }
  on(ev, callback) {
    callback(this.relay, null, this.event)
  }
}

const RelayPoolMock =()=>{
  return new RelayPoolClassMock()
}

export default {  RelayPoolMock }