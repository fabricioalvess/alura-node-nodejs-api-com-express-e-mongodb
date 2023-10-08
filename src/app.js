import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routs/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";


db.on("error", console.log.bind(console, "Erro de conexao"));
db.once("open", ()=>{
  console.log("conexao com o banco com sucesso.");
});

const app = express();
app.use(express.json());
routes(app);
app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;
