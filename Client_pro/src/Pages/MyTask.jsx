import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "../css/employee.css"


const MyTask = () => {
  const [mydata, setmydata] = useState([]);
  const [show, setShow] = useState(false);

  const [taskstatus, setTaskStatus] = useState("");
  const [taskduration, setTaskDuration] = useState("");
  const [taskId, setTaskId] = useState("");


  const [search, setSearch] = useState("");


  const handleClose = () => setShow(false);   // not show form pop up . inital false

  // const handleShow = (tid) => {
  //   setTaskId(tid);
  //   setShow(true);
  // };
  // only to show pop up 

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
  }, [])



  const taskReportSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${import.meta.env.VITE_BACK_URL}/employee/taskreport`;
      const response = await axios.put(api, { taskstatus, taskduration, taskId });
      console.log(response.data.msg);
    }
    catch (error) {
      console.log(error);
    }
  }


  const filteredData = mydata.filter((each) =>
    each.task.toLowerCase().includes(search.toLowerCase())
  );

  let sno = 0;
  const ans = filteredData.map((key) => {
    sno++;
    // if (!key.submitstatus) {
    return (
      <>
        <tr>
          <td> {sno} </td>
          <td>{key.task}</td>
          <td>{key.duration}</td>
          <td>{key.priority}</td>
          {/* <td>{assign task handleshow button}</td> */}
        </tr>
      </>
    )
    // }
  })



  return (
    <>
      <h1>My Task details</h1>
      <hr />

      {/*                            Search Your data here     */}

      <div id='searchtaskbar'>
        <span> Search your task here..</span>
        <input
        
          id='searchtask'
          type="text"
          placeholder="🔍 Enter task name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button id='searchbtn'>Search it</button>
      </div>


      <hr />
      {/*                     here get emp data in table css dashboard  */}

      <div className="custom-table-wrapper">
        <Table className="custom-table" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Detail</th>
              <th>Duration in Days</th>
              <th>Priority Level</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </Table>
      </div>

      {/*                     here assign task to each emp  */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Task Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Select Task Status</Form.Label>
              <Form.Select aria-label="Default select example" value={taskstatus} onChange={(e) => setTaskStatus(e.target.value)} >
                <option>select task status</option>
                <option value="FullyCompleted">Fully Completed</option>
                <option value="PartialCompleted">Partial Completed</option>
                <option value="NoCompleted">No Completed</option>
              </Form.Select>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Completion Days</Form.Label>
              <Form.Control type="text" value={taskduration} onChange={(e) => setTaskDuration(e.target.value)} />
            </Form.Group>


            <Button variant="primary" type="submit" onClick={taskReportSubmit}>
              Submit Report
            </Button>

          </Form>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default MyTask;