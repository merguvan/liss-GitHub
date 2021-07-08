const mongoose = require("mongoose");

const AchievementsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  personAchievementGrantedBy: String,
  personAchievementCountry: String,
  personAchievementName: String,
  personAchievementFrom: Date,
});

module.exports = mongoose.model("achievement", AchievementsSchema);
