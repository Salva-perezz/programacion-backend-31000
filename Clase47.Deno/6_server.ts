import express from "npm:express";
import mongoose from "npm:mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3000, () => {
  console.log("Server listening on http://127.0.0.1:3000");
});
