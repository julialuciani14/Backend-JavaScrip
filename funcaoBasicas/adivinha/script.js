function startGame(){
    alert("bem vindo vamos treinar multiplicação, acerte 3 perguntas")

    for(let i = 0; 1 <= 3; i++){
    
    const num1 = Math.floor(Math.random() * 10) + 1 // 1 a 10
    const num2 = Math.floor(Math.random() * 20) + 1 

    const resposta = prompt(`Quanto é ${num1} * ${num2}`)

    const respostaCerta = num1 * num2

    if(resposta == respostaCerta){
    alert("Você acertou, genio!")
    
}else{

alert("Você errou!")


}

    }
       
   
}