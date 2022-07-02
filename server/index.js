const express = require('express')
require('dotenv').config()
const db = require('./config/db.js')
const AuthRoute = require('./src/routes/AuthRoute')

const app = express()
const port = process.env.PORT

//connect DB
db.connect()

//middleware
app.use(express.urlencoded())
app.use(express.json())

//routes
app.use('/api/auth', AuthRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))