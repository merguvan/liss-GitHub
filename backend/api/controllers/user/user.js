const bcrypt=require('bcrypt')
const userSchema=require('../../models/user/user')


module.exports.addUser=async(req,res)=>{
 
    if(req.body.gdprConsent){

    try {
        const user= await userSchema.findOne({personEmail:req.body.personEmail})

        if(user){
            return res.status(404).json({
                message:'This email has already been taken'
            })
        }else{


    bcrypt.hash(req.body.password,10, async function (err, hash) {
        if(err) return res.staus(404).json(err)
 
        try {
         const newUser=await new userSchema({...req.body,password:hash})
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
     });

        }
        
    } catch (error) {

        res.status(404).json({
            message:'Something went wrong'
        })
        
    }

    }else{

        return res.status(500).json({
            message:'Please, accept Gdpr Consent'
        })
    }

   

}
module.exports.authorizeUser=(req,res)=>{

}
module.exports.getSingleUser=(req,res)=>{

}
module.exports.deleteSingleUSer=(req,res)=>{
    
}