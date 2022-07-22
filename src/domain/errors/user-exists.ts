export class UserExists extends Error {
    constructor () {
        super("User already exists")
        this.name = 'UserAlreadyExists'
    }
}