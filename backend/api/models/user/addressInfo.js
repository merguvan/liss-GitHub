const mongoose = require("mongoose");

const AddressInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  personAddressType: {
    type: String,
    // required: [true, "Please, enter address"],
  },
  personFlatNo: {
    type: Number,
  },
  personBuildingNo: {
    type: Number,
  },
  personStreet: String,
  personDistrict: String,
  postalCode: String,
  personCity: {
    type: String,
    // required: [true, "Please, enter your current city"],
  },
  personState: String,
  personCountry: {
    type: String,
    // required: [true, "Please, enter your current country"],
  },
  personPhoneType: String,
  personPhoneCountryCode: String,
  personPhoneNumber: {
    type: Number,
    // required: [true, "Please, enter your phone number "],
  },
  personEmailType: String,
  personEmail: {
    type: String,
    // required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  personPhoto: {
    type: Buffer,
  },
  personPlatformType: String,
  personPlatformUserName: String,
  personCvDoc: {
    type: String,
    // required: [true, "Please, upload your cv"],
  },
  personCitizenship: String,
  personWorkPermit: String,
  personAvailableFrom: Date,
  personAvailableTo: Date,
  personDbsDoc: String,
  personMedicalDoc: String,
  personTitle: {
    type: String,
    // required: [true, "Please, select your title"],
  },
  personName: {
    type: String,
    // required: [true, "Please, type your name"],
  },
  personSurname: {
    type: String,
    // required: [true, "Please, type your surName"],
  },
  personMiddle: String,
  personDisplayName: String,
  personDOB: {
    type: Date,
    // required: [true, "Please, enter your date of birth"],
  },
  personCityOB: {
    type: String,
  },
  personCountryOB: {
    type: String,
    // required: [true, "Please, enter your city of Birth"],
  },
  personGender: {
    type: String,
    // required: [true, "Please, enter your gender"],
  },

  personMaritalStatus: {
    type: String,
    // required: [true, "Please, enter your martrial Status"],
  },

  personOrcidID: {
    type: String,
    unique: true,
  },

  personAutoID: String,
});

module.exports = mongoose.model("addressInfo", AddressInfoSchema);
