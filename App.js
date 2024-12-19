require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/details/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/details.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/search.html'));
});


app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})