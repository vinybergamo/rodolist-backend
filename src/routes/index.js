const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Checklist = require("../models/checklists");

router.get("/api", async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.status(200).json(checklists);
  } catch (error) {
    res.status(500).json({ error: "Erro ao exibir as listas" });
  }
});

router.get("/api/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id).populate();
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json({ error: "Erro na requisição" });
  }
});

router.post("/api", async (req, res) => {
    let {name}=req.body.checklist
    let checklist = new Checklist({name})

  try {
    let checklist = await Checklist.create({ name })
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json({ error: "Erro ao requisição" });
  }
});

router.delete("/api/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndDelete(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json({ error: "Erro ao requisição" });
  }
})

module.exports = router;
