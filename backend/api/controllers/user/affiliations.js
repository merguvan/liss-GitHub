const Affiliations = require("../../models/user/affiliations");

module.exports.addAffiliationsInfo = async (req, res, next) => {
  try {
    const affiliations = await Affiliations(req.body);

    await affiliations.save();

    return res.status(200).json({
      message: "User affiliations has been added",
      affiliations,
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
module.exports.updateAffiliationsInfo = async (req, res, next) => {
  try {
    await Affiliations.findOneAndUpdate({ user: req.user._id }, req.body);

    return res.status(200).json({
      message: "it has been updated",
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
module.exports.getAffiliationsInfo = async (req, res, next) => {
  try {
    const affiliations = await Affiliations.find({
      user: req.user._id,
    });

    return res.status(200).json({
      affiliations,
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
