/*

  Capturar 2 numeros
  e fazer as operacoes matematicas
  de soma, subtracao, multiplicacao,
  divisao e resto da divisao.

  e para cada operacao, mostrar um alerta com o resultado
  */

let firstNumber = prompt('Digite o primeiro numero:')
let secondNumber = prompt('Digite o segundo numero:')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Sub: ' + sub)
alert('Multi: ' + multi)
alert('Div: ' + div)
alert('Resto: ' + rest)