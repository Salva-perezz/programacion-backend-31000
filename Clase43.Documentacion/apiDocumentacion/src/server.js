import express, { json } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const app = express();
const numbers = [];
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API Documentada - Coderhouse",
      description: "API de numeros documentada",
    },
  },
  apis: ["./docs/**/*.yaml"],
};
const swaggerSpecs = swaggerJsDoc(options);

app.use(json());

app.get("/", (req, res) => {
  res.send("Ruta base API");
});

app.post("/api/number", (req, res) => {
  const { number } = req.body;
  const numberId = numbers.length - 1;

  numbers.push({ id: numberId, number });

  res.json(numbers[numberId]);
});

app.get("/number", (req, res) => {
  res.json({ numbers });
});

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
