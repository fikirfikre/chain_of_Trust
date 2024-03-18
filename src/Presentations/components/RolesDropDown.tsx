import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Role } from "../../Domain/User/User";

interface Props{
    isOpen:boolean,
    toggleDropdown:()=>void
  
}

export default function RolesDropDown(props:Props){
    
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