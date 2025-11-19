import React, { useState } from 'react';
import axios from 'axios';
import "../css/employee.css"
import key from "../assets/key.svg"
import logo1 from "../assets/passadmin.png"

import { ToastContainer, toast } from 'react-toastify';

//  Admin password change

const Setting = () => {
    const [oldpass, setoldpass] = useState("")
    const [newpass, setnewpass] = useState("")
    const [confirmpass, setconfirmpass] = useState("")

    const adminPass = localStorage.getItem("adminPass");
    const adminId = localStorage.getItem("adminId");



    let handleSubmit = async (e) => {

        e.preventDefault();
        try {
            if (oldpass === adminPass && newpass === confirmpass) {

                let api = `${import.meta.env.VITE_BACK_URL}/admin/changepass`;
                const response = await axios.post(api, { adminId, newpass, confirmpass });
                toast.success(response.data.msg)
                console.log(response.data.mypass)

            }
            else {
                toast.warning("Either wrong password or missmatch !!");
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div id='adminsetting'>
                <h1>Admin can Change his Password here.</h1>

                <article id='passadmin'>
                    
                    <img src={logo1} alt="" />

                    <form class='passform'>
                        <img id='passkey' src={key} alt="key" />

                        <label className='passlabel' htmlFor=""> Old Password</label>
                        <input
                            className='passinput' placeholder='Enter old password' type="text" name='oldpass' onChange={(e) => setoldpass(e.target.value)}
                        />

                        <label className='passlabel' htmlFor=""> Enter New Password</label>
                        <input
                            className='passinput' placeholder='Enter password' type="text" name='newpass' onChange={(e) => setnewpass(e.target.value)}
                        />

                        <label className='passlabel' htmlFor=""> Confirm New Password</label>
                        <input
                            className='passinput' placeholder='Confirm password' type="text" name='confirmpass' onChange={(e) => setconfirmpass(e.target.value)}
                        />

                        <button class='subpass' className='' type='submit' onClick={handleSubmit}>Submit</button>
                    </form>
                </article>

            </div>
        </>
    )
}

export default Setting; 
