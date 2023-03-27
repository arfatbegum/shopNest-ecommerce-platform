const User = require("../models/userModel");

// Create a User
const createUser =  async(req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        res.json({
            msg: "User Already Exists",
            success: false,
        })
    }
};

module.exports = {createUser};