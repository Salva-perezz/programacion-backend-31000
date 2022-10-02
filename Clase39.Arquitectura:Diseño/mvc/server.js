import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Server connected to the Database");
    app.listen(3000, () => {
      console.log("Server listening port 3000");
    });
  })
  .catch((error) => {
    console.log(`Error connectiong to the database ${JSON.stringify(error)}`);
  });
