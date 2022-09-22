import express, { json } from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";

const app = express();

app.use(json());

app.use("/api", routes);

mongoose.connect(
  "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
);
app.listen(3000, () => {
  console.log("Server listening port 3000");
});
