const express = require('express');
const path = require('path');
const fs = require('fs');
const uuidv1 = require('uuidv1');

const app = express();

const PORT = process.env.PORT || 3000;

let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// HTML Route
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
// API Routes 
app.get('/api/notes', (req, res) => res.json(notes)); 
//Default HTML Route
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
// Add new note
app.post('/api/notes', (req, res) => {
    
    let id = uuidv1();
    
    let newNote = {
        id: id,
        title: req.body.title,
        text: req.body.text,
    };
    
    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(notes));

    console.log("New Note created");

    res.json(notes);
});
//
app.delete('api/notes', (req, res) => { // Delete a note
    //what the frick do I write here?
})



// Starts server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));



app.get('/api/notes/:id', (req, res ) => {
    
    const getNote = req.params.id;

    console.log(getNote);

    notes = notes.filter((notes) => {
        if (getNote === notes.id) {
            return res.json(notes.id);
        } else {
            return res.json(false);
        }
    });

    console.log(filteredNotes);
})
//app.get to get 1 note //use a filter to filter ids
/*

Notes:
    -The notes need unique ids

*/