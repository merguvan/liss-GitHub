const mongoose = require("mongoose");

const RemarksSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "remarks",
  },
  personRemarks: {
    type: String,
  },
});

module.exports = mongoose.model("remark", RemarksSchema);
