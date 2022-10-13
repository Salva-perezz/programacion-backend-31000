import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import crypto from "crypto";

const app = express();
const personasMap = {};

const schema = buildSchema(`
input PersonaInput {
    nombre: String,
    edad: Int
  }
  type Persona {
    id: ID!
    name: String,
    edad: Int
  }
  type Query {
    getPersona(id: ID!): Persona,
    getPersonas(campo: String, valor: String): [Persona],
  }
  type Mutation {
    createPersona(datos: PersonaInput): Persona
    updatePersona(id: ID!, datos: PersonaInput): Persona,
    deletePersona(id: ID!): Persona,
  }
`);

class Persona {
  constructor(id, { nombre, edad }) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }
}

const createPersona = ({ datos }) => {
  const id = crypto.randomBytes(10).toString("hex");
  const nuevaPersona = new Persona(id, datos);

  personasMap[id] = nuevaPersona;

  return nuevaPersona;
};

const getPersona = ({ id }) => {
  if (!personasMap[id]) throw new Error("La persona no existe");

  return personasMap[id];
};

const getPersonas = ({ campo, valor }) => {
  const personas = Object.values(personasMap);
  if (campo && valor) {
    return personas.filter((p) => p[campo] == valor);
  } else {
    return personas;
  }
};

const updatePersona = ({ id, datos }) => {
  if (!personasMap[id]) throw new Error("La persona no existe");

  const nuevaPersona = new Persona(id, datos);

  personasMap[id] = nuevaPersona;

  return nuevaPersona;
};

const deletePersona = ({ id }) => {
  if (!personasMap[id]) throw new Error("La persona no existe");

  const personaBorrada = personasMap[id];

  delete personasMap[id];

  return personaBorrada;
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      getPersona,
      getPersonas,
      createPersona,
      updatePersona,
      deletePersona,
    },
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Sever listening http://localhost:3000");
});
