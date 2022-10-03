import ProductDAO from "./classes/ProductDAO.class.js";

const Product = new ProductDAO();

await Product.create({
  name: "Lapiz",
  stock: 500,
  price: 120,
});
await Product.create({
  name: "Regla",
  stock: 600,
  price: 170,
});
await Product.create({
  name: "Hoja A4",
  stock: 800,
  price: 10,
});
await Product.create({
  name: "Goma de borrar",
  stock: 100,
  price: 20,
});

const product = await Product.getAll();

console.log(product);
