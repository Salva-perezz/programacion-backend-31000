import express from "express";
import { graphqlHTTP } from "express-graphql";
import personaController from "./src/controllers/persona.controller.js";
import personaSchema from "./src/graphql/personas.schema.js";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    personaSchema,
    rootValue: {
      getPersona: personaController.getPersona,
      getPersonas: personaController.getPersonas,
      createPersona: personaController.createPersona,
      updatePersona: personaController.updatePersona,
      deletePersona: personaController.deletePersona,
    },
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
