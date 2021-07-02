const {addUser,authorizeUser,getSingleUser,deleteSingleUSer}=require('../controllers/user/user')
const {addUserPersonalInfo,updateUserPersonalInfo}=require('../controllers/user/userPersonalInfo')
const router=require('express').Router()

router
    .route('/signup')
            .post(addUser)

router
        .route('/login')
        .post(authorizeUser)

router
        .route('/userpersonalinfo/:id')
        .post(addUserPersonalInfo)
        .patch(updateUserPersonalInfo)
   
        
router
        .route('/:id')
        .get(getSingleUser)
        .delete(deleteSingleUSer)
 

module.exports=router