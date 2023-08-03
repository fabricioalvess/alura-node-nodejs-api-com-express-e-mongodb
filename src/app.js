import express from "express"
const app = express()
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo:"Senhor dos Aneis"
    },
    {
        id: 2,
        titulo:"O Hobbit"
    }
]
function buscarPorId(id){
    return livros.findIndex(livro => livro.id == id)
}
app.get('/',(req, res) => {
    res.status(200).send('Curso de node')
})
app.get('/livros',(req, res)=>{
    res.status(200).json(livros)
})
app.get('/livros/:id',(req, res)=>{
    const index = buscarPorId(req.params.id)
    res.json(livros[index])
})
app.post('/livros',(req, res)=>{
    livros.push(req.body)
    res.status(200).send('Livro adicionado com sucesso')
})
app.put('/livros/:id',(req, res)=>{
    let index = buscarPorId(req.params.id)
    livros[index].titulo = req.body.titulo
    livros[index].id = req.body.id
    res.json(livros).send('Texto alterado com sucesso')
})
app.delete('/livros/:id',(req,res)=>{
    let{id} = req.params
    let index =  buscarPorId(id)
    livros.splice(index,1)
    res.send(`livro ${id} excluido com sucesso`)
})

export default app
//teste