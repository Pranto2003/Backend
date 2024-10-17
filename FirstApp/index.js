require("dotenv").config();
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Pranto Goswamee");
});

app.get("/facebook", (req, res) => {
  res.send("Anurag Goswamee");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please Login to our site</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
