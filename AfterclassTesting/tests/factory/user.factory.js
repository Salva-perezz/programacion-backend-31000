import faker from "faker";
faker.locale = "es";

function generateUser() {
  return {
    username: String(faker.name.firstName()),
    email: String(faker.internet.email()),
  };
}

export default {
  generateUser,
};
