import CustomError from "./CustomError.class.js";

class DBClient {
  async connect() {
    throw new CustomError(500, "connect() not implemente in subclass");
  }

  async disconnect() {
    throw new CustomError(500, "disconnect() not implemente in subclass");
  }
}

export default DBClient;
