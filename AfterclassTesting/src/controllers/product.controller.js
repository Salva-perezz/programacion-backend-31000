import productService from "../service/product.service.js";

const getAllProduct = async (req, res) => {
  try {
    const response = await productService.getProductByFilters({});

    res.json(response);
  } catch (err) {
    if (err.statusCode) {
      return res.status(statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const createProduct = async (req, res) => {
  try {
    const response = await productService.createProduct(req.body);

    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const filters = { _id: req.params.id };
    const response = await productService.getProductByFilters(filters);

    res.json(response);
  } catch (err) {
    if (err.statusCode) {
      return res.status(statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

export default { getAllProduct, createProduct, getOneProduct };
