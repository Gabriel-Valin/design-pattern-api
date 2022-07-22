import { NewUser } from "../dtos/create-user";

export interface CreateUser {
    create(params: NewUser.Input): Promise<NewUser.Output>
}