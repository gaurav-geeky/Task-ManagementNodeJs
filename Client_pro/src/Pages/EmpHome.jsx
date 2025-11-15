
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "../css/employee.css"

const EmpHome = () => {
    const [mydata, setmydata] = useState([]);

    const loadData = async () => {
        try {
            let api = `${import.meta.env.VITE_BACK_URL}/employee/empdata/?id=${localStorage.getItem("empid")}`;
            const response = await axios.get(api);
            setmydata(response.data) 
            
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadData();
    }, [])

    const compTask = mydata.filter(task => task.taskstatus === "FullyCompleted").length;
    const nocompTask = mydata.filter(task => task.taskstatus === "NoCompleted").length;
    const partialtask = mydata.filter(task => task.taskstatus === "PartialCompleted").length;


    return (
        <>
            <section id='emphome'>

                <h1> Welcome to the Employees home page</h1>
                <p> here, you can know all about your tasks </p>

                <div id='emphomecontainer'>

                    <div className='emphometask'>
                        <p> Total </p>
                        <p> {mydata.length} </p> 
                        <p> 📋 </p>
                    </div>

                    <div className='emphometask'>
                        <p> Completed  </p>
                        <p> {compTask}  </p>
                        <p> ✅</p>
                        
                    </div>
                    <div className='emphometask'>
                        <p> Incomplete </p>
                        <p> {nocompTask} </p> 
                        <p>❎</p>
                    </div>

                    <div className='emphometask'>
                        <p> Partially Completed </p>
                        <p> {partialtask}</p>
                        <p> 🤏 </p>
                    </div>

                </div>



            </section>
        </>
    )
}

export default EmpHome; 
