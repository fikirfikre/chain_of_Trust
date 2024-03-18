import { Asset } from "../Domain/Asset/Asset";
import { AssetService } from "../Domain/Asset/AssetService";
import { createAsset, fetchAssets, updateAsset } from "../api/api";

export class AssetApiAdapter implements AssetService{

  async  fetchAssets(): Promise<Asset[]> {
  try {
    return await fetchAssets()
  } catch (error) {
    throw error;
  }
        
    }
    async  createAsset(asset: Asset): Promise<Asset> {
       try {
        return await createAsset(asset);
       } catch (error) {
        throw error;
       }
    }
    async updateAsset(asset: Asset): Promise<Asset> {
        return await updateAsset(asset)
      }

    async  deleteAsset(assetId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}