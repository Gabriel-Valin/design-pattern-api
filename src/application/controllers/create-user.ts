import { UserExists } from "../../domain/errors/user-exists";
import { CreateUserService } from "../../domain/use-cases/create-user";
import { ServerError } from "../errors/http";
import { badRequest, HttpRequest, HttpResponse, ok, serverError } from "../helpers/http";

export class CreateUserController {
    constructor (private readonly createUserService: CreateUserService) {}

    async handle({ name, email, password }: HttpRequest): Promise<HttpResponse> {
        try {
            const result = await this.createUserService.perform({ name, email, password })
            return ok(result)
        } catch (error: unknown) {
            console.log(error)
            if (error instanceof UserExists) return badRequest(error)
            return serverError(error)
            throw error
        }
    }
}