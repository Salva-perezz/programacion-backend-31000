const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "coderhouse",
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

app
  .route("/register")
  .get((req, res) => {
    if (req.session.user) return res.redirect("/datos");
    res.sendFile(path.join(__dirname, "./public/registro.html"));
  })
  .post((req, res) => {
    const { username } = req.body;
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      return res.json({ error: true, message: "Username is already in use" });
    }

    users.push(req.body);

    res.redirect("/login");
  });

app
  .route("/login")
  .get((req, res) => {
    if (req.session.user) return res.redirect("/datos");
    res.sendFile(path.join(__dirname, "./public/login.html"));
  })
  .post((req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);

    if (!user || password !== user.password) {
      return res.json({ error: true, message: "Invalid credentials" });
    }

    req.session.user = user;

    res.redirect("/datos");
  });

function authMiddleware(req, res, next) {
  if (req.session.user) {
    return next();
  }

  res.json({
    error: true,
    message: "You dont have permission to visit this page",
  });
}

app
  .route("/datos")
  .all(authMiddleware)
  .get((req, res) => {
    res.json(req.session.user);
  });

app.route("/logout").get((req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.json({ error: true, message: "Error deleting the session" });
    }

    res.send("Bye bye");
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
