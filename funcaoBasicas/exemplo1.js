const texto = " Eu amo javascript!  "

console.log(texto.trim()) // Remove espaço vazio do começo e do fim
console.log(texto.toUpperCase()) // Em caixa alta
console.log(texto.toLocaleLowerCase()) // Em caixa baixa
console.log(texto.replace("javascript", "HTML"))//
console.log(texto.includes("amo"))// verifica se dentro do texto tem a palavra

const melhorMeme = "troll face"
console.log("O melhor meme do mundo é o " + melhorMeme) 
console.log(`O melhor meme do mundo é o ${melhorMeme}`)