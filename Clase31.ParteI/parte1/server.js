import express from "express";
import compression from "compression";

const app = express();
const mensaje = "Hola que tal".repeat(1000);

app.get("/saludo", (req, res) => {
  res.send(mensaje);
});

app.get("/saludozip", compression(), (req, res) => {
  res.send(mensaje);
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
