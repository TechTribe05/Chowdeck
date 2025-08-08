const mongoose = require("mongoose");
require("dotenv").config();

const dbConnectionString = process.env.DBSTRING;

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB successfully!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Optional: Exit process if connection fails
  }
};

module.exports = connectDB;
