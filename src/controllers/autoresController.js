import autores from "../models/autor.js";

class autorController{

  static listarAutores = async (req,res)=>{
    try{
      const autoresResultados = await autores.find();   
      res.status(200).json(autoresResultados);
    }catch(err){
      res.status(500).json({message:"Erro interno no servidor"});
    }
  };

  static listarAutorPorId = async(req,res)=>{
    try{
      const id = req.params.id;
      const resultadosAutores = await autores.findById(id);
      res.status(200).send(resultadosAutores);
    }catch(err){
      res.status(500).send(`${err.message} - ID do autornao localizado`);
    }
  };

  static cadastraAutor = async (req,res)=>{
    try{
      let autor = new autores(req.body);
      const novoAutor = await autor.save(autor);
      res.status(201).send(novoAutor.toJSON());
    }catch(err){
      res.status(500).send({message:`${err.message} - falha ao cadastrar autor`});
    }
  };

  static atualizarAutor = async(req,res)=>{
    try{
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "autor atualizado com sucesso"});
    }catch(err){
      res.status(500).send({message: err.message});
    }
  };
  
  static excluirAutor = async (req,res)=>{
    try{
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).send({message: "autor removido com sucesso"});
    }catch(err){
      req.status(500).send({message: err.message});
    }
  };
}
export default autorController;