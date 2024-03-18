import { FaBug, FaTv } from "react-icons/fa";
import { IoAnalytics, IoPerson } from "react-icons/io5";
import { MdSearch, MdPeople, MdSettings } from "react-icons/md";
import {
	PiGitPullRequest,
	PiHouse,
	PiSquaresFourBold,
	PiTree,
} from "react-icons/pi";
import styles from './SideBar.module.css'
import { NavLink } from "react-router-dom";
import { useState } from "react";
function SideBar(){
    const [selectedIndex, setSelected] = useState(0)
    function handleSelected(index:number){
        console.log(index)
        setSelected(s=>s=index);
    }
    const sidebar = [
		{
			title: "Dashboard",
			icons: <FaTv />,
			link: "/admin",
		},
		{
			title: "Staff",
			icons: <MdPeople />,
			link: "/staffs",
		},
		{
			title: "Property",
			icons: <PiHouse />,
			link: "/assets",
		},
		{
			title: "Requests",
			icons: <PiGitPullRequest />,
			link: "/requests",
		},
		{
			title: "Departments",
			icons: <PiTree />,
			link: "/departments",
		},
		{
			title: "Category",
			icons: <PiSquaresFourBold />,
			link: "/categories",
		},
	];

    return <nav className={styles.sidebar}>
     <h1>Chain of Trust</h1>
     <ul>
        {sidebar.map((item,index)=>(
            <li key={index} className={`${index == selectedIndex? styles.selected : ""}`}>
                <NavLink to={item.link} onClick={()=>handleSelected(index)} >
              
                <span>{item.icons}</span>
                <p>{item.title}</p>
                
                
                </NavLink>
            </li>
        ))}
     </ul>

    </nav>
   
}
export default SideBar