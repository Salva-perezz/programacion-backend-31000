import CustomError from "../classes/CustomError.class.js";
import NewsDAOFactory from "../classes/NewsDAOFactory.class.js";

const DAO = NewsDAOFactory.getDao(process.argv[2]);

class NewsController {
  async getNews(req, res) {
    try {
      const response = await DAO.getAll();

      res.json(response);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  async create(req, res) {
    try {
      await DAO.create(req.body);

      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

export default NewsController;
