
import axios from 'axios';
import React, { useState } from 'react'
import "../css/user.css"

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
            console.log(response.data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='userbody'>
                <h1> Create New User</h1>

                <form className='flex flex-col userform' >

                    <label className='font-bold ' htmlFor=""> Employee Name</label>
                    <input
                        className='border-2 pl-1 w-50 ' type="text" name='empname' onChange={handleInput} />

                    <label className='font-bold ' htmlFor="">Employee Mail</label>
                    <input
                        className='border-2 pl-1 w-50 ' type="text" name='empmail' onChange={handleInput} />

                    <label className='font-bold ' htmlFor="" >Select Designation </label>

                    <select className='border-2 pl-1 w-50 '
                        name='designation' onChange={handleInput} >
                        <option aria-disabled > select designation </option>
                        <option value="Programmer">Programmer</option>
                        <option value="Tester">Tester</option>
                        <option value="Designer">Designer</option>
                        <option value="Analyst">Analyst</option>
                        <option value="DB Designer">DB Designer</option>
                    </select>

                    <button id='userbtn' className=' ' type='submit' onClick={handleSubmit}>Submit</button>
                </form >
            </div>
        </>
    )
}

export default CreateUser;  
