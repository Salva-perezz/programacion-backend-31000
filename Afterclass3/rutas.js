const { Router } = require("express");
const { schema, normalize } = require("normalizr");
const router = Router();

const mensajesDb = [
  {
    id: 1,
    author: {
      userEmail: "juan_kpo@qwe",
      name: "juan",
      lastName: "doval",
      age: "21",
      alias: "Juanchi [2/8/2022 0:18:6]",
      avatar:
        "https://i.pinimg.com/originals/c2/12/f9/c212f9e0ad0feafc95f58c35dbb97e47.png",
    },
    message: "Que onda viejo?",
  },
  {
    id: 2,
    author: {
      userEmail: "lucas_kpo@asd.com",
      name: "lucas",
      lastName: "doval",
      age: "32",
      alias: "Plan dental [2/8/2022 0:23:4]",
      avatar:
        "https://i.pinimg.com/originals/d0/f2/a7/d0f2a7dd7e5511f8b7be5f40c857b3bc.webp",
    },
    message: "alohaaa!",
  },
  {
    id: 3,
    author: {
      userEmail: "lucas_kpo@asd.com",
      name: "lucas",
      lastName: "doval",
      age: "32",
      alias: "Plan dental [2/8/2022 0:23:4]",
      avatar:
        "https://i.pinimg.com/originals/d0/f2/a7/d0f2a7dd7e5511f8b7be5f40c857b3bc.webp",
    },
    message: "Todo bien?",
  },
];

const author = new schema.Entity("author", {}, { idAttribute: "userEmail" });

const mensaje = new schema.Entity(
  "mensaje",
  { author: author },
  { idAttribute: "id" }
);

const schemaMensajes = new schema.Entity(
  "mensajes",
  {
    mensajes: [mensaje],
  },
  { idAttribute: "id" }
);

const normalizedPost = normalize(
  { id: "mensajes", mensajes: mensajesDb },
  schemaMensajes
);

router.get("/getData", (req, res) => {
  res.json(normalizedPost);
});

module.exports = router;
