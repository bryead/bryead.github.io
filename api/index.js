const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();
const ejsLayouts = require("express-ejs-layouts");

// Set view engine and static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(ejsLayouts);

// Define routes
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/resume", (req, res) => res.render("resume"));

module.exports = app;
//module.exports.handler = serverless(app); // <-- Required by Vercel
