//jshint esversion:6

const express = require("express");

const app = express();

//TODO

app.get("/", function (req, res) {
  res.send("Hello!! Server is running");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
