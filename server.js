/* Projekt, DT207G Backend-baserad webbutveckling, Åsa Lindskog sali1502@student.miun.se */

/* Webbtjänst med MongoDB och Express samt applikation för registrering och inloggning */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const starterRoutes = require("./routes/starterRoutes");
const salladRoutes = require("./routes/salladRoutes");
const warmRoutes = require("./routes/warmRoutes");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// Initiera Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* ROUTES FÖR AUTENTICERING */
app.use("/api", authRoutes);

// Skyddad route
app.get("/api/admin", authenticateToken, (req, res) => {
    res.json({ message: "Skyddad route" });
});

// Validera Token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) res.status(401).json({ message: "Token saknas" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, username) => {
        if (err) return res.status(403).json({ message: "Ej korrekt JWT" });

        req.username = username;
        next();
    });
}

/* ROUTES FÖR MENY */

// Route för smårätter
app.use("/api/starters", starterRoutes);

// Route för sallader
app.use("/api/sallads", salladRoutes);

// Route för varmrätter
app.use("/api/warms", warmRoutes);




// Starta applikationen
app.listen(port, () => {
    console.log(`Servern är startad på http://localhost:${port}`);
})
