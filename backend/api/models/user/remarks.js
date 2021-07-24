const mongoose = require("mongoose");

const RemarksSchema = new mongoose.Schema({
    remarks: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "remarks",
  },

  personRemarks: {
    type: String,
  },
 
});

module.exports = mongoose.model("remark", RemarksSchema);
