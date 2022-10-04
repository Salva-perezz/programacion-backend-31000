import MongoClient from "./MongoClient.class.js";

class DBClientFactory {
  static getClient(db) {
    if (db === "MONGO") return new MongoClient();
    if (db === "MEM") return new MongoClient();
  }
}
export default DBClientFactory;
