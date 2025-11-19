import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "../css/assigntask.css"

const Report = () => {
    const [mydata, setmydata] = useState([]);

    const loadData = async () => {
        try {
            let api = `${import.meta.env.VITE_BACK_URL}/admin/taskreportdisplay`;
            const response = await axios.get(api);
            console.log(response.data);
            setmydata(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    const taskReassign = async (tid) => {
        try {
            let api = `${import.meta.env.VITE_BACK_URL}/admin/taskreassign/?id=${tid}`;
            const response = await axios.get(api);
            alert(response.data.msg);
        } catch (error) {
            console.log(error);
        }
        loadData(); 
    }


    let sno = 0;
    const ans = mydata.map((key) => {
        sno++;
        return (
            <>
                <tr>
                    <td> {sno} </td>
                    <td>{key.task}</td>
                    <td>{key.duration}</td>
                    <td>{key.priority}</td>
                    <td>{key.completionday}</td>
                    <td> {key.empid.name} </td>
                    <td> {key.empid.email} </td>
                    <td> {key.empid.designation} </td>
                    <td>{key.taskstatus}</td>
                    <td>
                        <Button variant="danger" onClick={() => { taskReassign(key._id) }}> Re-Assign</Button>
                    </td>
                </tr>
            </>
        )
        // }
    })



    return (
        <>
             <div >

                <h1 > Report of employee tasks </h1>

                <div className="table-responsive-wrapper">
                    <Table className="table-custom" striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task Name</th>
                                <th>Duration </th>
                                <th>Priority Level</th>
                                <th>Time taken </th>
                                <th> Emp Name</th>
                                <th> Emp Email</th>
                                <th> Emp Designation</th>
                                <th> task status</th>
                                <th> Re-Assign Task?</th>
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

export default Report; 
