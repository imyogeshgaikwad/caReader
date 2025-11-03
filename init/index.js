const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/temp";

main()
  .then(() => {
    console.log("✅ DB connected");
    return initDB();
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("🚀 Data was initialized successfully!");
  } catch (err) {
    console.error("❌ Error initializing data:", err);
  } finally {
    mongoose.connection.close();
    console.log("🔒 DB connection closed");
  }
};
