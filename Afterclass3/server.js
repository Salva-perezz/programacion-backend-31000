const express = require("express");
const rutas = require("./rutas");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", rutas);

app.listen(3000);
