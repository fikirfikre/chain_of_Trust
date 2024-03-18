import { Asset } from "../Asset/Asset";
import { CustomRequest } from "../Request";
import { User } from "../User/User";

export interface AssetRequest{
  id: string;
  createDatetime: Date;
  resolveDatetime?: Date;
  approved?: boolean;
  userId: string;
  rejected?: boolean;
  rejectionReason?:string;
  type: string;
  quantity: number;
  assetId:string;
  }
  