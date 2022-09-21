import { Router } from "express";
const router = Router();
import multer from "multer";
import User from "../models/user.model.js";
import { fileURLToPath } from "url";
import path from "path";

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post("/user", upload.single("myFile"), async (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = { message: "No subiste nada rey", statusCode: 400 };
    return next(error, req, res);
  }

  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) {
    return res.sendStatus(400);
  }

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    avatar: `http://localhost:8080/${req.file.filename}`,
  });

  await newUser.save();

  res.json({ email: newUser.email, avatar: newUser.avatar });
});

router.get("/user/:userId", async (req, res) => {
  const { email, avatar } = await User.findOne({ _id: req.params.userId });

  res.render("userInfo", { email, avatar });
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

export default router;
