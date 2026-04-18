require('dotenv').config()
const express = require("express")
const { UserModel, TodoModel } = require('./db.js')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET_KEY
const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_CONNECTION_URL
mongoose.connect(MONGODB_URL)

const app = express()
app.use(express.json())

function auth(req,res,next){
    const token = req.headers.token;
    
    const decodedData = jwt.verify(token,JWT_SECRET)
    
    if(decodedData){
        req.userId= decodedData.id;
        next();
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
}

app.post('/signup', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name:name
    })

    res.json({
        message:"Signedin successfull"
    })
})

app.post('/signin', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token = jwt.sign({
            id:user._id.toString()
        },JWT_SECRET)

        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message : "Unauthorised"
        })
    }
})

app.post('/todo',auth,async function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title:title,
        userId:userId,
        done:done
    })
    res.json({
        userId:userId
    })
})

app.get('/todos',auth,async function(req,res){
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId : userId
    })
    console.log(todos);
    res.json({
        todos:todos
    })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})