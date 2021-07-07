const mongoose = require("mongoose");

const AddressInfoSchema = new mongoose.Schema({
  personAddressType: {
    type: String,
    required: [true, "Please, enter address"],
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
    required: [true, "Please, enter your current city"],
  },
  personState: String,
  personCountry: {
    type: String,
    required: [true, "Please, enter your current country"],
  },
  personPhoneType: String,
  personPhoneCountryCode: String,
  personPhoneNumber: {
    type: Number,
    required: [true, "Please, enter your phone number "],
  },
  personEmailType: String,
  personEmail: {
    type: String,
    required: true,
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
    required: [true, "Please, upload your cv"],
  },
  personCitizenship: String,
  personWorkPermit: String,
  personAvailableFrom: Date,
  personAvailableTo: Date,
  personDbsDoc: String,
  personMedicalDoc: String,
});

module.exports = mongoose.model("addressInfo", AddressInfoSchema);
