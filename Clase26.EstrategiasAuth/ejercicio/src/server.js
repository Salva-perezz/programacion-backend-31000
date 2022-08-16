const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();
const users = [];
const privateKey = "coderhouse";
const tokenBlackList = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function generateToken(user) {
  const payload = {
    data: {
      username: user.username,
      email: user.email,
    },
  };
  return jwt.sign(payload, privateKey, { expiresIn: "1m" });
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.json({
      error: true,
      message: "U dont hace permission to visit this page",
    });
  }

  const token = authHeader.split(" ")[1];
  const invalidToken = tokenBlackList.find(
    (invalidToken) => invalidToken === token
  );

  if (invalidToken) {
    return res.json({
      error: true,
      message: "U dont hace permission to visit this page",
    });
  }

  jwt.verify(token, privateKey, (err, decodedPayload) => {
    if (err) {
      return res.json({
        error: true,
        message: "U dont hace permission to visit this page",
      });
    }

    req.user = decodedPayload.data;
    req.token = token;

    next();
  });
}

app
  .route("/register")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  })
  .post((req, res) => {
    const { username, email } = req.body;
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      return res.json({ error: true, message: "User already exists" });
    }

    users.push(req.body);

    res.json({ username, email });
  });

app
  .route("/login")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  })
  .post((req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);

    if (!user || user.password !== password) {
      return res.json({ error: true, message: "Invalid credentials" });
    }

    const authToken = generateToken(user);

    res.json({ authToken });
  });

app.route("/").get(authMiddleware, (req, res) => {
  res.json(req.user);
});

app.route("/logout").get(authMiddleware, (req, res) => {
  tokenBlackList.push(req.token);

  res.send("Bye bye");
});

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
