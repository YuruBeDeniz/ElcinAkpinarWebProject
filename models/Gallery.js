const { Schema, model } = require("mongoose");

const concertSchema = new Schema(
  {
    title: {
      type: String,
    },
    imgUrl: String,
    require: true,
  },
  {
    timestamps: true,
  }
);

const Concert = model("Concert", concertSchema);

module.exports = Concert;
