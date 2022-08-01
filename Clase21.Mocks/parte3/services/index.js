import { faker } from "@faker-js/faker";

const mocks = [];

faker.locale = "es";

const createMocks = (cantidad) => {
  let id = mocks.length ? mocks.length + 1 : 1;

  for (let i = 1; i <= cantidad; i++) {
    mocks.push({
      id,
      nombre: faker.name.firstName(),
      email: faker.internet.email(),
      website: faker.internet.domainName(),
      imagen: faker.image.avatar(),
    });
    id++;
  }

  return true;
};

const getMocks = (id) => {
  if (id) {
    return mocks[id - 1];
  }

  return mocks;
};

const insertMock = (mock) => {
  mock.id = mocks.length + 1;

  mocks.push(mock);

  return true;
};

const updateMock = (id, mockUpdated) => {
  const indice = Number(id) - 1;

  mockUpdated.id = id;
  mocks[indice] = mockUpdated;

  return true;
};

const deleteMock = (id) => {
  mocks[id - 1] = null;

  return true;
};

export default { createMocks, getMocks, insertMock, updateMock, deleteMock };
