// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* 1.A) Será impresso: Matheus Nachtergaele, 44, canal: "Globo", horario: "14h"

2.A) Será impresso todas as informações que tiver no objeto.
2.B) Ela copia o que tem dentro do objeto, mas não o objeto.

3.A) Será impresso: false, undefined
3.B) No consoler não tem variável com o nome "altura"
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.A)
const pessoa = {
    nome: "Paloma",
    apelido: ["Loma", "Pam", "Lominha"]
}
function imprimirPessoa (objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`)
}
imprimirPessoa(pessoa)

// 1.B) 
const novaPessoa = {...pessoa, apelido: ["Paloma do Coração", "Panzoca", "Pumpunha"]}
console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelido[0]}, ${novaPessoa.apelido[1]} ou ${novaPessoa.apelido[2]}`)

// 2.A)
const pessoa1 = {
    nome: "Levi",
    idade: 37,
    profissao: "Autônomo"
}

const pessoa2 = {
    nome: "Paloma",
    idade: 29,
    profissao: "Analista"
}

// 2.B)
function imprimirInformacoes(pessoas) {
    return [pessoas.nome, pessoas.nome.length, pessoas.idade, pessoas.profissao, pessoas.profissao.length]
}
console.log(imprimirInformacoes(pessoa1))
console.log(imprimirInformacoes(pessoa2))

// 3.A)
const carrinho = []

// 3.B)
const fruta1 = {
    nome: "banana",
    disponibilidade: "true"
}

const fruta2 = {
    nome: "laranja",
    disponibilidade: "true"
}

const fruta3 = {
    nome: "limão",
    disponibilidade: "false"
}

// 3.C)
function carrinhoDeFrutas(frutas) {
    carrinho.push(frutas)
}

// 3.D)
carrinhoDeFrutas(fruta1)
carrinhoDeFrutas(fruta2)
carrinhoDeFrutas(fruta3)
console.log(carrinho)