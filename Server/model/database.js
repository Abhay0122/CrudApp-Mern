const mongoose = require("mongoose");

exports.DbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected!");
  } catch (error) {
    console.log(error.message);
  }
};

    
