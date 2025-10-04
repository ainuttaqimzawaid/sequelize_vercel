const express = require('express');


// Inisialisasi Express
const app = express();


// Route utama
app.get('/', (req, res) => {
    res.send('Hello World from Vercel + Express + Sequelize!');
});

// Export handler (tanpa listen)
module.exports = app;
