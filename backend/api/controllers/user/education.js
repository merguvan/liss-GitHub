const Education = require("../../models/user/education");

module.exports.addEducation = async (req, res, next) => {
  try {
    const education = await Education(req.body);

    await education.save();

    return res.status(200).json({
      message: "User has been added",
      education,
    });
  } catch (error) {
    res.status(404);
    console.log(error);
    const systemError = new Error("Something is wrong");
    next(systemError);
  }
};
module.exports.updateEducation = async (req, res, next) => {
  try {
    await Education.findOneAndUpdate({ user: req.user._id }, req.body);

    return res.status(200).json({
      message: "it has been updated",
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
module.exports.getEducation = async (req, res, next) => {
  try {
    const education = await Education.find({
      user: req.user._id,
    });

    return res.status(200).json({
        education,
      });
    } catch (error) {
      res.status(404);
      const systemError = new Error("Something went wrong");
      next(systemError);
    }
  };
  