require("dotenv").config();

const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const https = require("https");
const helmet = require("helmet");

// Environment Variables
const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENV;

connectDB();

// Middleware
app.use(helmet());
const { logger, logEvents } = require("./middleware/logger");
const { errorHandler } = require("./middleware/errorHandler");

// Logger
app.use(logger);

// CORS
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", require("./routes/authRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/notes", require("./routes/noteRoute.js"));

// Error handler
app.use(errorHandler);

mongoose.connection.once("open", (err) => {
  app.listen(PORT, () =>
    console.log(`\nServer running on port ${PORT} on ${ENVIRONMENT} mode`)
  );
});

// send message for default URL
app.get("/", (req, res) => {
  res.send("Hello World with Express");
});

mongoose.connection.on("error", (err) => {
  console.log("\nERROR:", err);
  logEvents(
    `\n${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});

// TLS CONFIG
// https
//   .createServer(
//     {
//       key: fs.readFileSync("key.pem"),
//       cert: fs.readFileSync("cert.pem"),
//     },
//     app
//   )
//   .listen(PORT, () => {
//     console.log(`\nServer running on port ${PORT} on ${ENVIRONMENT} mode`);
//   });
