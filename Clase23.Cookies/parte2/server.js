import express, { json } from "express";
import session from "express-session";

const app = express();

app.use(json());
app.use(
  session({
    secret: "coderhouse",
    resave: false,
    saveUninitialized: true,
  })
);

function auth(req, res, next) {
  if (req.session.user === "salva" && req.session.admin) {
    return next();
  }

  res.status(401).send("You dont have permission to visit this page");
}

app.get("/con-session", (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    return res.send(`Usted a visitado el sitio ${req.session.contador} veces`);
  }

  req.session.contador = 1;

  res.send("Bienveni@!");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.send("Session cleared!");
    } else {
      res.json({ status: "Logout error", body: err });
    }
  });
});

app.get("/login", (req, res) => {
  const { username, password } = req.query; //NO MANDAR PASSWORD POR EL REQ QUERY

  if (username !== "salva" || password !== "salva123") {
    return res.send("Invalid credentials");
  }

  req.session.user = username;
  req.session.admin = true;

  res.send("Logged in!");
});

app.get("/privado", auth, (req, res) => {
  res.send("Si ves esto es por que estas logeado!");
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
