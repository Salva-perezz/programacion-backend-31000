import { productDao } from "../daos/product.dao.js";

const getAllProducts = async () => {
  const data = await productDao.getAllProducts();

  return data;
};

const createProduct = async ({ title, price, stock }) => {
  if (typeof title !== "string") throw "Title must be string";
  if (typeof price !== "number") throw "Price must be number";
  if (typeof stock !== "number") throw "Stock must be number";

  const createdProduct = await productDao.createProduct({
    title,
    price,
    stock,
  });

  return createdProduct;
};

const getOneProduct = async (productId) => {
  if (typeof productId !== "string") throw "Product ID must be string";

  const product = await productDao.getProductById(productId);

  if (!product) throw "Product doesn't exist";

  return product;
};

const updateProduct = async ({ title, price, stock }, productId) => {
  if (typeof title !== "string") throw "Title must be string";
  if (typeof price !== "number") throw "Price must be number";
  if (typeof stock !== "number") throw "Stock must be number";
  if (typeof productId !== "string") throw "Product ID must be string";

  const updatedProduct = await productDao.updateProduct(
    { title, price, stock },
    productId
  );

  return updatedProduct;
};

const deleteProduct = async (productId) => {
  if (typeof productId !== "string") throw "Product ID must be string";

  await productDao.delteProduct(productId);
};

export const productService = {
  getAllProducts,
  createProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
