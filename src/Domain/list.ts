import { Role } from "./User/User";
export const initalDepartments = [
    {
      id: "department_1",
      name: "Engineering",
      managerId: "user_2", // Use managerId instead of manager object
      staff: ["user_3", "user_8"], // Array of user IDs for staff
    },
    {
      id: "department_2",
      name: "Sales",
      managerId: "user_4",
      staff: ["user_5", "user_9"],
    },
    {
      id: "department_3",
      name: "Marketing",
      managerId: "user_1",
      staff: ["user_6", "user_7"],
    },
    {
      id: "department_4",
      name: "Human Resources",
      managerId: undefined, // No manager assigned yet
      staff: ["user_10"],
    },
    {
      id: "department_5",
      name: "Finance",
      managerId: "user_5",
      staff: [], // No staff assigned yet
    },
    // Add more department objects following the same structure
  ];
const initalStaffs = [
        {
          id: "user_1",
          email: "user1@example.com",
          firstName: "John",
          lastName: "Doe",
          roles: Role.Admin,
          organizationId: "org_1",
          department: "department_1",
        },
        {
          id: "user_2",
          email: "user2@example.com",
          firstName: "Jane",
          lastName: "Smith",
          roles: Role.Admin,
          organizationId: "org_2",
          department: "department_1",
        },
        {
          id: "user_3",
          email: "user3@example.com",
          firstName: "Michael",
          lastName: "Lee",
          roles: Role.Admin,
          organizationId: "org_1",
          department: "department_1",
        },
        {
          id: "user_4",
          email: "user4@example.com",
          firstName: "Sarah",
          lastName: "Garcia",
          roles: Role.Admin,
          organizationId: "org_2",
          department: "department_1",
        },
        {
          id: "user_5",
          email: "user5@example.com",
          firstName: "David",
          lastName: "Kim",
          roles:Role.Admin,
          organizationId: "org_3",
          department: "department_1",
        },
        {
          id: "user_6",
          email: "user6@example.com",
          firstName: "Amanda",
          lastName: "Robinson",
          roles: Role.Admin,
          organizationId: "org_3",
          department:"department_1",
        },
        {
          id: "user_7",
          email: "user7@example.com",
          firstName: "Charles",
          lastName: "Young",
          roles: Role.Admin,
          organizationId: "org_1",
          department: "department_1",
        },
        {
          id: "user_8",
          email: "user8@example.com",
          firstName: "Ashley",
          lastName: "Nguyen",
          roles: Role.Admin,
          organizationId: "org_2",
          department:"department_1",
        },
        {
          id: "user_9",
          email: "user9@example.com",
          firstName: "William",
          lastName: "Brown",
          roles: Role.Admin,
          organizationId: "org_3",
          department: "department_1",
        },
        {
          id: "user_10",
          email: "user10@example.com",
          firstName: "Jennifer",
          lastName: "Davis",
          roles: Role.Admin,
          organizationId: "org_1",
          department: "department_1",
        },
      ];

  export    const initalAssets = [
        {
          id: "asset_1",
          type: "Image",
          addDateTime: "2024-03-18T09:48:00Z", // Use ISO 8601 for date and time
          owner: "user_1",
          active: true,
        },
        {
          id: "asset_2",
          type: "Document",
          addDateTime: "2024-03-15T12:30:00Z",
          owner: "user_1",
          active: false,
        },
        {
          id: "asset_3",
          type: "Video",
          addDateTime: "2024-03-17T10:15:00Z",
          owner: undefined, // No owner assigned
          active: true,
        },
        {
          id: "asset_4",
          type: "Audio",
          addDateTime: "2024-03-14", // Omit time for simpler date
          owner:"user_1",
          active: true,
        },
        {
          id: "asset_5",
          type: "Image",
          addDateTime: "2024-03-16",
          owner:"user_1",
          active: false,
        },
        // Add more asset objects following the same structure
      ];
   export   const initalRequest = [
        {
          id: "request_4",
          createDatetime: new Date("2024-03-18T10:00:00Z"),
          resolveDatetime: new Date("2024-03-18T11:15:00Z"),
          approved: false,
          userId: "user_1",
          assetId: "asset_1",  // No asset ID for new asset request
          type: "New Asset",
          quantity: 2,  // Requesting 2 new assets
          rejected: false,
          rejectionReason: undefined,
        },
        {
          id: "request_5",
          createDatetime: new Date("2024-03-18T11:15:00Z"),
          resolveDatetime: new Date("2024-03-18T11:15:00Z"),
          approved: false,
          userId: "user_4",
          assetId: "asset_2",  // Requesting maintenance for existing asset
          type: "Existing Asset",
          quantity: 1,  // Quantity of 1 (implicitly understood for existing asset)
          rejected: false,
          rejectionReason: undefined,
        },
        {
            id: "request_6",
            createDatetime: new Date("2024-03-18T11:15:00Z"),
            resolveDatetime: undefined,
            approved: false,
            userId: "user_3",
            assetId: "asset_1",  // Requesting maintenance for existing asset
            rejected: false,
            rejectionReason: undefined,
          },
      ];
export const initalAssetRequest = [
    {
        id: "request_4",
        createDatetime: new Date("2024-03-18T10:00:00Z"),
        resolveDatetime: new Date("2024-03-18T11:15:00Z"),
        approved: false,
        userId: "user_1",
        assetId: "asset_1",  // No asset ID for new asset request
        type: "New Asset",
        quantity: 2,  // Requesting 2 new assets
        rejected: false,
        rejectionReason: undefined,
      },
      {
        id: "request_5",
        createDatetime: new Date("2024-03-18T11:15:00Z"),
        resolveDatetime: new Date("2024-03-18T11:15:00Z"),
        approved: false,
        userId: "user_4",
        assetId: "asset_2",  // Requesting maintenance for existing asset
        type: "Existing Asset",
        quantity: 1,  // Quantity of 1 (implicitly understood for existing asset)
        rejected: false,
        rejectionReason: undefined,
      },
]
export const initalMaintenanceRequest = [
            {
            id: "request_6",
            createDatetime: new Date("2024-03-18T11:15:00Z"),
            resolveDatetime: undefined,
            approved: false,
            userId: "user_1",
            assetId: "asset_1",  // Requesting maintenance for existing asset
            rejected: false,
            rejectionReason: undefined,
          },
          {
            id: "request_6",
            createDatetime: new Date("2024-03-18T11:15:00Z"),
            resolveDatetime: undefined,
            approved: false,
            userId: "user_1",
            assetId: "asset_1",  // Requesting maintenance for existing asset
            rejected: false,
            rejectionReason: undefined,
          },
          {
            id: "request_6",
            createDatetime: new Date("2024-03-18T11:15:00Z"),
            resolveDatetime: undefined,
            approved: false,
            userId: "user_1",
            assetId: "asset_1",  // Requesting maintenance for existing asset
            rejected: false,
            rejectionReason: undefined,
          },
          {
            id: "request_6",
            createDatetime: new Date("2024-03-18T11:15:00Z"),
            resolveDatetime: undefined,
            approved: false,
            userId: "user_1",
            assetId: "asset_1",  // Requesting maintenance for existing asset
            rejected: false,
            rejectionReason: undefined,
          },
          {
            id: "request_6",
            createDatetime: new Date("2024-03-18T11:15:00Z"),
            resolveDatetime: undefined,
            approved: false,
            userId: "user_1",
            assetId: "asset_1",  // Requesting maintenance for existing asset
            rejected: false,
            rejectionReason: undefined,
          },
          {
            id: "request_6",
            createDatetime: new Date("2024-03-18T11:15:00Z"),
            resolveDatetime: undefined,
            approved: false,
            userId: "user_1",
            assetId: "asset_1",  // Requesting maintenance for existing asset
            rejected: false,
            rejectionReason: undefined,
          }
]