import React from 'react'
import "../css/dashboard.css"
import { Link, Outlet, useNavigate } from 'react-router-dom'


const EmpDashboard = () => {
    let empname = localStorage.getItem("empname");
    let emptask = localStorage.getItem("task");

    let navigate = useNavigate()
    const logout = ()=> {
        navigate("/")
    }

    return (
        <>
            <div className='empdashboard'>

                <div id="empheader">
                    <h1 id='employee'>Employees <span>Dashboard</span>  </h1>
                    <div className='welcome'>
                        Welcome, {empname}
                        <button className='logout' onClick={logout} >Logout</button>
                    </div>
                </div>

                <div className="empcontainer">

                    <div id="empmenu">
                        <Link to="/emp-dashboard"> Employee Home</Link>
                        <Link to="mytask">Total Tasks</Link>
                        <Link to="submitedtask"> Submitted Tasks</Link>
                        <Link to="remainingTask"> Remaining Tasks</Link>

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
