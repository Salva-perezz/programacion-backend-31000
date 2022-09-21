import express from "express";
import mongoose from "mongoose";
const app = express();
import rutas from "./routes/index.js";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import path from "path";

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: path.join(__dirname, "./views/layout/main.hbs"),
  })
);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");

app.use("/api", rutas);

mongoose.connect(
  "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
);
app.listen(8080, () => {
  console.log("Serdvidor escuchando el puerto 8080");
});
