const mongoose = require("mongoose");

const PersonalInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  personTitle: {
    type: String,
    required: [true, "Please, select your title"],
  },
  personName: {
    type: String,
    required: [true, "Please, type your name"],
  },
  personSurname: {
    type: String,
    required: [true, "Please, type your surName"],
  },
  personMiddle: String,
  personDisplayName: String,
  personDOB: {
    type: Date,
    required: [true, "Please, enter your date of birth"],
  },
  personCityOB: {
    type: String,
    required: [true, "Please, enter your country of Birth"],
  },
  personCountryOB: {
    type: String,
    required: [true, "Please, enter your city of Birth"],
  },
  personGender: {
    type: String,
    required: [true, "Please, enter your gender"],
  },

  personMaritalStatus: {
    type: String,
    required: [true, "Please, enter your martrial Status"],
  },

  personOrcidID: {
    type: String,
    unique: true,
  },
  gdprConsent: {
    type: Boolean,
  },
  personAutoID: String,
});

module.exports = mongoose.model("PersonalInfo", PersonalInfoSchema);
