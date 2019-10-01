
var url = require('url');
var fs = require('fs');
// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get("/", (req, res) => {
   res.sendFile(__dirname + '/home.html');
});


app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});