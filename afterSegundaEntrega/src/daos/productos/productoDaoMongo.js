import ContenedorMongo from "../../contenedores/contenedorMongo";

class ProductoDaoMongo extends ContenedorMongo {
  constructor() {
    super("productos", {
      nombre: { type: String, required: true },
      precio: { type: Number, required: true },
      thumbnail: { type: String, required: true },
    });
  }
}

export default ProductoDaoMongo;
