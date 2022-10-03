import Product from "../model/product.model.js";
import CustomError from "./CustomError.class.js";
import MongoClient from "./MongoClient.class.js";

let instance;

class ProductDAO {
  constructor() {
    this.db = new MongoClient();
    this.collection = Product;
  }

  async getAll() {
    try {
      await this.db.connect();

      const products = await this.collection.find();

      return products;
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error getting products");
    } finally {
      await this.db.disconnect();
    }
  }

  async create(newProduct) {
    try {
      await this.db.connect();

      const createdProduct = await this.collection.create(newProduct);

      return createdProduct;
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error creating product");
    } finally {
      await this.db.disconnect();
    }
  }

  static getInstance() {
    if (!instance) {
      instance = new ProductDAO();
    }

    return instance;
  }
}

export default ProductDAO;

// A la hora de usarlo:

const product = ProductDAO.getInstance();
