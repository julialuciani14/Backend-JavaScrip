const express = require ("express")
const mysql = require ("mysql2/promise")
const app = express()

app.use(express.json())

// Conectar com o banco de dados
const db = mysql.createPool ({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
})


// ----- Rotas do professor ----
app.get("/professor", async (req,res)=> {
    const [professores] =  await db.execute("SELECT * FROM professor")
    return res.json(professores)
})

app.post("/professor", async (req,res)=> {
    const { nome, especialidade } = req.body

    if(!nome || !especialidade){
        return res.status(400).json ({error: "Nome e especialidade são obrigatorios"})

    }
    if (nome.length < 3) {
        return res.status(400).json({error: "Nome precisa ter mais de 2 caracteres"})
    }

    const [resultado] = await db.execute(
        "INSERT INTO professor (nome,especialidade) VALUES (?,?)",[nome, especialidade]
    )
    return res.status(201).json({id: resultado.insertId, nome, especialidade})
})

// ---- Rotas do curso ----
app.get("/cursos", async (req,res) => {
    const [cursos] = await db.execute ("SELECT * FROM cursos")
    return res.json(cursos)
})

app.post("/cursos", async (req,res) => {
    const {nome, descricao,professorId} = req.body

    if(!nome || !descricao || !professorId){
        return res.status(400).json({error: "nome, descricao e professorId são obrigatorios"})
    }

    const [resultado] = await db.execute(
        "INSERT INTO cursos (nome, descricao, professor_id) VALUES (?,?,?) ", 
        [nome,descricao,professorId]
    )
    return res.status(201).json({id: resultado.insertId,nome, descricao})
})

app.delete("/cursos/:id", async (req,res) => {
    const id = req.params.id  // Pega o id da url
    
    const[resultado] = await db.execute(
        "DELETE FROM cursos WHERE id = ? ",
        [id]
    )

    if(resultado.affectedRows == 0) {
        return res.status(404).json({ error: "Curso não encontrado!"})
    }

    return res.status(204).end()
})

app.listen(3000, () => console.log ("API no ar"))