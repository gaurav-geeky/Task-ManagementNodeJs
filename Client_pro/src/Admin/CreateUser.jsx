
import axios from 'axios';
import React, { useState } from 'react'
import "../css/user.css"
import logo1 from "../assets/green-user2.png"

import { ToastContainer, toast } from 'react-toastify';


const CreateUser = () => {
    const [userdata, setuserdata] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setuserdata(values => ({ ...values, [name]: value }));
        console.log(userdata);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let api = `${import.meta.env.VITE_BACK_URL}/admin/usercreate`;
            const response = await axios.post(api, userdata);
            toast.success(response.data); 
            setuserdata({}); 

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='userbody'>

                <h1>Empower your team by giving them access to their workspace.</h1>

                <section id="userlogcontain">
                    
                    <form id='userform' >
                        <h1> Create New User</h1>

                        <label className='userfrmlabel' htmlFor=""> Employee Name</label>
                        <input
                            className='userfrminput' placeholder='Enter employee name' type="text" name='empname' onChange={handleInput} />

                        <label className='userfrmlabel' htmlFor="">Employee Mail</label>
                        <input
                            className='userfrminput' placeholder='Enter employee email' type="text" name='empmail' onChange={handleInput} />

                        <label className='userfrmlabel' htmlFor="" >Select Designation </label>

                        <select className='userfrminput'
                            name='designation' onChange={handleInput} >
                            <option aria-disabled > select designation </option>
                            <option value="Programmer">Programmer</option>
                            <option value="Tester">Tester</option>
                            <option value="Designer">Designer</option>
                            <option value="Analyst">Analyst</option>
                            <option value="DB Designer">DB Designer</option>
                        </select>
                        <button id='usersub' className=' ' type='submit' onClick={handleSubmit}>Submit</button>
                    </form >

                    <div id='frmImg'>
                        <img src={logo1} alt="form" />
                    </div>
                </section>

            </div>
        </>
    )
}

export default CreateUser;  
