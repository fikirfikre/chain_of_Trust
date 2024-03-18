import Navbar from "../components/Navbar"
import styles from './Staff.module.css'
function Category(){
    return<div>
        <Navbar/>
        <div className={styles.table_box}>
            <div className={styles.all_bar}>
                <h3>All</h3>
                <button>+</button>
            </div>
            <table className={styles.table}>
                <thead>
                    <th>Category Id</th>
                    <th>Category Type</th>
                    <th>No of Asset </th>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>cat-0001</td>
                        <td>
                           Electronics
                        </td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>cat-0001</td>
                        <td>
                           Electronics
                        </td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}
export default Category