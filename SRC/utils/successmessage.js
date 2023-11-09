const successmessage=(res,stat,mess,dat)=>{
    return res.status(stat).json({
        message:mess,
        datas:dat
    })
}
export default successmessage