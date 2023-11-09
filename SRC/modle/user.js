
import mongoose from "mongoose";

const userschemas=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    identification:{
        type:Number,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    confrimpassword:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    signedAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const User = mongoose.model("User",userschemas)
export default User