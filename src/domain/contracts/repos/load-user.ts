import { LoadUserDTO } from "../dtos/load-user";

export interface LoadUser {
    load({ email }: LoadUserDTO.Input): Promise<LoadUserDTO.Output | undefined>
}