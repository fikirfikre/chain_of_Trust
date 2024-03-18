import { JsonRpcProvider } from './../../node_modules/ethers/src.ts/providers/provider-jsonrpc';
import { Asset } from "../Domain/Asset/Asset";
import {ethers} from "ethers";
const baseUrl = 'http://localhost:8000/'

export const fetchAssets = async ()=>{
    try {
        const response:Response = await fetch(`${baseUrl}/assets`)
        return response.json();
    } catch (error) {
        throw error;
    }
}
export const createAsset = async(asset:Asset) =>{
    try {
     const response:Response = await  fetch(`${baseUrl}/assets`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(asset)
        });
        if(!response.ok){
            throw new Error('Api call Failed')
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error;
    }
     
}
export const updateAsset = async(asset:Asset)=>{
    try {
        const assetId= asset.id
        const response:Response = await fetch(`${baseUrl}/assets/${assetId}`,{
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(asset)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error
    }
}
const contractABI = [
    {
        "inputs": [],
        "name": "hello",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
      }
]
const contractAddress = "0x32AfDACD25f0ff32499F19635E89b587692fbaD2";
const providerUrl = 'http://localhost:9545';
const provider = new ethers.JsonRpcProvider(providerUrl);
const createProperty = async (asset:Asset) =>{
    try {
      const contract = new ethers.Contract(contractAddress,contractABI)
      const data = await contract.name(asset.active,asset.type,asset.addDateTime,asset.ownerId)
    } catch (error) {
        throw error
    }

}