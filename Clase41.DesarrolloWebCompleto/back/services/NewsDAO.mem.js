import CustomError from "../Classes/CustomError.class.js";
import DAO from "../classes/DAO.class.js";

class NewsDAOMem extends DAO {
  constructor() {
    super();
    this.colecction = [];
  }

  getAll() {
    let docs = [];
    try {
      docs = this.colecction;
      return docs;
    } catch (error) {
      const cuserr = new CustomError(500, "Error al listarAll()");
      throw cuserr;
    }
  }

  create(elemento) {
    let doc = null;
    try {
      let newId;
      if (this.colecction.length == 0) {
        newId = 1;
      } else {
        newId = this.colecction[this.colecction.length - 1].id + 1;
      }

      doc = { ...elemento, id: newId };
      this.colecction.push(doc);
      return doc;
    } catch (error) {
      const cuserr = new CustomError(500, "Error al guardar()");
      throw cuserr;
    }
  }
}

export default NewsDAOMem;
