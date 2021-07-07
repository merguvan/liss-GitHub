const {
  addUser,
  authorizeUser,
  getSingleUser,
  deleteSingleUSer,
} = require("../controllers/user/user");
const {
  addUserPersonalInfo,
  updateUserPersonalInfo,
  getUserPersonalInfo,
} = require("../controllers/user/personalInfo");
const {
  addAddressInfo,
  getAddressInfo,
  updateAddressInfo,
} = require("../controllers/user/addressInfo");
const checkAuth = require("../middlewares/check-auth");
const router = require("express").Router();

router.route("/signup").post(addUser);

router.route("/login").post(authorizeUser);

router
  .route("/personalinfo/:id")
  .get(checkAuth, getUserPersonalInfo)
  .post(checkAuth, addUserPersonalInfo)
  .patch(checkAuth, updateUserPersonalInfo);

router
  .route("/addressinfo/:id")
  .get(checkAuth, getAddressInfo)
  .post(checkAuth, addAddressInfo)
  .patch(checkAuth, updateAddressInfo);

router
  .route("/:id")
  .get(checkAuth, getSingleUser)
  .delete(checkAuth, deleteSingleUSer);

module.exports = router;
