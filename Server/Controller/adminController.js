
const AdminModel = require('../Model/adminModel');
const UserPassword = require('../middleware/randomPassword'); 

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
    console.log("Body : ", req.body); 
    const { empname, empmail, designation } = req.body; 
    console.log("Random password:", UserPassword.myPassword()); 
    res.send("okkk pass"); 
}

module.exports = {
    adminLogin,
    userCreate, 
}

