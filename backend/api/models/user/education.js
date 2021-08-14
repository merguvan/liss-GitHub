const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "education",
  },

  personEduFrom: {
    type: String,
  },

  personEduTo: {
    type: String,
  },

  personEduInstitutionType1: {
    type: Number,
    // required: [true, "Please, select Institutional Type-1"],
  },

  personEduInstitutionType2: {
    type: Number,
    // required: [true, "Please, select Institutional Type-2"],
  },

  personEduInstitutionOther: {
    type: String,
  },

  personEduInstitutionName: {
    type: String,
  },

  personEduInstitutionCity: {
    type: String,
  },

  personEduInstitutionCountry: {
    type: String,
  },

  personEduInstitutionDegree: {
    type: Number,
    // required: [true, "Please, select Degree"],
  },

  personEduInstitutionDegreeTitle: {
    type: String,
  },

  personEducationLetter: String,
  personEduDiploma: {
    type: String,
    // required: [true, "Please, upload your reference letter"],
  },
});

module.exports = mongoose.model("education", EducationSchema);
