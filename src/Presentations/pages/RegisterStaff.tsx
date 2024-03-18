import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { Role } from "../../Domain/User/User";
import { initalDepartments } from "../../Domain/list";
import { useState } from "react";
interface RegisterProps{
    handlModal : ()=>void
}
function RegisterStaff(props:RegisterProps){
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
    <h2> Register User </h2>
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
            <Link to='/property'>
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
interface Props{
    isOpen:boolean,
    toggleDropdown:()=>void
  
}

function RolesDropDown(props:Props){
    
    const options = [Role.Admin,Role.Manager,Role.User];
    const selectedOption =Role[options[0]];

    
    return(
    <div className="adjust-option" onClick={(e) => e.stopPropagation()}>
     <div className='input-container option-select'>
    <input
    style={{
        cursor:"pointer"
    }}
        type='text'
        placeholder='Select role'
        // value={selectedOption}
      onClick={() => props.toggleDropdown()}
    />
    {props.isOpen ? <IoIosArrowUp /> :<IoIosArrowDown />} 
    </div>
     
     {props.isOpen && (
        <ul className='options-list'>
            {options.map((option) => (
                <li
                    key={option}
                    // onClick={() => handleOptionClick(option)}
                >
                    {Role[option]}
                </li>
            ))}
        </ul>
    )}   
    
</div>)

}


function DepartmentDropDown(props:Props){
    const options = initalDepartments;
    const selectedOption =initalDepartments[0];
    const [isDepOpen,setDepOpen] = useState(false);
    const toggleDepDropdown = () => setDepOpen(!isDepOpen);

    return(
    <div className="adjust-option" onClick={(e) => e.stopPropagation()} >
     <div className='input-container option-select'>
    <input
    style={{
        cursor:"pointer"
    }}
        type='text'
        placeholder='Select Department'
        // value={selectedOption.name}
      onClick={() => props.toggleDropdown()}
    />
    {props.isOpen ? <IoIosArrowUp /> :<IoIosArrowDown />} 
    </div>
     
     {props.isOpen && (
        <ul className='options-list'>
            {options.map((option) => (
                <li
                    key={option.id}
                    // onClick={() => handleOptionClick(option)}
                >
                    {option.name}
                </li>
            ))}
        </ul>
    )}   
    
</div>)
}
export default RegisterStaff