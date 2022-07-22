export namespace LoadUserDTO {
    export type Input = {
        email: string
    }

    export type Output = { email: string } | undefined
}