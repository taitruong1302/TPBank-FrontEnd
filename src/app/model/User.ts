export class User {
    userID: number
    userName: string
    userPass: string
    role: string

    constructor(userID: number, userName: string, userPass: string, role: string) {
        this.userID = userID
        this.userName = userName
        this.userPass = userPass
        this.role = role
    }
}