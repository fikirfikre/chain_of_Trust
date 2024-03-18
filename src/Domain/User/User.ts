import { Department } from "../Department/Department";

export enum Role{
    Admin,
    User,
    Manager
}
export interface User{
    id:string;
    email:string;
    firstName:string;
    lastName:string;
    departmentId:string;
    roles: Role[];
}