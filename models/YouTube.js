const { Schema, model } = require("mongoose");

const youTubeSchema = new Schema(
  {
    youTubeLink: {
      type: String
    }
  }
);

const YouTube = model("YouTube", youTubeSchema);

module.exports = YouTube;