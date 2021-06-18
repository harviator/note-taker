const express = require('express');
const path = require('path');
const fs = require('fs');
const uuidv1 = require('uuidv1');

const app = express();

const PORT = process.env.PORT || 3000;

const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// HTML Route
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// API Routes 
app.get('/api/notes', (req, res) => res.json(notes)); 
app.get('.api/notes/:note', (req, res ) => {

    console.log(req.params.id);
    //const currentNote = notes.filter()
})
//app.get to get 1 note //use a filter to filter ids
// Note data
app.post('/api/notes', (req, res) => { // Add new note
    
    const id = uuidv1();
    
    const newNote = {
        id: id,
        title: req.body.title,
        text: req.body.text,
    };
    
    notes.push(newNote);

    console.log(newNote);

    console.log("New Note created");
});
app.put('api/notes', (req, res) => { // Update notes
    // what the frick do I write here?
});
app.delete('api/notes', (req, res) => { // Delete a note
    //what the frick do I write here?
})

//Default HTML Route
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// Starts server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

/*

Notes:
    -The notes need unique ids

*/