const {addUserPersonalInfo} =require('../controllers/userPersonalInfo')
const router=require('express').Router()


router
    .route('/')
            .post(addUserPersonalInfo)

            module.exports=router