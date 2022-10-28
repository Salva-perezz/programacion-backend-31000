import { config, MongoClient } from "../../depts.ts";

const { DB_HOST, DB_PORT, DATABASE } = await config();
const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}`;
const client = new MongoClient();

try {
  await client.connect(MONGO_URI);

  console.log(`Database client connecte to ${MONGO_URI}`);
} catch (err) {
  console.log(err);
}

const db = client.database(DATABASE);

export default db;
