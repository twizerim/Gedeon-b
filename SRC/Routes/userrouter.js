
import express from "express"
import usercontroller from "../Controller/usercontroller"

const router=express.Router()
router.post("/",usercontroller.signup)
export default router