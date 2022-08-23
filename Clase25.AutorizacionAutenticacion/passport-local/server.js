const express = require("express");
const exphbs = require("express-handlebars");
const bcrypt = require("bcrypt");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const routes = require("./routes");
const config = require("./config");
const controllersdb = require("./controllersdb");
const User = require("./models");
const app = express();

app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");

const port = 3000;

function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

function isValidPassword(plainPassword, hashedPassword) {
  return bcrypt.compareSync(plainPassword, hashedPassword);
}

app.use(express.static(__dirname + "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "coderhouse",
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: config.TIEMPO_EXPIRACION,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const registerStrategy = new LocalStrategy(
  { passReqToCallback: true },
  async (req, username, password, done) => {
    try {
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        return done(null, null);
      }

      const newUser = {
        username,
        password: hashPassword(password),
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      };

      const createdUser = await User.create(newUser);
      req.user = username;
      done(null, createdUser);
    } catch (err) {
      console.log("Erro registrando usuario", err);
      done("Erro en registro", null);
    }
  }
);

const loginStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });

    if (!user || !isValidPassword(password, user.password)) {
      return done(null, null);
    }

    done(null, user);
  } catch (err) {
    console.log("Error login", err);
    done("Error login", null);
  }
});

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, done);
});

app.get("/", routes.getRoot);

//  LOGIN
app.get("/login", routes.getLogin);
app.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/faillogin" }),
  routes.postLogin
);
app.get("/faillogin", routes.getFaillogin);

//  REGISTER
app.get("/register", routes.getSignup);
app.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failsignup" }),
  routes.postSignup
);
app.get("/failsignup", routes.getFailsignup);

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

app.get("/ruta-protegida", checkAuthentication, (req, res) => {
  const { user } = req;
  console.log(user);
  res.send("<h1>Ruta OK!</h1>");
});

//  LOGOUT
app.get("/logout", routes.getLogout);

//  FAIL ROUTE
app.get("*", routes.failRoute);

controllersdb.conectarDB("mongodb://localhost:27017/passport", (err) => {
  if (err) return console.log("error en conexión de base de datos", err);
  console.log("BASE DE DATOS CONECTADA");

  app.listen(port, (err) => {
    if (err) return console.log("error en listen server", err);
    console.log(`Server running on port ${port}`);
  });
});
