import { User } from "./User/User";

export interface CustomRequest{
    id: string;
    createDatetime: Date;
    resolveDatetime?: Date;
    approved?: boolean;
    user: User;
    reject?: boolean;
    rejectReason:string;
}
