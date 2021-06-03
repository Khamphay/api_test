
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '1234',
    charset: 'utf8'
});

module.exports = pool;