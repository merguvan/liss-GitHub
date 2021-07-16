const mongoose = require("mongoose");

const ReferenceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  personTitle: {
    type: String,
    required: [true, "Please, select your title"],
  },
  personRefereeName:{
    type: String,
    required: [true, "Please, type full name"],
  },
  personRefereePosition: {
    type: String,
    required: [true, "Please, type referee position"],
  },
  personRefereeInstitution:String,
  personRefereeEmail:String,
  personRefereePhoneNumber:Number,
  personRefereeDate: {
    type: Date,
    required: [true, "Please, enter the date signed"],
  },
  // personReferenceLetter: {
  //   type:File,
  //   required: [true, "Please upload your reference letter"],
  // }
});

module.exports = mongoose.model("Reference", ReferenceSchema);
