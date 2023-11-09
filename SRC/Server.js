

import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import router from "./Routes"


dotenv.config()
const image=express()
image.use(bodyParser.json())
image.use("/pi/v1",router)

const port=process.env.PORT
const db=process.env.DATABASE

image.listen(port,()=>{
    console.log(`port running on ${port}`)
})

mongoose.connect(db).then(()=>{
    console.log(`database successfuly connected!!!!!`)
}).catch((err)=>{
    console.log(`it is error ${err}`)
})
export default image
