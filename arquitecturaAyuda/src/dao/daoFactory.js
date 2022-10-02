import ProductMongoDAO from "./productMongo.dao.js";
import ProductSequelizeDAO from "./productSequelize.dao.js";

class DaoFactory {
  createDao(database) {
    if (database.toUpperCase === "MONGO") return new ProductMongoDAO();
    if (database.toUpperCase === "MARIA") return new ProductSequelizeDAO();
  }
}

export default DaoFactory;
