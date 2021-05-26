const express = require("express");
const router = express.Router();
const comentService = require("../services/comentServices");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coment = comentService.getComent(id);
    res.status(200).json(coment);
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    await comentService.createComent(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await comentService.deleteComent(id);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
