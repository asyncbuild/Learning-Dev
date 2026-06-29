import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./db.js";

const MONGODB_URL = 'mongodb+srv://deepeshreddy03:deepesh123@100xdev.tjxvtug.mongodb.net/brainly'
console.log(MONGODB_URL)
mongoose.connect(MONGODB_URL)

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

app.post('/api/v1/signin', (req, res) => {
    
})

app.post('/api/v1/content', (req, res) => {

})

app.get('/api/v1/content', (req, res) => {

})

app.delete('/api/v1/content', (req, res) => {

})

app.post('/api/v1/brain/share', (req, res) => {

})

app.get('/api/v1/brain/:shareLink', (req, res) => {

})

app.listen(3000,()=>{
    console.log('app listening on port 3000');    
})