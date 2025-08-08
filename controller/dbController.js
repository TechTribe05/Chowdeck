// controller/dbController.js
const mongoose = require("mongoose");
require("dotenv").config(); // loads the DB string from .env file

const dbConnectionString = process.env.DBSTRING;

const connectDB = async () => {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB!");
  } catch (error) {
    console.error("❌ Error connecting to DB:", error.message);
    process.exit(1); // Optional: Exit if unable to connect
  }
};

module.exports = connectDB;
