import winston from "winston";
import dotenv from "dotenv";

dotenv.config();

const buildProdLogger = () => {
  const prodLogger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: "debug.log", level: "debug" }),
      new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
  });

  return prodLogger;
};

const buildDevLogger = () => {
  const devLogger = winston.createLogger({
    transports: [new winston.transports.Console({ level: "info" })],
  });

  return devLogger;
};

let logger;

if (process.env.NODE_ENV.toLocaleUpperCase() === "PROD") {
  logger = buildProdLogger();
} else {
  logger = buildDevLogger();
}

export default logger;
