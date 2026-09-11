const pessoasComMaisAuraDoSenai=["Alex","Reginaldo","Wilson"]


//Quando esta usando for com um array é sempre bom usar
// o método length
for(let i = 0; i < pessoasComMaisAuraDoSenai.length;i++){
     console.log("posição:"+(i + 1) +" :" + pessoasComMaisAuraDoSenai[i])
}

console.log("======= FOR EACH ======")

for(let pessoa of pessoasComMaisAuraDoSenai){
    console.log(pessoa)
}



// ==========
// Sempre que usar um for com um array
// é importante começar com o contador no zero
const numeros = [10,20,30,40,50]

for(let i= 0; i < numeros.length; i++){
    console.log(numeros[i])
}