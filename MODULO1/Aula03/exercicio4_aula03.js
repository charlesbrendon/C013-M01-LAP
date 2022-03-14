const prompt = require('prompt-sync')()

/* Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.*/
console.log('******VERIFIQUE SE OS NUMEROS SÃO MULTIPLOS OU NÃO: ****** ')
const numero1 = +prompt('Digite um numero ')
const numero2 = +prompt('Digite outro numero: ')

if ( numero1 % numero2 === 0)
    console.log('São multiplos')
else 
    console.log('Não são multiplos')


  