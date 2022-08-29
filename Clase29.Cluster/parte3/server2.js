import express from "express";

const app = express();
const PORT = Number(process.argv[2]) || 8082;

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
