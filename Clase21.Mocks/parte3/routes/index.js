import { Router } from "express";
import mockServie from "../services/index.js";

const router = Router();

router.route("/usuarios/popular").post((req, res) => {
  const cantidad = req.query.cant ? Number(req.query.cant) : 50;

  mockServie.createMocks(cantidad);

  res.sendStatus(201);
});

router
  .route("/usuarios/:id?")
  .get((req, res) => {
    const id = req.params.id ? Number(req.params.id) : null;

    const response = mockServie.getMocks(id);

    res.json(response);
  })
  .post((req, res) => {
    mockServie.insertMock(req.body);

    res.sendStatus(201);
  })
  .put((req, res) => {
    console.log(req.params.id);
    const id = Number(req.params.id);

    mockServie.updateMock(id, req.body);

    res.sendStatus(200);
  })
  .delete((req, res) => {
    mockServie.deleteMock(Number(req.params.id));

    res.sendStatus(200);
  });

export default router;
