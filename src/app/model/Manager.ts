import { Department } from "./Department"
import { User } from "./User"

export class Manager {
    managerID: number
    managerPhone: string
    managerAddress: string
    managerEmail: string
    managerName: string
    user: User
    department: Department
    managerStatus: string

    constructor(managerID: number, managerPhone: string, managerAddress: string, managerEmail: string, managerName: string, user: User, department: Department, managerStatus: string) {
        this.managerID = managerID
        this.managerPhone = managerPhone
        this.managerAddress = managerAddress
        this.managerEmail = managerEmail
        this.managerName = managerName
        this.user = user
        this.department = department
        this.managerStatus = managerStatus
    }
}