require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const {userRoute} = require('./routes/user')
const {courseRoute} = require('./routes/course')
const {adminRoute} = require('./routes/admin')
const app = express()
const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_CONNECTION_URL


app.use('/api/v1/user',userRoute)
app.use('/api/v1/admin',adminRoute)
app.use('/api/v1/course',courseRoute)

async function main() {
    await mongoose.connect(MONGODB_URL)
    app.listen(3000,()=>{
        console.log("Server running on port 3000");
    })
}
main()