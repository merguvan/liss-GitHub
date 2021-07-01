const userPersonalInfoSchema=require('../models/userPersonalInfo')

module.exports.addUserPersonalInfo=async(req,res,next)=>{

    try {
        const userPersonalInfo= await userPersonalInfoSchema(req.body)
       
        await userPersonalInfo.save()
        return res.status(200).json({
            message:'User has been added'
        })
    } catch (error) {
        return res.status(500).json({
            message:'Something went wrong'
        })     
    }


}
module.exports.updateUserPersonalInfo=async(req,res)=>{
    try {
        await userPersonalInfoSchema.findByIdAndUpdate(req.body)

        return res.status(200).json({
            message:'it has been updated'
        })

    } catch (error) {
        
        return res.status(404).json({
            message:'Something was wrong'
        })
    }
}