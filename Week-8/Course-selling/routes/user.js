const { Router } = require('express')
const userRoute = Router()
const { userModel } = require('../db')

userRoute.post('/signup',function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

userRoute.post('/signin',function(req,res){
    res.json({
        message : "Signin endpoint"
    })
})

userRoute.post('/purchases',function(req,res){
    res.json({
        message : "User purchases endpoint"
    })
})

module.exports = {
    userRoute:userRoute
}