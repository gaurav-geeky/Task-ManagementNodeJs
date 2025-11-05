import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../css/form.css"

import logo from "../assets/loginLogo.png"

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

                alert(response.data.msg);
                navigate("/admin-dashboard");
            }
            catch (error) {
                console.log(error);
                alert(error.response.data.msg);
            }
        }

        else {
            try {
                let api = `${import.meta.env.VITE_BACK_URL}/employee/login`; 
                const response = await axios.post(api, { email: email, password: password }); 

                alert(response.data.msg); 
                navigate("/emp-dashboard");
            } 
            catch (error) {
                console.log(error) 
                alert(error.response.data.msg)
            }
        }
    }

    return (
        <>
            <div className='loginbody'>
                <h1 className=''> User Login here </h1>

                <form className='form'>
                    <div className='flex items-center font-bold text-2xl '>
                        <img src={logo} alt="logo" />
                        <span id='tasky'>Tasky</span>
                    </div>

                    <h1>Welcome Back!</h1>
                    <div>Please enter login details below</div>

                    <label className='font-bold' htmlFor="">Email Address</label>
                    <input
                        className='p-1 border-2  width'
                        type="email" name='email' onChange={(e) => { setemail(e.target.value) }} />


                    <label className='font-bold ' htmlFor="">Password</label>
                    <input
                        className='p-1 border-2  width '
                        type="password" name='password' onChange={(e) => { setpassword(e.target.value) }} />


                    <label className='font-bold' htmlFor="">Select User</label>
                    <select
                        className='p-1 border-2  width'
                        name='usertype' onChange={(e) => { setusertype(e.target.value) }}>
                        <option aria-disabled > select user</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                    </select>


                    <button className='btnlog' type='submit' onClick={handleSubmit}>Login</button>
                </form >
            </div>

        </>
    )

}

export default Form;



