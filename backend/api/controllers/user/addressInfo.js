const AddressInfoSchema = require("../../models/user/addressInfo");

module.exports.addAddressInfo = async (req, res, next) => {
  try {
    const addressInfo = await AddressInfoSchema(req.body);

    await addressInfo.save();

    return res.status(200).json({
      message: "User address has been saved",
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
module.exports.updateAddressInfo = async (req, res, next) => {
  try {
    await AddressInfoSchema.findOneAndUpdate({ user: req.params.id }, req.body);

    return res.status(200).json({
      message: "Address has been updated",
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
module.exports.getAddressInfo = async (req, res, next) => {
  try {
    const addressInfo = await AddressInfoSchema.find({ user: req.params.id });

    return res.status(200).json({
      addressInfo,
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
