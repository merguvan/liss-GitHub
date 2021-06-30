const {addUserPersonalInfo,updateUserPersonalInfo} =require('../controllers/userPersonalInfo')
const router=require('express').Router()

router
    .route('/')
            .post(addUserPersonalInfo)

router
        .route('/:id')
        .patch(updateUserPersonalInfo)

module.exports=router