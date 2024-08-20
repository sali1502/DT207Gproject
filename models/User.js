/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

// Schema för användare med registrering och login med hashat lösenord

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Hasha lösenord
userSchema.pre("save", async function (next) {
    try {
        if (this.isNew || this.isModified("password")) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
});

// Registrera användare
userSchema.statics.register = async function (username, password) {
    try {
        const user = new this({ username, password });
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};

// Jämför hashade lösenord
userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
}

// Logga in användare
userSchema.statics.login = async function (username, password) {
    try {
        const user = await this.findOne({ username });
        if (!user) {
            throw new Error("Felaktigt användarnamn och/eller lösenord");
        }
        const isPasswordMatch = await user.comparePassword(password);
        
        // Ej korrekt?
        if (!isPasswordMatch) {
            throw new Error("Felaktigt användarnamn och/eller lösenord");
        }
        // Korrekt
        return user;
    } catch (error) {
        throw error;
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;