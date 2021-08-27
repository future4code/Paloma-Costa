/* EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
Exercício 1
a) false    b) false    c) true    d)boolean

Exercício 2
R. O console irá entender os números digitados como string e não como números.

Exercíciio 3
R. Deve ser acescentado antes do prompt "Number", ficando o código dessa forma: 

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero. */

// EXERCÍCIO DE ESCRITA DE CÓDIGO
// 1.
const suaIdade = Number(prompt('Qual a sua idade?'))
const idadeDoAmigo = Number(prompt('Qual a idade do seu(sua) melhor amigo(a)?'))

const maiorIdade = suaIdade > idadeDoAmigo
const diferencaIdade = suaIdade - idadeDoAmigo

console.log("Sua idade e maior do que a do seu(sua) melhor amigo(a)?", maiorIdade)
console.log(diferencaIdade)

// 2.
const numeroPar = Number(prompt('Insira um número par'))
const restoDaDivisão = numeroPar % 2
console.log(restoDaDivisão)

// c. Tem um padrão de 0, pois todo número par é possível dividir por 2 sem que sobre.
// d. Dividindo por números ímpares, tem um padrão de 1, pois sempre irá restar.

// 3.
const idadeEmAnos = Number(prompt('Qual sua idade em anos?'))
const idadeEmMeses = idadeEmAnos * 12
const idadeEmDias = idadeEmAnos * 365
const idadeEmHoras = idadeEmAnos * 8760 // cheguei a esse número multiplicando 365(dias)*24(horas)

console.log(idadeEmMeses, 'meses de idade')
console.log(idadeEmDias, 'dias de idade')
console.log(idadeEmHoras, 'horas de idade')

//4.
const primeiroNumero = Number(prompt('Digite um número'))
const segundoNumero = Number(prompt('Digite um segundo número'))
const primeiroDivisível = primeiroNumero % segundoNumero
const segundoDivisível = segundoNumero % primeiroNumero

console.log('O primeiro numero é maior que segundo?', primeiroNumero > segundoNumero)
console.log('O primeiro numero é igual ao segundo?', primeiroNumero === segundoNumero)
console.log('O primeiro numero é divisível pelo segundo?', primeiroDivisível === 0)
console.log('O segundo numero é divisível pelo primeiro?', segundoDivisível === 0)