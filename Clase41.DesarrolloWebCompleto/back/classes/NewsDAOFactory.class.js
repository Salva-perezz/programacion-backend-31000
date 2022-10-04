import NewsDAOMem from "../services/NewsDAO.mem.js";
import NewsDAOMongo from "../services/NewsDAO.mongo.js";

class NewsDAOFactory {
  static getDao(daoType) {
    if (daoType === "MONGO") return new NewsDAOMongo();
    if (daoType === "MEM") return new NewsDAOMem();
  }
}

export default NewsDAOFactory;
