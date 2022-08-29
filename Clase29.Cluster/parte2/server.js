import express from "express";
import cluster from "cluster";
import os from "os";

const app = express();
const PORT = Number(process.argv[2]) || 8080;
const cpus = os.cpus();

if (cluster.isPrimary) {
  console.log(`
  PID Primary: ${process.pid}
  Pocessors: ${cpus.length}
  `);

  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died - ${new Date()}`);

    cluster.fork();
  });
} else {
  app.get("/", (req, res) => {
    res.send(
      `Servidor express en ${PORT} - PID ${
        process.pid
      } - ${new Date().toLocaleString()}`
    );
  });

  app.listen(PORT, (err) => {
    if (!err)
      console.log(
        `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
      );
  });
}
