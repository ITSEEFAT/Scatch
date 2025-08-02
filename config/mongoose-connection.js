const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

// Load environment variables from .env
require("dotenv").config();

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(`${mongoURI}/scatch`)
  .then(function () {
    dbgr("MongoDB Connected");
  })
  .catch(function (err) {
    console.error("MongoDB connection error:", err.message);
  });

module.exports = mongoose.connection;

