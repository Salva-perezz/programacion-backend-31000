import express, { json } from "express";
import routes from "./routes/index.js";

const app = express();

app.use(json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
