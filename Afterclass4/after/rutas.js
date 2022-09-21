import { Router } from "express";
import User from "./user.js";
import Carrito from "./carrito.js";
import Product from "./product.model.js";
import passport from "passport";

const router = Router();

const adminRoleChecker = async (req, res, next) => {
  const user = await User.findOne({ _id: req.body.userId });

  if (user.role === "admin") {
    return next();
  } else {
    res.sendStatus(401);
  }
};

router.route("/user").post(async (req, res) => {
  const newUser = new User(req.body);

  await newUser.save();

  res.json({ email: req.body.email });
});

router.route("/carrito").post(async (req, res) => {
  const { userId, productId } = req.body;
  const existingCart = await Carrito.findOne({ user: userId });
  const product = await Product.findOne({ _id: productId });

  if (existingCart) {
    existingCart.products.push(product);

    await existingCart.save();
    res.json(existingCart);
  } else {
    const newCart = new Carrito({ user: userId, products: [product] });

    await newCart.save();

    res.json(newCart);
  }
});

router.post("/product", adminRoleChecker, async (req, res) => {
  const { name, price, stock } = req.body;
  const newProduct = new Product({
    name,
    price: Number(price),
    stock: Number(stock),
  });

  await newProduct.save();

  res.sendStatus(201);
});

router.route("/login", passport.authenticate("login"), (req, res) => {
  res.sendStatus(200);
});

router.route("/register", passport.authenticate("register"), (req, res) => {
  res.sendStatus(200);
});

export default router;
