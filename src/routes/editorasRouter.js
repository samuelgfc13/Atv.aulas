import express from "express"
import EditoraController from "../controllers/editorasController.js"


const router = express.Router()

router 
    .get("/editoras", EditoraController.listarEditoras)
    .post("/editoras", EditoraController.cadastrarEditoras)
    .put("/editoras/:id", EditoraController.atualizarEditoras)
    .get("/editoras/:id", EditoraController.listarEditoraPorId) 
    .delete("/editoras/:id", EditoraController.excluirEditora) 


export default router