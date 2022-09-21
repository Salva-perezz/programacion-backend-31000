import express from "express";
import mongoose from "mongoose";
import rutas from "./rutas.js";
import passport from "passport";
import passpotLocal from "passport-local";
import User from "./user.js";

const LocalStrategy = passpotLocal.Strategy;

const app = express();

// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.json());

// const registerStrategy = new LocalStrategy(
//   { passReqToCallback: true },
//   async (req, username, password, done) => {
//     try {
//       const existingUser = await User.findOne({ email: req.body.email });

//       if (existingUser) {
//         return done(null, null);
//       }

//       const newUser = {
//         password: password,
//         email: req.body.email,
//         role: req.body.role,
//       };

//       const createdUser = new User(newUser);

//       await createdUser.save();

//       req.user = req.body.email;
//       done(null, createdUser);
//     } catch (err) {
//       console.log("Erro registrando usuario", err);
//       done("Erro en registro", null);
//     }
//   }
// );

// const loginStrategy = new LocalStrategy(
//   { passReqToCallback: true },
//   async (req, username, password, done) => {
//     try {
//       const user = await User.findOne({ email: req.body.email });

//       if (!user || !isValidPassword(password, user.password)) {
//         return done(null, null);
//       }

//       done(null, user);
//     } catch (err) {
//       console.log("Error login", err);
//       done("Error login", null);
//     }
//   }
// );

// passport.use("register", registerStrategy);
// passport.use("login", loginStrategy);

// passport.serializeUser((user, done) => {
//   done(null, user._id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, done);
// });

app.use("/api", rutas);

await mongoose.connect(
  "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(3000, () => {
  console.log("Todo ok");
});
