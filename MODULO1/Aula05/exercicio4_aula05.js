const prompt = require('prompt-sync')()

/* Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.*/

let numeroSecreto = parseInt(Math.random() * 10)
let palpites = 1


let chute = parseInt(prompt("Digite um número entre 0 e 10"))
while (chute != numeroSecreto) {
   palpites = palpites + 1
if (chute == numeroSecreto ) {
    console.log('Acertou')
 break
  } else if (chute > numeroSecreto) {
    console.log('O numero secreto é menor')
    chute = parseInt(prompt("Digite um número entre 0 e 10"))
  } else if (chute < numeroSecreto) {
    console.log('O numero secreto é maior')
    chute = parseInt(prompt("Digite um número entre 0 e 10"))
  } 
  

}
console.log(`O numero tentativas foi ${palpites}. O número secreto era  ${numeroSecreto}`)