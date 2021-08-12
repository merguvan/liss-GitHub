const mongoose = require("mongoose");
const AffiliationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "affiliation",
  },

  personAffiliatedInstitution: {
    type: String,
    // required: [true, "Please, type in institution name"]
  },

  personAffiliationFrom: {
    type: String,
    // required: [true, "Please, select date"]
  },
  personAffiliationTo: {
    type: String,
    // required: [true, "Please, select date"]
  },

  personAffiliationType: {
    type: Number,
    // required: [true, "Please, select type"],
  },

  personAffiliationOthers1: {
    type: String,
  },

  personAffiliationCountry: {
    type: Number,
    // required: [true, "Please, select country"],
  },
});

module.exports = mongoose.model("affiliation", AffiliationSchema);
