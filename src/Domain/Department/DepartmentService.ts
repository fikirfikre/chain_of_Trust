import { Department } from "./Department";

export interface DepartmentService{
    fetchDepartments():Promise<Department[]>;
    createDeparment(department:Department):Promise<Department>;
    updateDepartment(departmentId:string):Promise<Department>;
    deleteDepartment(department:string):Promise<void>;
}