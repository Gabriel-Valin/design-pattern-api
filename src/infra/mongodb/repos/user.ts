import { NewUser } from "../../../domain/contracts/dtos/create-user";
import { LoadUserDTO } from "../../../domain/contracts/dtos/load-user";
import { CreateUser } from "../../../domain/contracts/repos/create-user";
import { LoadUser } from "../../../domain/contracts/repos/load-user";
import { UserModel } from '../user-schema'

export class CreateUserRepository implements CreateUser, LoadUser {
    async load({ email }: LoadUserDTO.Input): Promise<LoadUserDTO.Output | undefined> {
        const result = await UserModel.findOne({ email })
        
        // if (result) return {
        //     email: result.email
        // }
        
        throw new Error("Method not implemented")
    }
    async create(params: NewUser.Input): Promise<NewUser.Output> {
        const newUser = new UserModel({
            name: params.name,
            email: params.email,
            password: params.password,
            createdAt: new Date()
        })
        await newUser.save()
        
        return {
            id: newUser._id.toHexString()
        }
    }
    
}