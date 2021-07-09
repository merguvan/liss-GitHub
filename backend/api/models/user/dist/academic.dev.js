"use strict";

var mongoose = require("mongoose");

var AcademicSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  personProjectName: String,
  personProjectNumber: String,
  personProjectAcronym: {
    type: String
  }
});
module.exports = mongoose.model("academic");