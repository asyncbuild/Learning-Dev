const { Router } = require('express')
const adminRoute = Router()
const { adminModel, courseModel } = require('../db')
const jwt = require('jsonwebtoken')
const { adminMiddleware } = require('../middlewares/admin.js')
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_PASSWORD


adminRoute.post('/signup',async function(req,res){
    const { email, password, firstName, lastName } = req.body;
        // add zod validations
        // Todo: hash the password so plaintext is not stored in the db
        
        try {
            await adminModel.create({
                email:email,
                password:password,
                firstName:firstName,
                lastName:lastName
            })
            res.json({
            message : "Admin Signup succeeded"
        })
        } catch (error) {
            res.status(400).json({
                message : "Admin Signup failed"
            })
        }
})

adminRoute.post('/signin', async function(req,res){
    const { email, password } = req.body;
    try {
        const admin = await adminModel.findOne({
            email:email,
            password:password
        })
    
        if (admin) {
            const token = jwt.sign({
                id:admin._id
            },JWT_ADMIN_SECRET)
    
            // if we use cookies, here use should implement
            
            res.json({
                token:token
            })
        }else{
            res.status(400).json({
            message : "Admin Invalid credentials"
        })
        }
    } catch (error) {
        res.status(400).json({
            message : "Admin Signin failed"
        })
    }
})

adminRoute.post('/course',adminMiddleware,async function(req,res){
    const adminId = req.adminId;

    try {
        const { title, description, imageurl, price } = req.body;
    
        const course = await courseModel.create({
            title, description, imageUrl, price, creatorId: adminId
        })
    } catch (error) {
        res.status(400).json({
            message : "error while creating a course"
        })
    }
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