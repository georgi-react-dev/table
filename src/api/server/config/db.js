const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI_CLUSTER)
        console.log(`CONNECTED TO ${conn}`)
    } catch (error) {
        console.log(`CONNECTION ERROR ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB