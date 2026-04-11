const express = require('express')
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())
let users = []

const JWT_SECRET = "ABCDE"

function auth(req,res,next){
    const token = req.headers.token;
    if(!token){
            res.status(400).send({
                msg:"Token not found"
            })
        }
    if(token){
        const user = jwt.verify(token,JWT_SECRET);
        req.username = user.username;
        next();
    } else{
        req.status(400).send({
            msg:"Error encountered"
        })
    }
}

app.post('/signup',function (req,res){
    const username = req.body.username
    const password = req.body.password
    users.push(
        {
            username:username,
            password:password
        }
    )
    res.status(202).send({
        msg:"User signedup successfully"
    })
})

app.post('/signin',function (req,res){
    const getUsername = req.body.username
    const getPassword = req.body.password
    const user = users.find(u => u.username === getUsername && u.password === getPassword);
    if(user){
        const token = jwt.sign({
            username:user.username
        },JWT_SECRET)
        user.token = token;
        res.send({
            token
        })
    }else {
        res.status(404).send({
            msg:"Invalid user"
        })
    }
})

app.get('/me',auth,function(req,res){
    const getUser = req.username;
    const user = users.find(u=>u.username === getUser)
    if(user){
        res.json({
            username:user.username,
            password:user.password
        })
    } else {
        res.send({
            msg:"error"
        })
    }
})

app.listen(3000,()=>{
    console.log("Server running on 3000");
    
})