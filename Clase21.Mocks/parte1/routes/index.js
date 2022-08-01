import { Router } from "express";

const router = Router();

const nombres = ["Luis", "Lucía", "Juan", "Augusto", "Ana"];
const apellidos = ["Pieres", "Cacurri", "Bezzola", "Alberca", "Mei"];
const colores = ["rojo", "verde", "azul", "amarillo", "magenta"];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

router.route("/test").get((req, res) => {
  const response = [];

  for (let i = 0; i < 10; i++) {
    response.push({
      nombre: nombres[generateRandomNumber(0, nombres.length - 1)],
      apellido: apellidos[generateRandomNumber(0, apellidos.length - 1)],
      color: colores[generateRandomNumber(0, colores.length - 1)],
    });
  }

  res.json(response);
});

export default router;
