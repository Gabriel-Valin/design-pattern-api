import { CreateUserRepository } from "../../../../infra/mongodb/repos/user";

export const makeMongoUserRepository = (): CreateUserRepository => {
    return new CreateUserRepository()
}