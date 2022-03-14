const prompt = require('prompt-sync')()

/*Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.*/

let n1 = []
let n2 = []

n1 = prompt('Digite um numero: ');
console.log()
n2 = prompt('Digite outro numero: ');
console.log()
if (n1 > n2){
  console.log(n1, 'É o maior numero')
}
else if ( n2 > n1){
  console.log(n2, 'É o maior numero')
}
else if (n1 = n2){
  console.log('Você digitou o mesmo numero')
}