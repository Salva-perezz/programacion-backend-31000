import jwt from "jsonwebtoken";

const privateKey = "SALVA";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: true,
      message: "You dont hace permission to visit this page",
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, privateKey, (err, decodedPayload) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "You dont hace permission to visit this page",
      });
    }

    req.user = decodedPayload.data;
    req.token = token;

    next();
  });
};

const generateToken = (user) => {
  const payload = {
    data: {
      username: user.username,
      email: user.email,
    },
  };
  return jwt.sign(payload, privateKey, { expiresIn: "30m" });
};

export default { generateToken, authMiddleware };
