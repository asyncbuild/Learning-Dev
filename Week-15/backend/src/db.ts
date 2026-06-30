import {model,Schema} from "mongoose"
import mongoose from "mongoose"

const User = new Schema({
    username: {type:String,unique:true, required:true},
    password: {type:String, required:true}
})

const Content = new Schema({
    title:{type:String},
    link:{type:String},
    tags:{type: mongoose.Types.ObjectId, ref:'Tag'},
    userId:{type: mongoose.Types.ObjectId, ref:'User', required:true}
})

export const UserModel = model("User",User)
export const ContentModel = model("Content",Content)

