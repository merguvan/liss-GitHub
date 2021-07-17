const Remarks = require("../../models/user/remarks");

module.exports.Remarks = async (req, res, next) => {
  try {
    const remarks = await Remarks(req.body.data);

    await remarks.save();

    return res.status(200).json({
      message: " has been saved",
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
module.exports.updateRemarks = async (req, res, next) => {
  try {
    await Remarks.findOneAndUpdate({ user: req.user._id }, req.body);

    return res.status(200).json({
      message: " has been updated",
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
module.exports.getRemarks = async (req, res, next) => {
  try {
    const remarks = await Remarks.find({ user: req.user._id });

    return res.status(200).json({
        remarks,
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};