import { Router } from 'express'
import { adaptExpressRoute } from '../adapters/express-router'
import { makeCreateUserController } from '../factories/application/controllers/create-user-controller'

export default (router: Router): void => {
    router.post('/createuser', adaptExpressRoute(makeCreateUserController()))
  }