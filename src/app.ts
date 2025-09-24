import express from "express";
import "dotenv/config";
import webRoutes from "./routes/web";
import { get } from "http";
import getConnection from "./config/database";

const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// config req.body
//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static file
app.use(express.static("public"));

// config routes
webRoutes(app);

//
getConnection();

app.listen(PORT, () => {
  console.log(`My app is running on port: ${PORT}`);
});
