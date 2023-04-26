const path = require("path");
const app = require('express').Router();

    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
    });

module.exports = app;