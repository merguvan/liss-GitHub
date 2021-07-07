const {addUserPersonalInfo,updateUserPersonalInfo} =require('../controllers/userPersonalInfo')
const router=require('express').Router()


           

router
        .route('/:id')
        .post(addUserPersonalInfo)
        .patch(updateUserPersonalInfo)


module.exports=router