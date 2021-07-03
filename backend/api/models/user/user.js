const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  personName: {
    type: String,
    required: [true, "Please, type your name"],
  },
  personSurname: {
    type: String,
    required: [true, "Please, type your surName"],
  },
  gdprConsent: {
    type:Boolean,
    default:false
  },
  personEmail: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("user", userSchema);
