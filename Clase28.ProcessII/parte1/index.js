const util = require("util");
/*
process.on("uncaughtException", (error) => {
  console.error(`Error: ${error}`);
});

console.log(`
    Directorio actual: ${process.cwd()}
    ID del proceso: ${process.pid}
    Version de Node: ${process.version}
    Titulo del proceso: ${process.title}
    Sistema operativo: ${process.platform}
    Uso de la memoria: ${util.inspect(process.memoryUsage(), {
      showHidden: false,
      depth: null,
      colors: true,
    })}
`);

console.log(process.execPath);

setTimeout(console.log, 2000, "Hola");

cualquiera();
*/

const consoleLog = (string) => {
  process.stdout.write(string);
};

consoleLog("hola como estan");
