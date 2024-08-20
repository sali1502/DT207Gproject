/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

// Schema för meddelanden

const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;