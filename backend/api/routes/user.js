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
  getAcademicInfo,
  updateAcademicInfo,
  addAcademicInfo,
} = require("../controllers/user/academic");

const {
  getUserReferenceInfo,
  updateUserReferenceInfo,
  addUserReferenceInfo,
} = require("../controllers/user/reference");

const {
  getAffiliationsInfo,
  updateAffiliationsInfo,
  addAffiliationsInfo,
} = require("../controllers/user/affiliations");
const {
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/user/profile");

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
  .route("/academic")
  .get(checkAuth, getAcademicInfo)
  .post(checkAuth, addAcademicInfo)
  .patch(checkAuth, updateAcademicInfo);
router
  .route("/reference")
  .get(checkAuth, getUserReferenceInfo)
  .post(checkAuth, addUserReferenceInfo)
  .patch(checkAuth, updateUserReferenceInfo);

router
  .route("/:id")
  .get(checkAuth, getSingleUser)
  .delete(checkAuth, deleteSingleUSer);

router
  .route("/affiliations")
  .get(checkAuth, getAffiliationsInfo)
  .post(checkAuth, addAffiliationsInfo)
  .patch(checkAuth, updateAffiliationsInfo);

router
  .route("/profile")
  .put(checkAuth, updateUserProfile)
  .delete(checkAuth, deleteUserProfile);
module.exports = router;
