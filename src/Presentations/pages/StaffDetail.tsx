import { FaTv, FaUpload } from "react-icons/fa";
import { MdSearch, MdPeople, MdSettings, MdAdd } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import ReactModal from "react-modal";
import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Role, User } from "../../Domain/User/User";
import { initalAssetRequest, initalAssets, initalDepartments, initalMaintenanceRequest, initalRequest } from "../../Domain/list";
import { Asset } from "../../Domain/Asset/Asset";
import { AssetMaintenanceRequest } from "../../Domain/Maintenance/AssetMaintenanceRequest";
import { AssetRequest } from "../../Domain/AssetRequest/AssetRequest";
import EditStaff from "./EditStaff";
// import Department, { initalDepartments } from "./Department"
const initalStaffs = [
    {
      id: "user_1",
      email: "user1@example.com",
      firstName: "John",
      lastName: "Doe",
      roles: [Role.Manager],
      organizationId: "org_1",
      departmentId: "department_1",
    },
    {
      id: "user_2",
      email: "user2@example.com",
      firstName: "Jane",
      lastName: "Smith",
      roles: [Role.Admin],
      organizationId: "org_2",
      departmentId: "department_1",
    },
    {
      id: "user_3",
      email: "user3@example.com",
      firstName: "Michael",
      lastName: "Lee",
      roles: [Role.Admin],
      organizationId: "org_1",
      departmentId: "department_1",
    },
    {
      id: "user_4",
      email: "user4@example.com",
      firstName: "Sarah",
      lastName: "Garcia",
      roles: [Role.Admin],
      organizationId: "org_2",
      departmentId: "department_1",
    },
    {
      id: "user_5",
      email: "user5@example.com",
      firstName: "David",
      lastName: "Kim",
      roles: [Role.Admin],
      organizationId: "org_3",
      departmentId: "department_1",
    },
    {
      id: "user_6",
      email: "user6@example.com",
      firstName: "Amanda",
      lastName: "Robinson",
      roles: [Role.Admin],
      organizationId: "org_3",
      departmentId: "department_1",
    },
    {
      id: "user_7",
      email: "user7@example.com",
      firstName: "Charles",
      lastName: "Young",
      roles: [Role.Admin],
      organizationId: "org_1",
      departmentId: "department_1",
    },
    {
      id: "user_8",
      email: "user8@example.com",
      firstName: "Ashley",
      lastName: "Nguyen",
      roles: [Role.Admin],
      organizationId: "org_2",
      departmentId: "department_1",
    },
    {
      id: "user_9",
      email: "user9@example.com",
      firstName: "William",
      lastName: "Brown",
      roles: [Role.Admin],
      organizationId: "org_3",
      departmentId:"department_1",
    },
    {
      id: "user_10",
      email: "user10@example.com",
      firstName: "Jennifer",
      lastName: "Davis",
      roles: [Role.Admin],
      organizationId: "org_1",
      departmentId: "department_1",
    },
  ];



function StaffDetail() {
    const {staffId} = useParams();
   
    const initialUser =         {
        id: "user_9",
        email: "user9@example.com",
        firstName: "William",
        lastName: "Brown",
        roles: [Role.Admin],
        organizationId: "org_3",
        departmentId: "department_1",
      }
    const [staff,setStaff]=useState<User>(initialUser);
    const [assets,setAsset]=useState<Asset[]>([]);
    const [maintenanceRequests,setMaintenanceRequest] = useState<AssetMaintenanceRequest[]>([])
    const [assetRequests,setAssetRequest] = useState<AssetRequest[]>([])

    const [index,setIndex]=useState(0);
    const [isEditModal,setIsEditModalOpen] = useState(false);

    const handleEditClicked = (){
        setIsEditModalOpen(m=>m=!isEditModal)
    }

    const handleClicked = (value:number)=>{
        setIndex((i)=>i=value)
    }
    useEffect(()=>{
        const filterUser = initalStaffs.filter((user) => user.id == staffId);
        setStaff(filterUser[0])
        const assets = initalAssets.filter((asset)=>asset.owner == staffId);
        setAsset(assets)
        const requests = initalAssetRequest.filter((request)=>request.userId == staffId);
         setAssetRequest(requests)
        const maintreq = initalMaintenanceRequest.filter((request)=>request.userId == staffId);
        setMaintenanceRequest(maintreq)
    
    },[])
  

	const [selectedItem, setSelectedItem] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
	const [isModalOpenThree, setIsModalOpenThree] = useState(false);

	const fileInputRef = useRef(null);

	const options = ["Option 1", "Option 2", "Option 3"];
	const [selectedOption, setSelectedOption] = useState("");
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	// const handleFileChange = (event) => {
	// 	const selectedFile = event.target.files[0];
	// };

	// const handleOptionClick = (option) => {
	// 	setSelectedOption(option);
	// 	setDropdownOpen(false);
	// };

	return (
		<div className='staff-detail'>
				<div className='body'>
					<section className='one'>
						<div className='col'>
							<h4> {staff.id} </h4>
							<p> {staff.firstName} </p>
							<p> {staff.lastName} </p>
                            <p> {staff.email} </p>
							<p>{Role[staff.roles[0]]} </p>
						</div>
                        <div> 
						<button
							onClick={() => setIsModalOpenThree(true)}
							style={{ backgroundColor: "#011b33", color: "white" }}
						>
							Edit
						</button>
                        	<button
							style={{ color: "black" }}
							onClick={() => setIsModalOpenTwo(true)}
						>
							Delete
						</button>
                        </div>
						{isModalOpenThree && (
							<div className='modal-overlay'>
								<ReactModal
									isOpen={isModalOpenThree}
									onRequestClose={() => setIsModalOpenThree(false)}
									className='modal-content custom-property'
									overlayClassName='modal-overlay'
								>
									<EditStaff handlModal={handleModal}/>
								</ReactModal>
							</div>
						)}
					
						{isModalOpenTwo && (
							<div className='modal-overlay'>
								<ReactModal
									isOpen={isModalOpenTwo}
									onRequestClose={() => setIsModalOpenTwo(false)}
									className='modal-content custom-property delete'
									overlayClassName='modal-overlay'
								>
									<p style={{ fontSize: "20px", margin: "0" }}>
										Are you sure you want to delete
									</p>
									<h2> Employee-001? </h2>
									<div className='buttons' style={{ marginRight: "-15em" }}>
										<button
											onClick={() => setIsModalOpenTwo(false)}
											style={{
												color: "white",
												backgroundColor: "black",
												marginRight: "16em",
											}}
										>
											yes
										</button>
										<Link to='/property'>
											<button
												style={{
													color: "black",
													backgroundColor: "white",
													marginRight: "16em",
												}}
											>
												No
											</button>
										</Link>
									</div>
								</ReactModal>
							</div>
						)}
					</section>
					<section className='two'>
						<h3> Owned Asset </h3>
                        <div className="list-box">
                        <table>
                            <thead>
                                <th>Asset ID</th>
                                <th>Asset Type</th>
                                <th>Status</th>
                                <th>Created Date</th>
                                <th></th>
                            </thead>
                            <tbody>
                            {assets.map((asset)=>(
                                <tr>
                                    <td>{asset.id}</td>
                                    <td>{asset.type}</td>
                                    <td>{asset.active ? "In Use":"Avaliable"}</td>
                                    <td>{asset.addDateTime}</td>
                                    <td>Detail</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
	
					</section>
					<section className='three'>
						<h3> <span className={`${index == 0 ? "selected-request" : "unselected-request"}`} onClick={()=>handleClicked(0)}>AssetRequest</span> <span className={`${index == 1 ? "selected-request" : "unselected-request"}`} onClick={()=>handleClicked(1)}>Maintenace Request</span> </h3>
                        <div className="list-box">
                            {index == 0 ?
                        <table>

                            <thead>
                                <th>Request ID</th>
                                <th>Asset ID</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Resolved Date</th>
                                <th></th>
                            </thead>
                            <tbody>
                                {assetRequests.map((request)=>(
                                    <tr>
                                      <td>{request.id}</td>
                                      <td>{request.assetId}</td>
                                      <td>{request.type}</td>
                                      <td>{request.quantity}</td>
                                      <td>{request.resolveDatetime == undefined ? "-" : request.resolveDatetime.toLocaleDateString()}</td>
                                      <td>Detail</td>
                                    </tr>
                               
                                ))}
                            </tbody>
                        </table>
                        :  <table>

                        <thead>
                            <th>Request ID</th>
                            <th>Asset ID</th>
                            <th>created Date</th>
                            <th>approved</th>
                            <th>Resolved Date</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {maintenanceRequests.map((request)=>(
                                <tr>
                                  <td>{request.id}</td>
                                  <td>{request.assetId}</td>
                                  <td>{request.createDatetime.toLocaleDateString()}</td>
                                  <td>{request.approved == false && request.rejected == false ? "pending" : ""}</td>
                                  <td>{request.resolveDatetime == undefined ? "-" : request.resolveDatetime.toLocaleDateString()}</td>
                                  <td>Detail</td>
                                </tr>
                           
                            ))}
                        </tbody>
                    </table>}
                        </div>
					</section>
				</div>
			</div>
		
	);
}

export default StaffDetail;
