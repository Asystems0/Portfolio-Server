const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Must provide email"],
    minlength: 6,
    maxlength: 32,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    minlength: 8,
    maxlength: 10,
  },

  name: {
    type: String,
    required: [true, "Must provide name"],
    minlength: 2,
    maxlength: 20,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("users", User);
