const livro ={
    nome:"É assim que começa",
    ano:"2022",
    autora:"Colleen Hoover",
    editora: "Galera (Record)",
    disponivel:true

}

livro.disponivel = false

livro.Volume = "É a continuação direta de É assim que acaba"
 
console.log("O livro "+ livro.nome + ",de " + livro.autora + ",foi lançado em " + livro.ano)

delete livro.ano

console.log("O livro "+ livro.nome + ",de " + livro.autora + ",foi lançado em " + livro.ano)

console.log(livro)