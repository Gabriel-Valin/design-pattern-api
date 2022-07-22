import { Response } from "express"
import { NewUser } from "../../domain/contracts/dtos/create-user"
import { CreateUser } from "../../domain/contracts/repos/create-user"
import { LoadUser } from "../../domain/contracts/repos/load-user"
import { UserExists } from "../errors/user-exists"

export class CreateUserService {
    constructor(private readonly userRepository: CreateUser & LoadUser) {}

    async perform(params: NewUser.Input): Promise<NewUser.Output | Error> {
        const loadUser = await this.userRepository.load({ email: params.email })
        if (loadUser) throw new UserExists()
        
        const result = await this.userRepository.create({
            name: params.name,
            email: params.email,
            password: params.email,
        })

        return {
            id: result.id
        }
    }
}