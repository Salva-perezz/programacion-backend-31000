import CustomError from "../utils/CustomError.js";

class DBClient {
  connect() {
    throw new CustomError(500, "Connect method not implemented in sub class");
  }

  disconnect() {
    throw new CustomError(
      500,
      "Disconnect method not implemented in sub class"
    );
  }
}

export default DBClient;
