import React from 'react'
import "../css/dashboard.css"
import { Link, Outlet } from 'react-router-dom'


const EmpDashboard = () => {
    let empname = localStorage.getItem("empname");
    let emptask = localStorage.getItem("task");

    return (
        <>
            <div className='empdashboard'>

                <div id="empheader">
                    <h1 id='employee'>Employees <span>Dashboard</span>  </h1>
                    <div  className='welcome'> Welcome, {empname} </div>
                </div>

                <div className="empcontainer">

                    <div id="empmenu">
                        <Link to="mytask">My Tasks</Link>
                        <Link to="submitedtask"> Submitted Tasks</Link>
                        
                    </div>

                    <div id="empdata">
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}

export default EmpDashboard
