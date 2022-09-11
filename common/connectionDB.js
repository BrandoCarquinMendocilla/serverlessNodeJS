const mysql = require('mysql2');

module.exports.conexionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    port: '3306',

    database: 'serverless',
    debug: true
});
