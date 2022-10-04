import mongoose from "mongoose";
import CustomError from "./CustomError.class.js";
import DBClient from "./DBClient.class.js";

class MongoClient extends DBClient {
  constructor() {
    super();
    this.client = mongoose;
  }

  async connect() {
    try {
      await this.client.connect(
        "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
      );

      console.log("Database connected");
    } catch (err) {
      throw new CustomError(500, "Error conecting to the database");
    }
  }

  async disconnect() {
    try {
      await this.client.connection.close();

      console.log("Database disconnected");
    } catch (err) {
      throw new CustomError(500, "Error disconecting to the database");
    }
  }
}

export default MongoClient;
