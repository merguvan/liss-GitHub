const AchievementsSchema = require("../../models/user/achievements");

module.exports.getAchievementsInfo = async (req, res, next) => {
  try {
    const achievementsInfo = await AchievementsSchema.find({
      user: req.user._id,
    });

    return res.status(200).json({
      achievementsInfo,
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};

module.exports.addAchievementsInfo = async (req, res, next) => {
  try {
    const achievements = await AchievementsSchema(req.body);

    await achievements.save();
    console.log("hata 2");
    return res.status(200).json({
      message: "User's achivements has been added",
      achievements,
    });
  } catch (error) {
    res.status(404);
    console.log("hata3");
    next(error);
  }
};
module.exports.updateAchievementsInfo = async (req, res, next) => {
  try {
    await AchievementsSchema.findOneAndUpdate({ user: req.user._id }, req.body);
    console.log("hata");
    return res.status(200).json({
      message: "Achivements has been updated",
    });
  } catch (error) {
    console.log(error);
    res.status(404);
    next(error);
  }
};
