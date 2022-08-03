import express, { json } from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser("salva"));
app.use(json());

app
  .route("/cookies/:cookieName?")
  .post((req, res) => {
    const { name, value, maxTime } = req.body;
    console.log(name, value);
    if (!name || !value) {
      return res.json({ error: "No data provided" });
    }

    const cookieOptions = maxTime ? { maxAge: Number(maxTime) } : {};

    res.cookie(name, value, cookieOptions).json({ proceso: "Ok!" });
  })
  .get((req, res) => {
    res.json(req.cookies);
  })
  .delete((req, res) => {
    res
      .clearCookie(req.params.cookieName)
      .send(`Cookie with name ${req.params.cookieName} deleted!`);
  });

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});
