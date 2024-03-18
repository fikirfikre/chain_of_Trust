import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from './Staff.module.css'
import { initalRequest } from "../../Domain/list";
export default function Requests(){
 
      
      // Sample Asset Maintenance Request object
    const [requests,setRequest] = useState(initalRequest);
    return <div>
            <Navbar/>
            <div className={styles.table_box}>
            <div className={styles.all_bar}>
                <h3>All</h3>
                <button>+</button>
            </div>
            <table className={styles.table}>
            <thead>
                <th>Request Id</th>
                <th>Asset Id</th>
                <th>Employee ID</th>
                <th>Created Date</th>
                <th>Resolved Date</th>
            
                <th></th>
            </thead>
            <tbody>
                {requests.map((request)=>(
                <tr>
                    <td>{request.id}</td>
                    <td>{request.assetId}</td>
                    <td>{request.userId}</td>
                    <td>{request.createDatetime.toLocaleDateString()}</td>
                    <td>{request.resolveDatetime == undefined ? "-" : request.resolveDatetime.toLocaleDateString()}</td>
                    <td>Detail</td>
                </tr>  
                ))}

            </tbody>
        </table>
    </div>
    </div>
}