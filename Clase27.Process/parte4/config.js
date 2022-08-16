import dotenv from "dotenv";
dotenv.config();

export const config = {
  modo: process.env.NODE_ENV || "prod",
  puerto: process.env.PORT || 0,
  debug: process.env.DEBUG || false,
};
