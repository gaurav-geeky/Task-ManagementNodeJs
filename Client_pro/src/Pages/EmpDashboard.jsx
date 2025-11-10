import React from 'react'
import "../css/dashboard.css"
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'


const EmpDashboard = () => {
    let empname = localStorage.getItem("empname");
    let emptask = localStorage.getItem("task");

    let navigate = useNavigate()
    const logout = () => {
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

                    {/* <div id="empmenu">
                        <Link to="/emp-dashboard"> Employee Home</Link>

                        <Link to="mytask">Total Tasks</Link>

                        <Link to="submitedtask"> Submited Tasks</Link>

                        <Link to="remainingTask"> Remaining Tasks</Link>
                    </div> */}

                    <div id="empmenu">
                        <NavLink to="/emp-dashboard"
                            className={({ isActive }) => (isActive ? "empactive-menu" : "")}
                            end
                        >
                            Employee Home
                        </NavLink>

                        <NavLink to="mytask"
                            className={({ isActive }) => (isActive ? "empactive-menu" : "")} >
                            Total Tasks
                        </NavLink>

                        <NavLink to="submitedtask"
                            className={({ isActive }) => (isActive ? "empactive-menu" : "")} >
                            Submitted Tasks
                        </NavLink>

                        <NavLink to="remainingTask"
                            className={({ isActive }) => (isActive ? "empactive-menu" : "")} >
                            Remaining Tasks
                        </NavLink>
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
