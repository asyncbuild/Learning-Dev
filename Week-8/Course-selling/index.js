const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.post('/signup',function(req,res){

})

app.post('/signin',function(req,res){

})

app.post('/buy-course',function(req,res){

})

app.get('/get-courses',function(req,res){

})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})