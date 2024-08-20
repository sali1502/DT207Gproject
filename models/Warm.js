/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */


// Schema för varmrätter  - Meny

const mongoose = require("mongoose");

const WarmSchema = new mongoose.Schema({
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

const Warm = mongoose.model("Warm", WarmSchema);
module.exports = Warm;