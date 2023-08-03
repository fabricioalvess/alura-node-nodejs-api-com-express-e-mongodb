import express from "express"; 
const app = express();
app.use(express.json())


const livros = [
    {
        id: 1,
        titulo: "Senhor dos Aneis",
    },
    {
        id: 2,
        titulo: "O Hobbit",
    }
]


app.get('/', (req,res)=>{
    res.status(200).send('Curso de Node');
})
app.get('/livros', (req, res)=>{
    res.status(200).json(livros)
})
app.get('/livros/:id',(req, res)=>{
    let index = buscarElementoPorId(req.params.id)
    res.json(livros[index])
})
app.post('/livros',(req,res)=>{
    livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso!')
})
app.put('/livros/:id',(req, res)=>{
    let index = buscarElementoPorId(req.params.id)
    livros[index].titulo = req.body.titulo
    livros[index].id = req.body.id
    res.json(livros)
})
app.delete('/livros/:id',(req, res)=>{
    let {id} = req.params
    let index = buscarElementoPorId(id)
    livros.splice(index,1)
    res.send(`Livro ${id} excluido com sucesso`)
})


function buscarElementoPorId(id){
    return livros.findIndex(livro => livro.id == id) 
}


export default app