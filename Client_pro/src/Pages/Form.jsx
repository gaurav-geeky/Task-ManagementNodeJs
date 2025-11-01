import React from 'react'
import { useState } from 'react'
import axios from "axios";
import "../Login.css";
import { useNavigate } from "react-router-dom";

import logo from "../assets/loginLogo.png"
// import { useNavigate } from 'react-router-dom';

function Form() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [usertype, setusertype] = useState("");
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (usertype == "admin") {
            try {
                let api = `${import.meta.env.VITE_BACK_URL}/admin/login`;
                const response = await axios.post(api, { email: email, password: password });
                console.log(response);

                alert(response.data.msg)
                localStorage.setItem("adminname", response.data.Admin.name);
                localStorage.setItem("adminemail", response.data.Admin.email);
                // navigate("/admin-dashboard");
            }
            catch (error) {
                console.log(error)
                alert(error.response.data.msg);
            }
        }
        else {
            alert("Invalid admin");
        }
    }

    return (
        <>
            <div className='loginbody'>
                <h1> User Login here </h1>

                <form className='form'>
                    <div className='flex items-center font-bold text-2xl '>
                        <img src={logo} alt="logo" />
                        <span id='tasky'>Tasky</span>
                    </div>

                    <h1>Welcome Back!</h1>
                    <div>Please enter login details below</div>

                    <label className='font-bold' htmlFor="">Email Address</label>
                    <input
                        className='p-1 border-1  width'
                        type="email" name='email' onChange={(e) => setemail(e.target.value)} />

                    <label className='font-bold ' htmlFor="">Password</label>
                    <input
                        className='p-1 border-1  width '
                        type="password" name='password' onChange={(e) => setpassword(e.target.value)} />


                    <label className='font-bold' htmlFor="">Select User</label>
                    <select
                        className='p-1 border-1  width'
                        name='usertype' onChange={(e) => setusertype(e.target.value)}>
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


// className='pl-1 border-2 ml-2 mt-5'  