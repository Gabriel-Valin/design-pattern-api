import { CreateUserController } from "../../../../application/controllers/create-user"
import { MongoLoggerControllerDecorator } from "../../../../application/decorator/mongo-logger"
import { LogMongoRepository } from "../../../../infra/mongodb/repos/log"
import { makeCreateUserService } from "../../domain/use-cases/create-user"

export const makeCreateUserController = (): MongoLoggerControllerDecorator => {
    const controller = new CreateUserController(makeCreateUserService())
    const repository = new LogMongoRepository()
    return new MongoLoggerControllerDecorator(controller, repository)
  }