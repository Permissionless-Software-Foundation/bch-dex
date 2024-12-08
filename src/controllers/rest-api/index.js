/*
  This index file for the Clean Architecture Controllers loads dependencies,
  creates instances, and attaches the controller to REST API endpoints for
  Koa.
*/

// Public npm libraries.

// Local libraries
import AuthRESTController from './auth/index.js'
import UserRouter from './users/index.js'
import ContactRESTController from './contact/index.js'
import LogsRESTController from './logs/index.js'
import IpfsRESTController from './ipfs/index.js'
import config from '../../../config/index.js'
import UsageRESTController from './usage/index.js'

class RESTControllers {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating REST Controller libraries.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating REST Controller libraries.'
      )
    }

    // Bind 'this' object to all subfunctions.
    this.attachRESTControllers = this.attachRESTControllers.bind(this)

    // Encapsulate dependencies
    this.config = config
  }

  attachRESTControllers (app) {
    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    if (!this.config.noMongo) {
      // Attach the REST API Controllers associated with the /auth route
      const authRESTController = new AuthRESTController(dependencies)
      authRESTController.attach(app)

      // Attach the REST API Controllers associated with the /user route
      const userRouter = new UserRouter(dependencies)
      userRouter.attach(app)
    }

    // Attach the REST API Controllers associated with the /contact route
    const contactRESTController = new ContactRESTController(dependencies)
    contactRESTController.attach(app)

    // Attach the REST API Controllers associated with the /logs route
    const logsRESTController = new LogsRESTController(dependencies)
    logsRESTController.attach(app)

    // Attach the REST API Controllers associated with the /ipfs route
    const ipfsRESTController = new IpfsRESTController(dependencies)
    ipfsRESTController.attach(app)

    // Attach the REST API Controllers associated with the /usage route
    const usageRESTController = new UsageRESTController(dependencies)
    usageRESTController.attach(app)
  }
}

export default RESTControllers
