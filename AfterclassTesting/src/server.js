import express, { json } from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import routes from "./routes/index.js";

const app = express();

app.use(json());

app.use("/api", routes);

app.use("*", (req, res) => {
  res.sendStatus(404);
});

mongoose.connect(config.dbUrl).then(() => {
  console.log("Database connected!");
  app.listen(config.port, () => {
    console.log(`Server listening host http://localhost:${config.port}`);
  });
});
