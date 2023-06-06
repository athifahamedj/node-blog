require("dotenv").config();

const PORT = 3001;
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();

app.use(express.static("public"));

// template engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  const locals = {
    title: "NodeJS Blog",
    desc: "Created with NodeJS, Express and MongoDB",
  };
  res.render("index", locals);
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, (req, res) => {
  console.log(`Port ${PORT} working`);
});
