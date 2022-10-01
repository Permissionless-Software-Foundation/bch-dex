/*
  This library leverages the p-retry and p-queue libraries, to create a
  validation queue with automatic retry.

  New nodes syncing will attempt to rapidly validate a lot of entries.
  A promise-based queue allows this to happen while respecting rate-limits
  of the blockchain service provider.

  pay-to-write-access-controller.js depends on this library.
*/

// Global npm libraries
import PQueue from 'p-queue'
import pRetry from 'p-retry'

let _this

class RetryQueue {
  constructor (localConfig = {}) {
    if (!localConfig.bchjs) {
      throw new Error(
        'Must pass instance of bch-js when instantiating RetryQueue Class.'
      )
    }
    this.bchjs = localConfig.bchjs

    // Encapsulate dependencies
    this.validationQueue = new PQueue({ concurrency: 1 })
    this.pRetry = pRetry

    this.attempts = 5

    _this = this
  }

  // Add an async function to the queue, and execute it with the input object.
  async addToQueue (funcHandle, inputObj) {
    try {
      console.log('addToQueue inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }

      const returnVal = await _this.validationQueue.add(() =>
        _this.retryWrapper(funcHandle, inputObj)
      )
      return returnVal
    } catch (err) {
      console.error('Error in addToQueue(): ', err)
      throw err
    }
  }

  // Wrap the p-retry library.
  // This function returns a promise that will resolve to the output of the
  // function 'funcHandle'.
  async retryWrapper (funcHandle, inputObj) {
    try {
      console.log('retryWrapper inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }
      console.log('Entering retryWrapper()')

      // Add artificial delay to prevent 429 errors.
      await this.bchjs.Util.sleep(2000)

      return this.pRetry(
        async () => {
          return await funcHandle(inputObj)
        },
        {
          onFailedAttempt: _this.handleValidationError,
          retries: this.attempts // Retry 5 times
        }
      )
    } catch (err) {
      console.error('Error in retryWrapper: ', err)
      throw err
    }
  }

  // Notifies the user that an error occured and that a retry will be attempted.
  // It tracks the number of retries until it fails.
  async handleValidationError (error) {
    try {
      const errorMsg = `Attempt ${error.attemptNumber} to validate entry. There are ${error.retriesLeft} retries left. Waiting before trying again.`
      console.log(errorMsg)
      const SLEEP_TIME = 30000
      console.log(`Waiting ${SLEEP_TIME} milliseconds before trying again.\n`)
      await _this.bchjs.Util.sleep(SLEEP_TIME) // 30 sec
    } catch (err) {
      console.error('Error in handleValidationError(): ', err)
      throw err
    }
  }
}

export default RetryQueue
