require("dotenv").config();

const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;

const app = express();
const consumerKey = process.env.TWITTER_CONSUMER_KEY;
const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
const PORT = 3000;

app.use(
  session({
    secret: "shhhhhhhhhhhhhhhhhhhhh",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");

const twitterStrategy = new TwitterStrategy(
  {
    consumerKey,
    consumerSecret,
    callbackURL: "/auth/twitter/callback",
  },
  (token, tokenSecret, userProfile, done) => {
    console.log(userProfile);
    return done(null, userProfile);
  }
);

passport.use(twitterStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

function authMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}
app.get("/", authMiddleware, (req, res) => {
  res.redirect("/datos");
});

// LOGIN

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    successRedirect: "/",
    failureRedirect: "/faillogin",
  })
);

app.get("/faillogin", (req, res) => {
  res.render("login-error", {});
});

// FIN LOGIN

// DATOS

app.get("/datos", authMiddleware, (req, res) => {
  if (!req.user.contador) req.user.contador = 0;
  req.user.contador++;
  res.render("datos", {
    nombre: req.user.displayName,
    username: req.user.username,
    foto: req.user.photos[0].value,
    contador: req.user.contador,
  });
});

// FIN DATOS

// LOGOUT

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// FIN LOGOUT

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en servidor: ${error}`));
