export namespace NewUser {
    export type Input = {
        name: string,
        email: string,
        password: string,
    }

    export type Output = { id: string }
}