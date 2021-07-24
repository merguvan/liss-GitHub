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

    return res.status(200).redirect("http://localhost:3000/");
  } catch (error) {
    res.status(404);

    next(error);
  }
});

module.exports = router;
