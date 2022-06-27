
const Name = require('../models/nameModel')

const getNames =  async (req, res) => {


    try {
        const names = await Name.find()

        console.log("Names", names);
    
        res.status(200).json(names)
    } catch (error) {
        console.log("Names error", error);
    }
   
}

module.exports = {
    getNames,
}