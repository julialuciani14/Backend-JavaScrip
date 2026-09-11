// Para criar um objeto precisa colocar {}

const pessoa = {
    nome: "Gabriela Martins",
    idade: 16,
    email:"gabrielaMartins@gmail.com",
    notas: [7,8,8,6,7],// Pode colocar uma lista dentro do objeto
    endereco: {// Pode colocar um objeto dentro do objeto
        cidade: "Carapicuiba",
        uf:"SP"
    }
}

// Para acessar um valor na variavel é so usar o.
console.log(pessoa.nome)
console.log(pessoa.endereco.cidade)
