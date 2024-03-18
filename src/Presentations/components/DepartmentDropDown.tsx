import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { initalDepartments } from "../../Domain/list";
import { useState } from "react";
interface Props{
    isOpen:boolean,
    toggleDropdown:()=>void
  
}
export default function DepartmentDropDown(props:Props){
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