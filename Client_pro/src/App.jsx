
import { Route, Routes } from 'react-router-dom'

import Form from './Pages/Form'
import Layout from './Pages/Layout'
import AdminDashBoard from './Admin/AdminDashBoard'
import CreateUser from './Admin/CreateUser'
import AssignTask from './Admin/AssignTask'

import EmpDashboard from './Pages/EmpDashboard'



function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />} >

          <Route index element={< Form />} />

        </Route>
      </Routes>


      <Routes>
        <Route path="admin-dashboard" element={<AdminDashBoard />}>

          <Route path='create-user' element={<CreateUser />} />
          <Route path='assign-task' element={<AssignTask />} />

        </Route>
      </Routes >


      <Routes>
        <Route path="emp-dashboard" element={<EmpDashboard />}>

        </Route>
      </Routes >



    </>
  )
}

export default App;



