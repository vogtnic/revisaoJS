/*
Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.
*/

// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
/*
  alert("Hello World!")
*/

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
/* 
 let numberOne = 5
 let numberTwo = 2
 alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
*/

// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
/*
const valor = prompt("Digite um número: ")
if (isNaN(valor)) {
  alert("Não é um número")
} else {
  alert("É um número")
}
- - - - - - - - - - - -  - - 
const valor = 3
if (typeof valor === "number") {
  alert("é um número")
} else {
  alert("não é um número")
}
 */

// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
/*
const valor = 'nico'
if (typeof valor === "string") {
  alert("A variável é uma string")
} else {
  alert("A variável não é uma string")
}
 */

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
/*
const valor = false
if (typeof valor === "boolean") {
  alert("A variável é booleana")
} else {
  alert("A variável não é booleana")
}
*/

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
/* 
let numberOne = 4
let numberTwo = 2
alert(`A subtração dos números é: ${numberOne - numberTwo}`)
*/

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
/*
let numberOne = 2
let numberTwo = 15
alert(`A multiplicação dos números é: ${numberOne * numberTwo}`)
*/

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
/* 
let numberOne = 15
let numberTwo = 3
alert(`A divisão dos números é: ${numberOne / numberTwo}`)
*/

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
/*
const number = 7
if (number % 2 === 0) {
    alert(`${number} é um número par!`)
} else {
    alert(`${number} não é um número par!`)
}
*/

// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let number = 5
if (number % 2 !== 0) {
  alert(`${number} é um número ímpar!`)
} else {
  alert(`${number} não é um número ímpar!`)
}
