/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

/* Routes för varmrätt */
const express = require("express");
const router = express.Router();
const Warm = require("../models/Warm");

const app = express();
app.use(express.json());

// Hämta varmrätt (alla)
router.get("/", async (req, res) => {
    try {
        const result = await Warm.find({});
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Lägg till varmrätt
router.post("/", async (req, res) => {
    try {
        const result = await Warm.create(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Ett fel uppstod: " + error });
    }
});

// Hämta varmrätt (med id)
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const warm = await Warm.findById(id);
        if (!warm) {
            return res.status(404).json({ message: "Varmrätt kunde inte hämtas." });
        }
        res.json(warm);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Uppdatera varmrätt (med id)
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const warm = await Warm.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!warm) {
            return res.status(404).json({ message: "Varmrätt kunde inte uppdateras." });
        }
        res.json(warm);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Radera varmrätt (med id)
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const warm = await Warm.findByIdAndDelete(id);
        if (!warm) {
            return res.status(404).json({ message: "Varmrätt kunde inte raderas." });
        }
        res.json(warm);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

module.exports = router;