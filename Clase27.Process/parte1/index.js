const parseArgs = require("minimist");

const options = {
  alias: {
    m: "modo",
    p: "puerto",
    d: "debug",
  },
  default: {
    modo: "prod",
    puerto: 0,
    debug: false,
  },
};

const args = parseArgs(process.argv.slice(2), options);

console.log({
  modo: args.modo,
  puerto: args.puerto,
  debug: args.debug,
  otros: args._,
});
