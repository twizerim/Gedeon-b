
import Message from "../modle/message";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";

class MessageController{
    static async createmessage(req,res){
        const message = await Message.create(req.body)
        if(!message){
            return errormessage(res,401,`message not sent`)
        }
        else{
            return successmessage(res,401,`message sent`,message)
        }
    }
}
export default MessageController