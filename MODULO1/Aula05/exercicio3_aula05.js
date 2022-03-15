const prompt = require('prompt-sync')()

/* Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar. */

let numero = +prompt('Digite um numero par');

while (numero % 2 != 0 ){
  console.log('numero nao é par');
  numero = +prompt('Digite um numero par:');
  continue
}
  console.log(`esse numero ${numero} é par`);