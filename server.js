const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();

// Dependencies
const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = 4040;

// const mongoose = require("mongoose");
const Book = require("./models/book")