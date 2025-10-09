/*
  Unit tests for the timer-controller.js Controller library
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import TimerControllers from '../../../src/controllers/timer-controllers.js'
import adapters from '../mocks/adapters/index.js'
import UseCasesMock from '../mocks/use-cases/index.js'

describe('#Timer-Controllers', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const useCases = new UseCasesMock()
    uut = new TimerControllers({ adapters, useCases })
  })

  afterEach(() => {
    sandbox.restore()

    uut.stopTimers()
  })

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new TimerControllers()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Timer Controller libraries.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new TimerControllers({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Timer Controller libraries.'
        )
      }
    })
  })

  describe('#startTimers', () => {
    it('should start the timers', () => {
      const result = uut.startTimers()

      // uut.stopTimers()

      assert.equal(result, true)
    })
  })

  describe('#gcOrders', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.gcOrders()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.order, 'removeStaleOrders').throws(new Error('test error'))
      const result = await uut.gcOrders()

      assert.equal(result, false)
    })
  })
  describe('#gcOffers', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.gcOffers()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.offer, 'removeStaleOffers').throws(new Error('test error'))
      const result = await uut.gcOffers()

      assert.equal(result, false)
    })
  })
  describe('#checkDupOffers', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.checkDupOffers()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.offer, 'removeDuplicateOffers').throws(new Error('test error'))
      const result = await uut.checkDupOffers()

      assert.equal(result, false)
    })
  })
  describe('#loadOffers', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.loadOffers()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.offer, 'loadOffers').throws(new Error('test error'))
      const result = await uut.loadOffers()

      assert.equal(result, false)
    })
  })

  describe('#cleanUsage', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.cleanUsage()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.usage, 'cleanUsage').throws(new Error('test error'))
      const result = await uut.cleanUsage()

      assert.equal(result, false)
    })
  })

  describe('#backupUsage', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.backupUsage()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.usage, 'clearUsage').throws(new Error('test error'))
      // sandbox.stub(uut.useCases.usage, 'saveUsage').throws(new Error('test error'))

      const result = await uut.backupUsage()

      assert.equal(result, false)
    })
  })

  describe('#newSmAccounts', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.newSmAccounts()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.smAccount, 'checkForNewSmAccounts').throws(new Error('test error'))
      // sandbox.stub(uut.useCases.usage, 'saveUsage').throws(new Error('test error'))

      const result = await uut.newSmAccounts()

      assert.equal(result, false)
    })
  })
  describe('#updateSmAccounts', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.updateSmAccounts()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.useCases.smAccount, 'updateSmAccounts').throws(new Error('test error'))
      // sandbox.stub(uut.useCases.usage, 'saveUsage').throws(new Error('test error'))

      const result = await uut.updateSmAccounts()

      assert.equal(result, false)
    })
  })
})
