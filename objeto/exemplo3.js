const filme = {
    titulo: "Interestelar",
    ano: 2014,
    diretor: "Chritopher Nolan",
    nota: 9.0,
    generos:[
        "Darma",
        "Aventura",
        "Ficção Científica"
    ]
}

for(const chave in filme){
    if(chave == "nota")
        if(filme[chave] > 8)
            console.log("filme muito bom")
    console.log(chave + ":" + filme[chave])
}
