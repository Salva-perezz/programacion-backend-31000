import Product from "../models/mongoose/product.model.js";
import CustomError from "../utils/CustomError.js";

let instance;

class ProductMongoDAO {
  constructor() {
    this.collection = Product;
  }

  async getAll() {
    try {
      const products = await this.collection.find();

      return products;
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error getting products");
    }
  }

  async create(newProduct) {
    try {
      const createdProduct = await this.collection.create(newProduct);

      return createdProduct;
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error creating product");
    }
  }

  static getInstance() {
    if (!instance) {
      instance = new ProductMongoDAO();
    }

    return instance;
  }
}

export default ProductMongoDAO;
