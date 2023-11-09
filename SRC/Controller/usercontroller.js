
import User from "../modle/user";
import errormessage from "../utils/errormessage";
import bcrypt from "bcrypt"
import successmessage from "../utils/successmessage";

class usercontroller{
    static async signup(req,res){
        const {username,email,identification,password,confrimpassword,role}=req.body

        if(req.body.password !== req.body.confrimpassword){
            return errormessage(res,401,`please password and confrimpassword not match`)
        }else{
            const hashpassword=bcrypt.hashSync(req.body.password,10)

            const user = await User.create({username,email,identification,password:hashpassword,confrimpassword,role})
            if(!user){
                return errormessage(res,401,`you are not signed in please`)
            }
            else{
                return successmessage(res,201,`Account successfuly created`,user)
            }
        }
    }
}
export default usercontroller