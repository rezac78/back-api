const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
// import File
const connectDB = require("./config/db");
const selectRoutes = require("./api/routes/selectRoutes");
const foldersRoutes = require("./api/routes/foldersRoutes");
const surveyRoutes = require("./api/routes/surveyRoutes");
const welcomeRoutes = require("./api/routes/welcomeRoutes");
// Load Config
dotEnv.config({ path: "./config/config.env" });
// Connect to MongoDB
connectDB();
// cors
const allowedOrigins = [
  'http://localhost:3001',
  'http://yourdomain.com',
];
// Start Express
const app = express();
// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(
  cors((req, callback) => {
    const origin = allowedOrigins.includes(req.header("Origin"))
      ? req.header("Origin")
      : false;
    callback(null, { origin, credentials: true });
  })
);
app.get("/", (req, res) => {
  res.send("Hello World from Express.js");
});
// Routes
app.use("/api/select", selectRoutes); // Select-related routes
app.use("/api/folders", foldersRoutes); // folders-related routes
app.use("/api/survey", surveyRoutes); // survey-related routes
app.use("/api/welcome", welcomeRoutes); // welcome-related routes
// Select a port
const PORT = process.env.PORT || 3000;
// Start server

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
