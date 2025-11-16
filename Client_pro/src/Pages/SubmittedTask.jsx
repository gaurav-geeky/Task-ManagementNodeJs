import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table';
import "../css/employee.css"

const SubmittedTask = () => {
    const [mydata, setmydata] = useState([]);

    const loadData = async () => {
        try {
            let api = `${import.meta.env.VITE_BACK_URL}/employee/showtask/?id=${localStorage.getItem("empid")}`;
            const response = await axios.get(api);
            console.log(response.data);
            setmydata(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    let sno = 0;
    const ans = mydata.map((key) => {
        sno++;
        if (key.submitstatus) {
            return (
                <>
                    <tr>
                        <td> {sno} </td>
                        <td>{key.task}</td>
                        <td>{key.duration}</td>
                        <td>{key.priority}</td>
                    </tr> 
                </>
            )
        }
    })


    return (
        <>
            <div>

                <h1> Tasks You have submitted </h1>
                <hr />

                <div className="custom-table-wrapper">
                    <Table className="custom-table" striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task Detail</th>
                                <th>Duration in Days</th>
                                <th>Priority Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ans}
                        </tbody>
                    </Table>
                </div>


            </div>
        </>
    )
}

export default SubmittedTask; 
