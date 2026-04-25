const { Router } = require('express')
const courseRoute = Router()
const { courseModel, purchaseModel } = require('../db')
const { userMiddleware } = require('../middlewares/user.js')

courseRoute.get('/purchase',userMiddleware,async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    // should check that the user has actually paid the price
    try {
        await purchaseModel.create({
            userId,
            courseId
        })
    
        res.json({
            message : "Course purchase successful"
        })
    } catch (error) {
        res.status(404).json({
            message : "error in purchasing course"
        })
    }
})

courseRoute.get('/preview',async function(req,res){
    const courses = await courseModel.find({})
    res.json({
        message : "Courses endpoint",
        courses:courses
    })
})

module.exports = {
    courseRoute:courseRoute
}