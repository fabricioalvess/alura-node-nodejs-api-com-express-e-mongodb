import livros from "../models/Livro.js";

class LivroController{

  static listarLivros = async(req,res)=>{
    try{
      await livros.find()
        .populate("autor")
        .exec((err, x)=>{
          res.status(200).json(x);
        }); 
    }catch(err){
      res.status(500).send(err.message);
    }
  };

  static cadastraLivro = async (req,res)=>{
    try{
      let livro = new livros(req.body); 
      livro.save(livro);
      res.status(201).send("livro cadastrado com sucesso");
    }catch(err){
      res.status(500).send(`${err.message} - falha ao cadasatrar novo livro`);
    }
  };

  static atualizarLivro = async (req,res)=>{
    try{
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "Livro atualizado com sucesso"});
    }catch(err){
      res.status(500).send({message:`${err.message}- falha ao atualizar livro`});
    }
  };
  static listarLivroPorId = async (req,res)=>{
    try{
      const id = req.params.id;
      await livros.findById(id)
        .populate("autor", "nome")
        .exec();
      res.status(200).send(livros);
    }catch(err){
      res.status(400).send({message: `${err.message} - Id do Livro Nao localizado`});
    }
  };
  static excluirLivro = async (req,res)=>{
    try{
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send({message: "Livro removido com sucesso"});
    }catch(err){
      req.status(500).send({message: err.message});
    } 
  };
  
  static listarLivroPorEditora =(req,res)=>{
    const editora = req.query.editora;
    livros.find({"editora": editora},{},(err, livros)=>{
      res.status(200).send(livros);
    });
  };
}
export default LivroController;