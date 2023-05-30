const path = require("path");
const app = require('express').Router();

    app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
    });

    // wild card changed to "" instead of "/" to catch all other routers
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });

module.exports = app;