import Product from "../models/product.model.js";

const getProductByFilters = async (filters) => {
  const product = await Product.find(filters);

  return product;
};

const createProduct = async (productToCreate) => {
  const createdProduct = await Product.create(productToCreate);

  return createdProduct;
};

export default { getProductByFilters, createProduct };
