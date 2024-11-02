let express = require("express");

let app = express(); // constructor call, it will ask me to set up the website.

let path = require('path');

// Create routes!
app.get("/", (req,res) => res.sendFile(path.join(__dirname + '/test.html')));
    
app.get("/about", (req,res) => res.send("Uh... hey!"));

app.listen(3000, () => console.log('Fart'));