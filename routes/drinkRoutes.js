/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

/* Routes för dryck */
const express = require("express");
const router = express.Router();
const Drink = require("../models/Drink");

// Hämta dryck (alla)
router.get("/", async (req, res) => {
    try {
        const result = await Drink.find({});
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Lägg till dryck
router.post("/", async (req, res) => {
    try {
        const result = await Drink.create(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Ett fel uppstod: " + error });
    }
});

// Hämta dryck (med id)
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const drink = await Drink.findById(id);
        if (!drink) {
            return res.status(404).json({ message: "Dryck kunde inte hämtas." });
        }
        res.json(drink);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Uppdatera dryck (med id)
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const drink = await Drink.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!drink) {
            return res.status(404).json({ message: "Dryck kunde inte uppdateras." });
        }
        res.json(drink);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Radera dryck (med id)
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const drink = await Drink.findByIdAndDelete(id);
        if (!drink) {
            return res.status(404).json({ message: "Dryck kunde inte raderas." });
        }
        res.json(drink);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

module.exports = router;