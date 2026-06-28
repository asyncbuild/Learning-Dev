require('dotenv').config()
import express from "express";
import mongoose from "mongoose";
import {UserModel} from "./db.ts"

const MONGODB_URL = process.env.MONGODB_CONNECTION_URL 
console.log(MONGODB_URL)

const app = express()
app.use(express.json())
// Connect to MongoDB
app.post('/api/v1/signin', (req, res) => {
// zod validation
    const {username,password} = req.body
    UserModel.create({username,password})
})

app.post('/api/v1/signup', (req, res) => {

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

