// Importando a biblioteca
const express = require("express")
const app = express()

//Agora a API aceita JSON
app.use(express.json())

const livros = [
    {id:1, titulo: "Dom casmurro", autor: "Machado de Assis"},
    {id:2, titulo: "Vidas Secas", autor: "Graciliano Ramos"}
]

let proximoId = 3

// Listar todos os livro
app.get("/livros",(req,res) => {
    res.json(livros)
})

// Criar livro
app.post("/livros",(req,res) =>{
    const {titulo,autor} = req.body
    
    // Se não for informodo titulo ou ator
    // Da erro
    if(!titulo || !autor){
    return res.status(400).json({erro: "titolu e autor obrigatorios"})

    }
    const novoLivro = {
        id: proximoId,
        titulo,
        autor
    }
    livros.push(novoLivro)
    proximoId++
    res.status(201).json(novoLivro) // Status 201 = CREATED
})

app.get("/livros/:id", (req,res) =>{
    const idInformado = req.params.id

    const livro = livros.find(li => li.id === Number(idInformado))

    if(!livro){
        return res.status(404).json ({error: "Livro não encontrado"})
    }
    res.json(livro)
})


app.listen(3000,() => console.log("API rodando em localhost:3000"))