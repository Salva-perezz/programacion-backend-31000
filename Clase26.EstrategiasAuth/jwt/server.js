const express = require("express");
const jwt = require("jsonwebtoken");

const users = [];
const app = express();
const privateKey = "salva";
const PORT = 3000;
const blackListTokens = [];

app.use(express.json());

function generateToken(user) {
  const token = jwt.sign(
    { data: { username: user.username, email: user.email } },
    privateKey,
    {
      expiresIn: "30m",
    }
  );
  return token;
}

function authMiddleware(req, res, next) {
  const headerToken = req.headers.authorization;

  if (!headerToken) {
    return res.json({
      error: true,
      message: "You dont have permission to visit this page",
    });
  }

  const token = headerToken.split(" ")[1];
  const blackListToken = blackListTokens.find(
    (blackListedToken) => blackListedToken === token
  );

  if (blackListToken)
    return res.json({
      error: true,
      message: "You dont have permission to visit this page",
    });

  jwt.verify(token, privateKey, (err, decoded) => {
    if (err) {
      return res.json({
        error: true,
        message: "You dont have permission to visit this page",
      });
    }

    req.user = decoded.data;
    req.token = token;

    next();
  });
}

app.route("/register").post((req, res) => {
  const { username } = req.body;
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    res.json({ error: true, message: "User already exists" });
  }

  users.push(req.body);

  res.json(req.body);
});

app.route("/login").post((req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    res.json({ error: true, message: "Invalid credentials" });
  }

  const authToken = generateToken(user);

  res.json({ authToken });
});

app.route("/datos").get(authMiddleware, (req, res) => {
  res.json(req.user);
});

app.route("/logout").get(authMiddleware, (req, res) => {
  blackListTokens.push(req.token);

  res.send("Bye bye");
});

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en servidor: ${error}`));
