// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

/* 
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
R.: Ele está incrementando somando 1 a cada fez que roda, rodando apenas até cinco vezes, que vai chegar a um total de 10 que será impresso no console.

2. a) O que vai ser impresso no console?
R.: Será impresso somente os números maiores que 18

2. b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente?
Se não, o que poderia ser usado para fazer isso?
R.: Sim

3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4?
R.: Seria impresso um * por linha, até chegar a 4 linhas.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1)
// const bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
// console.log(bichinhos)
// // 1.A)
// while (bichinhos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } 
// 1.B)
// while (bichinhos > 0) {
//     const arrayBichos = []
//     for (let i = 0; i < bichinhos; i++) {
//         arrayBichos.push(prompt("Digo o nome do seu(s) bichinho(s):"))
//     }
// // 1.C)
//     console.log(arrayBichos);
// } // esse código entrou em um loops infinito e eu não consegui identificar onde errei =(

// 2)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// 2.A e B)
function imprimeArrayOriginal (arrayOriginal) {
    for(let valor of arrayOriginal){
        console.log(valor/10)
    }
}
imprimeArrayOriginal(arrayOriginal)

// 2.C)
function imprimeArrayOriginalPares (arrayOriginal) {
    let arrayPares = []
    for(let valor of arrayOriginal){
        if(valor % 2 === 0){
            arrayPares.push(valor)
        }
    }
    console.log(arrayPares)
}
imprimeArrayOriginalPares(arrayOriginal)

// 2.D)
function imprimiArrayStrings (arrayOriginal){
    let arrayStrings = []
    let i = 0
    for(let valor of arrayOriginal){
        arrayStrings.push(`O elemento do índex ${i} é: ${valor}`)
        i++
    }
    console.log(arrayStrings)
}
imprimiArrayStrings(arrayOriginal)

// 2.E)
function maiorEmenorNumero (arrayOriginal){
    let maiorNumero = 0;
    let menorNumero = Infinity;
    for(let i = 0; i < arrayOriginal.length; i++){
        if(arrayOriginal[i] < menorNumero){
            menorNumero = arrayOriginal[i]
        }else if(arrayOriginal[i] > maiorNumero){
            maiorNumero = arrayOriginal[i]
        }
    }
    console.log("O maior número é:", maiorNumero)
    console.log("O menor número é:", menorNumero)
}
maiorEmenorNumero (arrayOriginal)