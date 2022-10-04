import CustomError from "../classes/CustomError.class.js";
import DAO from "../classes/DAO.class.js";
import MongoClient from "../classes/MongoClient.class.js";
import News from "../model/new.model.js";

class NewsDAOMongo extends DAO {
  constructor() {
    super();
    this.collection = News;
  }

  async getAll() {
    try {
      const response = await this.collection.find();

      return response;
    } catch (err) {
      throw new CustomError(500, "Error getting all the news");
    }
  }

  async create(newsToCreate) {
    try {
      const response = await this.collection.create(newsToCreate);

      return response;
    } catch (err) {
      throw new CustomError(500, "Error getting all the news");
    }
  }
}

export default NewsDAOMongo;
