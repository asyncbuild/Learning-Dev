const { Router } = require('express')
const courseRoute = Router()

courseRoute.get('/purchase',function(req,res){
    res.json({
        message : "Course purchase endpoint"
    })
})

courseRoute.get('/preview',function(req,res){
    res.json({
        message : "Courses endpoint"
    })
})

module.exports = {
    courseRoute:courseRoute
}