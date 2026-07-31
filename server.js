const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use("/public", express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Cart page
app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "cart.html"));
});

// Checkout page
app.get("/checkout", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "checkout.html"));
});

// Login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Register page
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "register.html"));
});

app.listen(PORT, () => {
    console.log(`Zenox-SHOP-ZA is running on http://localhost:${PORT}`);
});
