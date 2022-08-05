import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import sessionFileStore from "session-file-store";

const app = express();
const FileStore = sessionFileStore(session);

app.use(cookieParser());
app.use(
  session({
    store: new FileStore({
      path: "./sesiones",
      ttl: 10,
      retries: 0,
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000,
    },
  })
);

app.get("/", (req, res) => {
  console.log("Hola");
  if (req.session.contador) {
    req.session.contador++;

    const mensaje = req.session.user
      ? `${req.session.user} has visitado la pagina ${req.session.contador} veces`
      : `Has visitado la pagina ${req.session.contador} veces`;

    return res.send(mensaje);
  }

  req.session.contador = 1;
  req.session.user = req.query.name;

  const mensaje = req.query.name
    ? `Bienvenid@ ${req.query.name}`
    : "Bienvenid@";

  res.send(mensaje);
});

app.get("/olvidar", (req, res) => {
  const mensaje = req.session.user
    ? `Hasta luego ${req.session.user}`
    : "Hasta luego";

  req.session.destroy((err) => {
    if (!err) {
      return res.send(mensaje);
    }

    res.status(500).json({ error: err });
  });
});

app.listen(3030, () => {
  console.log("Oki");
});
