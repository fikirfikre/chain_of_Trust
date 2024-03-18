import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashBoard from "./Dashboard";
import Property from "./Property";
import Category from "./Category";
import Department from "./Department";
import Staffs from "./Staff";
import Requests from "./Request";
import StaffDetail from "./StaffDetail";

function AppLayout() {
    return (
        <BrowserRouter>
            <div className='app' >
                <SideBar />
                <Outlet/>
                <main className='main-content'>
                   <Routes>
                    <Route path="/admin" element={<DashBoard/>}/>
                    <Route path="assets" element={<Property/>}/>
                    <Route path="categories" element={<Category/>}/>
                    <Route path="departments" element={<Department/>}/>
                    <Route path="staffs" element={<Staffs/>}/>
                    <Route path="staffs/:staffId" element={<StaffDetail />} />

           
                    <Route path="requests" element={<Requests/>}/>
                   </Routes>
                 
                </main>
              
            </div>

            </BrowserRouter>
    )
}
export default AppLayout