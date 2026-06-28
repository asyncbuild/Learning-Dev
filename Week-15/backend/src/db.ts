import {model, Model,Schema} from "mongoose"

const UserModel = new Schema({
    username: {type:String,unique:true, required:true},
    password: {type:String, required:true}
})

export const UserModel = model("user",UserModel)

