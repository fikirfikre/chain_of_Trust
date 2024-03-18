import { AssetMaintenanceRequest } from './AssetMaintenanceRequest';
export interface AssetMaintenanceService{
    fetchAssetMaintenanceRequest():Promise<AssetMaintenanceRequest[]>;
    createAssetMaintenanceRequest(maintenanceRequest:AssetMaintenanceRequest):Promise<AssetMaintenanceRequest>;
    updateAssetMaintenanceRequest(maintenanceRequestId:number):Promise<AssetMaintenanceRequest>;
    deleteAssetMaintenanceRequest(maintenanceRequestId:number): Promise<void>;
}