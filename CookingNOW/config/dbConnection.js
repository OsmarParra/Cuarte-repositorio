'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cookingnow',
    
});

dbConn.connect(function(err) { 

    if (err) throw err;{

        console.log('Connection Success')

    }

});

module.exports = dbConn;