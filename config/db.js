const mongoose = require('mongoose');
require('dotenv').config();
const MongoDB_URI = process.env.MONGO_URI;
async function connectDB() {
  try {
    await mongoose.connect(MongoDB_URI);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    
  }
}

module.exports = connectDB()
