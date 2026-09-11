const votos = {
    "Davi Brito": 0,
    "Raquel Brito":0,
    "Virginia Fonseca":0,
}

function votar(nome){
     const confirmado = confirm("tem certeza deseja votar em: " + nome)
     if(confirmado === true){
        votos[nome] = votos[nome] + 1
        alert("Voto regitrado! em " + nome)
     } 
}
function mostrarVoto(){
    console.clear()
    console.log("==== Resultado ====")
    
    for(const candidato in votos){
        console.log(candidato + ":" + votos[candidato])

    }



}