const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// Serves the html pages
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
//serves the api data
app.get('/api/notes', (req, res) => res.json(notes));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
// Starts server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));