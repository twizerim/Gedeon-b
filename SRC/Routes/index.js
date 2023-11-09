
import  Express  from "express";
 import messagerouter from "./messagerouter" 

 
const router=Express.Router()
router.use("/message",messagerouter)
export default router