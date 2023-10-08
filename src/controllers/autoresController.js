import NaoEncontrado from "../erros/NaoEncontrado.js";
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
        next(new NaoEncontrado( "id do autor nao encontrado"));
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
      const autorResultado = await autores.findByIdAndUpdate(id, {$set: req.body});
      if(autorResultado !== null){
        res.status(200).send({message: "autor atualizado com sucesso"});
      }else{
        next(new NaoEncontrado("id do autor nao encontrado"));
      }
    }catch(err){
      next(err);
    }
  };
  
  static excluirAutor = async (req,res, next)=>{
    try{
      const id = req.params.id;
      const autorResultado = await autores.findByIdAndDelete(id);
      if(autorResultado !== null){
        res.status(200).send({message: "autor removido com sucesso"});
      }else{
        next(new NaoEncontrado("Id do autor nao encontrado"));
      }
    }catch(err){
      next(new NaoEncontrado("nao foi possivel excluir autor"));
    }
  };
}
export default autorController;