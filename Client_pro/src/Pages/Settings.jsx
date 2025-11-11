import React, { useState } from 'react';
import axios from 'axios';
import "../css/employee.css"
import key from "../assets/key.svg"

const Settings = () => {
    const [oldpass, setoldpass] = useState("")
    const [newpass, setnewpass] = useState("")
    const [confirmpass, setconfirmpass] = useState("")

    const empPass = localStorage.getItem("empPass");
    const empId = localStorage.getItem("empid");

    let handleSubmit = async (e) => {

        e.preventDefault();
        try {
            if (oldpass === empPass && newpass === confirmpass) {

                let api = `${import.meta.env.VITE_BACK_URL}/employee/changepass`;
                const response = await axios.post(api, { empId, newpass, confirmpass });
                alert(response.data.msg) 
                console.log(response.data.mypass)

            }
            else {
                alert("pass wrong h ..");
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div id='empsetting'>
                <h1>Need to Change Your Password ?</h1>

                <article>


                    <form id='passform'>
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

                        <button id='subpass' className='' type='submit' onClick={handleSubmit}>Submit</button>
                    </form>
                </article>

            </div>
        </>
    )
}

export default Settings
