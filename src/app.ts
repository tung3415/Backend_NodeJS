// const express = require("express");
import express from "express";
import "dotenv/config";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.send("Tung nodemon devtool");
});

app.listen(PORT, () => {
  console.log(`My app is running on port ${PORT}`);
  console.log(`port env: ${process.env.PORT}`);
});
