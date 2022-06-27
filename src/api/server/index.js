const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
var cors = require('cors')
const connectDB = require('./config/db')
const Name = require('./models/nameModel')
connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/names', require('./routes/namesRoutes'))


const name = new Name({name: 'Georgi'})
name.save().then(() => console.log('Name saved'));

app.listen(port, () => console.log(`SERVER START on port ${port}`))