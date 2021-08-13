const mongoose = require("mongoose");

const ReferenceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  personTitle: {
    type: String,
    // required: [true, "Please, select your title"],
  },
  personRefereeName: {
    type: String,
    // required: [true, "Please, type full name"],
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  personRefereePosition: {
    type: String,
    // required: [true, "Please, type referee position"],
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  personRefereeInstitution: {
    type: String,
    // required: [true, "Please, type your institution"],
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  personRefereeEmail: {
    type: String,
    // required: true,
    // unique: true,
    lowercase: true,
    trim: true,
    // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  personRefereePhoneNumber: {
    type: String,
    trim: true,
  },
  personRefereeDate: {
    type: Date,
    min: "2021-05-01",
    //min:{ "$gte" : new Date(ISODate().getDate() - 1000 * 3600 * 24 * 60) },//alternative
    // required: [true, "Please, enter the date signed"],
  },
  // personReferenceLetter: {
  //   type: String,
  // }
});

module.exports = mongoose.model("Reference", ReferenceSchema);
