const errormessage=(res,stat,mess)=>{
    return res.status(stat).json({
        message:mess
    })
}
export default errormessage