const db = require("../config/db");

exports.register = (req, res) => {

    const { username, email, phone, password } = req.body;

    const sql = "INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)";

    db.query(sql, [username, email, phone, password], (err, result) => {

        if (err) {
            return res.send("Registration failed.");
        }

        res.send("Registration successful!");

    });

};

exports.login = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email=? AND password=?";

    db.query(sql, [email, password], (err, results) => {

        if (err) {
            return res.send("Login failed.");
        }

        if (results.length === 0) {
            return res.send("Invalid email or password.");
        }

        res.send("Login successful!");

    });

};
