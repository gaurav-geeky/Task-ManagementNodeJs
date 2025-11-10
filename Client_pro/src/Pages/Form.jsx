

import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/form.css"

import logo from "../assets/loginLogo.png"
import logo1 from "../assets/tasklogo.png"

import { ToastContainer, toast } from 'react-toastify';

const Form = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [usertype, setusertype] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (usertype === "admin") {
            try {
                let api = `${import.meta.env.VITE_BACK_URL}/admin/login`;
                const response = await axios.post(api, { email: email, password: password });

                localStorage.setItem("adminname", response.data.Admin.name);
                localStorage.setItem("adminemail", response.data.Admin.email);

                toast.success(response.data.msg);
                navigate("/admin-dashboard");
            }
            catch (error) {
                console.log(error);
                toast.warning(error.response.data.msg);
            }
        }

        else {
            try {
                let api = `${import.meta.env.VITE_BACK_URL}/employee/login`;
                const response = await axios.post(api, { email: email, password: password });

                localStorage.setItem("empname", response.data.employee.name);
                localStorage.setItem("empmail", response.data.employee.mail);
                localStorage.setItem("empdesignation", response.data.employee.designation);
                localStorage.setItem("empid", response.data.employee._id);

                toast.success(` welcome ${response.data.employee.name}`);
                navigate("/emp-dashboard");
            }
            catch (error) {
                console.log(error)
                toast.warning(error.response.data.msg)
            }
        }
    }

    return (
        <>
            <div className='loginbody'>

                <h1 id='loghead'>Task Management App</h1>
                <p>Login to Dashboard</p>

                <section id="logcontain">

                    <div className="loginwelcome">
                        <img src={logo1} alt="" />
                        <div>
                            <p>👉 Track your tasks and stay on schedule.</p>
                            <p>👉 Access your dashboard and manage your projects easily.</p>
                            <p>👉 Log in to view and update your assigned tasks.</p>

                        </div>
                    </div>


                    <form className='loginform'>

                        <div id='loginlogo'>
                            <img src={logo} alt="logo" />
                            <span id='tasky'>Tasky</span>
                        </div>

                        <h1>Welcome Back!</h1>
                        <div>Please enter login details below</div>
                        {/*  */}

                        <label className='loglabel' htmlFor="">Email Address</label>
                        <input
                            className="loginput"
                            placeholder='Enter your email'
                            type="email"
                            name='email'
                            onChange={(e) => { setemail(e.target.value) }} />
                        {/*  */}

                        <label className='loglabel' htmlFor="">Password</label>
                        <input
                            className="loginput"
                            placeholder='Enter your password'
                            type="password"
                            name='password'
                            onChange={(e) => { setpassword(e.target.value) }} />
                        {/*  */}

                        <label className='loglabel' htmlFor="">Select User</label>
                        <select
                            className="loginput"
                            name='usertype'
                            onChange={(e) => { setusertype(e.target.value) }}>
                            <option aria-disabled > select user</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>

                        <button id='btnlog' type='submit' onClick={handleSubmit}>Login</button>

                    </form >

                </section>

            </div>

        </>
    )


}

export default Form;



