/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

// Schema för sallad - Meny

const mongoose = require("mongoose");

const SalladSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

const Sallad = mongoose.model("Sallad", SalladSchema);
module.exports = Sallad;