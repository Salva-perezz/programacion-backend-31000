import express, { json } from "express";
import cors from "cors";
import DBClientFactory from "./classes/DBClientFactory.js";
import NewsRouter from "./routes/news.route.js";

const app = express();
const db = DBClientFactory.getClient(process.argv[2]);
const routes = new NewsRouter();

app.use(json());
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: "POST, GET",
  })
);

app.use("/api/news", routes.start());

db.connect().then(() => {
  app.listen(3000, () => {
    console.log("Server listening port 3000");
  });
});
