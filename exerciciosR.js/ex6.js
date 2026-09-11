// Use um for de 1 a 50. Para cada número, use um if para verificar se é par. Se for par, use para verificar se também é múltiplo de 10, exibindo mensagens diferentes ("par", "par e múltiplo de 10").
let i =1
for(i; i <= 50; i++){
    if(i % 2 == 0  && i % 10 == 0){
          console.log(i+ "par e múltiplo de 10")
    }else if (i % 2 == 0){
        console.log(i +"é par")

    }else{
        console.log(i)
    }
}
