const bcrypt = require("bcrypt");
const userSchema = require("../../models/user/user");
const generateToken = require("../../utils/generateToken");
module.exports.updateUserProfile = async (req, res, next) => {
  const {
    password,
    personName,
    personEmail,
    currentPassword,
    newPassword,
  } = req.body;

  if (currentPassword) {
    const user = await userSchema.findById({ _id: req.user._id });
    bcrypt.compare(currentPassword, user.password, async (err, result) => {
      if (err) {
        const error = new Error("Please, enter current password correctly");
        next(error);
      } else {
        bcrypt.hash(newPassword, 10, async (err, hash) => {
          const user = await userSchema.findByIdAndUpdate(
            { _id: req.user._id },
            { ...req.body, password: hash },
            { new: true }
          );

          return res.status(200).json({
            _id: user._id,
            name: user.personName,
            surname: user.personSurname,
            email: user.personEmail,
            token: generateToken(user._id),
            isConfirmed: user.isConfirmed,
            password: user.password,
          });
        });
      }
    });
  } else {
    const user = await userSchema.findByIdAndUpdate(
      { _id: req.user._id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json({
      _id: user._id,
      name: user.personName,
      surname: user.personSurname,
      email: user.personEmail,
      token: generateToken(user._id),
      isConfirmed: user.isConfirmed,
    });
  }
};
module.exports.deleteUserProfile = async (req, res, next) => {
  console.log(req.user._id);
  try {
    const user = await userSchema.findOneAndDelete({ _id: req.user._id });

    return res.status(200).json({
      meesage: "User has been deleted",
      user,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
