// exemplo1
function somar (a,b){
    const resultado = a + b
    return resultado
}
console.log(somar(10,33))

// exemplo2
const somar2 =(a,b) => {return a + b}

console.log(somar2(99,100))

const somar3 = (a,b) => a + b

console.log(somar3 (100, 200))


// subtrair
const subtrair = (a,b) => a - b

console.log(subtrair(100,50))

// dividir
const dividir = (a,b) => a / b

console.log(dividir(100,20))

//multiplicar 
const multiplicar = (a,b) => a * b

console.log(multiplicar(30,20))

// dobra

const dobra = (a) => a * 2
console.log(dobra(12))

// media

const media = (a,b,c) => (a + b + c) / 3
console.log(media(5,3,7))


const maiorNumero = (a,b) => a > b ? a: b

console.log("O maior número é:", maiorNumero(7,10))

