"use strict";

import Sequelize, { Model, DataTypes } from "sequelize";
import MariaClient from "../../store/maria.client.js";

const sequelize = MariaClient.getInstance();
class Product extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Product.init(
  {
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Product",
  }
);

export default Product;
