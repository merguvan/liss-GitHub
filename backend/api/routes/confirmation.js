const checkAuth = require("../middlewares/check-auth");
const userSchema = require("../models/user/user");
const router = require("express").Router();

router.get("/:token", checkAuth, async (req, res, next) => {
  const { _id } = req.user;

  try {
    const user = await userSchema.findByIdAndUpdate(
      { _id },
      { isConfirmed: true },
      { new: true }
    );
    return res.status(200).json({
      message: "User has been activated",
      user,
    });
  } catch (error) {}
});

module.exports = router;
