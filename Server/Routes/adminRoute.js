

const express = require('express'); 
const route = express.Router(); 
const AdminController = require('../Controller/adminController');  

route.post("/login", AdminController.adminLogin); 
route.post("/usercreate", AdminController.userCreate); 

route.get("/empdisplay", AdminController.empDisplay); 
route.post("/tasksave", AdminController.taskSave); 

route.get("/dashboard-stats", AdminController.dashboardStats);
 

module.exports = route;



