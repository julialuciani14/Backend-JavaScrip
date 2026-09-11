const comida = {
    nome:"Enroladinho de Salchicha",
    preco:8.00

}

// trocar um valor que existe
comida.nome="Enroladinho de Salsicha"

// Criar um novo valor
comida.validade ="2 dias"

console.log(comida)

console.log("O salgado favorito na cantina do senai é" + comida.nome)
console.log("Eles custa " + comida.preco)

// Remover um campo
delete comida.nome

console.log(comida)