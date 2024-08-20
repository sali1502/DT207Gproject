/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

/* Routes för smårätter */
const express = require('express');
const router = express.Router();
const Starter = require("../models/Starter");

const app = express();
app.use(express.json());

// Hämta smårätter (alla)
router.get("/", async (req, res) => {
    try {
        const result = await Starter.find({});
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Lägg till smårätter
router.post("/", async (req, res) => {
    try {
        const result = await Starter.create(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Ett fel uppstod: " + error });
    }
});

// Hämta smårätter (med id)
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const starter = await Starter.findById(id);
        if (!starter) {
            return res.status(404).json({ message: "Smårätter kunde inte hämtas." });
        }
        res.json(starter);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Uppdatera smårätter (med id)
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const starter = await Starter.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!starter) {
            return res.status(404).json({ message: "Smårätter kunde inte uppdateras." });
        }
        res.json(starter);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Radera smårätter (med id)
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const starter = await Starter.findByIdAndDelete(id);
        if (!starter) {
            return res.status(404).json({ message: "Smårätter kunde inte raderas." });
        }
        res.json(starter);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

module.exports = router;