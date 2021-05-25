const express = require("express");
const router = express.Router();
const comentService = require("../services/comentServices");

router.post("/", async (req, res) => {
  try {
    await comentService.createComent(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
