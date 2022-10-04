import CustomError from "./CustomError.class.js";

class DAO {
  async getAll() {
    throw new CustomError(500, "getAll() not implemented in sub classs");
  }

  async getOne() {
    throw new CustomError(500, "getOne() not implemented in sub classs");
  }

  async create() {
    throw new CustomError(500, "create() not implemented in sub classs");
  }

  async delete() {
    throw new CustomError(500, "delete() not implemented in sub classs");
  }

  async update() {
    throw new CustomError(500, "update() not implemented in sub classs");
  }

  async deleteAll() {
    throw new CustomError(500, "deleteAll() not implemented in sub classs");
  }
}

export default DAO;
