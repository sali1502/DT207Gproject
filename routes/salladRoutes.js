/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

/* Routes för sallad */
const express = require("express");
const router = express.Router();
const Sallad = require("../models/Sallad");

const app = express();
app.use(express.json());

// Hämta sallad (alla)
router.get("/", async (req, res) => {
    try {
        const result = await Sallad.find({});
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Lägg till sallad
router.post("/", async (req, res) => {
    try {
        const result = await Sallad.create(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Ett fel uppstod: " + error });
    }
});

// Hämta sallad (med id)
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const sallad = await Sallad.findById(id);
        if (!sallad) {
            return res.status(404).json({ message: "Sallad kunde inte hämtas." });
        }
        res.json(sallad);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Uppdatera sallad (med id)
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const sallad = await Sallad.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!sallad) {
            return res.status(404).json({ message: "Sallad kunde inte uppdateras." });
        }
        res.json(sallad);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Radera sallad (med id)
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const sallad = await Sallad.findByIdAndDelete(id);
        if (!sallad) {
            return res.status(404).json({ message: "Sallad kunde inte raderas." });
        }
        res.json(sallad);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

module.exports = router;