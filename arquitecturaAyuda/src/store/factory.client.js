import MongoClient from "./mongo.client.js";
import MariaClient from "./maria.client.js";

class StoreFactory {
  createDatabaseClient(database) {
    if (database.toUpperCase === "MONGO") return new MongoClient.getInstance();
    if (database.toUpperCase === "MARIA") return new MariaClient.getInstance();
  }
}

export default StoreFactory;
