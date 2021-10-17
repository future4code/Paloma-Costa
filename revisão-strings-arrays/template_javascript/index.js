// Exercícios de interpretação de código

/* 1. A) undefined
B) null
C) 11
D) 3
E) 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
F) 9 

2. SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// Exercícios de escrita de código

// 1.
const nome = prompt ("Qual seu nome?")
const email = prompt ("Qual seu e-mail?")

const frase = (`O seu e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}`)

console.log(frase)

// 2.
const comidasPreferidas = [" japonesa ", " pizza ", " hamburguer ", " camarão ", " churrasco "]

//A)
console.log(comidasPreferidas)

//B)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//C)
const suaComidaPreferida = prompt ("Qual é a sua comida preferida?")
comidasPreferidas[1] = suaComidaPreferida

console.log(comidasPreferidas)

//3.A)
const listaDeTarefas = []

//B)
const tarefa1 = prompt ("Digite uma tarefa")
const tarefa2 = prompt ("Digite uma tarefa")
const tarefa3 = prompt ("Digite uma tarefa")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//C.
console.log(listaDeTarefas)

//D.
const tarefaRealizada = prompt ("Qual tarefa você já realizou hoje? 0, 1, 2")

//E.
listaDeTarefas.splice(Number(tarefaRealizada), 1)

//F.
console.log(listaDeTarefas)
