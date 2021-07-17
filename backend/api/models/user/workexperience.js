const mongoose = require("mongoose");

const WorkexperienceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  personWorkFrom: {
    type: Date,
    min: "1901-01-01",
    required: [true, "Please, enter the date signed"],
  },
  personWorkTo: {
    type: Date,
    max: Date.now,
    required: [true, "Please, enter the date signed"],
  },
  personWorkOngoing: {
    type: Boolean,
  },
  personInstitutionType1: {
    type: String,
    required: [true, "Please, select your institution type 1"],
  },
  personInstitutionType2: {
    type: String,
    required: [true, "Please, select your institution type 2"],
  },
  personInstitutionName: {
    type: String,
    required: [true, "Please, type institutional name"],
    minlength: 2,
    maxlength: 150,
    trim: true,
  },
  personInstitutionCity: {
    type: String,
    required: [true, "Please, select the city"],
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  personInstitutionCountry: {
    type: String,
    required: [true, "Please, select the country"],
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  personInstitutionWebsite: {
    type: String,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  personInstitutionPosition: {
    type: String,
    required: [true, "Please, type your position"],
  },
  personInstitutionDepartment: {
    type: String,
    required: [true, "Please, type your department/office"],
  },
  personInstitutionPositionType1: {
    type: String,
    required: [true, "Please, select your position type 1 "],
  },
  personInstitutionPositionType2: {
    type: String,
    required: [true, "Please, select your position type 2 "],
  },
});

module.exports = mongoose.model("Workexperience", WorkexperienceSchema);
