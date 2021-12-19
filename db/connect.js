const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = connectDB;
