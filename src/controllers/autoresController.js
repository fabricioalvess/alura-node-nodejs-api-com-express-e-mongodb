import autores from "../models/autor.js";

class autorController{

  static listarAutores = async (req,res, next)=>{
    try{
      const autoresResultados = await autores.find();   
      res.status(200).json(autoresResultados);
    }catch(err){
      next(err);  
    }
  };

  static listarAutorPorId = async(req,res, next)=>{
    try{
      const id = req.params.id;
      const resultadosAutores = await autores.findById(id);
      if(resultadosAutores != null){
        res.status(200).send(resultadosAutores);
      }else{
        res.status(404).send({message: "id do autor nao encontrado"});
      }
      res.status(200).send(resultadosAutores);
    }catch(erro){
      next(erro);
    }
  };

  static cadastraAutor = async (req,res, next)=>{
    try{
      let autor = new autores(req.body);
      const novoAutor = await autor.save(autor);
      res.status(201).send(novoAutor.toJSON());
    }catch(erro){
      next(erro);
    }
  };

  static atualizarAutor = async(req,res, next)=>{
    try{
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "autor atualizado com sucesso"});
    }catch(err){
      next(err);
    }
  };
  
  static excluirAutor = async (req,res, next)=>{
    try{
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).send({message: "autor removido com sucesso"});
    }catch(err){
      next(err);
    }
  };
}
export default autorController;