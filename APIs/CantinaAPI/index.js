const express = require("express")
const app = express()
app.use(express.json())


const Pratos =[
    {id:1, nome:"Esfiha", descrição:"Esfiha de ricota com espinafre", preço:7.00},
    {id:2, nome:"Brownie", descrição:"Brownie de chocolate com doce e leite", preço:9.00}
    
]

let proximoId = 3


app.get("/Pratos",(req,res) => {
    res.json(Pratos)
})

app.post("/Pratos",(req,res) =>{
    const{nome,descricao,preco} = req.body

    if(!nome || !descricao || !preco){
    return res.status(400).json({erro: "nome,descrição e preço obrigatorios"})
    }
    const novoPratos = {
        id: proximoId,
        nome,
        descricao,
        preco
    }
    Pratos.push(novoPratos)
    proximoId++
    res.status(201).json(novoPratos)
})
app.listen(3001,() => console.log("API rodando em localhost:3001"))
