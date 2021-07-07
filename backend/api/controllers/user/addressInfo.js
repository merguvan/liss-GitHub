const AddressInfoSchema = require("../../models/user/addressInfo");

module.exports.addAddressInfo = async (req, res, next) => {
  try {
    const addressInfo = await AddressInfoSchema(req.body.data);

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
    await AddressInfoSchema.findByIdAndUpdate(req.params.id, req.body);

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
    const userPersonalInfo = await AddressInfoSchema.findById(req.params.id);

    return res.status(200).json({
      userPersonalInfo,
    });
  } catch (error) {
    res.status(404);

    next(error);
  }
};
