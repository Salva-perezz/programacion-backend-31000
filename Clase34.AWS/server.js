import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  if (error) {
    console.log(`Error initializing server: ${error}`);
  } else {
    console.log(`Server listening port ${port}`);
  }
});
