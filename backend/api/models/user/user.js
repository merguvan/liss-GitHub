const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  personName: {
    type: String,
    required: [true, "Please, type your name"],
  },
  personSurname: {
    type: String,
    required: [true, "Please, type your surName"],
  },
  gdprConsent: {
    type: Boolean,
    default: false,
  },
  personEmail: {
    type: String,
    required: true,
    unique: true,
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      "email is invalid",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: [
      true,
      "Please, enter user type either Institutional or Individual",
    ],
  },
  isAdmin: {
    default: false,
    type: Boolean,
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
});
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  // if (!this.isModified("password")) {
  //   next();
  // }
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("user", userSchema);
