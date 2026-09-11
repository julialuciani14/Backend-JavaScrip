// Declarando a FUNÇÃO 
function calcularTroco(precoLanche, valorPago){
    let troco = valorPago - precoLanche
    return troco
}

// Chamou a FUNÇÃO
console.log("troco cliente 1: " + calcularTroco(8,10))
console.log("troco cliente 2: " + calcularTroco(5,20))
console.log("troco cliente 3: " + calcularTroco(12,15))

function saudacao(nome){
    return "Olá! " + nome + " Bem vindo(a)"
}

console.log(saudacao("Soraya"))
console.log(saudacao("nayara"))
