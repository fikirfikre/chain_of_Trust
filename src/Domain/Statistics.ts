class Statistics {
    totalAsset: number;
    avaliableAsset: number;
    assignedAsset: number;
    totalRequest: number;
    maintenanceRequest: number;
    assetRequest: number;
    resolvedReqeust: number;
    totalDepartment: number;
    totalUsers: number;
    constructor(
        totalAsset: number, 
        avaliableAsset: number,
        assignedAsset: number,
        totalRequest: number,
        maintenanceRequest: number,
        assetRequest: number,
        resolvedReqeust: number,
        totalDepartment: number,
        totalUsers: number,)
         {
            
        this.totalAsset = totalAsset;
        this.assignedAsset = assignedAsset;
        this.avaliableAsset = avaliableAsset;
        this.totalRequest = totalRequest;
        this.maintenanceRequest = maintenanceRequest;
        this.assetRequest = assetRequest;
        this.resolvedReqeust = resolvedReqeust;
        this.totalDepartment = totalDepartment;
        this.totalUsers = totalUsers
    }
}