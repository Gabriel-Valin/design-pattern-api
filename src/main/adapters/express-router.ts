
import { MongoLoggerControllerDecorator } from '@/application/decorator/mongo-logger'
import { Request, RequestHandler, Response } from 'express'
import { CreateUserController } from '../../application/controllers/create-user'

type Adapter = (controller: MongoLoggerControllerDecorator) => RequestHandler

export const adaptExpressRoute: Adapter = controller => async (req: Request, res: Response) => {
  const { statusCode, data } = await controller.handle({ ...req.body })
  const json = [200, 204].includes(statusCode) ? data : { error: data }
  res.status(statusCode).json(json)
}