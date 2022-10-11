const { Router } = require("express");
const Product = require("../models/product.model");

const router = Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await Product.find();

      res.json(products);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, price } = req.body;
      const createdProduct = await Product.create({ name, price });

      res.json(createdProduct);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      res.json(product);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .put(async (req, res) => {
    try {
      const { name, price } = req.body;
      const productId = req.params.id;

      await Product.updateOne({ _id: productId }, { name, price });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      const productId = req.params.id;

      await Product.deleteOne({ _id: productId });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

module.exports = router;
