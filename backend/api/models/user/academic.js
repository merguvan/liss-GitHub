const mongoose = require("mongoose");

const AcademicSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "academic",
  },

  personAcademicAPA7: {
    type: String,
  },

  personAcademicDOI: {
    type: String,
  },

  personAcademicLanguage: {
    type: String,
  },

  personType: {
    type: Number,
    // required: [true, "Please, select type"],
  },

  personAcademicDate: {
    type: String,
  },

  personAcademicURL: {
    type: String,
  },
});

module.exports = mongoose.model("academic", AcademicSchema);
