const express = require("express")
const { UserModel, TodoModel } = require('./db.js')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "asdf1234"
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://deepeshreddy03:deepesh123@100xdev.tjxvtug.mongodb.net/todos-cohort3")

const app = express()
app.use(express.json())

function auth(res,res,next){

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
        message:"Your signedin successfull"
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
            id:user._id
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

app.post('/todo',auth,function(req,res){

})

app.get('/todos',auth,function(req,res){

})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})