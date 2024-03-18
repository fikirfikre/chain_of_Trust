import { User } from "../User/User";

export interface Asset{
  id: string;
  type: string;
  addDateTime: string;
  ownerId?: string;
  active?: boolean; 
}