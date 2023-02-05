const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`\nMongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("\nERROR:", error, "\n");
  }
};

module.exports = connectDB;
