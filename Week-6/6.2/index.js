const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://127.0.0.1:5500"
}))

const JWT_SECRET = "123asd"
const users = []

function auth(req,res,next){
    const token = req.headers.token;
    const verifyUser = jwt.verify(token,JWT_SECRET)
    if(verifyUser){
        req.username = verifyUser.username
        next();
    }else{
        res.status(400).json({
            message:"Unauthorised"
        })
    }
}

app.post('/signup',function(req,res){
    const username = req.body.username
    const password = req.body.password

    const existingUser = users.find(u=>u.username === username)
    if(existingUser){
        res.status(409).json({
            message : "User already exist with this username"
        })
    }
    if(!existingUser){
        users.push({
            username:username,
            password:password
        })
        res.status(200).json({
            Message : "Signup successful"
        })
    }
})

app.post('/signin',function(req,res){
    const username = req.body.username
    const password = req.body.password
    
    const currUser = users.find(u=>u.username === username && u.password === password)
    if(currUser){
        const token = jwt.sign({
            username:currUser.username
        },JWT_SECRET)
        currUser.token = token
        res.status(200).json({
            token : token,
            message: "Signin successful"
        })
    }else {
        res.status(403).json({
            message : "Invalid credentials"})
    }
})

app.get('/me',auth,function(req,res){
    res.status(200).json({
        username : req.username,
        message:`Welcome ${req.username}`
    })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})