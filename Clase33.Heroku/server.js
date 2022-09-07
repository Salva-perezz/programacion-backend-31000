import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.get("/", (req, res) => {
  console.log(process.env.NOMBRE);
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening port", process.env.PORT);
});
