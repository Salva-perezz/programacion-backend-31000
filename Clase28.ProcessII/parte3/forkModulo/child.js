process.on("message", (msg) => {
  console.log("Mensaje del padre:", msg);
  process.send("mundo!");
  process.exit();
});

process.send("listo");
