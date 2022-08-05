import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import { createClient } from "redis";
import connectRedis from "connect-redis";

const app = express();
const client = createClient();
const RedisStore = connectRedis(session);

app.use(cookieParser());
app.use(
  session({
    store: new RedisStore({
      host: "redis-18578.c91.us-east-1-3.ec2.cloud.redislabs.com",
      port: 18578,
      pass: "5QK5djevHKSiPWcqgYAO6fez86Gs7suO",
      client,
      ttl: 60,
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

app.get("/", (req, res) => {
  req.session.user = req.query.name;

  res.send(`Bienvenido ${req.query.name}`);
});

app.get("/get", (req, res) => {
  res.json(req.session);
});

app.listen(3000, () => {
  console.log("Todo ok");
});
