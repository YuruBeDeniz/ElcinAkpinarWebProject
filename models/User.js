const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Please tell us your name!"]
    },
    password: {
      type: String,
      minlength: 4,
      required: [true, "Please provide a password!"]
    },
    email: {
      type: String,
      unique: true
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
