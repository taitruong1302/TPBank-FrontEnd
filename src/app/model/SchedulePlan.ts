import { Department } from "./Department";

export class SchedulePlan {
    id: number;
    scheduleplandetail_info: string;
    scheduleplan_description: string;
    scheduleplan_name: string;
    startDate: Date;
    endDate: Date;
    createDate: Date;
    department: Department;

    constructor(id: number, scheduleplandetail_info: string, scheduleplan_description: string, scheduleplan_name: string, startDate: Date, endDate: Date, createDate: Date, department: Department) {
        this.id = id;
        this.scheduleplandetail_info = scheduleplandetail_info;
        this.scheduleplan_description = scheduleplan_description;
        this.scheduleplan_name = scheduleplan_name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.createDate = createDate;
        this.department = department;
    }
}