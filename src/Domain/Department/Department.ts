import { User } from "../User/User";

export interface Department{
    id:string;
    name:string;
    manager?: User;
    staff? : User[];
}