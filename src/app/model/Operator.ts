import { Department } from "./Department";
import { User } from "./User";

export class Operator {
    operatorID: number;
    operPhone: string;
    operAddress: string;
    email: string;
    operName: string;
    user: User;
    department: Department;
    operatorStatus: string;

    constructor(operatorID: number, operPhone: string, operAddress: string, email: string, operName: string, user: User, department: Department, operatorStatus: string) {
        this.operatorID = operatorID;
        this.operPhone = operPhone;
        this.operAddress = operAddress;
        this.email = email;
        this.operName = operName;
        this.user = user;
        this.department = department;
        this.operatorStatus = operatorStatus;
    }
}