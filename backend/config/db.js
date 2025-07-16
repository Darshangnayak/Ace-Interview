const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      ssl: true,
      connectTimeoutMS: 30000
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
