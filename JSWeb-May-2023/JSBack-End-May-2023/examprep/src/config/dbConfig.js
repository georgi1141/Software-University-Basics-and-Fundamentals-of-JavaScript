const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/Petstagram";

async function dbConfig() {
  await mongoose.connect(uri);
}

module.exports = dbConfig;