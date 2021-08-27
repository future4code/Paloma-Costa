// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
/* 
1. A) será impresso os resultados 10 e 50
1. B) não será impresso nada

2. A) Deixa o texto todo em caixa baixa e informa se um conjunto de caracteres é encontrado
dentro de uma string, informando true ou false.
2. B) true para todas as frases
*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1. A)
// const nome = 'Paloma'
// const idade = 29
// const cidade = 'São Paulo'
// const estuda = 'não sou estudante'

// function imprimirFrase() {
//     console.log(`Eu sou a ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estuda}`)
    
// }
// imprimirFrase()

// 1. B)
const seuNome = prompt('Qual seu nome?')
const suaIdade = Number(prompt('Qual sua idade?'))
const suaCidade = prompt('Qual sua cidade?')
const suaProfissao = prompt('Qual sua profissão')

function imprimirFrase2() {
    console.log(`Eu sou ${seuNome}, tenho ${suaIdade} anos, moro em ${suaCidade} e sou ${suaProfissao}`)
 }
 imprimirFrase2()

 // 2. A)
  function calculaSoma(primeiroNumero, segundoNumero) {
     const soma = primeiroNumero + segundoNumero
     return soma
 }
 const saidaSoma = calculaSoma(15, 30)
 console.log(saidaSoma)

// 2. B)
function numerosBooleano(numero1, numero2) {
   return numero1 >= numero2
}
const numeroMaior = numerosBooleano(15, 30)
console.log(numeroMaior)

// 2. C)
function parOuImpar(numero){
    return numero % 2
}
const num = parOuImpar(6)
const ehPar = num === 0
console.log(ehPar)

// 2. D)
function msgString(mensagem){
    return `${mensagem.toUpperCase()}, ${mensagem.length}`
}
console.log(msgString('BOa noite a todos'))

// 3.
function soma (num1, num2){
    return num1 + num2
}
function subtracao (num1, num2){
    return num1 - num2
}
function multiplicacao (num1, num2){
    return num1 * num2
}
function divisao (num1, num2){
    return num1 / num2
}

const primeiroNumero = Number(prompt('Insira um número'))
const segundoNumero = Number(prompt('Insira outro número'))

console.log('Soma:', soma(primeiroNumero, segundoNumero))
console.log('Subtração:', subtracao(primeiroNumero, segundoNumero))
console.log('Multiplicação:', multiplicacao(primeiroNumero, segundoNumero))
console.log('Divisão:', divisao(primeiroNumero, segundoNumero))