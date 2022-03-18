console.clear();
const prompt = require('prompt-sync')();

// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

let numero = +prompt('Digite um numero e verá toda tabuada de 1 a 10 dele:')

for (i = 1; i < 11; i++){
     console.log(numero, 'x', i, '=', numero * i)
}