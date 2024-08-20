/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

/* Routes för meddelanden */
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

const app = express();
app.use(express.json());

// Hämta meddelanden (alla)
router.get("/", async (req, res) => {
    try {
        const result = await Message.find({});
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Lägg till meddelande
router.post("/", async (req, res) => {
    try {
        const result = await Message.create(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Ett fel uppstod: " + error });
    }
});

// Hämta meddelande (med id)
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const message = await Message.findById(id);
        if (!message) {
            return res.status(404).json({ message: "Meddelande kunde inte hämtas." });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Uppdatera meddelande (med id)
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const message = await Message.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!message) {
            return res.status(404).json({ message: "Meddelande kunde inte uppdateras." });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

// Radera meddelande (med id)
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const message = await Message.findByIdAndDelete(id);
        if (!message) {
            return res.status(404).json({ message: "Meddelande kunde inte raderas." });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + error });
    }
});

module.exports = router;