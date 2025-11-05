import React from 'react'
import "../css/admindash.css"
import { Link, Outlet } from 'react-router-dom'


const AdminDashBoard = () => {
    return (
        <>
            <div>
                <h1 id='admin'> welcome to Admin board </h1>

                <p id='welcome'> Welcome {localStorage.getItem("adminname")} &nbsp;
                    Email : {localStorage.getItem("adminemail")} ! Logout
                </p>
                

                <div id="admindata">

                    <div id="adminmenu" style={{ margin: "10px", border: "1px solid black", width: "200px"}}>
                        <Link to="create-user">Create User</Link>
                        <br />
                        <Link to="assign-task"> Assign Task </Link>
                    </div>

                    <div id="admincontent">
                        <Outlet />
                    </div>

                </div>

            </div>
        </>
    )
}

export default AdminDashBoard;

