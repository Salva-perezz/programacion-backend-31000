const args = require("yargs")(process.argv.slice(2)).argv;

process.on("exit", (exitCode) => {
  console.log("Exit code", exitCode);
});

if (!args._.length) {
  console.error({
    descripcion: "Entrada vacia",
  });

  process.exit(-4);
}

let total = 0;
let max = 0;
let min = args._[0];
let error = false;
const dataTypes = [];

args._.map((arg) => {
  if (typeof arg === "number") {
    total += arg;

    max = arg > max ? arg : max;
    min = arg < min ? arg : min;

    dataTypes.push("number");
  } else {
    dataTypes.push(typeof arg);
    error = true;
  }
});

if (error) {
  console.error({
    descripcion: "Error de tipo",
    numeros: args._,
    tipos: dataTypes,
  });

  process.exit(-5);
}

console.log({
  numeros: args._,
  promedio: total / args._.length,
  max,
  min,
  ejecutable: args.$0,
  pid: process.pid,
});
