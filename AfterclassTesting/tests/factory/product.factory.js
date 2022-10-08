import faker from "faker";
faker.locale = "es";

function generateProduct() {
  return {
    name: faker.name.firstName(),
    price: faker.commerce.price(100, 200, 0),
    stock: faker.commerce.price(100, 200, 0),
  };
}

export default {
  generateProduct,
};
