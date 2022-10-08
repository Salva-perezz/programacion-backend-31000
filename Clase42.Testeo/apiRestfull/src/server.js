import express, { json } from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";

const app = express();

app.use(json());
app.use("/api", routes);

app.use("*", (req, res) => {
  res.sendStatus(404);
});

mongoose
  .connect(
    "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server listening port 3000");
    });
  });
