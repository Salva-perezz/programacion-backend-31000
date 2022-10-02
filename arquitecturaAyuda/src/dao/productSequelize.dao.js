import Product from "../models/sequelize/product.model.js";
import CustomError from "../utils/CustomError.js";

let instance;

class ProductSequelizeDAO {
  constructor() {
    this.table = Product;
  }

  async getAll() {
    try {
      const products = await this.table.findAll();

      return products;
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error getting products");
    }
  }

  async create(newProduct) {
    try {
      const createdProduct = await this.table.create(newProduct);

      return createdProduct;
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error creating product");
    }
  }

  static getInstance() {
    if (!instance) {
      instance = new ProductSequelizeDAO();
    }

    return instance;
  }
}

export default ProductSequelizeDAO;
