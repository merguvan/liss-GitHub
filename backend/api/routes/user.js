const {addUser,authorizeUser,getSingleUser,deleteSingleUSer}=require('../controllers/user/user')
const {addUserPersonalInfo,updateUserPersonalInfo,getUserPersonalInfo}=require('../controllers/user/userPersonalInfo')
const checkAuth = require('../middlewares/check-auth')
const userPersonalInfo = require('../models/user/userPersonalInfo')
const router=require('express').Router()



router
    .route('/signup')
            .post(addUser)

router
        .route('/login')
        .post(authorizeUser)

router
        .route('/userpersonalinfo/:id')
        .get(checkAuth,getUserPersonalInfo)
        .post(checkAuth, addUserPersonalInfo)
        .patch(checkAuth, updateUserPersonalInfo)
   
        
router
        .route('/:id')
        .get(checkAuth,getSingleUser)
        .delete(checkAuth,deleteSingleUSer)
 

module.exports=router