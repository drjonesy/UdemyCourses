const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3000;

const Product = require("./models/product");

// CONNECT TO MONGOOSE

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO Mongo Connection ERROR");
    console.log(err);
  });

// ROUTES

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dog", (req, res) => {
  res.send("Woof!");
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT ", port);
});
