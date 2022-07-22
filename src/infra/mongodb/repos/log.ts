import { LogErrorRepository } from "../../../domain/contracts/repos/log-error";
import { LogModel } from "../log-schema";

export class LogMongoRepository implements LogErrorRepository {
    async log(stack: string): Promise<boolean> {
        const log = new LogModel({
            stack
        })
        await log.save()
        
        if (!log._id) {
            return false
        }

        return true
    }
}