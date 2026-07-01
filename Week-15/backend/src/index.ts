import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { ContentModel, UserModel } from "./db.js";
import { userMiddleware } from './middleware.js';

const MONGODB_URL = 'mongodb+srv://deepeshreddy03:deepesh123@100xdev.tjxvtug.mongodb.net/brainly'
console.log(MONGODB_URL)
mongoose.connect(MONGODB_URL)

const JWT_PASSWORD = "abcd"
const app = express()
app.use(express.json())
// Connect to MongoDB
app.post('/api/v1/signup', async (req, res) => {
// zod validation
    const {username,password} = req.body
    await UserModel.create({
        username: username,
        password: password
    })
    res.json({
        message:"User signed up"
    })
})

app.post('/api/v1/signin', async (req, res) => {
    const {username,password} = req.body
    const existingUser = await UserModel.findOne({
        username : username,
        password : password
    })
    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id,
        },JWT_PASSWORD)
        res.json({
            token,
        })
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }

})

app.post('/api/v1/content', userMiddleware, async (req, res) => {
    const {title,link} = req.body
    await ContentModel.create({
        title,
        link,
        //@ts-ignore
        userId: req.userId,
        //tags:[]
    })
    return res.json({
        message:"Content added"
    })
})

app.get('/api/v1/content', userMiddleware,async (req, res) => {
    //@ts-ignore
    const userId = req.userId
    const content = await ContentModel.find({
        userId:userId
    }).populate("userId","username")

    return res.json({
        content
    })

})

app.delete('/api/v1/content', (req, res) => {
    const {contentId} = req.body
    ContentModel.deleteOne({
        contentId,
        //@ts-ignore
        userId:req.userId
    })
})

app.post('/api/v1/brain/share', (req, res) => {

})

app.get('/api/v1/brain/:shareLink', (req, res) => {

})

app.listen(3000,()=>{
    console.log('app listening on port 3000');    
})