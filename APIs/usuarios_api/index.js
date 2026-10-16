const express = require ("express")
const mysql = require("mysql2/promise")
const cors = require ("cors")
const app = express()
// Habilitar o frontend a conectar na api
app.use(cors())

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "usuario_api",
    waitForConnections: true
})

app.use(express.json())

app.get("/users", async (req,res) =>{
    const[resultado] =  await pool.execute("SELECT * FROM usuarios")
    return res.json(resultado)

})
app.post("/users", async(req,res) =>{
    const{email,senha} = req.body

    if(!email|| !senha){
                return res.status(400).json({error: "email e senha são obrogatorios"})

    }

    const[resultado] = await pool.execute("INSERT INTO usuarios (email,senha)  VALUES (?,?)",[email,senha])
    return res.status(201).json({id:resultado.insertId,email,senha})

});

app.delete("/users/:id", async (req,res) => {
    const id = req.params.id
    const[resultado] = await pool.execute("DELETE FROM usuarios WHERE id =?", [id])

    if(resultado.affectedRows === 0){
        return res.status(404).json({ error: "usuarios não encontrados"});
       }
       res.status(204).json({mensagem: "usuarios deletado com sucesso!"});
 });

 app.put("/users/:id", async (req,res) => {
    const{email,senha} = req.body

     if(!email|| !senha){
       return res.status(400).json ({error: "email e senha são obrigatorios"});
    }
    const id = req.params.id
    const [resultado] = await pool.execute(
        "UPDATE usuarios SET email= ?, senha= ? WHERE id=?",
         [email,senha,id]
    );

    if(resultado.affectedRows === 0){
    return(res.status(404).json({error: "Usuarios não encontrado"}))
    }
    
    return res.json ({id,email,senha})

    
 })



app.listen(3000, () => console.log("api no ar"))