import React from 'react'
import "../empcss/empdash.css"
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import "../css/form.css"

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

                    {/* NEW HAMBURGER BUTTON FOR MOBILE */}
                    <div id="hamburger" onClick={() => {
                        document.getElementById("empmenu").classList.toggle("showmenu");
                    }}>
                        ☰
                    </div>

                    <h1 id='employee'>Employees <span>Dashboard</span>  </h1>
                    <div className='welcome'>
                        Welcome, {empname}
                        <button className='logout' onClick={logout} >Logout</button>
                    </div>
                </div>

                <div className="empcontainer">

                    <div id="empmenu">

                        {/* NEW CLOSE BUTTON FOR MOBILE MENU */}
                        <div id="closemenu" onClick={() => {
                            document.getElementById("empmenu").classList.remove("showmenu");
                        }}>
                            ×
                        </div> 

                        {/* menu bar highlight the current option form css */}

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

                        <NavLink to="settings"
                            className={({ isActive }) => (isActive ? "empactive-menu" : "")} >
                            Settings
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
