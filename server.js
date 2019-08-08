//Requiring dependencies
const express = require("express");
const path = require("path");

// Tells node that we are creating an "express" server
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());