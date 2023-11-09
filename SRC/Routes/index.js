
import  Express  from "express";
 import messagerouter from "./messagerouter"
 import userrouter from "./userrouter" 

 
const router=Express.Router()
router.use("/message",messagerouter)
router.use("/user",userrouter)
export default router