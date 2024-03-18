import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./Staff.module.css"
import { initalAssets } from "../../Domain/list";
export default function Property(){

      
      const [assets,setAsset]=useState(initalAssets)
return <div>
        <Navbar/>
        <div className={styles.table_box}>
            <div className={styles.all_bar}>
                <h3>All</h3>
                <button>+</button>
            </div>
            <table className={styles.table}>
            <thead>
                <th>Asset Id</th>
                {/* <th>Asset Name</th> */}
                <th>Type</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
            </thead>
            <tbody>
                 {assets.map((asset)=>(
                        <tr>
                        <td>{asset.id}</td>
                        <td>
                            {asset.type}
                        </td>
                        <td>{asset.active ? "In Use " : "Avaliable "} </td>
                        
                        <td>{asset.addDateTime}</td>
                        <td>detail</td>
                    </tr> 
                 ))}
               
            </tbody>
        </table>
    </div>
</div>
}