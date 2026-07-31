const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Zenox-SHOP-ZA is running on port ${PORT}`);
});
