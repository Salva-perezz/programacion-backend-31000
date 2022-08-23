const express = require("express");
const { fork } = require("child_process");

const app = express();

function sumar() {
  let suma = 0;
  for (let i = 0; i < 9e9; i++) {
    suma += i;
  }

  return suma;
}

app.get("/calculo-bloq", (req, res) => {
  const suma = sumar();

  res.send(`Sumabloq: ${suma}`);
});

app.get("/calculo-nobloq", (req, res) => {
  const forked = fork("child.js");
  forked.send("arranca");
  forked.on("message", (msg) => {
    res.send(`Suma no bloq: ${msg}`);
  });
});

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
