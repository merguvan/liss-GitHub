const ReferencesInfoSchema = require("../../models/user/references");

module.exports.referencesInfo = async (req, res, next) => {
  try {
    const references = await ReferencesInfoSchema(req.body.data);

    await references.save();

    return res.status(200).json({
      message: " has been saved",
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
module.exports.updateReferences = async (req, res, next) => {
  try {
    await ReferencesInfoSchema.findOneAndUpdate({ user: req.user._id }, req.body);

    return res.status(200).json({
      message: " has been updated",
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
module.exports.getReferences = async (req, res, next) => {
  try {
    const references = await ReferencesInfoSchema.find({ user: req.user._id });

    return res.status(200).json({
      references,
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
