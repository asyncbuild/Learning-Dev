import {model, Model,Schema} from "mongoose"
import mongoose from "mongoose"

const User = new Schema({
    username: {type:String,unique:true, required:true},
    password: {type:String, required:true}
})

export const UserModel = mongoose.model("user",User)

