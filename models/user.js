const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Must provide email"],
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    minlength: 7,
    maxlength: 10,
  },

  name: {
    type: String,
    required: [true, "Must provide name"],
    minlength: 3,
    maxlength: 15,
  },
  message: {
    type: String,
    required: false,
    maxlength: 128,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("users", User);
