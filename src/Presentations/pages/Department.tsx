import { useState } from "react";
import Navbar from "../components/Navbar"
import styles from './Staff.module.css'
import { initalDepartments } from "../../Domain/list";

function Department() {

     const [departments,setDepartment]=useState(initalDepartments)      
    return <div>
        <Navbar />
        <div className={styles.table_box}>
            <div className={styles.all_bar}>
                <h3>All</h3>
                <button>+</button>
            </div>
            <table className={styles.table}>
                <thead>
                    <th>Department Id</th>
                    <th>Department Type</th>
                    <th>No of Staff </th>
                    <th>Manager</th>
                    <th></th>
                </thead>
                <tbody>
                    {departments.map((department)=>(
                                    <tr>
                                    <td>{department.id}</td>
                                    <td>
                                       {department.name}
                                    </td>
                                    <td>{department.staff.length}</td>
                                    <td>{department.managerId == undefined? "-": department.managerId}</td>
            
                                    <td></td>
                                </tr> 
                    ))}
       
                </tbody>
            </table>
        </div>
    </div>
}
export default Department