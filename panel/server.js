const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "MrUzairXxX-MTX",
  resave: false,
  saveUninitialized: true
}));

// serve main HTML (single file UI)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../MrUzairXxX-MTX.html"));
});

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/bot", require("./routes/bot"));
app.use("/api/appstate", require("./routes/appstate"));
app.use("/api/commands", require("./routes/commands"));
app.use("/api/files", require("./routes/files"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log("🔥 PANEL RUNNING ON PORT", PORT);
});
