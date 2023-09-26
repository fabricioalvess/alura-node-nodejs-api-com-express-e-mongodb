import livros from "../models/Livro.js";

class LivroController{

  static listarLivros = async(req,res, next)=>{
    try{
      livros.find()
        .populate("autor")
        .exec((err, x)=>{
          res.status(200).json(x);
        }); 
    }catch(err){
      next(err);
    }
  };

  static cadastraLivro = async (req,res, next)=>{
    try{
      let livro = new livros(req.body); 
      const novoLivro =  await livro.save(livro);
      res.status(201).send(novoLivro.toJSON());
    }catch(err){
      next(err);
    }
  };

  static atualizarLivro = async (req,res,next)=>{
    try{
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "Livro atualizado com sucesso"});
    }catch(err){
      next(err);
    }
  };
  static listarLivroPorId = async (req,res, next)=>{
    try{
      const id = req.params.id;
      const livrosR =  await livros.findById(id)
        .populate("autor", "nome")
        .exec();
      res.status(200).send(livrosR);
    }catch(err){
      next(err);
    }
  };
  static excluirLivro = async (req,res, next)=>{
    try{
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send({message: "Livro removido com sucesso"});
    }catch(err){
      next(err);
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