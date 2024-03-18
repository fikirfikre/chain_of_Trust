import { Asset } from "./Asset/Asset";
import { User } from "./User/User";
 interface Organization {
    id:string;
    name:string;
    users?:User;
    assets?:Asset[];

}