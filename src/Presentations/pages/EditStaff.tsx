import { useState } from "react";
import RolesDropDown from "../components/RolesDropDown";
import DepartmentDropDown from "../components/DepartmentDropDown";
import { Link } from "react-router-dom";
interface Props{
    handlModal : ()=>void
}
function EditStaff(props:Props){
    const [isRoleOpen,setRoleOpen] = useState(false);
    const toggleRoleDropdown = () =>{
        setDepOpen(false);
         setRoleOpen(!isRoleOpen)};

    const [isDepOpen,setDepOpen] = useState(false);
    const toggleDepDropdown = () => {
        setDepOpen(!isDepOpen);
        setRoleOpen(false)};
    

    return 	<div onClick={()=>{
        setDepOpen(false);
        setRoleOpen(false);
    }}>
    <h2> Edit User </h2>
    <div className='inputs'>
        <h3>Employee ID</h3>
        <input placeholder='Enter ID' />
        <h4>Employee Email</h4>
        <input placeholder='Enter email' />
        <div className='row'>
        <RolesDropDown toggleDropdown={toggleRoleDropdown} isOpen={isRoleOpen}  />
         <DepartmentDropDown toggleDropdown={toggleDepDropdown} isOpen={isDepOpen}/>
        </div>
        <div className='buttons'>
            <button
             onClick={() => props.handlModal()}
                style={{
                    color: "white",
                    backgroundColor: "black",
    
                }}
            >
                Cancel
            </button>
            <Link to='/staff'>
                <button
                    style={{
                        color: "black",
                        backgroundColor: "white",
                       
                    }}
                >
                    Save
                </button>
            </Link>
        </div>
    </div>
    </div>
}
export default EditStaff