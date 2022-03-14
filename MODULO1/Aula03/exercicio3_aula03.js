const prompt = require('prompt-sync')()

/* Faça um programa que leia um número, e informe se ele é par ou impar */

const numero = +prompt('Digite um numero');

if (numero % 2 == 0)
  console.log('Esse numero é par! ')
  else
  console.log('Esse numero é impar')
    
  

  