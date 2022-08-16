const yargs = require("yargs")(process.argv.slice(2));

const args = yargs
  .alias({
    m: "modo",
    p: "puerto",
    d: "debug",
  })
  .default({
    modo: "prod",
    puerto: 0,
    debug: false,
  }).argv;

console.log(args);
console.log(process.argv);
