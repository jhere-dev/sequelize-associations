var express = require("express");
var router = express.Router();

router.get("/health", (req, res) => {
  res.send({
    name: package.name,
    version: pkg.version,
  });
});

module.exports = router;
