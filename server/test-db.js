require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
