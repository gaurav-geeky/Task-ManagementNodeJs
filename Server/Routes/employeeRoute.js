const express = require("express");
const route = express.Router();

const EmpController = require("../Controller/employeeController");

route.post("/login", EmpController.empLogin);

module.exports = route; 

