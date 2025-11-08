

const AdminModel = require('../Model/adminModel');
const UserPassword = require('../middleware/randomPassword');
// mailer.js

const emailSend = require('../middleware/empMail');
const EmpModel = require('../Model/empModel');
const empModel = require('../Model/empModel');
const taskModel = require('../Model/taskModel');


const adminLogin = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
        const Admin = await AdminModel.findOne({ email: email });

        if (!Admin) {
            res.status(401).send({ msg: "Invalid Email.." });
        }

        if (Admin.password != password) {
            res.status(401).send({ msg: "Invalid Password.." });
        }

        res.status(200).send({ Admin: Admin, msg: "Login Succesfull..." });

    } catch (error) {
        console.log(error);
    }
}


const userCreate = async (req, res) => {
    const { empname, empmail, designation } = req.body;
    const emppass = UserPassword.myPassword()  // random password 

    console.log("pass generated : ", UserPassword.myPassword());
    res.send("okkk pass");

    emailSend.userNodeMail(empname, empmail, emppass); // sending mail

    // Now, usercreate after send user his details 
    const Employee = await EmpModel.create({
        name: empname,
        email: empmail,
        designation: designation,
        password: emppass,
    })
    console.log('empname : ', empname, 'empmail : ', empmail, 'emppass : ', emppass);

    res.status(201).send("user Successfully crreated !!");
}


const empDisplay = async (req, res) => {
    const employee = await empModel.find();
    res.status(200).send(employee);
}


const taskSave = async (req, res) => {
    console.log(req.body)
    const { id, task, duration, priority } = req.body;
    const emptask = await taskModel.create({
        task: task,
        duration: duration,
        priority: priority,
        empid: id
    })
    console.log("total task : ", task)
    res.status(201).send({ msg: "Task Successfully assigned ..." });
}


const dashboardStats = async (req, res) => {
    try {
        const totalUsers = await empModel.countDocuments();

        const totalTasks = await taskModel.countDocuments();
        const completedTasks = await taskModel.countDocuments({ submitstatus: true });
        const partiallyCompleted = await taskModel.countDocuments({ taskstatus: "Partially Completed" });
        const pendingTasks = await taskModel.countDocuments({ submitstatus: false });

        res.status(200).send({
            totalUsers,
            totalTasks,
            completedTasks,
            partiallyCompleted,
            pendingTasks
        });

    } 
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

module.exports = {
    adminLogin,
    userCreate,
    empDisplay,
    taskSave,
    dashboardStats,
}

