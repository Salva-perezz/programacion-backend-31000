import express from "express";
import rutas from "./rutas";
const app = express();

app.use("/", rutas);

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
