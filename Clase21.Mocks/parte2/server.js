import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use("/", routes);

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
