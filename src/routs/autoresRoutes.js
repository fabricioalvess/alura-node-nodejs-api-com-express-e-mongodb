import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores)
  .post("/autores", AutorController.cadastraAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .delete("/autores/:id", AutorController.excluirAutor);
export default router;