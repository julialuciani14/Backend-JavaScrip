let preco =10
let mes = 12

for(mes = 1; mes <= 12;mes++){
    preco = (preco*0.05) + preco
    console.log("No mês "+mes+ "o preço" + preco)

}