const { Router } = require('express')
const adminRoute = Router()

adminRoute.post('/signup',function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

adminRoute.post('/signin',function(req,res){
    res.json({
        message : "Signin endpoint"
    })
})

adminRoute.post('/course',function(req,res){
    res.json({
        message : "create course endpoint"
    })
})

adminRoute.put('/course',function(req,res){
    res.json({
        message : "change course endpoint"
    })
})

adminRoute.get('/course/bulk',function(req,res){
    res.json({
        message : "show all course endpoint"
    })
})

module.exports = {
    adminRoute:adminRoute
}