require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/details/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/details.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/search.html'));
});

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});