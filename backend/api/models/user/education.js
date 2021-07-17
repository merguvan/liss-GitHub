const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    education: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "education",
  },

  personEduFrom: {
    type: Date,
  },

  personEduTo: {
    type: Date,
  },

  personType1: {
    type: Number,
    required: [true, "Please, select Institutional Type-1"],
  },

  personType2: {
    type: Number,
    required: [true, "Please, select Institutional Type-2"],
  },

  personEducationOther: {
    type: String,
  },

  personEducationName: {
    type: String,
  },

  personEducationCity: {
    type: String,
  },

  personEducationCountry: {
    type: String,
  },

  personDegree: {
    type: Number,
    required: [true, "Please, select Degree"],
  },

  personEduTitleDegree: {
    type: String,
  },

  personEducationLetter: String,
  personCvDoc: {
    type: String,
    required: [true, "Please, upload your reference letter"],
  },
 
});

module.exports = mongoose.model("education", EducationSchema);
