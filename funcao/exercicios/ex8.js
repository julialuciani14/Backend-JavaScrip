function somaTotal (numeros){
let soma= 0

for(let numero of numeros){
    soma += numero
}
return soma   

}
console.log(somaTotal([10,20,30]))
