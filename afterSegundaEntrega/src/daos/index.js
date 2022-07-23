import dotenv from "dotenv";
dotenv.config();

let ProductoDao;
let CarritoDao;

switch (process.env.DATABASE) {
  case "firebase":
    const { default: ProductoDaoFirebase } = await import(
      "./productos/productoDaoFirebase"
    );
    const { default: CarritoDaoFirebase } = await import(
      "./carritos/carritoDaoFirebase"
    );

    ProductoDao = ProductoDaoFirebase;
    CarritoDao = CarritoDaoFirebase;

    break;
  case "mongo":
    const { default: ProductoDaoMongo } = await import(
      "./productos/productoDaoMongo"
    );
    const { default: CarritoDaoMongo } = await import(
      "./carritos/carritoDaoMongo"
    );

    ProductoDao = ProductoDaoMongo;
    CarritoDao = CarritoDaoMongo;

    break;
}

export { ProductoDao, CarritoDao };
