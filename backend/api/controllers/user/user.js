const userSchema = require("../../models/user/user");
const generateToken = require("../../utils/generateToken");
module.exports.registerUser = async (req, res, next) => {
  const {
    gdprConsent,
    personEmail,
    personName,
    personSurname,
    password,
  } = req.body;

  if (gdprConsent) {
    try {
      const user = await userSchema.findOne({
        personEmail,
      });

      if (user) {
        res.status(404);
        const error = new Error("This email already in use");
        next(error);
      } else {
        try {
          const user = await userSchema.create({
            personEmail,
            personName,
            personSurname,
            password,
          });

          if (user) {
            return res.status(200).json({
              message: "User has been registered",
              user: {
                _id: user._id,
                name: user.personName,
                surname: user.personSurname,
                email: user.personEmail,
                token: generateToken(user._id),
              },
            });
          }
        } catch (error) {
          res.status(404);

          next(error);
        }
      }
    } catch (error) {
      res.status(404);
      const systemError = new Error("Somethin went wrong");
      next(systemError);
    }
  } else {
    res.status(404);
    const error = new Error("Please, accept gdprConsent");
    next(error);
  }
};

module.exports.authorizeUser = async (req, res, next) => {
  const { personEmail, password } = req.body;
  try {
    const user = await userSchema.find({ personEmail: personEmail });

    if (user.length > 0 && (await user[0].matchPassword(password))) {
      return res.status(200).json({
        _id: user[0]._id,
        name: user[0].personName,
        surname: user[0].personSurname,
        email: user[0].personEmail,
        token: generateToken(user[0]._id),
      });
    } else {
      res.status(404);
      const systemError = new Error("Either password or email is wrong");
      next(systemError);
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
