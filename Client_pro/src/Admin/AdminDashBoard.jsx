
import React from 'react'
import "../css/admindash.css"
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'


const AdminDashBoard = () => {
    let adminname = localStorage.getItem("adminname");
    let adminemail = localStorage.getItem("adminemail");

    let navigate = useNavigate();

    const logout = () => {
        navigate("/")
    }

    return (
        <>
            <div className='admindashboard'>

                <div id="adminheader">

                    {/* NEW HAMBURGER BUTTON FOR MOBILE */}
                    <div id="hamburger" onClick={() => {
                        document.getElementById("adminmenu").classList.toggle("showmenu");
                    }}>
                        🍔
                    </div>

                    <h1 id='admin'>Admin <span>Dashboard</span>  </h1>
                    <div className='welcome'>
                        Welcome, {adminname} &ensp; {adminemail}
                        <button className='logout' onClick={logout} >Logout</button>
                    </div>
                </div>

                {/* <div className='logout'>Logout</div> */}


                <div className="admincontainer">

                    <div id="adminmenu">

                        {/* NEW CLOSE BUTTON FOR MOBILE MENU */}
                        <div id="closemenu" onClick={() => {
                            document.getElementById("adminmenu").classList.remove("showmenu");
                        }}>
                            ×
                        </div>
                        
                        <NavLink
                            className={({ isActive }) => (isActive ? "adminactive-menu" : "")}
                            to="/admin-dashboard" end > 🏠 Admin Home</NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? "adminactive-menu" : "")}
                            to="create-user" >🙍🏻‍♂️ Create User</NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? "adminactive-menu" : "")}
                            to="assign-task" > 🎯 Assign Task </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? "adminactive-menu" : "")}
                            to="report" > 📝 Reports ... </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? "adminactive-menu" : "")}
                            to="setting" > 🔧 Settings ... </NavLink>


                    </div>

                    <div id="admindata">
                        <Outlet />
                        {/* <p>sg</p> */}
                    </div>
                </div>


            </div>
        </>
    )
}

export default AdminDashBoard;

