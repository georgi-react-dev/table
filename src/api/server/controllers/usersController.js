
const User = require('../models/userModel')

const getUsers =  async (req, res) => {
    const users = await User.find()

    console.log("USERS", users);

    res.json({msg:'Get Users', data: users})
}
const getUser =  async (req, res) => {

    console.log("REQ", req.params);
    
    const user = await User.findOne({id:req.params.id})

     console.log("USERRRRRRRR", user);

    res.json({msg:'Get User', data: user})
}

const saveUser =  async (req, res) => {

    console.log("REQ", req.body.user);
    
    const users = await User.create(req.body.user)

    console.log("USERS", users);

    res.json({msg:'Get Users', data: users})
}

module.exports = {
    getUsers,
    getUser,
    saveUser,
}