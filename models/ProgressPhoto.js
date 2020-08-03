const { Schema, model } = require("mongoose");

const progressPhotoSchema = new Schema(
  {
    plant: String,
    progressPic: String,
  },
  { timestamps: true }
);

module.exports = model("ProgressPhoto", progressPhotoSchema);
