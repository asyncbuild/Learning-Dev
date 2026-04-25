const { Router } = require('express')
const userRoute = Router()
const { userModel, purchaseModel, courseModel } = require('../db')
const { userMiddleware } = require('../middlewares/user.js')
const jwt = require('jsonwebtoken')
const JWT_USER_SECRET = process.env.JWT_USER_PASSWORD

userRoute.post('/signup', async function(req,res){
    const { email, password, firstName, lastName } = req.body;
    // add zod validations
    // Todo: hash the password so plaintext is not stored in the db
    
    try {
        await userModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })
        res.json({
        message : "Signup succeeded"
    })
    } catch (error) {
        res.status(400).json({
            message : "Signup failed"
        })
    }
    
})

userRoute.post('/signin',async function(req,res){
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({
            email:email,
            password:password
        })
    
        if (user) {
            const token = jwt.sign({
                id:user._id
            },JWT_USER_SECRET)
    
            // if we use cookies, here use should implement
            
            res.json({
                token:token
            })
        }else{
            res.status(400).json({
            message : "Invalid credentials"
        })
        }
    } catch (error) {
        res.status(400).json({
            message : "Signin failed"
        })
    }

    
})

userRoute.post('/purchases',userMiddleware,async function(req,res){
    const userId = req.userId;
    try {
        const purchasedCourses = await purchaseModel.find({
            userId:userId
        })
        const coursesData = await courseModel.find({
            _id : { $in : purchasedCourses.map(x => x.courseId)}
        })
        res.json({
            message : "User purchases endpoint",
            purchasedCourses:purchasedCourses,
            coursesData:coursesData
        })
    } catch (error) {
        res.status(400).json({
            message : "Something faild"
        })
    }
})

module.exports = {
    userRoute:userRoute
}