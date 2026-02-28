exports.pageNotFound= (req,res,next)=>{
    res.status(404).json({
        msg:'not build yet',
    })
}