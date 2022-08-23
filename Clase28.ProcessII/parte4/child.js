function sumar() {
  let suma = 0;
  for (let i = 0; i < 5e6; i++) {
    suma += i;
    console.log("hola");
  }

  return suma;
}

process.on("message", (msg) => {
  const suma = sumar();

  process.send(suma);
});
