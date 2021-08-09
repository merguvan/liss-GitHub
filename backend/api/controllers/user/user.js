const userSchema = require("../../models/user/user");
const nodemailer = require("nodemailer");
const generateToken = require("../../utils/generateToken");
module.exports.registerUser = async (req, res, next) => {
  const {
    isAdmin,
    gdprConsent,
    personEmail,
    personName,
    personSurname,
    password,
    userType,
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
        console.log("deneme 1");
        try {
          const user = await userSchema.create({
            personEmail,
            personName,
            personSurname,
            password,
            userType,
            isAdmin,
          });

          if (user) {
            console.log("deneme 2");
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: process.env.NODEMAILER_MAIL, // generated ethereal user
                pass: process.env.NODEMAILER_PASSWORD, // generated ethereal password
              },
            });

            const url = `http://localhost:5000/confirmation/${generateToken(
              user._id
            )}`;
            const options = {
              from: '"Liss Project" dincererdal1903@gmail.com ', // sender address
              to: user.personEmail, // list of receivers
              subject: "Verify Your Email", // Subject line
              text: "Please, click link to verify your email", // plain text body
              html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
            };
            console.log(url);
            transporter.sendMail(options, (err, info) => {
              if (err) {
                console.log(err);
                console.log("object");
              }
              console.log(info);
              console.log(info?.response);
            });
            return res.status(200).json({
              message: "You need to confirm your mail to login",
              _id: user._id,
              name: user.personName,
              surname: user.personSurname,
              email: user.personEmail,
              token: generateToken(user._id),
              isAdmin: user.isAdmin,
              userType: user.userType,
              isConfirmed: user.isConfirmed,
            });
          }
        } catch (error) {
          res.status(404);

          next(error);
        }
      }
    } catch (error) {
      res.status(404);

      next(error);
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
      if (user[0].isConfirmed) {
        return res.status(200).json({
          _id: user[0]._id,
          name: user[0].personName,
          surname: user[0].personSurname,
          email: user[0].personEmail,
          token: generateToken(user[0]._id),
          isConfirmed: user[0].isConfirmed,
        });
      } else {
        res.status(404);
        const systemError = new Error("Please,verify your email");
        next(systemError);
      }
    } else {
      res.status(404);
      const systemError = new Error("Either password or email is wrong");
      next(systemError);
    }
  } catch (error) {
    res.status(404);
    const systemError = new Error("Either password or email is wrong");
    next(systemError);
  }
};
module.exports.getSingleUser = (req, res) => {};
module.exports.deleteSingleUSer = (req, res) => {};
