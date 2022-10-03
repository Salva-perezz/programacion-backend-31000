import ProductDAO from "./classes/ProductDAO.class.js";
import productController from "./controller/product.controller.js";

// const Product = new ProductDAO();

// await Product.create({
//   name: "Lapiz",
//   stock: 500,
//   price: 120,
// });
// await Product.create({
//   name: "Regla",
//   stock: 600,
//   price: 170,
// });
// await Product.create({
//   name: "Hoja A4",
//   stock: 800,
//   price: 10,
// });
// await Product.create({
//   name: "Goma de borrar",
//   stock: 100,
//   price: 20,
// });

// const product = await Product.getAll();

// console.log(product);

await productController.create({
  name: "Lapiz",
  stock: 500,
  price: 5,
});

await productController.create({
  name: "Regla",
  stock: 500,
  price: 2,
});

await productController.create({
  name: "Goma de borrar",
  stock: 500,
  price: 1,
});

await productController.create({
  name: "Hoja A4",
  stock: 500,
  price: 0.5,
});

const productsDTO = await productController.getAllWithCurrencies();

console.log(productsDTO);
