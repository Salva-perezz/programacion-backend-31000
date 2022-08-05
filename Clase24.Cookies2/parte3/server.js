import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();

const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://salva:salva123@cluster0.5gbctuc.mongodb.net/?retryWrites=true&w=majority",
      mongoOptions,
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    rolling: true, //ACA LO QUE HACEMOS ES DECIRLE QUE NOS RENUEVE EL TIEMPO DE EXPIRACION DE LA SESION CON CADA REQUEST
    cookie: {
      maxAge: 5000,
    },
  })
);

app.get("/", (req, res) => {
  req.session.user = req.query.name;

  res.send("hola");
});

app.listen(3000, () => {
  console.log("👍");
});
