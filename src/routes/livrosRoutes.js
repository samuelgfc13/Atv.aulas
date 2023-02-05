import express from "express"
import livroController from "../controllers/livrosController.js"


const router = express.Router()

router 
    .get("/livros", livroController.listarLivros)
    .post("/livros", livroController.cadastrarLivros)
    .put("/livros/:id", livroController.atualizarLivros)
    .get("/livros/:id", livroController.listarLivroPorId) 
    .delete("/livros/:id", livroController.excluirLivro) 


export default router