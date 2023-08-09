import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router()

router
    .get("/livros", LivroController.listarLivros)
    .post("/livros", LivroController.cadastraLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .get('/livros/:id', LivroController.listarLivroPorId)
    .delete('/livros/:id', LivroController.excluirLivro)
export default router