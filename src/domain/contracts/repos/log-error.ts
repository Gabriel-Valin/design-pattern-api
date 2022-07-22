export interface LogErrorRepository {
    log(stack: any): Promise<boolean>
}