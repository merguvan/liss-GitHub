const bcrypt = require("bcrypt");
const userSchema = require("../../models/user/user");
const generateToken = require("../../utils/generateToken");
module.exports.addUser = async (req, res, next) => {
  if (req.body.gdprConsent) {
    try {
      const user = await userSchema.findOne({
        personEmail: req.body.personEmail,
      });

      if (user) {
        res.status(404);
        const error = new Error("This email already in use");
        next(error);
      } else {
        bcrypt.hash(req.body.password, 10, async function (err, hash) {
          if (err) return res.staus(404).json(err);

          try {
            const newUser = await new userSchema({
              ...req.body,
              password: hash,
            });
            await newUser.save();
            return res.status(200).json({
              message: "User has been registered",
              data: newUser,
            });
          } catch (error) {
            res.status(404);
            const systemError = new Error("USer ccouldn't be registered");
            next(systemError);
          }
        });
      }
    } catch (error) {
      res.status(404);
      const systemError = new Error("Somethin went wrong");
      next(systemError);
    }
  } else {
    res.status(404);
    const systemError = new Error("Please, accept gdprConsent");
    next(systemError);
  }
};

module.exports.authorizeUser = async (req, res, next) => {
  const { personEmail, password } = req.body;
  try {
    const user = await userSchema.find({ personEmail: personEmail });

    if (user[0] && (await user[0].matchPassword(password))) {
      return res.status(200).json({
        _id: user[0]._id,
        name: user[0].personName,
        surname: user[0].personSurname,
        email: user[0].personEmail,
        token: generateToken(user[0]._id),
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404);
    const systemError = new Error("Either password or email is wrong");
    next(systemError);
  }
};
module.exports.getSingleUser = (req, res) => {};
module.exports.deleteSingleUSer = (req, res) => {};
