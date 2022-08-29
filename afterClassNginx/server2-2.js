import express from "express";
import cluster from "cluster";
import os from "os";
import rutas from "./routes/index.js";

const app = express();
const cpus = os.cpus();
const PORT = Number(process.argv[2]) || 3000;
const iscluster = process.argv[3] == "cluster";

if (iscluster && cluster.isPrimary) {
  cpus.map(() => {
    cluster.fork();
  });
} else {
  app.get("/api/randoms/datos", (req, res) => {
    res.send("Server2-2");
  });

  app.listen(PORT, () => {
    console.log("Server listening port 3000");
  });
}
