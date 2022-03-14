const prompt = require('prompt-sync')()

/* Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu. */
let numeroSecreto = parseInt(Math.random() * 10)
let tentativas = 3

while (tentativas > 0) {
let chute = parseInt(prompt("Digite um número entre 0 e 10"))

  
if (numeroSecreto == chute) {
    console.log('Acertou')
    break
  } else if (chute > numeroSecreto) {
    console.log('O numero secreto é menor')
    tentativas = tentativas - 1    
  } else if (chute < numeroSecreto) {
    console.log('O numero secreto é maior')
    tentativas = tentativas - 1       
  } 
}
console.log(`suas tentativas acabaram. O número secreto era  ${numeroSecreto}`)
