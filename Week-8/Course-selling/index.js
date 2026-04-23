const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.post('/user/signup',function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

app.post('/user/signin',function(req,res){
    res.json({
        message : "Signin endpoint"
    })
})

app.post('/user/purchases',function(req,res){
    res.json({
        message : "User purchases endpoint"
    })
})

app.get('/course/purchase',function(req,res){
    res.json({
        message : "Course purchase endpoint"
    })
})

app.get('/courses',function(req,res){
    res.json({
        message : "Courses endpoint"
    })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})
