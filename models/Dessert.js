/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

// Schema för desserts - Meny

const mongoose = require("mongoose");

const DessertSchema = new mongoose.Schema({
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

const Dessert = mongoose.model("Dessert", DessertSchema);
module.exports = Dessert;