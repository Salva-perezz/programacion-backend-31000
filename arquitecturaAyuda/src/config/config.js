import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  mariaDbUri: process.env.DB_URI,
  mongoDbUrl: process.env.MONGO_URL,
};
