const express = require("express");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const db = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// Serve static files
app.use("/public", express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "index.html"));
});

// Cart page
app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "cart.html"));
});

// Login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "login.html"));
});

// Register page
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "register.html"));
});

app.listen(PORT, () => {
    console.log(`Zenox-SHOP-ZA is running on http://localhost:${PORT}`);
});
