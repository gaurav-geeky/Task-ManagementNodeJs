
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyparser = require('body-parser')
const cors = require('cors');
const AdminRoute = require('./Routes/adminRoute'); 

const EmpRoute = require("./Routes/employeeRoute"); 


mongoose.connect(process.env.DBCONN).then(() => {
    console.log("db connected ho gaya ok ...");
});

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// use of CORS middlewarre
app.use(cors());


app.use("/admin", AdminRoute);
app.use("/employee", EmpRoute); 


const port = process.env.PORT || 9999
app.listen(port, () => {
    console.log(`server is running at ${port} port !`); 
});

