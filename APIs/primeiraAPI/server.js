// Importa a biblioteca http
const http = require("node:http")

// Cra o servidor
const server = http.createServer ((req,res) => {
    if(req.url === "/senai"){
        const escolaSenai = {
            nome: "Senai Ricardo Lerner",
            telefone: "11 4618-1600",
            cursos:[
                "desvolvimento de sistemas",
                "Administração",
                "Eletromecânica"
            ]
        }
        res.writeHead(200,{"Content-Type": "application/json"})
    return res.end(JSON.stringify(escolaSenai))
    }
  if(req.url == "/ary"){
        const escolaAry = {
            nome: "Escola Ary Bozan",
            telefone: "11 4617-4306",
            endereco: "Rua direita, 601, Vila Santo Antônio, Cotia - SP",
            modalidade: [
                "Ensino Regular",
                "Programa de Ensino Integral (PEI)"
            ]
        }

    res.writeHead(200,{"Content-Type": "application/json"})
    return res.end(JSON.stringify(escolaAry))
} 

if(req.url == "/funcionarios"){
    const funcSenai = {
    diretor :"Alexssandro Augusto reginato",
    coodenador : "Wilson Donizeti ",
    aqv: "Isabel Cristina",
    intrutorTI : [
        "Matheus da Costa Zacarias",
        "Edmar Dantas da Silva Duarte"
    ],
    intrutores:[
        "Diego Pulheze",
        "Luis Carlos Simei"
    ]
}
    res.writeHead(200,{"Content-Type": "application/json"})
    return res.end(JSON.stringify(funcSenai))
 }
    
})



// Coloca o servidor para roda na porta 3000
server.listen(3000, () => console.log("API rolando em http://localhost:3000"))


