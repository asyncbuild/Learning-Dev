const express = require('express')
const jwt = require('jsonwebtoken')
const {userRoute} = require('./routes/user')
const {courseRoute} = require('./routes/course')
const {adminRoute} = require('./routes/admin')
const app = express()

app.use('/api/v1/user',userRoute)
app.use('/api/v1/admin',adminRoute)
app.use('/api/v1/course',courseRoute)

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})
