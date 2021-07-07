const PersonalInfoSchema = require("../../models/user/personalInfo");

module.exports.addUserPersonalInfo = async (req, res, next) => {
  try {
    const userPersonalInfo = await PersonalInfoSchema(req.body.data);

    await userPersonalInfo.save();

    return res.status(200).json({
      message: "User has been added",
      userPersonalInfo,
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something is wrong");
    next(systemError);
  }
};
module.exports.updateUserPersonalInfo = async (req, res, next) => {
  try {
    await PersonalInfoSchema.find(req.params.id, req.body);
    console.log("hata");
    return res.status(200).json({
      message: "it has been updated",
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
module.exports.getUserPersonalInfo = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const userPersonalInfo = await PersonalInfoSchema.findById(req.params.id);
    return res.status(200).json({
      userPersonalInfo,
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
