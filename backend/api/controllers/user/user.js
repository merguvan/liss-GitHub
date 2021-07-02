const userSchema=require('../../models/user/user')


module.exports.addUser=async(req,res)=>{
    try {
        const newUser=await new userSchema(req.body)
        await newUser.save()
        return res.status(200).json({
            message:'User has been registered',
            data:newUser

        })
    } catch (error) {
        return res.status(200).json({
            message:'USer ccouldn\'t be registered',
            error})
    }

}
module.exports.authorizeUser=(req,res)=>{

}
module.exports.getSingleUser=(req,res)=>{

}
module.exports.deleteSingleUSer=(req,res)=>{
    
}