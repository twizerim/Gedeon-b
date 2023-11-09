
import  Express  from "express";
import MessageController from "../Controller/messageController";



const router=Express.Router()
router.post("/",MessageController.createmessage)
export default router