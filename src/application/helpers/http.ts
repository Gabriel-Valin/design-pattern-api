import { ServerError } from "../errors/http"

export type HttpRequest = {
    name: string,
    email: string,
    password: string,
}

export type HttpResponse<T = any> = {
    statusCode: number
    data: T
}

export const serverError = (error: unknown): HttpResponse<Error> => ({
    statusCode: 500,
    data: new ServerError(error instanceof Error ? error : undefined)
})

export const ok = <T = any> (data: T): HttpResponse<T> => ({
    statusCode: 200,
    data
})

export const badRequest = (error: Error): HttpResponse<Error> => ({
    statusCode: 400,
    data: error
})

