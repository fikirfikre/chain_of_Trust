import { Asset } from "../Asset/Asset";
import { CustomRequest } from "../Request";

export interface AssetMaintenanceRequest{
    id: string;
    createDatetime: Date;
    resolveDatetime?: Date;
    approved?: boolean;
    userId: string;
    rejected?: boolean;
    rejectionReason?: undefined;
    assetId: string;
}