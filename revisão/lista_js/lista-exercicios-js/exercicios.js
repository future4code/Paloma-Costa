// Exemplos

// Exercício 0A
function soma() {
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Qual é a altura do retangulo"))
  const largura = Number(prompt("Qual é a largura do retangulo"))

  const areaDoRetangulo = altura * largura
  console.log(areaDoRetangulo)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoDeNascimento = Number(prompt("Qual ano você nasceu?"))
  const suaIdade = anoAtual - anoDeNascimento

  console.log(suaIdade)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Qual seu peso?"))
  const altura = Number(prompt("Qual sua altura?"))
  const imc = peso / (altura * altura)

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = Number(prompt("Qual sua idade?"))
  const eMail = prompt("Qual seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${eMail}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual sua primeira cor favorita")
  const cor2 = prompt("Qual sua segunda cor favorita")
  const cor3 = prompt("Qual sua terceira cor favorita")
  
 coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const string = prompt('Escreva uma palavra')
  const stringMaiuscula = string.toUpperCase()

  console.log(stringMaiuscula)
  
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoDoEspetaculo = Number(prompt("Valor do espetáculo"))
  const valorDoIngresso = Number(prompt("Valor do ingresso"))
  
  const quantidade = custoDoEspetaculo / valorDoIngresso
  console.log(quantidade)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt('Primeira String')
  const string2 = prompt('Segunda String')

  const condicao = string1 >= string2

  console.log(condicao)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Escreva uma palavra")
  const string2 = prompt("Escreva uma palavra")

  const string1Minuscula = string1.toLowerCase()
  const string2Minuscula = string2.toLowerCase()

  const condicao = string1Minuscula === string2Minuscula

  console.log(condicao)
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Coloque o ano em que estamos'))
  const anoNascimento = Number(prompt('Coloque seu ano de nascimento'))
  const anoDaCarteira = Number(prompt('Coloque o ano em que sua carteira foi emitida'))

  const idade = anoAtual - anoNascimento
  const renov = anoAtual - anoDaCarteira
0
  const renov20 = idade <= 20 && renov === 5
  const renov50 = idade <= 50 && renov >= 10
  const renov50Mais = idade > 50 && renov >= 15

  console.log(renov20 || renov50 || renov50Mais)
}

// Exercício 11
function checaAnoBissexto() {
  const ano = Number(prompt('Escreva um ano'))
  
  const multiplo400 = ano % 400 === 0
  const multiplo4 = ano % 4 === 0
  const multiplo100 = ano % 100 === 0
  
  const anoBissexto = (multiplo400 === multiplo4 === multiplo100)
  
  console.log(anoBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  
  const resultado = (idade == "sim" && escolaridade == "sim" && disponibilidade == "sim")

  console.log(resultado)
}