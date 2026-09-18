const alunos = []

function addAluno(){
    const nomeInserido = prompt("Digite o nome do aluno")
    const emailInserido = prompt("Digite o email do aluno")

    const aluno = {
        id:alunos.length + 1,
        nome: nomeInserido,
        email: emailInserido,
    }

    alunos.push(aluno) // Adicionar o aluno na lista
}

function showAluno(){
    console.log("=== Alunos ===")

    for(let i = 0; i <alunos.length; i++){
        console.log(`id: ${alunos[i].id}, nome: ${alunos[i].nome}, email: ${alunos[i].email}`)
    }
}

function buscarPorNome(){
    const nomeProcurado = prompt("Digite o nome do aluno(a)")

    const alunoEscontrado = alunos.find(aluno => aluno.nome.toLowerCase() == nomeProcurado.toLowerCase())
    
    if(alunoEscontrado){
        console.log ("Aluno encontrado:  " + alunoEscontrado.nome  +", id " + alunoEscontrado.id + ", email " + alunoEscontrado)
    } else{
        console.log("Aluno não encontrado")
    }
}

function excluirPorid(){
    const idProcurado = prompt("Digite o id do aluno")

    // Buscar o index com base na condição
    const indexDoAluno = alunos.findIndex(a => a.id == idProcurado)

    if(indexDoAluno != -1){ 
        alunos.splice(indexDoAluno, 1)
        alert("Removido com sucesso")
    }else{
        alert("Aluno não encontrado")
        
    }
   


}