import livros from "../models/livro.js";

class LivroController{
    static listarLivros = (req,res)=>{
        livros.find((err, livros)=>{
            res.status(200).json(livros)
        })   
    }
    static cadastraLivro = (req,res)=>{
       let livro = new livros(req.body) 
       livro.save((err)=>{
           if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar livro`})
           }else{
                res.status(201).send(livro.toJSON())
           }

       })
    }
    static atualizarLivro = (req,res)=>{
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    static listarLivroPorId = (req,res)=>{

        const id = req.params.id
        livros.findById(id,(err, livros)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do Livro Nao localizado`})
            }else{
                res.status(200).send(livros)
            }
        })
    }
    static excluirLivro = (req,res)=>{
        const id = req.params.id
        livros.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message: `Livro removido com sucesso`})
            }else{
                req.status(500).send({message: err.message})
            }
        })
    }
}
export default LivroController