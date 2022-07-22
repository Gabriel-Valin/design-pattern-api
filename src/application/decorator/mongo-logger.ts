import { LogErrorRepository } from "../../domain/contracts/repos/log-error";
import { CreateUserController } from "../controllers/create-user";
import { HttpResponse } from "../helpers/http";

export class MongoLoggerControllerDecorator {
    constructor (private readonly controller: CreateUserController, private readonly logErrorRepository: LogErrorRepository) {}
    async handle(request: any): Promise<HttpResponse> {
        const httpResponse = await this.controller.handle(request)
        if (httpResponse.statusCode === 500) {
            await this.logErrorRepository.log(httpResponse.data?.stack)
        }
        return httpResponse
    }
}