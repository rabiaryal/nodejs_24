const express = require('express');
// this is to import express js framework
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sagarmatha@28',
    database: 'nodeproject02' // Replace 'test' with your database name
});
// it assigns the object to the db as the instance of the mysql database

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1);
    }
    console.log('Connected to the database.');
});
// fro displaying the success and error message


// Routes
app.get('/users', (req, res) => {
    db.query('SELECT * FROM employeetable', (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
