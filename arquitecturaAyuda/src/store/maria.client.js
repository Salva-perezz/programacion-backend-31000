import DBClient from "./db.client.js";
import { Sequelize } from "sequelize";
import config from "../config/config.js";

let instance;

class MariaClient extends DBClient {
  constructor() {
    super();
    this.connected = false;
    this.client = new Sequelize(config.mariaDbUri, {
      dialect: "mariadb",
    });
  }

  async connect() {
    try {
      await this.client.authenticate;

      this.connected = true;

      console.log("Database connected");
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error connecting with database");
    }
  }

  async disconnect() {
    try {
      await this.client.close();

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

export default MariaClient;
