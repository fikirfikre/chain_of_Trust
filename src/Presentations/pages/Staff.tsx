import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from './Staff.module.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import RegisterStaff from "./RegisterStaff";
import ReactModal from "react-modal";
export default function Staffs(){
    const initalStaffs = [
        {
          id: "user_1",
          email: "user1@example.com",
          firstName: "John",
          lastName: "Doe",
          roles: ["admin", "editor"],
          organizationId: "org_1",
          department: "Marketing",
        },
        {
          id: "user_2",
          email: "user2@example.com",
          firstName: "Jane",
          lastName: "Smith",
          roles: ["user"],
          organizationId: "org_2",
          department: "Engineering",
        },
        {
          id: "user_3",
          email: "user3@example.com",
          firstName: "Michael",
          lastName: "Lee",
          roles: ["developer"],
          organizationId: "org_1",
          department: "IT",
        },
        {
          id: "user_4",
          email: "user4@example.com",
          firstName: "Sarah",
          lastName: "Garcia",
          roles: ["manager"],
          organizationId: "org_2",
          department: "Sales",
        },
        {
          id: "user_5",
          email: "user5@example.com",
          firstName: "David",
          lastName: "Kim",
          roles: ["user", "editor"],
          organizationId: "org_3",
          department: "Design",
        },
        {
          id: "user_6",
          email: "user6@example.com",
          firstName: "Amanda",
          lastName: "Robinson",
          roles: ["user"],
          organizationId: "org_3",
          department: "Human Resources",
        },
        {
          id: "user_7",
          email: "user7@example.com",
          firstName: "Charles",
          lastName: "Young",
          roles: ["developer", "admin"],
          organizationId: "org_1",
          department: "IT",
        },
        {
          id: "user_8",
          email: "user8@example.com",
          firstName: "Ashley",
          lastName: "Nguyen",
          roles: ["user"],
          organizationId: "org_2",
          department: "Marketing",
        },
        {
          id: "user_9",
          email: "user9@example.com",
          firstName: "William",
          lastName: "Brown",
          roles: ["manager", "editor"],
          organizationId: "org_3",
          department: "Sales",
        },
        {
          id: "user_10",
          email: "user10@example.com",
          firstName: "Jennifer",
          lastName: "Davis",
          roles: ["user"],
          organizationId: "org_1",
          department: "Finance",
        },
      ];
      
      const [staffs,setStaff] = useState(initalStaffs)
      const [isModalOpen,setIsModalOpen] = useState(false)
      const handleModal = ()=>{
        setIsModalOpen(m=>m=!isModalOpen)
      }
      const navigate = useNavigate();
      const handleUserClick = (staffId:string)=>{
        navigate(`/staffs/${staffId}`);
      }
    return<>

   
            <Navbar/>
           
            <ReactModal
    isOpen={isModalOpen}
    
    //  onRequestClose={() => setIsModalOpen(false)}
    className='modal-content custom-property'
    overlayClassName='modal-overlay'
>
  
<RegisterStaff handlModal={handleModal}/>
</ReactModal>
            <div className={styles.table_box}>
            <div className={styles.all_bar}>
                <h3>All</h3>
                <button onClick={()=>handleModal()}>+</button>
            </div>
            <table className={styles.table}>
            <thead>
                <th>Employee Id</th>
                <th>Employee Email</th>
                <th>Department</th>
                <th>Roles</th>
                <th></th>
            </thead>
            <tbody>
                {staffs.map((staff)=>(
    <tr>
    <td>{staff.id}</td>
    <td>{staff.email}</td>
    <td>{staff.department}</td>
    <td>{staff.roles[0]}</td>
    <td onClick={()=>handleUserClick(staff.id)}>Detail</td>
</tr>
                ))}
            
            </tbody>
        </table>
    </div>
    </>
}