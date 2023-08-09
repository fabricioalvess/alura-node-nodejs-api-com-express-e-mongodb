import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routs/index.js"
db.on("error", console.log.bind(console, 'Erro de conexao'))
db.once("open", ()=>{
    console.log("conexao com o banco com sucesso")})
const app = express()
app.use(express.json())
routes(app)
export default app
