import express, { json } from "express";
import config from "./config/config.js";
import routes from "./routes/product.route.js";
import StoreFactory from "./store/factory.client.js";

const db = process.arg[2] || "MONGO";
const storeFactory = new StoreFactory();
const database = storeFactory.createDatabaseClient(db);
const app = express();

app.use(json());
app.use("/api/product", routes);

await database.connect();
app.listen(config.port, () => {
  console.log(`Server listening port ${port}`);
});
