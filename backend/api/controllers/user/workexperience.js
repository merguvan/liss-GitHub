const WorkexperienceSchema = require("../../models/user/workexperience");

module.exports.addUserWorkexperienceInfo = async (req, res, next) => {
  try {
    const userWorkexperience = await WorkexperienceSchema(req.body);

    await userWorkexperience.save();

    return res.status(200).json({
      message: "Workexperience has been added",
    });
  } catch (error) {
    res.status(404);
    console.log(error);
    const systemError = new Error("Something is wrong");
    next(systemError);
  }
};
module.exports.updateUserWorkexperienceInfo = async (req, res, next) => {
  try {
    await WorkexperienceSchema.findOneAndUpdate(
      { user: req.user._id },
      req.body
    );

    return res.status(200).json({
      message: "it has been updated",
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
module.exports.getUserWorkexperienceInfo = async (req, res, next) => {
  try {
    const userWorkexperience = await WorkexperienceSchema.find({
      user: req.user._id,
    });

    return res.status(200).json({
      userWorkexperience,
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
