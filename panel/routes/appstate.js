const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/upload", (req, res) => {
  const data = req.body.appstate;
  if (!data) return res.json({ error: "No data" });

  fs.writeFileSync("MrUzairXxX-MTX.json", JSON.stringify(data, null, 2));
  res.json({ success: true });
});

module.exports = router;
