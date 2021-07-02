const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken')
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
module.exports.authorizeUser=async(req,res)=>{
    const {personEmail,password}=req.body
    try {
        const user=await userSchema.find({personEmail:personEmail})
     
        if(user.length<0){
            return res.status(400).json({
                message:'Either passwor or email is wrong'
            })
            
        }else{
         bcrypt.compare(password,user[0].password,(err,respond)=>{
                if(err){
                    return res
                    .status(401)
                    .json({
                        message:'Either passwor or email is wrong' 
                    })
                
                }
                if(respond){
                   const token= jwt.sign({
                    personEmail:user[0].personEmail,
                        userId:user[0]._id
                    },
                    process.env.JWT_KEY||'secret',
                    {
                        expiresIn: "3hr"
                    }
                    )
                    return res
                    .status(200)
                            .json({
                message:'Authorized user',
                data:user[0],
                token
                
                            })
                }

        })

    }
        
    } catch (error) {
        return res.status(500).json({
            message:"Either passwor or email is wrong "
        })
    }

}
module.exports.getSingleUser=(req,res)=>{

}
module.exports.deleteSingleUSer=(req,res)=>{
    
}