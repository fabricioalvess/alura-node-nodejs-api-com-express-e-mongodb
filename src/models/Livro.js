import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  { 
    id:{type:String},
    titulo:{
      type:String, 
      required:[true, "O campo titulo e obrigatorio"]},
    autor:{
      type:mongoose.Schema.Types.ObjectId, 
      ref:"autores",  
      required:[true, "O campo Autor e obrigatorio"]},
    editora:{
      type:String, 
      required:[true, "o campo Editora e obrigatorio"]},
    numeroPaginas:{
      type:Number}
  }
);

const livros = mongoose.model("livros", livroSchema);
export default livros;