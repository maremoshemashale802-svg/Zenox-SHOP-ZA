const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "zenox_shop"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed!");
        console.log(err);
        return;
    }

    console.log("Connected to MySQL!");
});

module.exports = db;
