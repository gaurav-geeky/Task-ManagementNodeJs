
const express = require('express'); 
const route = express.Router(); 
const AdminController = require('../Controller/adminController');  


route.get('/home', (req, res) => {
    res.send("Home page Node, Task management Project 1")
})
route.post("/login", AdminController.adminLogin); 



module.exports = route;

