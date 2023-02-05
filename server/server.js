require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// Environment Variables
const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENV;

connectDB();

// Middleware
const { logger, logEvents } = require("./middleware/logger");
const { errorHandler } = require("./middleware/errorHandler");

// Logger
app.use(logger);

// CORS
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Routes
// Use relative path to views folder
// app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/authRoutes.js"));
app.use("/users", require("./routes/userRoutes.js"));
app.use("/notes", require("./routes/noteRoute.js"));

// app.all("*", (req, res) => {
//   res.status(404);
//   if (req.accepts("html")) {
//     res.sendFile(path.join(__dirname, "views", "404.html"));
//   } else if (req.accepts("json")) {
//     res.json({ message: "404 Not Found" });
//   } else {
//     res.type("txt").send("404 Not Found");
//   }
// });

// Error handler
app.use(errorHandler);

mongoose.connection.once("open", (err) => {
  app.listen(PORT, () =>
    console.log(`\nServer running on port ${PORT} on ${ENVIRONMENT} mode`)
  );
});

mongoose.connection.on("error", (err) => {
  console.log("\nERROR:", err);
  logEvents(
    `\n${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
