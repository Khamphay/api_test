const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

const configPromise = require('./config/config');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(configPromise);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, x-access-token, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATHCH, PUT, DELETE, OPTIONS')
    next();
});

app.use('/api', (req, res) => {
    return res.send({
        error: false,
        message: 'Welcome to Node API',
        written_by: 'KP Dev',
        published_by: 'Khamphay'
    });
});

module.exports = app;