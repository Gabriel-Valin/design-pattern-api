import { CreateUserService } from "../../../../domain/use-cases/create-user";
import { makeMongoUserRepository } from "../../infra/repos/user-repo";

export const makeCreateUserService = (): CreateUserService => {
    return new CreateUserService(makeMongoUserRepository())
}