const userPersonalInfoSchema = require("../../models/user/userPersonalInfo");

module.exports.addUserPersonalInfo = async (req, res, next) => {
  console.log(req.body);
  try {
    const userPersonalInfo = await userPersonalInfoSchema(req.body.data);

    await userPersonalInfo.save();

    return res.status(200).json({
      message: "User has been added",
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Either password or email is wrong");
    next(systemError);
  }
};
module.exports.updateUserPersonalInfo = async (req, res, next) => {
  try {
    await userPersonalInfoSchema.findByIdAndUpdate(req.body);

    return res.status(200).json({
      message: "it has been updated",
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Either password or email is wrong");
    next(systemError);
  }
};
module.exports.getUserPersonalInfo = async (req, res, next) => {
  try {
    const userPersonalInfo = await userPersonalInfoSchema.findById(
      req.params.id
    );

    return res.status(200).json({
      userPersonalInfo,
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Either password or email is wrong");
    next(systemError);
  }
};
