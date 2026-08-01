const db = require("../config/db");

// Get all products
exports.getProducts = (req, res) => {
    const sql = "SELECT * FROM products";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to load products."
            });
        }

        res.json(results);
    });
};

// Add a new product
exports.addProduct = (req, res) => {
    const { name, description, price, image, stock } = req.body;

    const sql = `
        INSERT INTO products
        (name, description, price, image, stock)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, description, price, image, stock],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to add product."
                });
            }

            res.json({
                success: true,
                message: "Product added successfully!"
            });
        }
    );
};
