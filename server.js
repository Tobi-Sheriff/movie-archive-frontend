const express = require('express');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json());
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/movies/index.html'));
});

app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/movies/details.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/movies/search.html'));
});


app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})