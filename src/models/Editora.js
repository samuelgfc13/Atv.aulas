import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        fantasia: {type: String, required: true},
        razao: {type: String},
        endereco: {type: String},
        numero: {type: Number}

     },
    {
        versionKey: false
    }
)

const editoras = mongoose.model("editoras", editoraSchema)

export default editoras