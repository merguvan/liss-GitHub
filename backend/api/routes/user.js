const {
  registerUser,
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

const {
  getAchievementsInfo,
  updateAchievementsInfo,
  addAchievementsInfo,
} = require("../controllers/user/achievements");

const {
  getAcademicsInfo,
  updateAcademicsInfo,
  addAcademicsInfo,
} = require("../controllers/user/academics");

const {
  getUserReferenceInfo,
  updateUserReferenceInfo,
  addUserReferenceInfo,
} = require("../controllers/user/reference");

const checkAuth = require("../middlewares/check-auth");
const router = require("express").Router();

// router.get('/')
router.route("/signup").post(registerUser);

router.route("/login").post(authorizeUser);

router
  .route("/personalinfo")
  .get(checkAuth, getUserPersonalInfo)
  .post(checkAuth, addUserPersonalInfo)
  .patch(checkAuth, updateUserPersonalInfo);

router
  .route("/addressinfo")
  .get(checkAuth, getAddressInfo)
  .post(checkAuth, addAddressInfo)
  .patch(checkAuth, updateAddressInfo);

router
  .route("/achievements")
  .get(checkAuth, getAchievementsInfo)
  .post(checkAuth, addAchievementsInfo)
  .patch(checkAuth, updateAchievementsInfo);

router
  .route("/academics")
  .get(checkAuth, getAcademicsInfo)
  .post(checkAuth, addAcademicsInfo)
  .patch(checkAuth, updateAcademicsInfo);
router
  .route("/reference")
  .get(checkAuth, getUserReferenceInfo)
  .post(checkAuth, addUserReferenceInfo)
  .patch(checkAuth, updateUserReferenceInfo);

router
  .route("/:id")
  .get(checkAuth, getSingleUser)
  .delete(checkAuth, deleteSingleUSer);

module.exports = router;
