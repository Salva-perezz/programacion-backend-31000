import Cotizador from "../classes/Cotizador.class.js";
import ProductDAO from "../classes/ProductDAO.class.js";
import ProductDTO from "../classes/ProductDTO.class.js";

const Product = new ProductDAO();
const cotizador = new Cotizador();

const create = async (newProduct) => {
  return await Product.create(newProduct);
};

const getAll = async () => {
  return await Product.getAll();
};

const getAllWithCurrencies = async () => {
  const products = await Product.getAll();

  const productsDTO = products.map((product) => {
    const currencies = {
      arsPrice: cotizador.getCurrencyPrice(product.price, "ARS"),
      uyuPrice: cotizador.getCurrencyPrice(product.price, "UYU"),
    };

    return new ProductDTO(product, currencies);
  });

  return productsDTO;
};

export default { create, getAll, getAllWithCurrencies };
