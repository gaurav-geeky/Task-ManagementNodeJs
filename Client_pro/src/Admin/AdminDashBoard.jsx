import React from 'react'
import "../css/dashboard.css"
import { Link, Outlet } from 'react-router-dom'


const AdminDashBoard = () => {
    let adminname = localStorage.getItem("adminname"); 
    let adminemail = localStorage.getItem("adminemail"); 

    return (
        <>
            <div className='admindashboard'>
               
                <div id="adminheader">
                    <h1 id='admin'>Admin <span>Dashboard</span>  </h1>
                    <div className='welcome'> Welcome, {adminname} &ensp; {adminemail} </div>
                </div>

                <div className="admincontainer">
                    <div id="adminmenu">
                        <Link to="/admin-dashboard"> Admin Home</Link>
                        <Link to="create-user">Create User</Link>
                        <Link to="assign-task"> Assign Task </Link>
                    </div>
                    <div id="admindata">
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminDashBoard;

