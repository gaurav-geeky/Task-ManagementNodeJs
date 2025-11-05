
const EmpModel = require("../Model/empModel");

const empLogin = async (req, res) => {
    console.log(req.body); 
    const { email, password } = req.body;

    const employee = await EmpModel.findOne({ email: email });

    if (!employee) {
        res.status(401).send({ msg: "Invalid Employee Email !" });
    }

    if (employee.password != password) {
        res.status(401).send({ msg: "Invalid Employee Password !" });
    }

    res.status(200).send({ employee: employee, msg: "Employee logged in Succesfully !" });
}

module.exports = {
    empLogin 
}