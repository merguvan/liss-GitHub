const Academic = require("../../models/user/academic");

module.exports.addRemarks = async (req, res, next) => {
  try {
    const academic = await Academic(req.body);

    await academic.save();

    return res.status(200).json({
      message: "User has been added",
      academic,
    });
  } catch (error) {
    res.status(404);
    console.log(error);
    const systemError = new Error("Something is wrong");
    next(systemError);
  }
};
module.exports.updateRemarks = async (req, res, next) => {
  try {
    await Academic.findOneAndUpdate({ user: req.user._id }, req.body);

    return res.status(200).json({
      message: "it has been updated",
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
module.exports.getRemarks = async (req, res, next) => {
  try {
    const academic = await Academic.find({
      user: req.user._id,
    });

    return res.status(200).json({
      academic,
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
