const ReferenceSchema = require("../../models/user/reference");

module.exports.addUserReferenceInfo = async (req, res, next) => {
  try {
    const userReference = await ReferenceSchema(req.body);

    await userReference.save();

    return res.status(200).json({
      message: "Reference has been added",
      userReference,
    });
  } catch (error) {
    res.status(404);
    console.log(error);
    const systemError = new Error("Something is wrong");
    next(systemError);
  }
};
module.exports.updateUserReferenceInfo = async (req, res, next) => {
  try {
    await ReferenceSchema.findOneAndUpdate({ user: req.user._id }, req.body);

    return res.status(200).json({
      message: "it has been updated",
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
};
module.exports.getUserReferenceInfo = async (req, res, next) => {
  try {
    const userReference = await ReferenceSchema.find({
      user: req.user._id,
      
    });

    return res.status(200).json({
      userReference,
      
    });
  } catch (error) {
    res.status(404);
    const systemError = new Error("Something went wrong");
    next(systemError);
  }
  
};
