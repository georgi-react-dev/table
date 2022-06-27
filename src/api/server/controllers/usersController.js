
const User = require('../models/userModel')

const getUsers =  async (req, res) => {
    const users = await User.find()

    console.log("USERS", users);

    res.json({msg:'Get Users', data: users})
}

module.exports = {
    getUsers,
}