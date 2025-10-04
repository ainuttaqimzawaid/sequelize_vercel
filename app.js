const express = require('express');
const { Sequelize } = require('sequelize');

// Inisialisasi Express
const app = express();

// Sequelize (pakai ENV, bukan hardcode)
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
);

// Cek koneksi database
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
    }
})();

// Route utama
app.get('/', (req, res) => {
    res.send('Hello World from Vercel + Express + Sequelize!');
});

// Export handler (tanpa listen)
module.exports = app;