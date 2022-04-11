const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

async function connectDB() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("connected to DB", db.connection.name);
  } catch (error) {
    console.error(error);
  }
}
module.exports = connectDB;
