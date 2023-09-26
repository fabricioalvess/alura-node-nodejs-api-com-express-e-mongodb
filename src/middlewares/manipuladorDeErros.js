import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req ,res, next){

  if(erro instanceof mongoose.Error.CastError){
    res.status(400).send({message: "Um ou mais dados fornecidos estao incorretos"});
  } else if(erro instanceof mongoose.Error.ValidationError){
    const msgErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");
    res.status(400).send({message:`os seguintes erros foram encontrados ${msgErro}`});
  }else{
    res.status(500).send(500).send({message:"Erro interno do servidor"});
  }

}

export default manipuladorDeErros;