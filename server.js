require("dotenv").config();

const express = require("express");

const colors = require("colors");

const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.cyan.bold);
});

app.get("/get", (req, res) => {
  res.send("<h1>Gunratna More </h1");
});
