/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

/* Routes för dessert */
const express = require("express");
const router = express.Router();
const Dessert = require("../models/Dessert");

const app = express();
app.use(express.json());

// Hämta dessert (alla)
router.get("/", async (req, res) => {
    try {
        const result = await Dessert.find({});
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Lägg till dessert
router.post("/", async (req, res) => {
    try {
        const result = await Dessert.create(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Ett fel uppstod: " + error });
    }
});

// Hämta dessert (med id)
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const dessert = await Dessert.findById(id);
        if (!dessert) {
            return res.status(404).json({ message: "Dessert kunde inte hämtas." });
        }
        res.json(dessert);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Uppdatera dessert (med id)
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const dessert = await Dessert.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!dessert) {
            return res.status(404).json({ message: "Dessert kunde inte uppdateras." });
        }
        res.json(dessert);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Radera dessert (med id)
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const dessert = await Dessert.findByIdAndDelete(id);
        if (!dessert) {
            return res.status(404).json({ message: "Dessert kunde inte raderas." });
        }
        res.json(dessert);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

module.exports = router;