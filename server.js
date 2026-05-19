const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const app = express();
const connectDB = require("./db/connection");
require("dotenv").config();
connectDB();

// Dependencies

const bookRoutes = require("./routes/bookRoutes");
const { default: mongoose } = require("mongoose");

const Book = require("./models/book")
const PORT = 3004;

app.use(express.json());

app.use("/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});