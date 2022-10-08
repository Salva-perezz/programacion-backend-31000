export default class CustomError {
  constructor(data, message, error, statusCode) {
    this.data = data;
    (this.message = message),
      (this.error = error),
      (this.statusCode = statusCode);
  }
}
