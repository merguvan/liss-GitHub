const mongoose = require("mongoose");

const ReferencesInfoSchema = new mongoose.Schema({
  references: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "references",
  },
  personTitle: {
    type: Number,
    required: [true, "Please, select title"],
  },
  personRefereeName: {
    type: String,
  },
  personRefereeEmail: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },

  personRefereePhoneNumber: {
    type: Number,
  },
  
  personRefDateSigned: {
    type: Date,
  },
 
  personReferenceLetter: String,
  personCvDoc: {
    type: String,
    required: [true, "Please, upload your reference letter"],
  },
 
});

module.exports = mongoose.model("referencesInfo", ReferencesInfoSchema);
