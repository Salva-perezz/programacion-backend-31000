import DBClient from "./db.client.js";
import mongoose from "mongoose";
import CustomError from "../utils/CustomError.js";
import config from "../config/config.js";

let instance;

class MongoClient extends DBClient {
  constructor() {
    super();
    this.connected = false;
    this.client = mongoose;
  }

  async connect() {
    try {
      await this.client.connect(config.mongoDbUrl);

      this.connected = true;

      console.log("Database connected");
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error connecting with database");
    }
  }

  async disconnect() {
    try {
      await this.client.connection.close();

      this.connected = false;

      console.log("Database disconnected");
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error disconnecting with database");
    }
  }

  static getInstance() {
    if (!instance) {
      instance = new MariaClient();
    }

    return instance;
  }
}

export default MongoClient;
