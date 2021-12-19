const mongoose = require("mongoose");
const { Schema } = mongoose;

const Post = new Schema({
  data: {
    type: String,
    unique: true,
    required: [true, "Must provide text"],
    minlength: 3,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("posts", Post);
