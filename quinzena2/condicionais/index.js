// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* 1.
a) Explique o que o código faz. Qual o teste que ele realiza?
R.: O código informa se o número digitado é igual ou diferente de 0

b) Para que tipos de números ele imprime no console "Passou no teste"?
R.: Para números pares. 

c) Para que tipos de números a mensagem é "Não passou no teste"? 
R.: Para números ímpares */

/* 2.
a) Para que serve o código acima?
R.: Para informar o preço da fruta digitado.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R.: 2.25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o 
`break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R.: daria a mensagem: "O preço da fruta Pêra é R$ 5" */

/* 3.
a) O que a primeira linha está fazendo?
R.: Enviando msg para que o usuário digite um número

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
R.: 10 = "Esse número passou no teste". Se fosse digitado o número -10 não seria impresso nada.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
R.: Sim, pois foi chamado console.log(mensagem) sem ter declarado */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.
const idade = Number (prompt("Qual a sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir")
}

// 2.
const turnoDoDia = prompt("Em qual turno você estuda? M (matutino), V (Vespertino), N (Noturno)?")

if (turnoDoDia === "M"){
    console.log("Bom dia!")
} else if (turnoDoDia === "V") {
    console.log("Boa tarde!")
} else if (turnoDoDia === "N") {
    console.log("Boa noite!")
}

// 3.
const periodo = prompt("Em qual turno você estuda? M (matutino), V (Vespertino), N (Noturno)?")
switch (periodo) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
}

// 4.
const filme = prompt("Qual gênero de filme vão assistir?")
const preco = Number(prompt("Qual o valor do ingresso?"))

if (filme === "Fantasia" && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}