const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(ejsLayouts);

app.get("/", (req, res) => res.render("index", { layout: "layout", page: "index", title: "Home", dark: false }));
app.get("/about", (req, res) => res.render("about", { layout: "layout", page: "about", title: "About", dark: false }));
app.get("/resume", (req, res) => res.render("resume", { layout: "layout", page: "resume", title: "Resume", dark: false }));

module.exports = app;
/* app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
  */