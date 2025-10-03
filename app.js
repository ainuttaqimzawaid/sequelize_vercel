const express = require('express')
const app = express()
const port = 3000
const { Sequelize } = require('sequelize');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const sequelize = new Sequelize('railway', 'root', 'ECFHgEekSnNOVMbDBlGeuCORfrMHQQpp', {
    host: 'shinkansen.proxy.rlwy.net',
    port: 38721,
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
