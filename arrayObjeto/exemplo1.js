const usuarios = [
    {
        nome: "Ana Sofia",
        email: "ana@gmail.com",
        idade: 16,
        ativo: true
    },
    {
        nome: "Alberto",
        email: "alberto@gmail.com",
        idade: 16,
        ativo: false

    },
    {
        nome: "leandro",
        email: "leandro@gmail.com",
        idade: 16,
        ativo: true
    }

]
console.log(usuarios[2].email)
console.log(usuarios[0].nome)

for(let i = 0; i < usuarios.length; i++){
    if( ! usuarios[i].ativo) // == true
        console.log(usuarios[i].nome)
}

// Filtrar todos os elementos com base na condição
const ativos = usuarios.filter(u => u.ativo === true)

console.log(ativos)

// Busca um elemento que atende a condição e retorna quando encontra o primeiro
const cliente16anos = usuarios.find(u => u.idade === 16)
console.log(cliente16anos) 


// Includes verifica se tem a seguinte palavra no texto
const buscarLeandro = usuarios.find(u => u.nome.includes("leandro"))
console.log(buscarLeandro)


// Transforma a lista em uma nova lista
const soNomes = usuarios.map(u => u.nome.toUpperCase())
console.log(soNomes)


