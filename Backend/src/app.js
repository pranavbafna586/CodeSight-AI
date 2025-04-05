const express = require("express");
const path = require("path");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json({ limit: "10mb" }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// API routes
app.use("/ai", aiRoutes);

module.exports = app;
