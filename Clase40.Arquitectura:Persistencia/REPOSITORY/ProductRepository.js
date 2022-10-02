const BaseRepository = require("./BaseRepository.js");
const Product = require("./Product.model.js");

class ProductRepository extends BaseRepository {
  constructor(Product) {
    super(Product);
  }

  buyProduct(userId, productId) {}
}

const product = new ProductRepository(Product);
